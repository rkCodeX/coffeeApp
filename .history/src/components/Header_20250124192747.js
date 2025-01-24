import React from 'react';

function Header(){
    return(
        <>
           <div className='bg-[#d5d5d5] w-[100%] h-auto pb-3 flex flex-col'>

                <div className='flex flex-row justify-between items-center w-screen px-[3rem]'>
                        <img className='w-[4rem] h-[4rem] p-2' src="icon.png" alt="" />
                        <div className='font-bold text-gray-800 flex flex-row justify-between items-center gap-[2rem]'>
                            <button className='hover:bg-red-950 hover:text-gray-300 px-2 py-1'>Home</button>
                            <button className='hover:bg-red-950 hover:text-gray-300 px-2 py-1'>Menu</button>
                            <button className='hover:bg-red-950 hover:text-gray-300 px-2 py-1'>Deals</button>
                            <button className='hover:bg-red-950 hover:text-gray-300 px-2 py-1'>Favourite</button>
                            <button><img className='h-6 w-6' src="shopping-cart.png" alt="" /></button>
                        </div>
                </div>

                <div className='flex flex-row w-screen h-auto p-[2rem]'>

                    <div className='flex-1 whitespace-pre max-[1066px]:text-[3rem] text-[4rem] leading-none'>
                         IT'S BREAK <br />WITH <span className='font-extrabold' > COFFEE <br />           COFFEE <br/>           COFFEE </span><br /><span className='text-[4.4rem]  max-[1066px]:text-[3.3rem]'>          COFFEE <br />          COFFEE <br />          COFFEE</span>
                    </div>

                    <div className='relative flex-1'>
                        <div className='text-center text-[10rem] max-[1066px]:text-[7rem]  font-semibold leading-none'>
                            COFFEE<br /> COFFEE<br /> COFFEE<br />
                        </div>
                        <img className='absolute w-[26rem]   max-[1066px]:left-[4rem] max-[1066px]:w-[18rem] top-[2.8rem] left-[7rem] z-30' src="coffee.png" alt="" />
                        <img className='absolute w-[10rem]   max-[1066px]:w-[5rem] top-[20rem] left-[7.5rem] z-30' src="coffee-bean.png" alt="" />
                        <img className='absolute w-[18rem]  max-[1066px]:right-[2rem] max-[1066px]:w-[10rem]  top-[13.5rem] right-[4rem] z-20' src="cookie.png" alt="" />
                        <img className='absolute rotate-90 w-[4rem] top-[2rem] right-[7rem] z-10' src="bean.png" alt="" />
                        <img className='absolute w-[4rem] top-[16rem] left-[4rem] rotate-180 z-20' src="bean.png" alt="" />
                        <img className='absolute -rotate-45 w-[6rem] top-[1rem] left-[5rem] z-10' src="offee-beans.png" alt="" /> 
                    </div>
                </div>

                <div className='w-[100%] flex flex-row items-center justify-center gap-1'>
                    <div className='w-2 h-2 rounded-xl bg-red-950'></div>
                    <div className='w-14 h-2 rounded-xl bg-red-950'></div>
                    <div className='w-2 h-2 rounded-xl bg-red-950'></div>
                </div>

           </div>
        </>
    );
}

export default Header;