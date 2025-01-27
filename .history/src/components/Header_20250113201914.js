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

                <div className='flex flex-row w-full h-auto p-[4rem]'>

                    <div className='flex-1 whitespace-pre text-[4rem] leading-none'>
                         IT'S BREAK <br />WITH <span className='font-extrabold' > COFFEE <br />           COFFEE <br/>           COFFEE </span><br /><span className='text-[4.4rem]'>          COFFEE <br />          COFFEE <br />          COFFEE</span>
                    </div>

                    <div className='relative flex-1'>
                        <div className='text-center text-[10rem] font-semibold leading-none'>
                            COFFEE<br /> COFFEE<br /> COFFEE<br />
                        </div>
                        <img className='absolute w-[23rem] h-[23rem] top-[4rem] left-[9rem] z-20' src="coffee.png" alt="" />
                        <img className='absolute w-[17rem] h-[16rem] top-[15rem] left-[2rem] z-30' src="beansPack.png" alt="" />
                        <img className='absolute w-[8rem]  top-[20rem] left-[12rem] z-30' src="openBeans.png" alt="" />
                        <img className='absolute right-[5rem] top-[32rem] z-0' src="beans.png" alt="" />
                    </div>
                </div>
           </div>
        </>
    );
}

export default Header;