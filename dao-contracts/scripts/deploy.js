const hre = require("hardhat");

async function main() {
  const initialSupply = 1000000;
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(initialSupply);
  await myToken.waitForDeployment(); // Use waitForDeployment()

  console.log("MyToken deployed to:", await myToken.getAddress()); // Use getAddress()

  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy();
  await voting.waitForDeployment(); // Use waitForDeployment()

  console.log("Voting deployed to:", await voting.getAddress()); // Use getAddress()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });