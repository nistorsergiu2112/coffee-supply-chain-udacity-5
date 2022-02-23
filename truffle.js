const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: () => new HDWalletProvider('myself poet rifle spike panther amateur amateur music can crash elbow kangaroo', `https://rinkeby.infura.io/v3/b1be97302f8341729f9f2ec05b44b513`),
      network_id: 4,       
      gas: 6000000,
      gasPrice: 10000000000,
    },
  }
};