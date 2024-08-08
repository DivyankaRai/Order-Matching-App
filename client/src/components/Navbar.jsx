import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const SimpleNavbar = () => {
    return (
        <Box bg="teal.400" color="white" px={4} mb="8">
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Text fontSize="xl" fontWeight="bold">Order Matching System</Text>
                <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
                    <Link as={RouterLink} to="/dashboard" px={4} py={2} color="white" _hover={{ textDecoration: 'none', bg: 'teal.600' }}>
                        Dashboard
                    </Link>
                    <Link as={RouterLink} to="/" px={4} py={2} color="white" _hover={{ textDecoration: 'none', bg: 'teal.600' }}>
                       Add Order
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default SimpleNavbar;
