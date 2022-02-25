const Features = () => {
	return (
		<section className='bg-template-white py-20 mt-20 lg:mt-60'>
			{/* Heading */}
			<div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
				<h1 className='text-3xl text-center text-template-blue'>
					Discover
				</h1>
				<p className='text-xl text-center text-template-grey mt-4'>
				Unearth unique animated collectible art scenarios in collaboration with artists, celebrities, and athletes.These collectibles feature digital signatures, audio, movement, and both physical and digital ways to view and interact with them.
					
				</p>
			</div>
			{/* Feature #1 */}
			<div className='relative mt-20 lg:mt-30'>
				<div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
			<article className="shadow-lg mx-auto relative max-w-md group cursor-pointer ">
              <div className="overflow-hidden rounded-md">
                 <img clasName="w-full h-auto transform hover:scale-110 duration-200 " src="/img/Wambua.jpg" alt="" />
				 <span className="absolute right-4 top-4 bg-gray-600 text-white rounded-md p-1 pl-4 pr-4 font-semibold">Shady-Power of Art</span>
              </div>
            </article>
					<div className='flex flex-1 flex-col items-center lg:items-start'>
						<h1 className='text-3xl text-template-blue'>
							Proof of Art
						</h1>
						<p className='text-template-grey text-xl my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
						 Visual Artist Wambua tells a story of the power that lies in art 
						 <p className='mt-5'>Find this and more magical pieces of art along with rare utility collectibles exclusively dropped on Magical Loot.</p>
						</p>
					</div>
				</div>
			</div>

			{/* Feature #2 */}

			<div className='relative mt-20 lg:mt-40'>
				<div className='container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24'>
				<article className="shadow-lg mx-auto relative max-w-md group cursor-pointer">
              <div className="overflow-hidden rounded-md">
                 <img className="w-full h-auto transform hover:scale-110 duration-200" src="/img/StillDroppingBangers.jpg" alt="" />
				 <span className="absolute right-4 top-4 bg-gray-600 text-white rounded-md p-1 pl-4 pr-4 font-semibold">Louis Sauce-Still Dropping Bangers</span>
              </div>
            </article>
					<div className='flex flex-1 flex-col items-center lg:items-start'>
						<h1 className='text-3xl text-template-blue'>
							Decentralized Music
						</h1>
						<p className='text-template-grey text-xl my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
						Stuck Out In The Field But I'm Still Dropping Bangers⚽🎤
                        Harder Than Before😈
                        Prod byScorez x Yokarza🎹
                        Mixed and Mastered by Kayo Rille🎹

			            <p className="mt-5">Still Dropping Bangers by Kenyan rapper Louis Sauce marketplace is active along with the latest music singles/album drops available for collection.</p> 
						</p>
					</div>
				</div>
			</div>
			{/* Feature #3 */}
			<div className='relative mt-20 lg:mt-40'>
				<div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
				<article className="shadow-lg mx-auto relative max-w-md group cursor-pointer">
              <div className="overflow-hidden rounded-md">
                 <img className="w-full h-auto transform hover:scale-110 duration-200" src="/img/DripNiSick.jpg" alt="" />
				 <span className="absolute right-4 top-4 bg-gray-600 text-white rounded-md p-1 pl-4 pr-4 font-semibold">Louis Sauce-Drip Ni Sick</span>
              </div>
            </article>
					<div className='flex flex-1 flex-col items-center lg:items-start'>
						<h1 className='text-3xl text-template-blue'>
							Available in the Resale Market.
						</h1>
						<p className='text-template-grey text-xl my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
						Fo When They Thought I Fell Off😊
                        World Around🌍
                        Been Had The Sauce😈
                        Mixed and Mastered by Kezi Ara🎹
                        Prod by Louis Sauce🎹

<p className="mt-5">Missed the Drip Ni Sick single drop ? Get it now in the resale market.</p>

						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
