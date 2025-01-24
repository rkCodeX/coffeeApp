import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[4rem] py-[rem]'>COFFEE</h1>
                <h1 className='px-[4rem] py-[rem]'>ICE TEA</h1>
                <h1 className='px-[4rem] py-[rem]'>BEVERAGE</h1>
                <h1 className='px-[4rem] py-[rem]'>JUICES</h1>
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