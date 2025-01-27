import React from 'react'

function Slider(){
    return(
        <>
            <div className='w-[100%] h-auto px-[4rem] py-[6rem] flex flex-col gap-[3rem]'>
                <h1 className='inline-blw-[100%] text-center font-extrabold text-4xl'>OUR POPULAR FLAVOUR</h1>

                <div className='flex flex-row items-center justify-evenly w-[100%] h-auto'>

                    <div className='flex flex-col items-center justify-center gap-[8rem] w-[20%]'>
                        <button className='px-[1rem] py-[0.3rem] bg-[#f8b878] text-sm font-semibold'>Overview</button>
                    <div className='w-auto h-[20rem]'>
                        <div className='relative border-2 border-red-950 flex items-center justify-center bg-red-950 w-[auto] h-[8rem] rounded-t-[2.5rem]'>                     
                            <img className='relative w-[12rem] bottom-[2.8rem]' src="coffee.png" alt="" />
                        </div>
                        <div className='bg-[#eeae6f] border-2 border-red-950 px-4 py-2'>
                            <p className='text-xs font-semibold text-red-950'>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.</p>
                            <div className='flex flex-row items-center justify-between pt-4 pb-2'>
                                <p className='font-bold text-sm text-red-950'>$12</p>
                                <button className='px-2 py-1 bg-red-950 text-[#eeae6f] text-sm rounded-md font-bold'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            
                <div className='flex flex-row items-center justify-center w-[100%] h-auto'>
                    <button className='w-[0.8rem] h-[0.8rem] ml-1 rounded-full bg-slate-500 border-slate-500 border-2'></button>
                    <button className='w-[0.8rem] h-[0.8rem] ml-1 rounded-full bg-slate-500 border-slate-500 border-2'></button>
                    <button className='w-[0.8rem] h-[0.8rem] ml-1 rounded-full bg-slate-500 border-slate-500 border-2'></button>
                    <button className='w-[0.8rem] h-[0.8rem] ml-1 rounded-full bg-slate-500 border-slate-500 border-2'></button>
                </div>
            </div>
        </>
    );
}

export default Slider;