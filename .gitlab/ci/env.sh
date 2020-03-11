#!/usr/bin/env bash

#
export BRANCH_NAME=${BRANCH_NAME:=$CI_COMMIT_REF_SLUG}
export HASH_SIZE=${HASH_SIZE:=7}
BRANCH_NAME_HASHED=$( printf "${BRANCH_NAME}" | sha1sum | cut -c1-${HASH_SIZE} )
export BRANCH_HASH=${BRANCH_HASH:="$BRANCH_NAME_HASHED"}

#

printenv | grep \
  -e BRANCH_HASH