import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const OrderContext = createContext();


export const OrderProvider = ({ children }) => {

    const navigate = useNavigate();

    const [pendingOrders, setPendingOrders] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.get('https://order-matching-app-backend.onrender.com/orders');
        setPendingOrders(response.data);
    };

    const fetchCompletedOrders = async () => {
        const response = await axios.get('https://order-matching-app-backend.onrender.com/completed-orders');
        setCompletedOrders(response.data);
    };

    const addOrder = async (order) => {
        try {
            const response = await axios.post('https://order-matching-app-backend.onrender.com/orders', order);
            const { completedOrders: newCompletedOrders } = response.data;

            fetchOrders();
            setCompletedOrders([...completedOrders, ...newCompletedOrders]);
            navigate('/dashboard'); 
        } catch (error) {
            console.error('Error adding order:', error);
        }
    };

    useEffect(() => {
        fetchOrders();
        fetchCompletedOrders();
    }, []);

    return (
        <OrderContext.Provider value={{ pendingOrders, completedOrders, addOrder, fetchCompletedOrders }}>
            {children}
        </OrderContext.Provider>
    );
};
