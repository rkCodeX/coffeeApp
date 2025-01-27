import React from 'react';

function Coffee(){
    return(
        <>
         <div className='flex flex-col items-center justify-evenly w-[100%] h-auto mt-[4rem]'>
            
            <div className='flex flex-row items-center justify-center'>
                <div className='relative px-[4rem] text-[1.2rem] font-extrabold border-r-2 border-black'>
                    <h1>COFFEE</h1>
                <img className='absolute w-[4rem] left-[0rem] -top-[1rem]' src="cafe.png" alt="" />
            </div>
                <h1 className='px-[4rem] text-[1.2rem] font-bold border-r-2 border-black'>ICE TEA</h1>
                <h1 className='px-[4rem] text-[1.2rem] font-bold border-r-2 border-black'>BEVERAGE</h1>
                <h1 className='px-[4rem] text-[1.2rem] font-bold border-black'>JUICES</h1>
            </div>

            <div className=' flex flex-row items-center justify-evenly mt-[2rem]'>
                <div className='flex-1 p-[4rem] bg-black'>
                    
                </div>

                <div className='flex-1 p-[4rem]'>hi</div>
            </div>

         </div>
        </>
    )
}

function Main(){
    return(
        <>
        <Coffee />
        </>
    );
}

export default Main;