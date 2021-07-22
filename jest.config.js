module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverageFrom: ['src/components/**/*.{js,jsx,vue}', '!/node_modules/'],
  setupFiles: ['./tests/unit/setup.js']
}
