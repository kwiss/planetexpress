const Knex = require('knex');
const { Model } = require('objection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection = require('../knexfile');
const jwtConfig = require('../config/jwt');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Role extends Model {
  static get tableName() {
    return 'role';
  }

  static get idColumn() {
    return 'id';
  }
}

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      roles: {
        join: {
          from: 'user.id',
          through: {
            from: 'user_role.user_id',
            to: 'user_role.role_id',
          },
          to: 'role.id',
        },
        modelClass: Role,
        relation: Model.ManyToManyRelation,
      },
    };
  }

  getRoles() {
    return this.roles.map((el) => el.name).concat('user');
  }

  getUser() {
    return {
      email: this.email,
      id: this.id,
      roles: this.getRoles(),
      token: this.getJwt(),
    };
  }

  getHasuraClaims() {
    return {
      'x-hasura-allowed-roles': this.getRoles(),
      'x-hasura-default-role': 'user',
      'x-hasura-user-id': `${this.id}`,
      // 'x-hasura-org-id': '123',
      // 'x-hasura-custom': 'custom-value'
    };
  }

  getJwt() {
    const signOptions = {
      algorithm: 'RS256',
      expiresIn: '30d', // 30 days validity
      subject: this.id,
    };
    const claim = {
      'https://hasura.io/jwt/claims': this.getHasuraClaims(),
      // iat: Math.floor(Date.now() / 1000),
      name: this.email,
    };
    return jwt.sign(claim, jwtConfig.key, signOptions);
  }

  async $beforeInsert() {
    const salt = bcrypt.genSaltSync();
    this.password = await bcrypt.hash(this.password, salt);
  }

  async $beforeUpdate() {
    await $beforeInsert();
  }

  verifyPassword(password, callback) {
    bcrypt.compare(password, this.password, callback);
  }

  static get jsonSchema() {
    return {
      properties: {
        email: { maxLength: 255, minLength: 1, type: 'string' },
        id: { type: 'integer' },
      },
      required: ['email'],
      type: 'object',
    };
  }
}

module.exports = { Role, User };
