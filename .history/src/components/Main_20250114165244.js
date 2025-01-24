import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[4rem] '>COFFEE</h1>
                <h1 className='px-[4rem] '>ICE TEA</h1>
                <h1 className='px-[4rem] '>BEVERAGE</h1>
                <h1 className='px-[4rem] '>JUICES</h1>
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