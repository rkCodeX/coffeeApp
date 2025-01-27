import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[2rem] py-[1r]'>COFFEE</h1>
                <h1 className='px-[2rem] py-[1r]'>ICE TEA</h1>
                <h1 className='px-[2rem] py-[1r]'>BEVERAGE</h1>
                <h1 className='px-[2rem] py-[1r]'>JUICES</h1>
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