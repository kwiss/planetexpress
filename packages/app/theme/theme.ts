const heading = {
  color: 'text',
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
};

const baseformStyle = {
  '&:focus': {
    bg: 'greyBorder',
    color: 'black',
    outline: 'none',
  },
  '&:hover': {
    bg: 'greyBorder',
  },
  'bg': 'greyHyperLight',
  'border': 0,
  'color': 'greyDark',
  'lineHeight': '22px',
  'px': 4,
  'py': 3,
  'transition': '150ms ease-in-out all',
};

const gradient = `linear-gradient(180deg, #2E48ED 0%, #2740E1 100%)`;

const baseButtonStyle = {
  '&:hover': {
    boxShadow: '0px 4px 10px rgba(15, 41, 208, 0.25)',
    cursor: 'pointer',
  },
  'background': gradient,
  'boxShadow': '0px 1px 2px rgba(15, 41, 208, 0.25)',
  'color': 'white',
  'transition': '150ms ease-in-out all', 
};

export const base = {
  buttons: {
    ...baseButtonStyle,
    primary: {
      ...baseButtonStyle,
      px: '5',
      py: '4',
    },
    small: {
      ...baseButtonStyle,
      fontSize: 1,
      px: '2',
      py: '1',
    },
  },
  colors: {
    background: '#fff',
    black: '#171618',
    blueStandard: '#0F29D0',
    green: '#0FD068',
    greyBorder: '#DFDFE4',
    greyDark: '#656565',
    greyHyperLight: '#F1F3F4',
    greyLight: '#747474',
    modes: {
      dark: {
        background: '#000',
        primary: '#0cf',
        text: '#fff',
      },
    },
    muted: '#f6f6f6',
    primary: '#0F29D0',
    secondary:
      'linear-gradient(180deg, rgba(46, 72, 237, 0.2) 0%, rgba(39, 64, 225, 0.2) 100%)',
    text: '#171618',
  },
  fontSizes: [12, 14, 18, 20, 26, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    bold: 600,
    heading: 600,
    semi: 500,
  },
  fonts: {
    body:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  forms: {
    input: {
      ...baseformStyle,
      mb: 4,
    },
    label: {
      fontSize: 1,
      fontWeight: 'bold',
      mb: 3,
    },
    select: {
      ...baseformStyle,
    },
    textarea: {
      ...baseformStyle,
      mb: 4,
    },
  },
  radii: {
    default: '4px',
  },
  space: [0, 4, 8, 10, 12, 16, 32, 64, 128, 256, 512],
  styles: {
    a: {
      color: 'primary',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    img: {
      maxWidth: '100%',
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    pre: {
      code: {
        color: 'inherit',
      },
      fontFamily: 'monospace',
      overflowX: 'auto',
    },
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    table: {
      borderCollapse: 'separate',
      borderSpacing: 0,
      width: '100%',
    },
    td: {
      borderBottomStyle: 'solid',
      textAlign: 'left',
    },
    th: {
      borderBottomStyle: 'solid',
      textAlign: 'left',
    },
  },
};

export default base;
