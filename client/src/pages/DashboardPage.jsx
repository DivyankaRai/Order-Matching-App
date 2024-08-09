import React, { useContext, useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import PendingOrders from '../components/PendingOrders'; // Ensure this handles both buyer and seller orders
import CompletedOrders from '../components/CompletedOrders';
import PriceChart from '../components/Graph';
import { OrderContext } from '../context/OrderContext';
import { Loader } from '../components/Loader';
import OrderForms from '../components/OrderForm';

const DashboardPage = () => {
    const [loading, setLoading] = useState(true);
    const { pendingBuyerOrders, pendingSellerOrders, completedOrders,addOrder, pendingOrders, fetchCompletedOrders  } = useContext(OrderContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Box p={4}>
                    <OrderForms addOrder={addOrder} pendingOrders={pendingOrders} fetchCompletedOrders={fetchCompletedOrders} />
                    <PendingOrders 
                        pendingBuyerOrders={pendingBuyerOrders} 
                        pendingSellerOrders={pendingSellerOrders}
                    />
                    <CompletedOrders completedOrders={completedOrders} />
                    <PriceChart completedOrders={completedOrders} />
                </Box>
            )}
        </>
    );
};

export default DashboardPage;
