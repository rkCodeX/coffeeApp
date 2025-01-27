import React from 'react';

function Footer(){
    return(
        <>
            <div className='flex flex-row max-[886px]:flex-col items-center justify-center w-[100%] h-auto px-[2.5rem] py-[4rem] bg-[#d5d5d5]'>
                <div className='flex flex-col w-[50%] max-[886px]:w-[80%] h-auto p-[3rem] gap-[4rem]'>
                    <h1 className='text-4xl font-bold'>Get New Updates And Discount Offers.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nulla. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.</p>
                    <div className='flex flex-row w-full items-center justify-center h-[2.8rem] bg-[#35211e] rounded-md p-2'>
                        <input className='px-2 text-white placeholder-[white] placeholder:text-base outline-none text-lg bg-transparent h-[auto] w-full' type="email" placeholder='Your Email...'/>
                        <button className='text-[#35211e] bg-[#f8b878] font-bold px-2 py-1 rounded-md border-2 border-[#35211e]'>SUBSCRIBE</button>
                    </div>
                </div>  
                <div className='w-[50%] max-[886px]:w-[80%] h-auto'>
                    <img className='w-[100rem] h-[28rem]' src="update.png" alt="" />
                </div>
            </div>
            <div className='w-[100%] h-auto bg-[#35211e] flex flex-col items-center justify-center gap-[3rem] px-[6rem] pt-[6rem]'>
                <div className='w-[100%] h-auto flex flex-row max-[718px]:flex-col gap-[6rem] items-start justify-start'>
                    <div className='flex flex-col gap-[1.5rem] w-[50%] max-[718px]:w-[80%] text-justify text-gray-100 h-auto'>
                        <h1 className='text-start font-bold text-4xl'>MILTON'S</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius pariatur possimus, harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius pariatur possimus, harum mollitia quasi sed, veniam odio quibusdam iusto, aut illo in ab quia nisi deserunt delectus doloremque sapiente beatae consequatur! Incidunt, sequi? Temporibus cumque hic sunt tempore in iure est, nisi nulla fugiat repellat culpa magnam, natus nemo rem quae eius labore. Pariatur, explicabo.</p>
                    </div>
                    <div className='flex flex-col text-start gap-[1rem] text-gray-100 items-center justify-start w-auto max-[718px]:w-[100%]'>
                        <h1 className='text-lg font-bold mb-[2rem] max-[718px]:'>Page</h1>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem cf</p>
                    </div>
                    <div className='flex flex-col items-center justify-start gap-[1rem] text-gray-100 w-auto max-[718px]:w-[100%]'>
                        <h1 className='text-lg font-bold mb-[2rem]'>Links</h1>
                        <p>lorem</p>
                        <p>lorem sg</p>
                        <p>lorem</p>
                        <p>lorem</p>
                    </div>
                    <div className='flex flex-col gap-[1rem] text-gray-100 items-center justify-start w-auto max-[718px]:w-[100%]'>
                        <h1 className='text-lg font-bold mb-[2rem]'>Contacts</h1>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div className='text-center w-[100%] border-t-2 border-[#35211e] text-gray-100 py-[2rem]'>All copyrights are reserved by YourCompanyName</div>
            </div>
        </>
    );
}

export default Footer;