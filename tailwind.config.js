module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": '#fca5a5;',
        "primarydark": '#7a3e3e;',
        "secondary": '#8e3eec',
        "secondarydark": '#55278b',
        "warning": '#fdf8f6',
        "warningdark": '#fdf8f6',
        "success": '#fdf8f6',
        "successdark": '#fdf8f6'
      },
    }
  }
}
// extend:
// https://www.geeksforgeeks.org/how-to-add-new-colors-to-tailwind-css-and-keep-the-originals-ones/