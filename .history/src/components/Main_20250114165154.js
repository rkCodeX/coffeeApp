import React from 'react';

function Coffee(){
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 class>COFFEE</h1>
                <h1 class>ICE TEA</h1>
                <h1 class>BEVERAGE</h1>
                <h1 class>JUICES</h1>
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