import React from 'react'
import useAuth from '../hooks/useAuth'
import useWallet from '../hooks/useWallet';

export default function Home() {
    const { user } = useAuth();
    const { balance } = useWallet(user.ether_address)

    // console.log(user)
    console.log("balance", balance)

    return (
        <div className='container mt-3'>
            <h2>
                <div className='row'>
                    <div className="mb-12">
                        {user?.email !== undefined ? 'List user Ethereum balance' : 'Please login first'}
                        
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="color-primary">
                            {
                                !user?.ether_address ? "you don't have a ether wallet" : user.ether_address
                            }
                            </h5>
                        </div>
                        <div className="col-md-4">
                            <h5>
                                {
                                    !user?.ether_address ? "" : balance
                                }
                            </h5>
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    )
}
