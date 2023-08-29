const colors = require('tailwindcss/colors');
const defaultConfig = require('tailwindcss/defaultConfig');

function getUpdatedTheme(config, baseFontSize) {
  if (!config.theme) return;

  const updatedTheme = {};

  for (const [key, value] of Object.entries(config.theme)) {
    if (typeof value === 'object' && value !== null) {
      const updatedProperty = getUpdatedRemValues(value, baseFontSize);

      if (hasRemValue(updatedProperty)) {
        updatedTheme[key] = updatedProperty;
      }
    }
  }

  return updatedTheme;
}

function getUpdatedRemValues(value, baseFontSize) {
  if (typeof value === 'string') {
    if (value.endsWith('rem')) {
      const numericValue = parseFloat(value);
      return `${(numericValue * 16) / baseFontSize}rem`;
    } else {
      return value;
    }
  } else if (Array.isArray(value)) {
    const updatedArray = [];
    for (const item of value) {
      const updatedItem = getUpdatedRemValues(item, baseFontSize);
      if (updatedItem !== null) {
        updatedArray.push(updatedItem);
      }
    }
    return updatedArray.length > 0 ? updatedArray : null;
  } else if (typeof value === 'object' && value !== null) {
    const updatedObject = {};
    for (const [key, nestedValue] of Object.entries(value)) {
      const updatedValue = getUpdatedRemValues(nestedValue, baseFontSize);
      if (updatedValue !== null) {
        updatedObject[key] = updatedValue;
      }
    }
    return Object.keys(updatedObject).length > 0 ? updatedObject : null;
  } else {
    return null;
  }
}

function hasRemValue(obj) {
  if (typeof obj === 'string') {
    return obj.endsWith('rem');
  } else if (Array.isArray(obj)) {
    return obj.some(hasRemValue);
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.values(obj).some(hasRemValue);
  } else {
    return false;
  }
}

const { spacing, borderRadius, ...updatedProps } = getUpdatedTheme(defaultConfig, 10);

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
      ...updatedProps,
      spacing: {
        ...spacing,
        'section-xs': 'var(--vf-padding-section-xsmall)',
        'section-sm': 'var(--vf-padding-section-small)',
        'section-md': 'var(--vf-padding-section-medium)',
        'section-lg': 'var(--vf-padding-section-large)',
      },
      borderRadius: {
        ...borderRadius,
        DEFAULT: 'var(--vf-border-radius)',
      },
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
      borderStyle: {
        DEFAULT: 'solid',
      },
      backgroundImage: {
        'disabled-variant':
          'linear-gradient(to top right, rgb(var(--vf-color-disabled)) calc(50% - 1px), rgb(var(--vf-color-disabled-high-contrast)), rgb(var(--vf-color-disabled)) calc(50% + 1px) )',
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
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
