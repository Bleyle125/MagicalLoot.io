const { expect } = require('chai')
const { ethers } = require("hardhat");

let market;
let nft;
let nftAddress;
let marketAddress;

beforeEach(async ()=>{
    const Market = await ethers.getContractFactory("Market");
    market = await Market.deploy();
    await market.deployed();

    marketAddress = market.address;

    const NFT = await ethers.getContractFactory("NFT");
    nft = await NFT.deploy(marketAddress);
    await nft.deployed();
    nftAddress = nft.address;
})

describe("Marketplace", () => {
    it("should allow buyer to resell an owned item", async () => {
    const [, creator, buyer] = await ethers.getSigners();

    await nft.connect(creator).createToken("www.mytoken.com")

    const listingPrice = await market.getListingPrice();

    await market.connect(creator).createMarketItem(nftAddress, 1, 100, {value: listingPrice})

    await market.connect(buyer).createMarketSale(nftAddress, 1, {value: 100})

    await market.connect(buyer).putItemToResell(nftAddress, 1, 150, {value: listingPrice})

    const item = await market.fetchSingleItem(1)

    expect(item.seller).to.equal(buyer.address)
    expect(item.creator).to.equal(creator.address)
  })
})