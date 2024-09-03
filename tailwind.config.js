import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  plugins: [customPlugin()],
};

function customPlugin() {
  return plugin(({ addBase, matchUtilities, theme }) => {
    const variables = {
      '--color-bg-primary': '253, 252, 253',
      '--color-bg-secondary': '250, 249, 251',
      '--color-bg-tertiary': '242, 239, 243',
      '--color-border-primary': '217, 217, 224',
      '--color-border-secondary': '205, 206, 214',
      '--color-border-tertiary': '185, 187, 198',
    };
    addBase({
      ':root': {
        ...variables,
      }
    });
    matchUtilities(
      {
        rounded: (value) => {
          return {
            '--tw-parent-radius': value,
            'border-radius': value,
          };
        },
      },
      {
        values: theme('borderRadius'),
      },
    );
  }, {
    corePlugins: {
      borderRadius: false,
    },
    theme: {
      extend: {
        backgroundColor: {
          surface: {
            DEFAULT: 'rgb(var(--color-bg-primary))',
            primary: 'rgb(var(--color-bg-primary))',
            secondary: 'rgb(var(--color-bg-secondary))',
            tertiary: 'rgb(var(--color-bg-tertiary))',
          },
        },
        borderColor: {
          base: {
            DEFAULT: 'rgb(var(--color-border-primary))',
            primary: 'rgb(var(--color-border-primary))',
            secondary: 'rgb(var(--color-border-secondary))',
            tertiary: 'rgb(var(--color-border-tertiary))',
          },
        },
      }
    }
  });
}