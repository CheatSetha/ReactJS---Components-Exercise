import React from 'react'

const NavBar = () => {
  return (
    <div className='sticky top-0 bg-white z-10'>
        <nav className='w-9/12 mx-auto flex justify-between items-center '>
         
            <img className='w-[50px] h-[50px]' src="https://www.jedishop.eu/_obchody/www.jedishop.cz/prilohy/433/shrek-bendyfigs-ohebna-figure-shrek-15-cm.jpg.big.jpg" alt=""  />
        
            <ul className='flex space-x-9 justify-center py-6v  '>
                <li>home</li>
                <li>List</li>
                <li>price</li>
                <li>contact us</li>
                <li>about us</li>
                
            </ul>
            <div className="btn space-x-2">
              <button className='bg-green-700 text-white px-4 py-2 rounded-md'>sing up</button>
              <button className='border-green-700 px-4 py-2 border rounded-md'>login</button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar