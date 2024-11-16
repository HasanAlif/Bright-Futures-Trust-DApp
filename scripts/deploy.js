
const hre = require("hardhat");

async function getBalances(address){
    const balanceBigInt = await hre.ethers.provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigInt);
}

async function consoleBalances(addresses){
    let counter = 0 ;
    for (const address of addresses) {
        console.log(`Address ${counter} : ${address} has balance of` ,await getBalances(address))
    }
}
async function consoleMemos(memos){
    for(const  memo of memos){
        const timestamp = memo.timestamp;
        const name = memo.name;
        const from = memo.address;
        const message = memo.message;
        console.log(`At ${timestamp} , ${name} is Donated ${from}$ and said : ${message}`);
    }
}

async function main(){
    const[owner,from1,from2,from3] = await hre.ethers.getSigners();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});