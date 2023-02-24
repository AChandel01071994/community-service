module.exports = {
  '**/*.ts': () => 'yarn typecheck',
  '**/*.{js,ts}': ['yarn lint:fix', 'yarn prettier'],
};
