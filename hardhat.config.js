require("@nomiclabs/hardhat-waffle");
const projectId = '4e5c5b4f2172450db493cc1edf135035'
const fs = require('fs')
const keyData = fs.readFileSync('./p-key.txt', {
  encoding:'utf8', flag:'r'
})


module.exports = {
  defaultNetwork: 'ropsten',
  networks:{
    hardhat:{
      chainId: 1337 // config standard 
    },
    ropsten:{
      url:`https://ropsten.infura.io/v3/${projectId}`,
      accounts:[keyData]
    },
    mainnet: {
      url:`https://mainnet.infura.io/v3/${projectId}`,
      accounts:[keyData]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
