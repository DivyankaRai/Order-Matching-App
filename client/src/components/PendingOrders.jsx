import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Heading } from '@chakra-ui/react';

const PendingOrders = ({ pendingBuyerOrders, pendingSellerOrders }) => {
    return (
        <Box p={4}>
           
            <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} gap={4}>
                
                {/* Pending Buyer Orders Table */}
                <Box flex="1" borderWidth={1} borderRadius="md" p={4}>
                    <Heading as="h2" size="lg" mb={4}>Pending Buyer Orders</Heading>
                    <Table variant="striped" colorScheme="red">
                        <Thead>
                            <Tr>
                                <Th>Buyer Qty</Th>
                                <Th>Buyer Price</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {pendingBuyerOrders?.map((order, index) => (
                                <Tr key={index}>
                                    <Td>{order.buyerQty}</Td>
                                    <Td>{order.buyerPrice}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
                
                {/* Pending Seller Orders Table */}
                <Box flex="1" borderWidth={1} borderRadius="md" p={4}>
                    <Heading as="h2" size="lg" mb={4}>Pending Seller Orders</Heading>
                    <Table variant="striped" colorScheme="green">
                        <Thead>
                            <Tr>
                                <Th>Seller Qty</Th>
                                <Th>Seller Price</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {pendingSellerOrders?.map((order, index) => (
                                <Tr key={index}>
                                    <Td>{order.sellerQty}</Td>
                                    <Td>{order.sellerPrice}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </Box>
    );
};

export default PendingOrders;
