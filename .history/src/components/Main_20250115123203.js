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
                    <div className='flex absolute w-[20rem] h-[20rem] border-black border-2 rounded-full'>
                        <img className ='relative w-[6rem] h-[6rem] -top-[2rem] left-[2.5rem]'  src="coffee.png" alt="" />
                        <h1 className= 'relative text-lg top-[0rem] font-bold left-[3rem]'>milk</h1>
                        <img className ='relative w-[6rem] h-[6rem] top-[6rem] -left-[13rem]' src="coffee.png" alt="" />
                        <h1 className= 'relative text-lg top-[8rem] font-bold -left-[12rem]'>white</h1>
                        <img className ='relative w-[6rem] h-[6rem] top-[15.5rem] -left-[15.5rem]' src="coffee.png" alt="" />
                        <h1 className= 'relative text-lg top-[18rem] font-bold -left-[15rem]'>dark</h1>
                        <img className ='relative w-[20rem] -top-[1rem] -left-[14rem]' src="coffee.png" alt="" />
                    </div>  
                </div>

                <div className='flex-[50%]'>
                    <div className='flex flex-col p-[7rem] h-auto'>
                        <h1 className='text-2xl font-bold uppercase'>MILTON'S CHOCO COFFEE</h1>
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

function Content(){
    return(
        <>
            <div className='flex flex-col gap-[5rem] w-[100%] h-auto bg-[#d5d5d5] px-[5rem] py-[6rem]'>
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='w-[30%] text-4xl font-bold'>The Best Taste <br /> From The Process</h1>
                    <h1 className='w-[36%] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repudiandae impedit vitae? Numquam aut fugiat praesentium, libero omnis a, commodi iusto ea officiis natus sequi est id odit, totam quae.</h1>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <div className='w-[2%] h-[5rem] rounded-md bg-red-950'></div>
                    <div className='w-[2%] h-[5rem] rounded-md bg-red-950'></div>
                    <div className='w-[2%] h-[5rem] rounded-md bg-red-950'></div>
                </div>
            </div>
        </>
    );
};

function Main(){
    return(
        <>
        <Coffee />
        <Content />
        </>
    );
}

export default Main;