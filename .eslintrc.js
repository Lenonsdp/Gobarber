module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    "import/extensions": [
      ".js",
      ".jsx"
    ]
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off", //todo metodo tem q utilizar this, discordado
    "no-param-reassign": "off", //Desabilitar permite que receba um parametro e faça alterações
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }], //Dar erro em variaveis que não s~ao utilizadas, desabilitado para variável do midleware
    "import/extensions": 0
  }
};
