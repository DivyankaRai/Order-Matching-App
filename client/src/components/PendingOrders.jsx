import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Heading } from '@chakra-ui/react';

const PendingOrders = ({ pendingOrders }) => {
    return (
        <Box p={4}>
            <Heading as="h2" size="lg" mb={4}>Pending Orders</Heading>
            <Table variant="striped" colorScheme="red">
                <Thead>
                    <Tr>
                        <Th>Buyer Qty</Th>
                        <Th>Buyer Price</Th>
                        <Th>Seller Price</Th>
                        <Th>Seller Qty</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {pendingOrders.map((order, index) => (
                        <Tr key={index}>
                            <Td>{order.buyerQty}</Td>
                            <Td>{order.buyerPrice}</Td>
                            <Td>{order.sellerPrice}</Td>
                            <Td>{order.sellerQty}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default PendingOrders;
