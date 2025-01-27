import React from 'react';

function Coffee(){
    return(
        <>
         <div className='flex flex-col items-center justify-evenly w-[100%] h-auto mt-[4rem]'>
            <div className='flex flex-row items-center justify-center'>
                <h1 className='px-[4rem] text-[1.2rem] font-ebold border-r-2 border-black'>COFFEE</h1>
                <h1 className='px-[4rem] text-[1.2rem] font-bold border-r-2 border-black'>ICE TEA</h1>
                <h1 className='px-[4rem] text-[1.2rem] font-bold border-r-2 border-black'>BEVERAGE</h1>
                <h1 className='px-[4rem] text-[1.2rem] font-bold border-black'>JUICES</h1>
            </div>
            <div className='flex flex-row items-center justify-evenly'>
                <div>hello</div>
                <div>hi</div>
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