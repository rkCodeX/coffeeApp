import React from 'react';

function Header(){
    return(
        <>
           <div className='bg-[#d5d5d5] w-[100%] h-auto flex flex-col'>
                <div className='flex flex-row justify-between items-center w-[100%] px-[3rem]'>
                        <img className='w-[4rem] h-[4rem] p-2' src="icon.png" alt="" />
                        <div className='font-bold text-gray-800 flex flex-row justify-between items-center gap-[2rem]'>
                            <button className='hover:bg-red-950 hover:text-gray-300 px-2 py-1'>Home</button>
                            <button className='hover:bg-red-950 hover:text-gray-300 px-2 py-1'>Menu</button>
                            <button className='hover:bg-red-950 hover:text-gray-300 px-2 py-1'>Deals</button>
                            <button className='hover:bg-red-950 hover:text-gray-300 px-2 py-1'>Favourite</button>
                            <button><img className='h-6 w-6' src="shopping-cart.png" alt="" /></button>
                        </div>
                </div>

                <div className='flex flex-row w-[100%] h-auto p-[2rem]'>

                    <div className='flex-1 whitespace-pre text-[4rem] leading-none'>
                         IT'S BREAK <br />WITH <span className='font-extrabold' > COFFEE <br />           COFFEE <br/>           COFFEE </span><br /><span className='text-[4.4rem]'>          COFFEE <br />          COFFEE <br />          COFFEE</span>
                    </div>

                    <div className='relative flex-1'>
                        <div className='text-center text-[10rem] font-semibold leading-none'>
                            COFFEE<br /> COFFEE<br /> COFFEE<br />
                        </div>
                        <img className='absolute w-[26rem] top-[2.8rem] left-[7rem] z-20' src="coffee.png" alt="" />
                        <img className='absolute w-[10rem] top-[20rem] left-[7.5rem] z-20' src="coffee-beans.png" alt="" />
                        <img className='absolute -rotate-3 w-[6rem] top-[0rem] left-[6rem] z-10' src="coffee-bean.png" alt="" />
                        <img className='absolute w-[6rem] -top-[1rem] right-[5rem] z-20' src="beans.png" alt="" />
                        <img className='absolute w-[4rem] top-[18.5rem] left-[0rem] rotate-180 z-20' src="coffee-bean.png" alt="" />
                        <img className='absolute w-[5rem] top-[20rem] right-[0rem] z-20' src="coffee-bean.png" alt="" />
                        <img className='absolute w-[4rem] top-[23.5rem] right-[4rem] z-20' src="coffee-bean.png" alt="" />
                        <img className='absolute -rotate-90 w-[8rem] top-[2rem] -left-[5rem] z-10' src="coffee-beans.png" alt="" />
                    </div>
                </div>
           </div>
        </>
    );
}

export default Header;