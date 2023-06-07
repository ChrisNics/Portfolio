/** @type {import('tailwindcss').Config} */

let plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)']
      },
      backgroundImage: {
        'hero-light':
          "url('https://images.pexels.com/photos/4814061/pexels-photo-4814061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        card: 'linear-gradient(27deg, rgba(0,0,0,1) 0%, rgba(255,0,0,0) 100%), url("https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        project:
          'linear-gradient(100deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5970763305322129) 100%), url("https://cdn.dribbble.com/users/1254731/screenshots/16899784/media/9d83b579cc6279663ac0324bfc15d94f.jpg?compress=1&resize=400x300")'
      }
    }
  },
  plugins: [require('tailwindcss-debug-screens'), require('flowbite/plugin')]
};
