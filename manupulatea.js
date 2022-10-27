const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

const token0_address = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"; // WMATIC on Polycon

const ERC20ABI = require("./SmartContractData/erc20ABI.json");

const wmatic_contract_instance = new ethers.Contract(
  token0_address,
  ERC20ABI,
  provider
);

async function main() {
  // creating erc20-wmatic contract instance
  const name = await wmatic_contract_instance.name();
  console.log("name", name);
}

main();
