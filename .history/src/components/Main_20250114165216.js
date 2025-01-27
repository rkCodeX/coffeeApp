import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[2rem] p'>COFFEE</h1>
                <h1 className='px-[2rem] p'>ICE TEA</h1>
                <h1 className='px-[2rem] p'>BEVERAGE</h1>
                <h1 className='px-[2rem] p'>JUICES</h1>
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