import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { useQuery } from '@apollo/client';
import { GET_ORDERS_FOR_PLANNER } from '../../graphql/OrdersQuery';
import type { OrderForPlanner } from '../../types/types';


const Planner: React.FC = () => {
  // fetch order events from graphql
   const { loading, error, data } = useQuery(GET_ORDERS_FOR_PLANNER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const events = data.getAllOrders.map((order: OrderForPlanner) => {
      return {
        title: order.name,
        start: order.machining.date,
        end: order.machining.until
      }
    })
    console.log(events)

  return (
    <div className="flex flex-col md:flex-row max-w-4xl pt-2 h-full w-screen mx-auto border-x-2 justify-center">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        editable={true}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
};

export default Planner;