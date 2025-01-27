import React from 'react';

function Header(){
    return(
        <>
           {/* <img className='' src="" alt="" /> */}
           <div className='bg-black flex flex-row justify-between items-center'>
                <img className='w-[4rem] h-[4rem]' src="icon.png" alt="" />
                <div className='text-wh w-auto flex flex-row justify-between items-center'>
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