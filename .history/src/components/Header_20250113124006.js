import React from 'react';

function Header(){
    return(
        <>
           {/* <img className='' src="" alt="" /> */}
           <div className='bg-black flex flex-row justify-evenly items-center'>
                <img className='w-[4rem] h-[4re' src="icon.png" alt="" />
                <div className='w-auto flex flex-row justify-between items-center'>
                    <button>home</button>
                    <button>home</button>
                    <button>home</button>
                    <button>home</button>
                </div>
           </div>
        </>
    );
}

export default Header;