import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Box, Heading } from '@chakra-ui/react';

const BuyerOrderForm = ({ addOrder, fetchCompletedOrders }) => {
    const [formData, setFormData] = useState({
        buyerQty: '',
        buyerPrice: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newOrder = {
            buyerQty: parseInt(formData.buyerQty, 10),
            buyerPrice: parseFloat(formData.buyerPrice),
            sellerQty: null,
            sellerPrice: null
        };

        await addOrder(newOrder);
        await fetchCompletedOrders();

        setFormData({ buyerQty: '', buyerPrice: '' });
    };

    return (
        <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="lg" mb={6}>Add Buyer Order</Heading>
            <Box as="form" onSubmit={handleSubmit}>
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
                <Button type="submit" colorScheme="gray" width="100%">Submit</Button>
            </Box>
        </Box>
    );
};

export default BuyerOrderForm;
