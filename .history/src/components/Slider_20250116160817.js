import React from 'react'

const Items = [
    {
        id: 1,
        img: 'coffee.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 12
    }, {
        id: 2,
        img: 'coffee-beans.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 15
    }, {
        id: 3,
        img: 'items-coffee.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    }, {
        id: 4,
        img: 'cookie.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 8
    }, {
        id: 5,
        img: 'bean.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    }, {
        id: 6,
        img: 'hands.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 15
    }, {
        id: 7,
        img: 'bean.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    }, {
        id: 8,
        img: 'coffee-beans.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 15
    },{
        id: 9,
        img: 'hands.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 15
    },{
        id: 10,
        img: 'bean.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    },{
        id: 11,
        img: 'bean.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    },{
        id: 12,
        img: 'hands.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 15
    },{
        id: 13,
        img: 'bean.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    },{
        id: 14,
        img: 'bean.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    },{
        id: 15,
        img: 'bean.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    },{
        id: 16,
        img: 'bean.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    }
]

function Slide() {
    return (
        <>
            {Items.slice(0, 4).map((i) => (
                <div key={i.id} className='flex flex-col items-center justify-center gap-[8rem] w-[20%]'>
                    <button className='px-[1rem] py-[0.3rem] bg-[#f8b878] text-sm font-semibold'>Overview</button>
                    <div className='w-auto h-auto'>
                        <div className='relative border-2 border-red-950 flex items-center justify-center bg-red-950 w-[auto] h-[8rem] rounded-t-[2.5rem]'>
                            <img className='relative w-[12rem] bottom-[2.8rem] hover:w-[15rem] hover:bottom-[3.5rem]' src={i.img} alt="" />
                        </div>
                        <div className='bg-[#eeae6f] border-2 border-red-950 px-4 py-2'>
                            <p className='text-xs font-semibold text-red-950'>{i.detail}</p>
                            <div className='flex flex-row items-center justify-between pt-4 pb-2'>
                                <p className='font-bold text-sm text-red-950'>${i.price}</p>
                                <button className='px-2 py-1 bg-red-950 text-[#eeae6f] text-sm rounded-md font-bold'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

function Slider() {
    return (
        <>
            <div className='w-[100%] h-auto px-[4rem] py-[6rem] flex flex-col gap-[2.5rem]'>
                <h1 className='w-[100%] text-center font-extrabold text-4xl'>OUR POPULAR FLAVOUR</h1>

                <div className='flex flex-row items-center justify-evenly w-[100%] h-auto'>
                    <Slide />
                </div>

                <div className='flex flex-row items-center justify-center w-[100%] h-auto'>
                    <button onClick={handk} className='w-[0.8rem] h-[0.8rem] ml-1 rounded-full bg-red-950 border-red-950 border-2'></button>
                    <button onClick={handk} className='w-[0.8rem] h-[0.8rem] ml-1 rounded-full bg-red-950 border-red-950 border-2'></button>
                    <button onClick={handk} className='w-[0.8rem] h-[0.8rem] ml-1 rounded-full bg-red-950 border-red-950 border-2'></button>
                    <button onClick={handk} className='w-[0.8rem] h-[0.8rem] ml-1 rounded-full bg-red-950 border-red-950 border-2'></button>
                </div>
            </div>
        </>
    );
}

export default Slider;