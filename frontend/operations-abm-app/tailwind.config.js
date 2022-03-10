module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        Withdraw:'#DA1212',
        Deposit:'#00B906',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
// 00B906 // 21BF73