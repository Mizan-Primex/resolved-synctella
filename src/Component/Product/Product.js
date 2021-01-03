import React, { useEffect } from 'react';
import './Product.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
    useEffect(() => {
        Aos.init({ durations: 4000 })
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Product;