/** @type {import('tailwindcss').Config} */
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
        card: 'linear-gradient(27deg, rgba(0,0,0,1) 0%, rgba(255,0,0,0) 100%), url("https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg") '
      }
    }
  },
  plugins: [require('tailwindcss-debug-screens'), require('flowbite/plugin')]
};
