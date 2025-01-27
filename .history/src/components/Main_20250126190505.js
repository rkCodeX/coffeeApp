import React, { useState } from 'react';
import Slider from './Slider.js'

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
                <button className='px-[4rem] text-[1.2rem] max-[774px]:text-[1rem] max-[918px]:px-[2rem] font-bold border-r-2 border-black'>ICE TEA</button>
                <button className='px-[4rem] text-[1.2rem] max-[774px]:text-[1rem] max-[918px]:px-[2rem] font-bold border-r-2 border-black'>BEVERAGE</button>
                <button className='px-[4rem] text-[1.2rem] max-[774px]:text-[1rem] max-[918px]:px-[2rem] font-bold border-black'>JUICES</button>
            </div>

            <div className='w-[100%] flex flex-row h-auto max-[918px]:flex-col items-center justify-evenly max-[918px]:m-0 max-[918px]:gap-[9rem] m-[4rem]'>
                <div className='flex-[50%] flex max-[918px]:mt-[15rem] items-center justify-center'>
                    <div className='flex absolute w-[20rem] h-[20rem] border-black border-2 rounded-full'>
                        <img className ='relative w-[6rem] h-[6rem] -top-[2rem] left-[2.5rem]'  src="coffee.png" alt="" />
                        <h1 className= 'relative text-lg top-[0rem] font-bold left-[3rem]'>milk</h1>
                        <img className ='relative w-[6rem] h-[6rem] top-[6rem] -left-[12.5rem]' src="coffee.png" alt="" />
                        <h1 className= 'relative text-lg top-[8rem] font-bold -left-[12rem]'>white</h1>
                        <img className ='relative w-[6rem] h-[6rem] top-[15.5rem] -left-[15.5rem]' src="coffee.png" alt="" />
                        <h1 className= 'relative text-lg top-[18rem] font-bold -left-[15rem]'>dark</h1>
                        <img className ='relative w-[20rem] h-[20rem] -top-[1rem] -left-[14rem] max-sm:t-[1rem] max-sm:w-[15rem] max-sm:h-[15rem]' src="coffee.png" alt="" />
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
                            <button className='flex flex-row bg-[#35211e] text-sm text-white p-1 rounded-sm'>
                                <h1 className='px-2' onClick={ () => items > 1? setItems(items-1) : items } >-</h1>
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
                <div className='flex flex-row max-[722px]:flex-col max-[722px]:gap-[1rem] items-center justify-between'>
                    <h1 className='w-[30%] max-[722px]:w-[50%] text-4xl font-bold'>The Best Taste <br /> From The Process</h1>
                    <h1 className='w-[36%] max-[722px]:w-[50%] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repudiandae impedit vitae? Numquam aut fugiat praesentium, libero omnis a, commodi iusto ea officiis natus sequi est id odit, totam quae.</h1>
                </div>
                <div className='flex flex-row max-[738px]:flex-col max-[738px]:gap-[1.5rem] items-center justify-between'>
                    <div className='flex flex-col items-center justify-center gap-[1.5rem] max-[738px]:w-[50%] w-[29%] h-[14rem] rounded-[1.5rem] text-[#c99868] bg-[#35211e]'>
                        <img className='w-[5.5rem] h-[5rem]' src="hands.png" alt="" />
                        <h1 className='text-xl font-bold'>Hand Roasted</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-[1.5rem] max-[738px]:w-[50%] w-[29%] h-[14rem] rounded-[1.5rem] text-[#35211e] bg-[#c99868]'>
                        <img className='w-[5rem] h-[5rem]' src="items-coffee.png" alt="" />
                        <h1 className='text-xl font-bold'>Direct Trade</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-[1.5rem] max-[738px]:w-[50%] w-[29%] h-[14rem] rounded-[1.5rem] text-[#c99868] bg-[#35211e]'>
                        <img className='w-[5rem] h-[5rem]' src="coffee-beans.png" alt="" />
                        <h1 className='text-xl font-bold'>Organic Taste</h1>
                    </div>
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
        <Slider />
        </>
    );
}

export default Main;