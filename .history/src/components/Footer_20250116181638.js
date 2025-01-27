import React from 'react';

function Footer(){
    return(
        <>
            <div className='flex flex-row items-center justify-center w-[100%] h-auto p-[2rem] bg-[#d5d5d5]'>
                <div className='flex flex-col w-[50%] h-auto p-[3rem] gap-[4rem]'>
                    <h1 className='text-4xl font-bold'>Get New Updates And Discount Offers.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nulla. Lorem ipsum dolor sit. lorem</p>
                    <div className='flex flex-row w-auto h-auto'>
                        <input type="text" />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>  
                <div className='w-[50%] h-auto'>
                    <img className='w-full h-full' src="coffee12.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Footer;