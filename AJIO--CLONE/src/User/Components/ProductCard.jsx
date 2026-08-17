import React from "react";

const ProductCard = ({ product }) => {

    return (

        <div
            className="product-card"
            id={`product-${product.id}`}
        >

            {/* Product Image */}

            <div
                className="product-image"
                id={`product-image-${product.id}`}
            >

                <img
                    src={product.image}
                    alt={product.name}
                    id={`product-img-${product.id}`}
                />


                <span
                    className="product-tag"
                    id={`product-tag-${product.id}`}
                >
                    {product.tag}
                </span>


                <div
                    className="quick-view"
                    id={`quick-view-${product.id}`}
                >
                    QUICK VIEW
                </div>

            </div>


            {/* Product Information */}

            <div
                className="product-info"
                id={`product-info-${product.id}`}
            >

                <h4 className="brand-name">
                    {product.brand}
                </h4>


                <p className="product-name">
                    {product.name}
                </p>


                <div
                    className="rating-box"
                    id={`rating-${product.id}`}
                >

                    {product.rating}★ | {product.reviews}

                </div>


                <div
                    className="price-row"
                    id={`price-row-${product.id}`}
                >

                    <span className="current-price">
                        {product.price}
                    </span>


                    <span className="old-price">
                        {product.oldPrice}
                    </span>


                    <span className="discount">
                        {product.discount}
                    </span>

                </div>


                <div
                    className="offer-price"
                    id={`offer-price-${product.id}`}
                >

                    <span className="offer-icon">
                        %
                    </span>


                    <span>
                        {product.offer}
                    </span>

                </div>

            </div>

        </div>

    );

};

export default ProductCard;