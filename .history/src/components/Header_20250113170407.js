import React from 'react';

function Header(){
    return(
        <>
           <div className='bg-[#d5d5d5] w-full h-auto flex flex-col gap-4 px-[3rem]'>
                <div className='flex flex-row justify-between items-center w-[100%]'>
                        <img className='w-[5rem] h-[5rem]' src="icon.png" alt="" />
                        <div className='font-bold text-gray-800 flex flex-row justify-between items-center gap-[2rem]'>
                            <button>Home</button>
                            <button>Menu</button>
                            <button>Deals</button>
                            <button>Favourite</button>
                            <button><img className='h-6 w-6' src="shopping-cart.png" alt="" /></button>
                        </div>
                </div>
                <div className='flex flex-row w-screen h-auto'>
                    <div className='flex-1 text-[4rem]'>
                        IT'S A BREAK <br/>
                        WITH <b>COFFEE<br/>  
                        <span className='ml-[2rem]'>COFFEE<br/></span>
                        <span className='ml-[2rem]'>COFFEE<br/></span>
                        </b>
                        <span className='ml-[2rem]'>COFFEE<br/></span>
                        <span className='ml-[2rem]'>COFFEE<br/></span>
                        <span className='ml-[2rem]'>COFFEE</span>
                    </div>
                    d
                </div>
           </div>
        </>
    );
}

export default Header;