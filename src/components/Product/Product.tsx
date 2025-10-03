
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import type { Product as ProductType } from '../BestSellers/BestSellers';

import rating from '../../assets/img/rating.svg';
import cartWhite from '../../assets/img/cartWhite.svg';
import arrowBack from '../../assets/img/arrowBack.svg';

export const Product = () => {

    const [product, setProduct] = useState<ProductType | null>(null);

    const { productId } = useParams();

    useEffect(() => {
        axios
            .get(`https://api.escuelajs.co/api/v1/products/${productId}`)
            .then((res) => {
                const product = res.data;
                setProduct(product);
            });
    }, []);

    if (product === null) {
        return <h2>Продукт ещё грузится...</h2>
    }

    return (
        <div>
            <div className="arrowBack">
                <Link to={'/'}>
                    <img src={arrowBack} alt="arrowBack" />
                    Back to Best Seller
                </Link>
            </div>

            <div className="product">
                <img src={product.images[0]} alt={product.title} />
                <div className="info">
                    <p className="title">{product.title}</p>
                    <p className="price">${product.price}</p>
                    <div className="rating">
                        <p>Rating: {5}</p>
                        <img src={rating} alt="rating" />
                    </div>
                    <div className="category">
                        <span>Category:</span>
                        <p>{product.category.name}</p>
                    </div>
                    <p className="description">{product.description}</p>
                    <button>
                        <img src={cartWhite} alt="btn" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};