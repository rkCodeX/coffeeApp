import React from 'react';

function Footer(){
    return(
        <>
            <div className='flex flex-row items-center justify-center w-[100%] h-auto px-[2.5rem] py-[4rem] bg-[#d5d5d5]'>
                <div className='flex flex-col w-[50%] h-auto p-[3rem] gap-[4rem]'>
                    <h1 className='text-4xl font-bold'>Get New Updates And Discount Offers.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nulla. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.</p>
                    <div className='flex flex-row w-full items-center justify-center h-[2.8rem] bg-red-950 rounded-md p-2'>
                        <input className='px-2 text-white placeholder-[white] placeholder:text-base outline-none text-lg bg-transparent h-[auto] w-full' type="email" placeholder='Your Email...'/>
                        <button className='text-red-950 bg-[#f8b878] font-bold px-2 py-1 rounded-md border-2 border-red-950'>SUBSCRIBE</button>
                    </div>
                </div>  
                <div className='w-[50%] h-auto'>
                    <img className='w-[100rem] h-[28rem]' src="update.png" alt="" />
                </div>
            </div>
            <div className='w-[100%] h-auto bg-red-950 flex flex-col px-[5rem] py-[7rem]'>
                <div className='w-[100%] h-auto flex flex-row gap-[4rem] items-center justify-start'>
                    <div className='flex flex-col gap-[1.5rem] w-[45%] text-justify text-gray-100 h-auto'>
                        <h1 className='text-start font-bold text-4xl'>MILTON'S</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius pariatur possimus, harum mollitia quasi sed, veniam odio quibusdam iusto, aut illo in ab quia nisi deserunt delectus doloremque sapiente beatae consequatur! Incidunt, sequi? Temporibus cumque hic sunt tempore in iure est, nisi nulla fugiat repellat culpa magnam, natus nemo rem quae eius labore. Pariatur, explicabo.</p>
                    </div>
                    <div className='flex flex-col gap-[1rem] text-gray-100 w-auto'>
                        <h1 className='text-lg font-bold mb-[2rem]'>Page</h1>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem cf</p>
                    </div>
                    <div className='flex flex-col gap-[1rem] text-gray-100 w-auto'>
                        <h1 className='text-lg font-bold mb-[2rem]'>Links</h1>
                        <p>lorem</p>
                        <p>lorem sg</p>
                        <p>lorem</p>
                        <p>lorem</p>
                    </div>
                    <div className='flex flex-col gap-[1rem] text-gray-100 w-auto'>
                        <h1 className='text-lg font-bold mb-[2rem]'>Contacts</h1>

                    </div>
                </div>
                <div></div>
            </div>
        </>
    );
}

export default Footer;