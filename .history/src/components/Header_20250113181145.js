import React from 'react';

function Header(){
    return(
        <>
           <div className='bg-[#d5d5d5] w-full h-auto flex flex-col gap-[2rem]'>
                <div className='flex flex-row justify-between items-center w-[full] px-[3rem]'>
                        <img className='w-[5rem] h-[5rem]' src="icon.png" alt="" />
                        <div className='font-bold text-gray-800 flex flex-row justify-between items-center gap-[2rem]'>
                            <button className='bg-red-900 p'>Home</button>
                            <button className='bg-red-900 p'>Menu</button>
                            <button className='bg-red-900 p'>Deals</button>
                            <button className='bg-red-900 p'>Favourite</button>
                            <button className='bg-red-900 p'><img className='h-6 w-6' src="shopping-cart.png" alt="" /></button>
                        </div>
                </div>

                <div className='flex flex-row w-full h-auto p-[5rem]'>

                    <div className='flex-1 whitespace-pre text-[5rem] leading-none'>
                         IT'S BREAK <br />WITH <span className='font-extrabold' > COFFEE <br />           COFFEE <br/>           COFFEE </span><br /><span className='text-[5.5rem]'>          COFFEE <br />          COFFEE <br />          COFFEE</span>
                    </div>

                    <div className='flex-1 px-[3rem]'>
                        <div className='text-center text-[13rem] font-bold leading-none'>
                            COFFEE<br /> COFFEE<br /> COFFEE<br />
                        </div>
                    </div>
                </div>
           </div>
        </>
    );
}

export default Header;