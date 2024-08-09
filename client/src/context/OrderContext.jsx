import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {

    const [pendingBuyerOrders, setPendingBuyerOrders] = useState([]);
    const [pendingSellerOrders, setPendingSellerOrders] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);

    const fetchPendingBuyerOrders = async () => {
        try {
            const response = await axios.get('https://order-matching-app-backend.onrender.com/pending-buyer-orders');
            console.log(response)
            setPendingBuyerOrders(response.data);
        } catch (error) {
            console.error('Error fetching pending buyer orders:', error);
        }
    };

    const fetchPendingSellerOrders = async () => {
        try {
            const response = await axios.get('https://order-matching-app-backend.onrender.com/pending-seller-orders');
            console.log(response)
            setPendingSellerOrders(response.data);
        } catch (error) {
            console.error('Error fetching pending seller orders:', error);
        }
    };

    const fetchCompletedOrders = async () => {
        try {
            const response = await axios.get('https://order-matching-app-backend.onrender.com/completed-orders');
            setCompletedOrders(response.data);
        } catch (error) {
            console.error('Error fetching completed orders:', error);
        }
    };

    const addOrder = async (order) => {
        try {
            const endpoint = order.buyerPrice ? 'buyer' : 'seller';
            const response = await axios.post(`https://order-matching-app-backend.onrender.com/${endpoint}-order`, order);
            const { completedOrders: newCompletedOrders } = response.data;

            fetchPendingBuyerOrders();
            fetchPendingSellerOrders();
            setCompletedOrders([...completedOrders, ...newCompletedOrders]);
        } catch (error) {
            console.error('Error adding order:', error);
        }
    };

    useEffect(() => {
        fetchPendingBuyerOrders();
        fetchPendingSellerOrders();
        fetchCompletedOrders();
    }, []);

    return (
        <OrderContext.Provider value={{ 
            pendingBuyerOrders, 
            pendingSellerOrders, 
            completedOrders, 
            addOrder, 
            fetchCompletedOrders 
        }}>
            {children}
        </OrderContext.Provider>
    );
};
