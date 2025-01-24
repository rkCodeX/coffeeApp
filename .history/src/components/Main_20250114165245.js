import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[4rem] t'>COFFEE</h1>
                <h1 className='px-[4rem] t'>ICE TEA</h1>
                <h1 className='px-[4rem] t'>BEVERAGE</h1>
                <h1 className='px-[4rem] t'>JUICES</h1>
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