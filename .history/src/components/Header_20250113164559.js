import React from 'react';

function Header(){
    return(
        <>
           <div className='bg-[#d5d5d5] w-full h-auto flex'>
                <div className='flex flex-row justify-between items-center w-[100%] px-[2rem]'>
                        <img className='w-[5rem] h-[5rem]' src="icon.png" alt="" />
                        <div className='font-bold text-gray-800 flex flex-row justify-between items-center gap-[2rem]'>
                            <button>Home</button>
                            <button>Menu</button>
                            <button>Deals</button>
                            <button>Favourite</button>
                            <button>Order</button>
                        </div>
                </div>
                <div className='w-screen h-auto'>

                </div>
           </div>
        </>
    );
}

export default Header;