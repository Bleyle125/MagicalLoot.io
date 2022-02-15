import  '../styles/Home.module.css'
const Hero = () => {
	return (
		<section className='relative container flex flex-col-reverse lg:flex-row gap-10 mt-14 lg:mt-28 w-full '>
			{/* Content */}
			<div className='flex flex-1 flex-col items-left lg:items-start'>
				<h2 className='text-template-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6'>
					Explore, Discover and Collect 
					  Rare Digital Assets.
				</h2>
				<p className='text-template-grey text-md text-lg text-center lg:text-left mb-6'>
					A marketplace for Music Non-Fungible Tokens 
					and digital art. Harness the power of blockchain by buying and selling digital collectibles. 
				</p>
				<div className='flex justify-center flex-wrap gap-6'>
					<a
						href='/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button type='button' className='btn btn-purple flex items-center gap-4'>
							Explore
							<img
								src='/img/rounded-square-arrow-indicator-right-svgrepo-com.svg'
								width={30}
								height={30}
								alt='Explore'
							/>
						</button>
					</a>
				</div>
			</div>
			{/* Image */}
			<div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
			<div className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer bg-hero-image" styles="background-image: url(./img/Wambua.jpg);">
                <div className="mt-20">
                    <span className="text-xl">Featuring - </span>
                    <span className="font-bold text-xl"></span>
                </div>


                <div className="mt-10 flex justify-between ">
                    <span className="p-3 pl-0 font-bold">Wambua- Power of Art</span>
                  
                </div>
            </div>
			</div>

		</section>
	);
};

export default Hero;
