import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[4rem] text-[2rem] border-l-2 '>COFFEE</h1>
                <h1 className='px-[4rem] text-[2rem] border-l-2 '>ICE TEA</h1>
                <h1 className='px-[4rem] text-[2rem] border-l-2 '>BEVERAGE</h1>
                <h1 className='px-[4rem] text-[2rem] border-l-2 '>JUICES</h1>
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