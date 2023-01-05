const hre = require("hardhat");

async function main() {
  //contract 변수로 설정
  const Contract_A = await hre.ethers.getContractFactory("rootVerify");
  //contract를 deploy하고
  const contract_a = await Contract_A.deploy();

  await contract_a.deployed();
  console.log("Address : ", contract_a.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
