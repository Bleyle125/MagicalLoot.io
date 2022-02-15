const Footer = () => {
	return (
		<footer className='bg-template-blue py-4'>
			<div className='container flex flex-col md:flex-row items-center'>
				<div className='flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12'>
					<img src='/img/Logo1.svg' alt='Company Logo' width='100' />
					<ul className='flex text-white uppercase gap-12 text-xs'>
						<li className='cursor-pointer'>About Magical Loot</li>
						<li className='cursor-pointer'>Help/Support</li>
						<li className='cursor-pointer'>Contact</li>
						<li className='cursor-pointer'>Founder - Bleyle Osewe</li>
					</ul>
				</div>
				<div className='flex gap-10 mt-12 md:mt-0'>
					<a
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='img/logo-twitter.svg'
							alt='Twitter'
							width='25'
						/>
					</a>
					<a
						href='https://www.instagram.com/magicalloot/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='/img/instagram-svgrepo-com.svg'
							alt='Instagram'
							width='25'
						/>
					</a>
					<a
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='/img/discord-6.svg'
							alt='Instagram'
							width='25'
						/>
						
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
