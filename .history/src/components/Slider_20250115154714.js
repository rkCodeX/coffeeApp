import React from 'react'

function Slider(){
    return(
        <>
            <div className='w-[100%] h-auto px-[4rem] py-[6rem]'>
                <h1 className='inline-block w-[100%] text-center font-extrabold text-4xl'>OUR POPULAR FLAVOUR</h1>

                <div className='flex flex-row items-center justify-evenly w-[100%] h-[20rem]'>
                    <div>
                        <button></button>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <p></p>
                            <div>
                                <p></p>
                                <button></button>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className='flex flex-row items-center justify-center w-[100%] h-auto'>
                    <button></button>
                    <div className='w-[1rem] h-[1rem] bg-blrounded-full border-slate-500 border-2'></div>
                    <div className='w-[1rem] h-[1rem] bg-blrounded-full border-slate-500 border-2'></div>
                    <div className='w-[1rem] h-[1rem] bg-blrounded-full border-slate-500 border-2'></div>
                    <button></button>
                </div>
            </div>
        </>
    );
}

export default Slider;