module.exports = { 
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: '3rem'
    },
    extend: {
      boxShadow: {
        "2xl": " 0px 20px 50px -20px #FF7E1B;"
      }
      ,
      fontFamily: {
        "display": "Kumbh Sans"
      }
    },
  },
  plugins: [],
}
