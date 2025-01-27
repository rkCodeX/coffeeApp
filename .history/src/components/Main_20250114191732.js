import React, { useState } from 'react';

function Coffee(){
    const [items, setItems] = useState(1);
    return(
        <>
         <div className='flex flex-col items-center justify-evenly w-[100%] h-auto mt-[4rem]'>
            
            <div className='flex flex-row items-center justify-center'>
                <div className='relative px-[4rem] text-[1.2rem] font-extrabold border-r-2 border-black'>
                    <button>COFFEE</button>
                <img className='absolute w-[4rem] left-[0rem] -top-[1rem]' src="cafe.png" alt="" />
            </div>
                <button className='px-[4rem] text-[1.2rem] font-bold border-r-2 border-black'>ICE TEA</button>
                <button className='px-[4rem] text-[1.2rem] font-bold border-r-2 border-black'>BEVERAGE</button>
                <button className='px-[4rem] text-[1.2rem] font-bold border-black'>JUICES</button>
            </div>

            <div className='w-[100%] flex flex-row items-center justify-evenly m-[4rem]'>
                <div className='flex-[50%] flex items-center justify-center'>
                    <div className='absolute w-[20rem] h-[20rem] border-black border-2 rounded-full'>
                        <img className='inline relative w-[6rem] -top-[2rem] left-[2rem]' src="coffee.png" alt="" />
                        <img className='inline relative w-[6rem] top-[6rem] left-[rem]' src="coffee.png" alt="" />
                        {/* <img className='inline relative w-[6rem] top-[4rem] left-[3rem]' src="coffee.png" alt="" /> */}
                        {/* <img className='inline relative w-[6rem]' src="coffee.png" alt="" /> */}
                    </div>  
                </div>

                <div className='flex-[50%]'>
                    <div className='flex flex-col p-[7rem] h-auto'>
                        <h1 className='text-2xl font-bold'>MILTON'S CHOCO COFFEE</h1>
                        <div className='w-auto flex flex-row items-center justify-start gap-[2rem]'>
                            <img className=' w-[6rem] h-[5rem]' src="rate.png" alt="" />
                            <h1 className='font-bold'>$12</h1>
                        </div>
                        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, asperiores! Facilis quibusdam non doloremque odio nemo quo placeat incidunt perferendis deserunt saepe provident, aliquid doloribus nulla obcaecati aspernatur? Tenetur, adipisci!</p>
                        <div className='flex flex-row items-end justify-between mt-[2rem]'>
                            <button className='flex flex-row bg-red-950 text-sm text-white p-1 rounded-sm'>
                                <h1 className='px-2' onClick={ () => items > 1? setItems(items-1) : items }>-</h1>
                                <h1 className='px-2 border-x-[1.5px]'>{items}</h1>
                                <h1 className='px-2' onClick={ ()=> setItems(items+1) }>+</h1>
                             </button>
                            <button className='bg-yellow-600 rounded-sm text-white font-semibold text-sm px-3 py-1'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>

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