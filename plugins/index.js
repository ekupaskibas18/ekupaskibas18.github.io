const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = plugin(function ({ matchUtilities, addUtilities, e, theme, variants }) {
  //
},
{
  theme: {
    extend: {
      colors: {
        'slate': {
          // ...colors.slate,
          DEFAULT: colors.slate['600'],
        },
        'gray': {
          DEFAULT: colors.gray['600'],
        },
        'zinc': {
          DEFAULT: colors.zinc['600'],
        },
        'neutral': {
          DEFAULT: colors.neutral['600'],
        },
        'stone': {
          DEFAULT: colors.stone['600'],
        },
        'red': {
          DEFAULT: colors.red['600'],
        },
        'orange': {
          DEFAULT: colors.orange['600'],
        },
        'amber': {
          DEFAULT: colors.amber['600'],
        },
        'yellow': {
          DEFAULT: colors.yellow['600'],
        },
        'lime': {
          DEFAULT: colors.lime['600'],
        },
        'green': {
          DEFAULT: colors.green['600'],
        },
        'emerald': {
          DEFAULT: colors.emerald['600'],
        },
        'teal': {
          DEFAULT: colors.teal['600'],
        },
        'cyan': {
          DEFAULT: colors.cyan['600'],
        },
        'sky': {
          DEFAULT: colors.sky['600'],
        },
        'blue': {
          DEFAULT: colors.blue['600'],
        },
        'indigo': {
          DEFAULT: colors.indigo['600'],
        },
        'violet': {
          DEFAULT: colors.violet['600'],
        },
        'purple': {
          DEFAULT: colors.purple['600'],
        },
        'fuchsia': {
          DEFAULT: colors.fuchsia['600'],
        },
        'pink': {
          DEFAULT: colors.pink['600'],
        },
        'rose': {
          DEFAULT: colors.rose['600'],
        },
      },
      inset: {
        '-9999px': '-9999px',
      },
      margin: {
        'full': '100%',
      },
      minHeight: {
        'inherit': 'inherit'
      },
      minWidth: {
        '40': '10rem',
      },
      padding: {
        'full': '100%',
      },
      transitionDuration: {
        '35': '35ms',
      },
      transitionProperty: {
        'height' : 'height',
        'spacing': 'margin, padding',
        'width'  : 'width',
      },
      zIndex: {
        '1'   : 1,
        '2'   : 2,
        '1000': 1000, // Dropdown
        '1020': 1020, // Sticky
        '1030': 1030, // Fixed
        '1040': 1040, // Modal Backdrop
        '1050': 1050, // Offcanvas
        '1060': 1060, // Modal
        '1070': 1070, // Popover
        '1080': 1080, // Tooltip
      }
    }
  }
});
