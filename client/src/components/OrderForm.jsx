import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import BuyerOrderForm from './BuyerOrderForm';
import SellerOrderForm from './SellerOrderForm';

const OrderForms = ({ addOrder, fetchCompletedOrders }) => {
    return (
        <Flex direction="row" justify="space-between" p={4}>
            <Box flex="1" mr={4}>
                <BuyerOrderForm addOrder={addOrder} fetchCompletedOrders={fetchCompletedOrders} />
            </Box>
            <Box flex="1">
                <SellerOrderForm addOrder={addOrder} fetchCompletedOrders={fetchCompletedOrders} />
            </Box>
        </Flex>
    );
};

export default OrderForms;
