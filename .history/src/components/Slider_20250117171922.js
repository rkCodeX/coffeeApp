import React, { useState } from 'react'

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
                <div key={i.id} className='flex flex-col items-center justify-center gap-[8rem] w-[20%]'>
                    <button className='px-[1rem] py-[0.3rem] bg-[#f8b878] text-sm font-semibold'>Overview</button>
                    <div className='w-auto h-auto'>
                        <div className='relative border-2 border-red-950 flex items-center justify-center bg-[#35211e] w-[auto] h-[8rem] rounded-t-[2.5rem]'>
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
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4); 
    const [btn1, setBtn1] = useState(true);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [btn4, setBtn4] = useState(false);  
    function handleClick1(){
            setStart(0);
            setEnd(4);
    }
    function handleClick2(){
        setStart(4);
        setEnd(8);
    }
    function handleClick3(){
        setStart(8);
        setEnd(12);
    }
    function handleClick4(){
        setStart(12);
        setEnd(16);
    }
    return (
        <>
            <div className='w-[100%] h-auto px-[4rem] py-[6rem] flex flex-col gap-[2.5rem]'>
                <h1 className='w-[100%] text-center font-extrabold text-4xl'>OUR POPULAR FLAVOUR</h1>

                <div className='flex flex-row items-center justify-evenly w-[100%] h-auto'>
                    <Slide start={start} end={end}/>
                </div>

                <div className='flex flex-row items-center justify-center w-[100%] h-auto'>
                    <button onClick={()=> {handleClick1(); setBtn1(true); setBtn2(false); setBtn3(false); setBtn4(false)}} className={`w-[0.8rem] h-[0.8rem] ml-1 rounded-full ${btn1? 'bg-transparent' : 'bg-red-950'}  border-red-950 border-2`}></button>
                    <button onClick={()=> {handleClick2(); setBtn1(false); setBtn2(true); setBtn3(false); setBtn4(false)}} className={`w-[0.8rem] h-[0.8rem] ml-1 rounded-full ${btn2? 'bg-transparent' : 'bg-red-950'}  border-red-950 border-2`}></button>
                    <button onClick={()=> {handleClick3(); setBtn1(false); setBtn2(false); setBtn3(true); setBtn4(false)}} className={`w-[0.8rem] h-[0.8rem] ml-1 rounded-full ${btn3? 'bg-transparent' : 'bg-red-950'}  border-red-950 border-2`}></button>
                    <button onClick={()=> {handleClick4(); setBtn1(false); setBtn2(false); setBtn3(false); setBtn4(true)}} className={`w-[0.8rem] h-[0.8rem] ml-1 rounded-full ${btn4? 'bg-transparent' : 'bg-red-950'}  border-red-950 border-2`}></button>
                </div>
            </div>
        </>
    );
}

export default Slider;