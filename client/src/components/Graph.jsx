import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Heading, Box } from '@chakra-ui/react';

const Graph = ({ completedOrders }) => {
    const data = completedOrders.map((order) => ({
        time: new Date(order.timestamp).toLocaleString(),
        price: order.price,
        qty: order.qty,
    }));

    return (
        <Box p={8} >
            <Heading as="h2" size="lg" mb={6} mt="8">Visual Representation:</Heading>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="time" angle={-15} textAnchor="end"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} dot={{ stroke: '#8884d8', strokeWidth: 2 }} />
                    <Line type="monotone" dataKey="qty" stroke="#82ca9d" strokeWidth={2} dot={{ stroke: '#82ca9d', strokeWidth: 2 }} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default Graph;
