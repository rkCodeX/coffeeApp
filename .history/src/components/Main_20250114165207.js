import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='p'>COFFEE</h1>
                <h1 className='p'>ICE TEA</h1>
                <h1 className='p'>BEVERAGE</h1>
                <h1 className='p'>JUICES</h1>
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