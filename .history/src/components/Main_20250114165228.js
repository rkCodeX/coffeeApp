import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='px-[rem] py-[1rem]'>COFFEE</h1>
                <h1 className='px-[rem] py-[1rem]'>ICE TEA</h1>
                <h1 className='px-[rem] py-[1rem]'>BEVERAGE</h1>
                <h1 className='px-[rem] py-[1rem]'>JUICES</h1>
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