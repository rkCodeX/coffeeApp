import React from 'react';

function Coffee(){
    return(
        <>
         <div className='flex flex-col items-center justify-evenly w-[100%] h-auto mt-[4rem]'>
            
            <div className='flex flex-row items-center justify-center'>
                <div className='relative px-[4rem] text-[1.2rem] font-extrabold border-r-2 border-black'>
                    <button>COFFEE</button>
                <img className='absolute w-[4rem] left-[0rem] -top-[1rem]' src="cafe.png" alt="" />
            </div>
                <button className='px-[4rem] text-[1.2rem] font-bold border-r-2 border-black'>ICE TEA</button>
                <button className='px-[4rem] text-[1.2rem] font-bold border-r-2 border-black'>BEVERAGE</button>
                <button className='px-[4rem] text-[1.2rem] font-bold border-black'>JUICES</button>
            </div>

            <div className='w-[100%] flex flex-row items-center justify-evenly m-[4rem]'>
                <div className='flex-1 p-[4rem] bg-black'>
                    <div className='w-fuu'></div>
                    
                </div>

                <div className='flex-1'>hi</div>
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