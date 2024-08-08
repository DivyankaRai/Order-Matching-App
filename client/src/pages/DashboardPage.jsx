import React, { useContext,useState, useEffect} from 'react';
import { Box} from '@chakra-ui/react';
import PendingOrders from '../components/PendingOrders';
import CompletedOrders from '../components/CompletedOrders';
import PriceChart from '../components/Graph';
import { OrderContext } from '../context/OrderContext';
import { Loader } from '../components/Loader';

const DashboardPage = () => {

    const [spin, setspin] = useState(true)
    const { pendingOrders, completedOrders } = useContext(OrderContext);

    useEffect(() => {
        setTimeout(() => {
          setspin(false)
        }, 1300);
      },[])

    return (
        <>
            {
                spin ? <Loader/> : 
                <Box p={4}>
                    <PendingOrders pendingOrders={pendingOrders} />
                    <CompletedOrders completedOrders={completedOrders} />
                    <PriceChart completedOrders={completedOrders} />
                </Box>
            }
        </>
    );
};

export default DashboardPage;
