import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

const Results = () => {
    const { data } = useContext(DataContext);

    return (
        <div className='products-container'>
            <div>
                {data && data.products.length > 0 ? (
                    <ul>
                        {data.products.map((product) => (
                            <li key={product.id} className="product-list">
                                <h2 className='product-name'>{product.name}</h2>
                                <img
                                    className='product-img'
                                    src={product.photoUrl}
                                    alt={product.name} />
                                <p className='product-description'>Description: {product.description}</p>
                                <div className='product-specs-container'>
                                    <p className='product-height'>Height: {product.height} cm</p>
                                    <p className='product-diameter'>Diameter: {product.diameter} cm</p>
                                    <p className='product-standingPlace'>Standing Place: {product.standingPlace}</p>
                                    <p className='product-wateringNeeds'>Watering Needs: {product.wateringNeeds}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default Results;
