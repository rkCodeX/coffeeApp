import React from 'react';

function Footer(){
    return(
        <>
            <div className='flex flex-row items-center justify-center w-[100%] h-auto px-[2.5rem] py-[4rem] bg-[#d5d5d5]'>
                <div className='flex flex-col w-[50%] h-auto p-[3rem] gap-[4rem]'>
                    <h1 className='text-4xl font-bold'>Get New Updates And Discount Offers.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nulla. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.</p>
                    <div className='flex flex-row w-full items-center justify-center h-[2.8rem] bg-red-950 rounded-md p-2'>
                        <input className='px-2 text-white placeholder-[white] placeh outline-none text-lg bg-transparent h-[auto] w-full' type="email" placeholder='Your Email...'/>
                        <button className='text-red-950 bg-[#f8b878] font-bold px-2 py-1 rounded-md border-2 border-red-950'>SUBSCRIBE</button>
                    </div>
                </div>  
                <div className='w-[50%] h-auto'>
                    <img className='w-[100rem] h-[30rem]' src="bean.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Footer;