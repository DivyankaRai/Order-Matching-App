import React, { useContext, useState, useEffect } from 'react';
import OrderForm from '../components/OrderForm';
import { Box, Button } from '@chakra-ui/react';
import { OrderContext } from '../context/OrderContext';
import { Loader } from '../components/Loader';

const OrderFormPage = () => {

    const [spin, setspin] = useState(true)
    const { addOrder, pendingOrders, fetchCompletedOrders } = useContext(OrderContext);

    useEffect(() => {
        setTimeout(() => {
          setspin(false)
        }, 1300);
      },[])
    return (
        <>
        {
            spin ? <Loader/> : 
            <Box p={4}>
                <OrderForm addOrder={addOrder} pendingOrders={pendingOrders} fetchCompletedOrders={fetchCompletedOrders} />
            </Box>
        }
        </>
    );
};

export default OrderFormPage;
