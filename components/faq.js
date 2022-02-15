import { Accordion } from './accordian';

const FAQ = () => {
	return (
		<section className='bg-template-white py-20'>
			<div className='container'>
				{/* Heading */}
				<div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
					<h1 className='text-3xl text-center text-template-blue'>
						Frequently Asked Questions
					</h1>
					<p className='text-center text-template-grey mt-4'>
						Here are some of our FAQs. If you have any other questions
						unanswered, feel free to email us.
					</p>
				</div>
				{/* FAQ Items */}
				<Accordion title='What is an NFT?' content='An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.' />
				<Accordion title='What makes Non-fungible Tokens collectible?' content='Fungible goods are mutually interchangeable meaning that they can be replaced by another identical item. For example, all Bitcoin is the same. If you lend someone Bitcoin, you don’t know which specific Bitcoin you’re sending, nor do you know or care which Bitcoin you receive when you are repaid.
When you deal with NFTs (non-fungible tokens), every single token has its own identity and can be tracked and verified on its blockchain, almost like its own DNA. This mechanism helps assure both authenticity and proper ownership.' />
				<Accordion title='Can I sell my NFT?' content='Once you purchase and own an NFT, it is yours to do what you’d like with it. MagicalLoot.com has a secondary marketplace, where users can list NFTs purchased on the Magicalloot platform for resale.
You may also transfer your NFT to another platform/wallet, should you choose to (which will likely involve gas transfer fees).
Please keep in mind that you will not be authorized to resell or transfer NFTs purchased on the Magicalloot platform until after the initial bidding/purchase offer has ended and all original sales have been posted.' />
<Accordion title='What is a wallet, why do I need it?' content='Your physical wallet probably contains your money, a form of ID, and maybe pictures of your loved ones (we’ll ignore that 3 year-old Starbuck’s membership card with $1.83 on it).
Your crypto wallet does that on a blockchain. It has an “ID” (a long string of numbers and letters), your cryptocurrencies and any NFTs you bought with those cryptocurrencies. There are a number of wallet providers, including Metamask (the most popular and easy to use), Fortmatic, Coinbase and Rainbow, among others.
When you create a crypto wallet, you get a “seed phrase” — a series of words which let you recover your currencies or NFTs if you lose access.'/>
			</div>
			
		</section>
	);
};

export default FAQ;
