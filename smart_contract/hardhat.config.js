require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/CDyUDqosRt4nF-QeCkQiV6DpDy31Pp6O',
      accounts: ['6bc9557afc06f31e88a4afb5d5a26db28cb02976c6650caa2fb8991b08fdeaf0'],
    },
  },
};