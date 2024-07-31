import React from 'react';
import ProductCard from '../components/ProductCard';
import { NavBar } from '../Navbar/Navbar';


const products = [
    {
        image: 'link_to_image_1',
        title: 'Aliquam erat volutpat',
        originalPrice: 1000,
        discountedPrice: 999,
        rating: 3,
        discount: '999.00'
    },
    {
        image: 'link_to_image_2',
        title: 'Suspendisse gravida lacus varius',
        originalPrice: 1000,
        discountedPrice: 999,
        rating: 4,
        discount: '999.00'
    },
    {
        image: 'link_to_image_3',
        title: 'Suspendisse vehicula at dui',
        originalPrice: 56,
        discountedPrice: 56,
        rating: 5
    },
    {
        image: 'link_to_image_4',
        title: 'Fusce nec diam et dolor',
        originalPrice: 45,
        discountedPrice: 40,
        rating: 0,
        discount: '5.00'
    },
    {
        image: 'link_to_image_5',
        title: 'Donec ullamcorper turpis',
        originalPrice: 45,
        discountedPrice: 42,
        rating: 0,
        discount: '3.00'
    },
    {
        image: 'link_to_image_6',
        title: 'Aenean non pellentesque mauris',
        originalPrice: 1000,
        discountedPrice: 999,
        rating: 0,
        discount: '1000.00'
    },
    {
        image: 'link_to_image_7',
        title: 'Pellentesque dignissim sapien...',
        originalPrice: 0,
        discountedPrice: 78,
        rating: 0
    },
    {
        image: 'link_to_image_8',
        title: 'Curabitur ultricies ante ultricies...',
        originalPrice: 0,
        discountedPrice: 45,
        rating: 0,
        discount: '10.00'
    },
    {
        image: 'link_to_image_9',
        title: 'Morbi varius ligula eget ante',
        originalPrice: 55,
        discountedPrice: 45,
        rating: 0,
        discount: '10.00'
    },
    {
        image: 'link_to_image_10',
        title: 'Mauris elit magna, aliquet',
        originalPrice: 0,
        discountedPrice: 50,
        rating: 0
    }
];



export const Home = () => {
    return (
        <>
            <NavBar />
            <div className="home">
                <div className="products-grid">

                    <ProductCard />
                </div>
            </div>
        </>
    )

}