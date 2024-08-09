import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Box, Heading } from '@chakra-ui/react';

const SellerOrderForm = ({ addOrder, fetchCompletedOrders }) => {
    const [formData, setFormData] = useState({
        sellerQty: '',
        sellerPrice: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newOrder = {
            buyerQty: null,
            buyerPrice: null,
            sellerQty: parseInt(formData.sellerQty, 10),
            sellerPrice: parseFloat(formData.sellerPrice)
        };

        await addOrder(newOrder);
        await fetchCompletedOrders();

        setFormData({ sellerQty: '', sellerPrice: '' });
    };

    return (
        <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="lg" mb={6}>Add Seller Order</Heading>
            <Box as="form" onSubmit={handleSubmit}>
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
                <Button type="submit" colorScheme="gray" width="100%">Submit</Button>
            </Box>
        </Box>
    );
};

export default SellerOrderForm;
