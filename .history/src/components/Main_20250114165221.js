import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[2rem] py-[]'>COFFEE</h1>
                <h1 className='px-[2rem] py-[]'>ICE TEA</h1>
                <h1 className='px-[2rem] py-[]'>BEVERAGE</h1>
                <h1 className='px-[2rem] py-[]'>JUICES</h1>
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