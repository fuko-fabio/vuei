/*
  We have to use .js for tailwind config
  so that autofill plugin would work
  hence eslint-ignore
  https://github.com/tailwindlabs/tailwindcss-intellisense/issues/348#issuecomment-1111313685
*/
/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  screens: {
    ...defaultTheme.screens,
    xs: '600px',
    'sm-and-down': {
      max: '1451px',
    },
    sm: '1076px',
    md: '1451px',
    lg: '1451px',
  },
  borderRadius: {
    ...defaultTheme.borderRadius,
    DEFAULT: '3px',
  },
  fontSize: {
    ...defaultTheme.fontSize,
    base: ['16px', '24px'],
  },
  fontFamily: {
    sans: ['Futura ND', 'sans-serif'],
  },
  colors: {
    ...defaultTheme.colors,
    primary: {
      DEFAULT: '#534898',
      light: '#534898',
      dark: '#A6A0CE',
    },
    secondary: {
      DEFAULT: '#F5C61A',
      light: '#F5C61A',
      dark: '#FFE596',
    },
    tertiary: {
      DEFAULT: '#E61C63',
      light: '#E61C63',
      dark: '#F07AA3',
    },
    accent: {
      DEFAULT: '#E60000',
      light: '#E60000',
      dark: '#F47265',
    },
    info: {
      DEFAULT: '#534898',
      light: '#534898',
      dark: '#A6A0CE',
    },
    warning: {
      DEFAULT: '#E61C63',
      light: '#E61C63',
      dark: '#F07AA3',
    },
    success: {
      DEFAULT: '#03A19A',
      light: '#03A19A',
      dark: '#50AFA9',
    },
    error: {
      DEFAULT: '#E60000',
      light: '#E60000',
      dark: '#F47265',
    },
    victoria: {
      light: '#534898',
      dark: '#534898',
      DEFAULT: '#534898',
      'lighten-5': '#eae9f3',
      'lighten-4': '#cbc8e0',
      'lighten-3': '#a9a4cc',
      'lighten-2': '#877fb7',
      'lighten-1': '#6d63a7',
      'darken-1': '#4c4190',
      'darken-2': '#423885',
      'darken-3': '#39307b',
      'darken-4': '#29216a',
    },
    'ripe-lemon': {
      light: '#F5C61A',
      dark: '#F5C61A',
      DEFAULT: '#f5c61a',
      'lighten-5': '#fef8e4',
      'lighten-4': '#fceeba',
      'lighten-3': '#fae38d',
      'lighten-2': '#f8d75f',
      'lighten-1': '#f7cf3c',
      'darken-1': '#f4c017',
      'darken-2': '#f2b913',
      'darken-3': '#f0b10f',
      'darken-4': '#eea408',
    },
    tailwind: {
      light: '#03A19A',
      dark: '#03A19A',
      DEFAULT: '#03a19a',
      'lighten-5': '#e1f4f3',
      'lighten-4': '#b3e3e1',
      'lighten-3': '#81d0cd',
      'lighten-2': '#4fbdb8',
      'lighten-1': '#29afa9',
      'darken-1': '#039992',
      'darken-2': '#028f88',
      'darken-3': '#02857e',
      'darken-4': '#01746c',
    },
    amaranth: {
      light: '#E61C63',
      dark: '#E61C63',
      DEFAULT: '#e61c63',
      'lighten-5': '#fce4ec',
      'lighten-4': '#f8bbd0',
      'lighten-3': '#f38eb1',
      'lighten-2': '#ee6092',
      'lighten-1': '#ea3e7a',
      'darken-1': '#e3195b',
      'darken-2': '#df1451',
      'darken-3': '#db1147',
      'darken-4': '#d50935',
    },
    gray: {
      DEFAULT: '#808080',
      'lighten-5': '#fafafa',
      'lighten-4': '#f0f0f0',
      'lighten-3': '#ededed',
      'lighten-2': '#e0e0e0',
      'lighten-1': '#bdbdbd',
      'darken-1': '#757575',
      'darken-2': '#595959',
      'darken-3': '#3a3a3a',
      'darken-4': '#212121',
    },
    white: {
      DEFAULT: '#FFFFFF',
    },
    black: {
      DEFAULT: '#000000',
    },
  },
  extend: {
    minWidth: {
      40: '10rem',
    },
    height: {
      116: '29rem',
    },
  },
}
