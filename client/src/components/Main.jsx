import React, { useState, useEffect } from 'react';
import OrderForm from './OrderForm';
import PendingOrders from './PendingOrders';
import CompletedOrders from './CompletedOrders';
import PriceChart from './Graph';
import axios from 'axios';
import { Box, Heading } from '@chakra-ui/react';

const Main = () => {
    const [pendingOrders, setPendingOrders] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);

    // Fetch data
    const fetchOrders = async () => {
        try {
            const response = await axios.get('https://order-matching-app-backend.onrender.com/orders');
            setPendingOrders(response.data);
        } catch (error) {
            console.error('Error fetching pending orders:', error);
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

    // adding a new order
    const addOrder = async (order) => {
        try {
            const res = await axios.post('https://order-matching-app-backend.onrender.com/orders', order);
            const newOrders = res.data; 

            setPendingOrders(newOrders.pendingOrders);
            setCompletedOrders(newOrders.completedOrders);
        } catch (error) {
            console.error('Error', error);
        }
    };

    useEffect(() => {
        fetchOrders();
        fetchCompletedOrders();
    }, []);

    return (
        <Box p={4}>
            <Heading mb={4}>Order Matching System</Heading>
            <OrderForm addOrder={addOrder} fetchCompletedOrders={fetchCompletedOrders} />
            <PendingOrders pendingOrders={pendingOrders} />
            <CompletedOrders completedOrders={completedOrders} />
            <PriceChart completedOrders={completedOrders} />
        </Box>
    );
}

export default Main;
