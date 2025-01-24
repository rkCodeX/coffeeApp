import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[]'>COFFEE</h1>
                <h1 className='px-[]'>ICE TEA</h1>
                <h1 className='px-[]'>BEVERAGE</h1>
                <h1 className='px-[]'>JUICES</h1>
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