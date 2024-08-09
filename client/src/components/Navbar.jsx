import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const SimpleNavbar = () => {
    return (
        <Box bg="blue.200" color="white" px={4} mb="8" height="70">
            <Flex h={18} alignItems="center" justifyContent="space-between">
                <Text fontSize="2xl" fontWeight="bold" mt="10">Order Matching System</Text>
            </Flex>
        </Box>
    );
};

export default SimpleNavbar;
