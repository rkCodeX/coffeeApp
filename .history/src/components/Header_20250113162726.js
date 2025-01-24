import React from 'react';

function Header(){
    return(
        <>
           <div className=''>
                <div className='flex flex-row justify-between items-center w-[100%] py-2 px-[2rem]'>
                        <img className='w-[5rem] h-[5rem]' src="icon.png" alt="" />
                        <div className='flex flex-row justify-between items-center gap-[3rem]'>
                            <button>Home</button>
                            <button>Menu</button>
                            <button>Deals</button>
                            <button>Favourite</button>
                            <button>Order</button>
                        </div>
                </div>
                <div className='w-screen h-[14rem]'>
                        <img src="" alt="" />
                </div>
           </div>
        </>
    );
}

export default Header;