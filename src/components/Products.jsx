import React, { useEffect, useState } from 'react'
import { BASE_URL, GET_ALL_PRODUCTS, VIEW_PRODUCT_IMAGE } from '../utils/constants';

const Products = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getAllProducts();

    }, [])
    const getAllProducts = async () => {
        try {
            const response = await fetch(BASE_URL + GET_ALL_PRODUCTS);
            const result = await response.json();
            console.log("Success:", result.content);
            setProductList(result?.content);

        } catch (error) {
            console.error("Error:", error);
        }

    }
    return (
        <div className="properties section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="section-heading text-center">
                            <h6>| Products</h6>
                            <h2>Our Products</h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {productList && productList.map(product => (
                        <div key={product?.id} className="col-lg-4 col-md-6">
                            <div className="item">
                                <a href="property-details.html"><img src={`${BASE_URL + VIEW_PRODUCT_IMAGE}${product?.imageName}`} alt="img1" height={200} /></a>
                                {/* <!-- <span className="category">Luxury Villa</span>
                            <h6>$2.264.000</h6> --> */}
                                <h4><a href="property-details.html">
                                    {product?.productName}</a></h4>
                                <ul>
                                    <li>Type: <span>
                                        {product?.type?.name}</span></li>
                                    <li>Voltage Range: <span>
                                        {product?.voltage}</span></li>
                                    <li>Output: <span>{product?.output}</span></li>
                                    <li>Controller: <span>
                                        {product?.controller}</span></li>
                                    <li>Display: <span>{product?.display}</span></li>
                                    <li>Protection: <span>
                                        {product?.protection}</span></li>
                                    <li>Winding Material: <span>

                                        {product?.windingMaterial}</span></li>
                                    <li>Capacity:<span>
                                        {product?.capacity}</span></li>
                                </ul>

                                <div className="main-button">
                                    <a href="">Book Now</a>
                                </div>
                            </div>
                        </div>
                    ))

                    }



                </div>
            </div>
        </div>
    )
}

export default Products