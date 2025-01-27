import React from 'react';

function Coffee(){
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
                    <div className='w-[16rem] h-[16rem] border-black border-2 rounded-full'></div>  
                </div>

                <div className='flex-[50%]'>
                    <div className='flex flex-col p-[rem] h-auto'>
                        <h1>MILTON'S CHOCO COFFEE</h1>
                        <div>
                            <img src="rate.png" alt="" />
                            <h1>$12</h1>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, asperiores! Facilis quibusdam non doloremque odio nemo quo placeat incidunt perferendis deserunt saepe provident, aliquid doloribus nulla obcaecati aspernatur? Tenetur, adipisci!</p>
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