module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": '#fca5a5;',
        "secondary": '#8e3eec',
        "black": 'black',
        "gray": '#fdf8f6',
        "warning": '#fdf8f6',
        "success": '#fdf8f6',
      },
    }
  }
}
// extend:
// https://www.geeksforgeeks.org/how-to-add-new-colors-to-tailwind-css-and-keep-the-originals-ones/