import React from 'react';

function Header(){
    return(
        <>
           <div className='bg-[#d5d5d5] w-full h-auto flex flex-col'>
                <div className='flex flex-row justify-between items-center w-[full] px-[3rem]'>
                        <img className='w-[4rem] h-[4rem] p-2' src="icon.png" alt="" />
                        <div className='font-bold text-gray-800 flex flex-row justify-between items-center gap-[2rem]'>
                            <button className='hover:bg-red-950 hover:text-gray-300 px-2 py-1'>Home</button>
                            <button className='hover:bg-red-950 hover:text-gray-300 px-2 py-1'>Menu</button>
                            <button className='hover:bg-red-950 hover:text-gray-300 px-2 py-1'>Deals</button>
                            <button className='hover:bg-red-950 hover:text-gray-300 px-2 py-1'>Favourite</button>
                            <button><img className='h-6 w-6' src="shopping-cart.png" alt="" /></button>
                        </div>
                </div>

                <div className='flex flex-row w-full h-auto p-[4.5rem]'>

                    <div className='flex-1 whitespace-pre text-[5rem] leading-none'>
                         IT'S BREAK <br />WITH <span className='font-extrabold' > COFFEE <br />           COFFEE <br/>           COFFEE </span><br /><span className='text-[5.5rem]'>          COFFEE <br />          COFFEE <br />          COFFEE</span>
                    </div>

                    <div className='relative flex-1 px-[3rem]'>
                        <div className='text-center text-[13rem] font-bold leading-none'>
                            COFFEE<br /> COFFEE<br /> COFFEE<br />
                        </div>
                            <img className='absolute top-[]' src="coffee.png" alt="" />
                    </div>
                </div>
           </div>
        </>
    );
}

export default Header;