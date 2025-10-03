import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router';


export type Product = {
    _id: string;
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        name: string;
    };
    images: string;
    rating: {
        rate: number;
        count: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
};


export const BestSellers = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then((res) => {
                const products = res.data;
                setProducts(products)
            })
            .catch((err) => {
                console.log("Ошибка при загрузке продуктов", err)
            })
    }, []);

    return (
        <div className="bestSeller">
            <h2>Best Seller</h2>
            <div className="cards">
                {
                    products.map((pr) => {
                        return (
                            <div key={pr.id} className="card">
                                <img src={pr.images[0]} alt={pr.title} />
                                <h4>{pr.title}</h4>
                                <p className="price">${pr.price}</p>
                                <Link to={`/product/${pr.id}`}>Show more</Link>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};