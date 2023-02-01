import hardhat from "hardhat";

async function main() {
    console.log("deploy start")

    const InjeolmiBurner = await hardhat.ethers.getContractFactory("InjeolmiBurner")
    const contact = await InjeolmiBurner.deploy()
    console.log(`InjeolmiBurner address: ${contact.address}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });