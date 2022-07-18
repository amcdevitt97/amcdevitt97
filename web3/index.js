import BAYCTokenABI from "./BAYC_token.js"
import CryptoPunksABI from "./crypto_punks_token.js"
import CryptoCovenABI from "./crypto_coven_token.js"

document.addEventListener("DOMContentLoaded", () => {
  const web3 = new Web3(window.ethereum)

  const contracts = new Map([
    ["BAYC", new web3.eth.Contract(BAYCTokenABI, "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D") ],
    ["CryptoPunks", new web3.eth.Contract(CryptoPunksABI, "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB") ],
    ["CryptoCoven", new web3.eth.Contract(CryptoCovenABI, "0x5180db8F5c931aaE63c74266b211F580155ecac8") ]
    /*["AstroGirls", 0xB21e760e7f74dD3c7b125EF21ba068AbBC8ADBA8],
    ["ArtBlocks", 0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270],
    ["CoolCats", 0x1A92f7381B9F03921564a437210bB9396471050C],
    ["Azuki", 0xED5AF388653567Af2F388E6224dC7C4b3241C544],
    ["MeeBits", 0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7],
    ["MadRealities", 0xCCac1187F4439E6ff02De97B16fF40BD2E7c8080],
    ["Doodles", 0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e]*/
    //["NSFW", 0x] 
  ]);

  function callContracts(contracts, walletAddress, balances){
    contracts.forEach(async (address, contractName) => {
        const total = await address.methods.balanceOf(walletAddress).call();
        balances.set(contractName, total);
    });
  }

  document.getElementById("load_button").addEventListener("click", async () => {
    const walletAddress = document.getElementById("wallet_address").value
    const balances = new Map();
    callContracts(contracts, walletAddress, balances);
    console.log(balances);
    // TODO: determine which token the account has the most of
    // create pages to redirect based on various types and my opinions on them
     
    /* document.getElementById("nfts").innerHTML = ""
    for(let i = 0; i < spacePunksBalance; i++) {
      const tokenId = await contract.methods.tokenOfOwnerByIndex(walletAddress, i).call()

      let tokenMetadataURI = await contract.methods.tokenURI(tokenId).call()

      if (tokenMetadataURI.startsWith("ipfs://")) {
        tokenMetadataURI = `https://ipfs.io/ipfs/${tokenMetadataURI.split("ipfs://")[1]}`
      }

      const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json())

      const spacePunkTokenElement = document.getElementById("nft_template").content.cloneNode(true)
      spacePunkTokenElement.querySelector("h1").innerText = tokenMetadata["name"]
      spacePunkTokenElement.querySelector("a").href = `https://opensea.io/assets/0x45db714f24f5a313569c41683047f1d49e78ba07/${tokenId}`
      spacePunkTokenElement.querySelector("img").src = tokenMetadata["image"]
      spacePunkTokenElement.querySelector("img").alt = tokenMetadata["description"]

      document.getElementById("nfts").append(spacePunkTokenElement)
    }*/
  })
})
