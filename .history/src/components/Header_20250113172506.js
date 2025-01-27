import React from 'react';

function Header(){
    return(
        <>
           <div className='bg-[#d5d5d5] w-full h-auto flex flex-col gap-4'>
                <div className='flex flex-row justify-between items-center w-[full] px-[3rem]'>
                        <img className='w-[5rem] h-[5rem]' src="icon.png" alt="" />
                        <div className='font-bold text-gray-800 flex flex-row justify-between items-center gap-[2rem]'>
                            <button>Home</button>
                            <button>Menu</button>
                            <button>Deals</button>
                            <button>Favourite</button>
                            <button><img className='h-6 w-6' src="shopping-cart.png" alt="" /></button>
                        </div>
                </div>
                <div className='flex flex-row w-full h-auto'>
            
                    <div className='whitespace-pre'>
                        IT'S BREAK <br /> WITH COFFEE <br /> COFFEE <br/> COFFEE <br /> COFFE
                    </div>

                    <div className='flex-1 bg-white px-[3rem]'>

                    </div>
                </div>
           </div>
        </>
    );
}

export default Header;