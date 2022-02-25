import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
  nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/Market.sol/Market.json'

let rpcEndpoint = null

if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
  rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL
}

export default function Home() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
    async function resellOwnedItem(id, price, signer) {
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      signer
    );
  
    const listingPrice = await marketContract.getListingPrice();
    const tx = await marketContract.putItemToResell(
      nftaddress,
      id,
      ethers.utils.parseUnits(price, "ether"),
      { value: listingPrice.toString() }
    );
    await tx.wait();
  }
  async function loadNFTs() {    
    const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
    const data = await marketContract.fetchMarketItems()
    
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        itemId: i.itemId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }
  async function buyNft(nft) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
    const transaction = await contract.createMarketSale(nftaddress, nft.itemId, {
      value: price
    })
    await transaction.wait()
    loadNFTs()
  }
  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in Resale marketplace</h1>)
  return (
    <><div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
      <h1 className='text-3xl text-center text-template-blue'>
        Create a Non-Fungible Token
      </h1>
      <p className='text-xl text-center text-template-grey mt-4'>
       
      </p>
    </div><div className="flex justify-center">
        <div className="px-4" style={{ maxWidth: '1600px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {nfts.map((nft, i) => (
              <div key={i} className="transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl border  overflow-hidden">
                <img src={nft.image} alt="" />
                <div className="p-4">
                  <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400">{nft.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl mb-4 font-bold text-white">{nft.price} ETH</p>
                  <button className="w-full btn btn-purple mt-4 text-white p-4 gap-4 shadow-lg font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div></>
  )
}
