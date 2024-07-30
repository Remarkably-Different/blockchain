import { ethers } from "ethers";

const fetchBalance = async (address) => {
    try {
        // Check if the address is valid
        if (!ethers.isAddress(address)) {
          console.log('Invalid Ethereum address.');
          return 0
        }
  
        // Create an ethers provider
        const provider = ethers.getDefaultProvider()
  
        // Fetch the balance
        const balanceInWei = await provider.getBalance(address)
  
        // Convert balance to ether
        const balanceInEth = ethers.formatEther(balanceInWei)
  
        // Update state
        return balanceInEth;
      } catch (err) {
        console.log('Error fetching balance.', err)
        return 0
      }
}

export default fetchBalance