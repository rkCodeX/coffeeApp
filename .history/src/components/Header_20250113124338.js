import React from 'react';

function Header(){
    return(
        <>
           {/* <img className='' src="" alt="" /> */}
           <div className='flex flex-row justify-between items-center w-[100%] p-2'>
                <img className='w-[5rem] h-[5rem]' src="icon.png" alt="" />
                <div className='w flex flex-row justify-between items-center'>
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