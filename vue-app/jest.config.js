module.exports = {
testPathIgnorePatterns: ['/node_modules'],
moduleFileExtensions: ['js', 'vue'],
transform: {
  '^.+\\.js$': 'babel-jest',
  '^.+\\.vue$': '@vue/vue3-jest',
},
testEnvironment: 'jsdom',
testEnvironmentOptions: {
  customExportConditions: ['node', 'node-addons']
},
};