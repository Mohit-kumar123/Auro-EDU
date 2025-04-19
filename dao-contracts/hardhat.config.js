require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy"); // Add this line

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {}, // This configures the Hardhat Network
    localhost: { // This configures your local Hardhat node
      url: "http://127.0.0.1:8545",
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // By default, take the first Hardhat account as the deployer
    },
  },
};