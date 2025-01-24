import React from 'react';

function Coffee(){
    return(
        <>
         <div className='flex flex-col w-[100%] h-auto'>
            <div className='flex flex-row items-center justify-center'>
                <h1 className='px-[4rem] text-[2rem] border-l-2 border-black'>COFFEE</h1>
                <h1 className='px-[4rem] text-[2rem] border-l-2 border-black'>ICE TEA</h1>
                <h1 className='px-[4rem] text-[2rem] border-l-2 border-black'>BEVERAGE</h1>
                <h1 className='px-[4rem] text-[2rem] border-l-2 border-black'>JUICES</h1>
            </div>
            <div className='flex flex-'>
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