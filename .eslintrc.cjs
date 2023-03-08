module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config', '@vue/eslint-config-prettier/skip-formatting'],
  rules: {
    // override/add rules settings here, such as:
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
