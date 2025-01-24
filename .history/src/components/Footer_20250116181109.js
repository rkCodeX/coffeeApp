import React from 'react';

function Footer(){
    return(
        <>
            <div className='flex flex-row items-center justify-center w-[100%] h-auto p-[2rem] bg-[#d5d5d5]'>
                <div className='flex flex-col w-[50%] h-auto p-[2rem] gap-[2rem]'>
                    <h1>Get New Updates And Discount Offers.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nulla. Lorem ipsum dolor sit.</p>
                    <div className='flex flex-row w-auto h-auto'>
                        <input type="text" />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>  
                <div className='w-[50%] h-auto'>
                    <img className='' src="coffee12.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Footer;