import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
  nftmarketaddress, nftaddress
} from '../config'

import Market from '../artifacts/contracts/Market.sol/Market.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

export default function MyAssets() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
      
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const data = await marketContract.fetchMyNFTs()
    
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }
  
  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No assets owned</h1>)
  return (
    <><div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
      <h1 className='text-3xl font-bold text-center text-template-blue'>
        My Assets
      </h1>
      <p className='text-xl text-center text-template-grey mt-4'>
        Unearth unique animated collectible art scenarios in collaboration with artists, celebrities, and athletes.These collectibles feature digital signatures, audio, movement, and both physical and digital ways to view and interact with them.

      </p>
    </div>
    <div className="flex justify-center">

        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {nfts.map((nft, i) => (
              <div key={i} className="mx-auto max-w-sm shadow-xl bg-black bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer groupborder rounded-xl overflow-hidden">
                <img src={nft.image} className="rounded" />
                <div className="p-4 bg-black flex">
                  <img className="align-right"

                    src='/img/icons8-instagram-verification-badge.svg'
                    alt='Instagram'
                    width='25' />
                  <p className="bg-black text-2xl font-bold text-white">Price - {nft.price} Eth</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div></>
  )
}