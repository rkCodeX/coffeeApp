import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[4rem] text-[2rem] border'>COFFEE</h1>
                <h1 className='px-[4rem] text-[2rem] border'>ICE TEA</h1>
                <h1 className='px-[4rem] text-[2rem] border'>BEVERAGE</h1>
                <h1 className='px-[4rem] text-[2rem] border'>JUICES</h1>
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