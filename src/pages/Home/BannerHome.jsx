import React from 'react';
import mainbg from '../../assets/banner/mainbg-3.jpg'
import redCar from '../../assets/banner/red-car.png'
import carkey from '../../assets/banner/17.jpg'

const BannerHome = () => {
    return (

        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={mainbg} className="w-full" alt='' />
                <div className='absolute  transform -translate-y-1/2 left-5 right-5 top-1/2 '>
                    <div className=" grid grid-cols-3  w-10/12 mx-auto ">
                        <div>
                            <h1 className='text-7xl'>Need Some <br /> New Wheels?</h1>
                            <p className='text-3xl my-6'>Buy or Sell your car on Old Car </p>
                            <input type="text" placeholder='Search Here' className='text-center bg-red-600  text-white font-semibold placeholder-white p-2' />
                        </div>
                        <img src={redCar} className="w-full col-span-2" alt='' />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={carkey} className="w-full " alt='' />
                </div>
                <div className='absolute  transform -translate-y-1/2 left-5 right-5 top-1/2 '>


                    <h1 className='text-4xl text-center text-white font-bold'>LET'S FIND YOUR PERFECT CAR</h1>
                    <p className='text-xl text-center text-white mt-1 mb-4'>Quality cars. Better prices. Test drives brought to you. </p>
                    <div className='w-52 mx-auto'>
                        <input type="text" placeholder='Search Here' className='text-center bg-red-600  text-white font-semibold placeholder-white p-2' />
                    </div>



                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* <div id="slide3" className="carousel-item relative w-full">
                <img src={mainbg} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={mainbg} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>

    );
};

export default BannerHome;