import React, { useEffect } from 'react';
import './Product.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import product from '../Images/image_Product_Service_3DGraphics.svg';
const Product = () => {
    useEffect(() => {
        Aos.init({ durations: 4000 })
    }, [])

    return (
        <div>
            <div data-aos="zoom-in-right" className="product" id="product">
                <div className="txt-3">
                    <h1>Products and Services </h1>
                    <h2>AR/VR Solutions </h2>
                    <p>AR/VR presents a whole new world of possibilities for modern businesses. All enterprises share a common goal of getting clients and customers to use their services and their products.
                    To achieve this, businesses must educate users about their products, engage meaningfully with potential clients and create lasting connections for future commerce. There are ways in which AR is already being implemented to further these goals and even more ways in which it has yet to be used.
                        </p>

                </div>
                <div className="third-img">
                    <img src={product} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Product;