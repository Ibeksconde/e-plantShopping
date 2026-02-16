import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector to access Redux state
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();

    // Task 4.1: Access the Redux store to retrieve and display the total quantity of items
    const cartItems = useSelector(state => state.cart.items);
    
    // Calculate total quantity by summing the 'quantity' property of all items in the cart
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        // ... (your plant categories and data)
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant)); // Dispatch plant details to Redux
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true, // Track added product by name as key
        }));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    // Styling Objects
    const styleObj = { backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px' };
    const styleObjUl = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '1100px' };
    const styleA = { color: 'white', fontSize: '30px', textDecoration: 'none' };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div><a href="#" onClick={(e) => setShowCart(false)} style={styleA}>Plants</a></div>
                    <div>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                            <h1 className='cart'>
                                <div style={{ position: 'relative', display: 'inline-block' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                                        <rect width="156" height="156" fill="none"></rect>
                                        <circle cx="80" cy="216" r="12"></circle>
                                        <circle cx="184" cy="216" r="12"></circle>
                                        <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                    </svg>
                                    {/* Displaying the totalQuantity variable derived from Redux */}
                                    <span className="cart_quantity_count" style={{
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        backgroundColor: 'black',
                                        borderRadius: '50%',
                                        padding: '2px 8px',
                                        fontSize: '16px'
                                    }}>
                                        {totalQuantity}
                                    </span>
                                </div>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-container">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1 className="category-title">{category.category}</h1>
                            <div className="product-grid">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <div className="product-cost">{plant.cost}</div>
                                        <button 
                                            className={`product-button ${addedToCart[plant.name]
