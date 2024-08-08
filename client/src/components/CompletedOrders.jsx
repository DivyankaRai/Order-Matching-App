import React, { useEffect, useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import axios from 'axios';

const CompletedOrders = () => {
    const [completedOrders, setCompletedOrders] = useState([]);

    useEffect(() => {
        const fetchCompletedOrders = async () => {
            try {
                const response = await axios.get('https://order-matching-app-backend.onrender.com/completed-orders');
                setCompletedOrders(response.data);
            } catch (error) {
                console.error('Error fetching completed orders:', error);
            }
        };

        fetchCompletedOrders();
    }, []);

    return (
        <Box p={4}>
            <Heading as="h2" size="lg" mb={4}>Completed Orders</Heading>
            <Table variant="striped" colorScheme="green">
                <Thead>
                    <Tr>
                        <Th>Price</Th>
                        <Th>Quantity</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {completedOrders.map((order, index) => (
                        <Tr key={index}>
                            <Td>{order.price}</Td>
                            <Td>{order.qty}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default CompletedOrders;
