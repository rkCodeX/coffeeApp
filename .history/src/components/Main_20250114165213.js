import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[2re]'>COFFEE</h1>
                <h1 className='px-[2re]'>ICE TEA</h1>
                <h1 className='px-[2re]'>BEVERAGE</h1>
                <h1 className='px-[2re]'>JUICES</h1>
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