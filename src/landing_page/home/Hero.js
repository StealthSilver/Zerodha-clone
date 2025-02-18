import React from 'react';

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/assets/homeHero.png' alt='hero image' className='mb-5'></img>
                <h1 className='mt-5'>
                    Invest in Everything
                </h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.

                </p>
                <button className='p-1 btn btn-primary fs-5' style={{ width: "15%", margin: "0 auto", }}>Signup now</button>
            </div>
        </div>
    );
}

export default Hero;