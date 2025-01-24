import React from 'react';

function Footer(){
    return(
        <>
            <div className='flex flex-row items-center justify-center w-[100%] h-auto px-[2.5rem] py-[4rem] bg-[#d5d5d5]'>
                <div className='flex flex-col w-[50%] h-auto p-[3rem] gap-[4rem]'>
                    <h1 className='text-4xl font-bold'>Get New Updates And Discount Offers.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nulla. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.</p>
                    <div className='flex flex-row w-full alig h-[2.5rem] bg-red-950 rounded-md'>
                        <input className='bg-transparent h-[auto] w-full' type="text" />
                        <button className='text-red-950 bg-[#f8b878] font-bold px-2 py-1 rounded-md'>SUBSCRIBE</button>
                    </div>
                </div>  
                <div className='w-[50%] h-auto'>
                    <img className='-rotate-90 w-[80rem] h-[40rem]' src="coffee12.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Footer;