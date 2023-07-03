const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './layout/*.{html,liquid}',
    './sections/*.{html,liquid}',
    './snippets/*.{html,liquid}',
    './templates/*.{html,liquid}',
  ],
  safelist: [
    'page-width',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '3/1': '3 / 1',
        '16/9': '16 / 9',
        '3/2': '3 / 2',
        '4/3': '4 / 3',
        '1/1': '1 / 1',
        '3/4': '3 / 4',
      },
      boxShadow: {
        DEFAULT: 'var(--vf-box-shadow)',
      },
      gridTemplateColumns: {
        DEFAULT: 'var(--vf-grid-cols-default)',
        'full-bleed':
          '1fr repeat(12, calc(var(--vf-container-width) / 12)) 1fr',
      },
      gap: {
        grid: 'var(--vf-grid-gap)',
      },
      borderRadius: {
        DEFAULT: 'var(--vf-border-radius)',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      borderStyle: {
        DEFAULT: 'solid',
      },
      backgroundImage: {
        'disabled-variant':
          'linear-gradient(to top right, rgb(var(--vf-color-disabled)) calc(50% - 1px), rgb(var(--vf-color-disabled-high-contrast)), rgb(var(--vf-color-disabled)) calc(50% + 1px) )',
      },
    },
    fontSize: {
      display: ['var(--vf-font-size-display)', 'var(--vf-line-height-display)'],
      h1: ['var(--vf-font-size-h1)', 'var(--vf-line-height-h1)'],
      h2: ['var(--vf-font-size-h2)', 'var(--vf-line-height-h2)'],
      h3: ['var(--vf-font-size-h3)', 'var(--vf-line-height-h3)'],
      h4: ['var(--vf-font-size-h4)', 'var(--vf-line-height-h4)'],
      h5: ['var(--vf-font-size-h5)', 'var(--vf-line-height-h5)'],
      h6: ['var(--vf-font-size-h6)', 'var(--vf-line-height-h6)'],
      nav: ['var(--vf-font-size-nav)', 'var(--vf-line-height-nav)'],
      'body-copy': [
        'var(--vf-font-size-body-copy)',
        'var(--vf-line-height-body-copy)',
      ],
      'body-copy-small': [
        'var(--vf-font-size-body-copy-small)',
        'var(--vf-line-height-body-copy-small)',
      ],
      'body-copy-large': [
        'var(--vf-font-size-body-copy-large)',
        'var(--vf-line-height-body-copy-large)',
      ],
      'body-copy-extra-small': [
        'var(--vf-font-size-body-copy-extra-small)',
        'var(--vf-line-height-body-copy-extra-small)',
      ],
    },
    fontFamily: {
      sans: ['var(--font-body-family)', ...defaultTheme.fontFamily.sans],
      'open-sans': [
        'var(--vf-font-family-sans)',
        ...defaultTheme.fontFamily.sans,
      ],
      body: ['var(--vf-font-family-body)', ...defaultTheme.fontFamily.sans],
      heading: [
        'var(--vf-font-family-heading)',
        ...defaultTheme.fontFamily.serif,
      ],
      display: [
        'var(--vf-font-family-display)',
        ...defaultTheme.fontFamily.serif,
      ],
    },
    spacing: {
      0: '0px',
      1: '1px',
      ...Array(50)
        .fill('')
        .reduce(
          (carry, _, index) => ({
            ...carry,
            [String((index + 1) * 2)]: `calc(${(index + 1) * 2
              }rem / var(--vf-font-size-root))`,
          }),
          {},
        ),
      'section-xs': 'var(--vf-padding-section-xsmall)',
      'section-sm': 'var(--vf-padding-section-small)',
      'section-md': 'var(--vf-padding-section-medium)',
      'section-lg': 'var(--vf-padding-section-large)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: 'rgb(var(--vf-color-primary) / <alpha-value>)',
      'primary-hover': 'rgb(var(--vf-color-primary-hover) / <alpha-value>)',
      'primary-pressed': 'rgb(var(--vf-color-primary-pressed) / <alpha-value>)',
      secondary: 'rgb(var(--vf-color-secondary) / <alpha-value>)',
      'secondary-hover': 'rgb(var(--vf-color-secondary-hover) / <alpha-value>)',
      'secondary-pressed':
        'rgb(var(--vf-color-secondary-pressed) / <alpha-value>)',
      'ui-background': 'rgb(var(--vf-color-ui-background) / <alpha-value>)',
      'input-background':
        'rgb(var(--vf-color-input-background) / <alpha-value>)',
      border: 'rgb(var(--vf-color-border) / <alpha-value>)',
      disabled: 'rgb(var(--vf-color-disabled) / <alpha-value>)',
      'disabled-high-contrast':
        'rgb(var(--vf-color-disabled-high-contrast) / <alpha-value>)',
      'placeholder-high-contrast':
        'rgb(var(--vf-color-placeholder-high-contrast) / <alpha-value>)',
      error: 'rgb(var(--vf-color-error) / <alpha-value>)',
      warning: 'rgb(var(--vf-color-warning) / <alpha-value>)',
      success: 'rgb(var(--vf-color-success) / <alpha-value>)',
      'error-background':
        'rgb(var(--vf-color-error-background) / <alpha-value>)',
      'warning-background':
        'rgb(var(--vf-color-warning-background) / <alpha-value>)',
      'success-background':
        'rgb(var(--vf-color-success-background) / <alpha-value>)',
      copy: 'rgb(var(--vf-color-copy) / <alpha-value>)',
      'copy-light': 'rgb(var(--vf-color-copy-light) / <alpha-value>)',
      header: 'rgb(var(--vf-color-header) / <alpha-value>)',
      facebook: 'rgb(var(--vf-color-facebook) / <alpha-value>)',
      twitter: 'rgb(var(--vf-color-twitter) / <alpha-value>)',
      linkedin: 'rgb(var(--vf-color-linkedin) / <alpha-value>)',
      pinterest: 'rgb(var(--vf-color-pinterest) / <alpha-value>)',
      youtube: 'rgb(var(--vf-color-youtube) / <alpha-value>)',
      snapchat: 'rgb(var(--vf-color-snapchat) / <alpha-value>)',
      instagram: 'rgb(var(--vf-color-instagram) / <alpha-value>)',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
  },
};
