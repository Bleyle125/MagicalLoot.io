import Card from './card';
const Download = () => {
	return (
		<section className='py-20 mt-20'>
			{/* Heading */}
			<div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
				<h1 className='text-3xl text-center text-template-blue'>
					Getting started
				</h1>
				<p className='text-center text-xl text-template-grey mt-4'>
					Making your first NFT purchase.
				</p>
			</div>
			{/* Cards */}
			<div className='container grid  md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16'>
				{/* Card */}
				<article class="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 rounded-xl">
                <img class="mx-auto mb-20 mt-10 w-40" src="/img/metamask.svg" alt="" />
                <h1 class="text-center text-5xl mt-4 font-bold min-h-18 px-12">1.</h1>
                <h2 class="text-center text-3xl mt-4 font-bold min-h-18 px-12">
                    Set up your Account
                </h2>
                <p class="m-4 text-lg p-4 leading-relaxed text-center ">
                    To login with Metamask, create a Metamask account, add the browser extention and click the login button.
                </p>
            </article>
			<article class="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 rounded-xl">
                <img class="mx-auto mb-20 mt-10 w-40" src="/img/ShoppingCart.svg" alt="" />
                <h1 class="text-center text-5xl mt-4 font-bold min-h-18 px-12">2.</h1>
                <h2 class="text-center text-3xl mt-4 font-bold min-h-18 px-12">
                    
                    Purchase an NFT
                </h2>
                <p class="m-4 text-lg p-4 leading-relaxed text-center ">
                    Buy Now, or Bid your favourite NFT.
                </p>
            </article>
			<article class="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 rounded-xl">
                <img class="mx-auto mb-20 mt-10 w-40" src="/img/stack-of-photos-svgrepo-com.svg" alt="" />
                <h1 class="text-center text-5xl mt-4 font-bold min-h-18 px-12">3.</h1>
                <h2 class="text-center text-3xl mt-4 font-bold min-h-18 px-12">
                    Enjoy your assets
                </h2>
                <p class="m-4 text-lg p-4 leading-relaxed text-center ">
                    Interact with your NFT. Listen to music, enjoy the utilities, hold your asset or sell it in our resale market.
                </p>
            </article>
			</div>
		</section>
	);
};

export default Download;
