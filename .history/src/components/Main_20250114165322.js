import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[4rem] text-[2rem] border-l-2 border-b'>COFFEE</h1>
                <h1 className='px-[4rem] text-[2rem] border-l-2 border-b'>ICE TEA</h1>
                <h1 className='px-[4rem] text-[2rem] border-l-2 border-b'>BEVERAGE</h1>
                <h1 className='px-[4rem] text-[2rem] border-l-2 border-b'>JUICES</h1>
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