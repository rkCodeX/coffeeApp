import React, { useState, useEffect } from 'react'

const Items = [
    {
        id: 1,
        img: 'coffee1.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 12
    }, {
        id: 2,
        img: 'coffee2.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 15
    }, {
        id: 3,
        img: 'coffee3.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    }, {
        id: 4,
        img: 'coffee4.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 8
    }, {
        id: 5,
        img: 'coffee5.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    }, {
        id: 6,
        img: 'coffee6.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 15
    }, {
        id: 7,
        img: 'coffee7.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    }, {
        id: 8,
        img: 'coffee8.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 15
    },{
        id: 9,
        img: 'coffee9.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 15
    },{
        id: 10,
        img: 'coffee10.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    },{
        id: 11,
        img: 'coffee11.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    },{
        id: 12,
        img: 'coffee12.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 15
    },{
        id: 13,
        img: 'coffee13.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    },{
        id: 14,
        img: 'coffee14.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    },{
        id: 15,
        img: 'coffee15.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    },{
        id: 16,
        img: 'coffee16.png',
        detail: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum.',
        price: 10
    }
]

function Slide(props) {
   
    return (
        <>
            {Items.slice(props.start, props.end).map((i) => (
                <div key={i.id} className='flex flex-col items-center justify-center gap-[8rem] w-[16rem]'>
                    <button className='px-[1rem] py-[0.3rem] bg-[#f8b878] text-sm font-semibold'>Overview</button>
                    <div className='w-auto h-auto'>
                        <div className='relative border-2 border-[#35211e] flex items-center justify-center bg-[#35211e] w-[auto] h-[8rem] rounded-t-[2.5rem]'>
                            <img className='relative w-[12rem] bottom-[2.8rem] hover:w-[15rem] hover:bottom-[3.5rem]' src={i.img} alt="" />
                        </div>
                        <div className='hover:bg-[#eeae6f] border-2 border-[#35211e] px-4 py-2'>
                            <p className='text-xs font-semibold text-[#35211e]'>{i.detail}</p>
                            <div className='flex flex-row items-center justify-between pt-4 pb-2'>
                                <p className='font-bold text-sm text-[#35211e]'>${i.price} {i.id}</p>
                                <button className='px-2 py-1 bg-[#35211e] text-[#ffffff] text-sm rounded-md font-bold'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4); 
 
    useEffect(() => {
        const updateItemsPerPage = () => {
            if ((window.innerWidth < 1185)&&(window.innerWid)) {
                setItemsPerPage(2);
            }else if(window.innerWidth < 695){
                setItemsPerPage(1);
            }else {
                setItemsPerPage(4);
            }
        };

        updateItemsPerPage();

        window.addEventListener('resize', updateItemsPerPage);

        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);


    const handleClick = (index) => {
        setCurrentIndex(index * itemsPerPage) ;
    }

    return (
        <>
            <div className='w-[100%] h-auto px-[4rem] py-[6rem] flex flex-col gap-[2.5rem]'>
                <h1 className='w-[100%] text-center font-extrabold text-4xl'>OUR POPULAR FLAVOUR</h1>

                <div className='flex flex-row items-center justify-evenly w-[100%] h-auto'>
                    <Slide start={currentIndex} end={currentIndex + itemsPerPage}/>
                </div>

                <div className='flex flex-row items-center justify-center w-[100%] h-auto'>
                {Array.from({ length: Math.ceil(Items.length / itemsPerPage) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`w-[0.8rem] h-[0.8rem] ml-1 rounded-full ${currentIndex === index * itemsPerPage ? 'bg-transparent' : 'bg-[#35211e]'} border-[#35211e] border-2`}
                    ></button>
                ))}
                </div>
            </div>
        </>
    );
}

export default Slider;