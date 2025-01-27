import React from 'react';

function Header(){
    return(
        <>
           {/* <img className='' src="" alt="" /> */}
           <div className='bg- flex flex-row justify-evenly items-center'>
                <img className='w-2 h-2' src="icon.png" alt="" />
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