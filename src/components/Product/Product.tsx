
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import type { Product as ProductType } from '../BestSellers/BestSellers';

import rating from '../../assets/img/rating.svg';
import cartWhite from '../../assets/img/cartWhite.svg';
import arrowBack from '../../assets/img/arrowBack.svg';

export const Product = () => {

    const comments = [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39iGG5an70vyRJijnMXRHtohS_9foYxrOAg&s',
            name: 'Jane Cooper',
            rating: 4,
            date: '01/01/2021',
            title: 'Amazing product',
            comment: 'Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde.   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. ',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39iGG5an70vyRJijnMXRHtohS_9foYxrOAg&s',
            name: 'Jane Cooper',
            rating: 4,
            date: '01/01/2021',
            title: 'Amazing product',
            comment: 'Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde.   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. ',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39iGG5an70vyRJijnMXRHtohS_9foYxrOAg&s',
            name: 'Jane Cooper',
            rating: 4,
            date: '01/01/2021',
            title: 'Amazing product',
            comment: 'Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde.   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. ',
        },
    ];

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

            <div className="reviewBox">
                <div className="review">
                    <h3>Reviews ({comments.length})</h3>
                    <textarea name="text" id="0" placeholder='Provide your text...'></textarea>
                    <button>Send review</button>
                </div>
                {comments.map((item) => {
                    return (
                        <div className="reviewField">
                            <div className="info">
                                <div className="user">
                                    <img src={item.img} alt="avatar" />
                                    <div className="infoBox">
                                        <p className="author">{item.name}</p>
                                        <span className="rating">{item.rating} Rating</span>
                                    </div>
                                </div>
                                <div className="date">{item.date}</div>
                            </div>
                            <div className="content">
                                <p className="title">{item.title}</p>
                                <p>{item.comment}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};