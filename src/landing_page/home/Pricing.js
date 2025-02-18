import React from 'react';

function Pricing() {
    return (
        <div className='container mb-5'>

            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className="mx-5" style={{ textDecoration: "none" }}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col border p-2'>
                            <h1 className='mb-3'>0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col border p-2'>
                            <h1 className='mb-3'>20</h1>
                            <p>Interday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Pricing;