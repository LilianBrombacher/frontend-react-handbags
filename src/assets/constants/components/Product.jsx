import React from 'react';

const Product = ({ imageSrc, altText, name, price }) => {
    return (
        <article>
            <span>Best seller</span>
            <img src={imageSrc} alt={altText} />
            <p>{name}</p>
            <h4>{price}</h4>
        </article>
    );
};

export default Product;