import fetchBalance from '../lib/fetchBalance'
import { useEffect, useState } from "react"

const useWallet = (address) => {
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
          if (!address) return
    
          const balance = await fetchBalance(address);
          setBalance(balance);
        }
    
        fetchData()
      }, [address])

    return { balance }
}

export default useWallet