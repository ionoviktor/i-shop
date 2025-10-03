import { useEffect, useState } from "react";
import axios from "axios";


export type Product = {
    _id: string;
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
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
        axios.get('https://masterclass.kimitsu.it-incubator.io/api/products')
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
                                <img src={pr.image} alt="img" />
                                <h4>{pr.title}</h4>
                                <p className="price">${pr.price}</p>
                                <button>Show more</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};