import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className=''>COFFEE</h1>
                <h1 className=''>ICE TEA</h1>
                <h1 className=''>BEVERAGE</h1>
                <h1 className=''>JUICES</h1>
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