import '../styles/globals.css'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6 flex justify-between "> 
        <div className=" "><p className="text-2xl font-bold">Magical Loot</p></div>
        <div className="mr-8 ">
        <Link href="/">
          <a className="mr-4 text-purple-900 rounded-sm font-bold px-2 py-1 hover:bg-purple-200 transition-colors duration-300" >Home</a>
        </Link>
        <Link href="/create-item">
          <a className="mr-6 text-purple-900 rounded-sm font-bold px-2 py-1  hover:bg-purple-200 transition-colors duration-300">Create</a>
        </Link>
        <Link href="/my-assets">
          <a className="mr-6 text-purple-900 rounded-sm font-bold px-2 py-1 hover:bg-purple-200 transition-colors duration-300">My Assets</a>
        </Link>
        <Link href="/creator-dashboard">
          <a className="mr-6 text-purple-900 rounded-sm font-bold px-2 py-1 hover:bg-purple-200 transition-colors duration-300">Dashboard</a>
        </Link>
        <Link href="/resell-items">
          <a className="mr-6 text-purple-900 rounded-sm font-bold px-2 py-1 hover:bg-purple-200 transition-colors duration-300">Resale Market</a>
        </Link>
		
		<button type='button' className='bg-template-red text-xs font-bold text-white rounded-md px-5 py-2 uppercase hover:bg-red-500'>
					Login
		</button>
        </div>
      </nav> 
      
    
    
    
      <Component {...pageProps} />

      
    </div>
  
  )
}

export default MyApp
