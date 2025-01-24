import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[4rem] text-[]'>COFFEE</h1>
                <h1 className='px-[4rem] text-[]'>ICE TEA</h1>
                <h1 className='px-[4rem] text-[]'>BEVERAGE</h1>
                <h1 className='px-[4rem] text-[]'>JUICES</h1>
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