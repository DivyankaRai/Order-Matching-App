import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Box, Heading } from '@chakra-ui/react';

const OrderForm = ({ addOrder, fetchCompletedOrders }) => {
    const [formData, setFormData] = useState({
        buyerQty: '',
        buyerPrice: '',
        sellerPrice: '',
        sellerQty: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newOrder = {
            buyerQty: parseInt(formData.buyerQty, 10),
            buyerPrice: parseFloat(formData.buyerPrice),
            sellerPrice: parseFloat(formData.sellerPrice),
            sellerQty: parseInt(formData.sellerQty, 10)
        };

        await addOrder(newOrder);
        await fetchCompletedOrders();

        setFormData({ buyerQty: '', buyerPrice: '', sellerPrice: '', sellerQty: '' });
    };

    return (
        <>
        <Heading as="h2" size="lg" mb={4} textAlign="center">Add Orders</Heading>
        <Box as="form" onSubmit={handleSubmit} p={4} borderWidth={1} borderRadius="lg" boxShadow="md" mx="auto" maxWidth="400px">
            <FormControl id="buyerQty" isRequired mb={4}>
                <FormLabel>Buyer Quantity</FormLabel>
                <Input
                    name="buyerQty"
                    type="number"
                    value={formData.buyerQty}
                    onChange={handleChange}
                    placeholder="Buyer Quantity"
                />
            </FormControl>
            <FormControl id="buyerPrice" isRequired mb={4}>
                <FormLabel>Buyer Price</FormLabel>
                <Input
                    name="buyerPrice"
                    type="number"
                    step="0.01"
                    value={formData.buyerPrice}
                    onChange={handleChange}
                    placeholder="Buyer Price"
                />
            </FormControl>
            <FormControl id="sellerPrice" isRequired mb={4}>
                <FormLabel>Seller Price</FormLabel>
                <Input
                    name="sellerPrice"
                    type="number"
                    step="0.01"
                    value={formData.sellerPrice}
                    onChange={handleChange}
                    placeholder="Seller Price"
                />
            </FormControl>
            <FormControl id="sellerQty" isRequired mb={4}>
                <FormLabel>Seller Quantity</FormLabel>
                <Input
                    name="sellerQty"
                    type="number"
                    value={formData.sellerQty}
                    onChange={handleChange}
                    placeholder="Seller Quantity"
                />
            </FormControl>
            <Button type="submit" colorScheme="teal" mt={4} size="md" width="90%" ml='4'>Add Order</Button>
        </Box>
        </>
    );
};

export default OrderForm;
