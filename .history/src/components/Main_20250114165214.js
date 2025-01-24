import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[2rem]'>COFFEE</h1>
                <h1 className='px-[2rem]'>ICE TEA</h1>
                <h1 className='px-[2rem]'>BEVERAGE</h1>
                <h1 className='px-[2rem]'>JUICES</h1>
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