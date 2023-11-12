import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ORDERS_FOR_PLANNER, UPDATE_ORDER_DATE } from '../../graphql/OrdersQuery';
import type { OrderForPlanner } from '../../types/types';
import { EventDropArg } from '@fullcalendar/core/index.js';
import ErrorPage from '../Error/Error';
import Loader from '../Loading/Loading';


const Planner: React.FC = () => {
  // fetch order events from graphql
   const { loading, error, data} = useQuery(GET_ORDERS_FOR_PLANNER);
   const [updateOrderDate, {loading: mutLoad, error: mutError}] = useMutation(UPDATE_ORDER_DATE, {
     refetchQueries: [{ query: GET_ORDERS_FOR_PLANNER }]
   });

    if (loading || mutLoad) return <Loader/>
    if (error || mutError) return <ErrorPage error={"Nepodařilo se získat data!"}/>;

    const events = data.getAllOrders.map((order: OrderForPlanner) => {
      return {
        id: order.id,
        title: order.name,
        start: order.machining.date,
        end: order.machining.until,
        backgroundColor: new Date(order.machining.until) > new Date(order.delivery) ? 'orange' : 'blue'
      }
    })

    const handleEventDrop = (info: EventDropArg) => {
      const {start, end, id} = info.event
      // Mutate the order date
      updateOrderDate({variables: 
        {id: id, date: start?.toISOString().substring(0,10), until: end?.toISOString().substring(0,10)}})
    }

    console.log(events)

  return (
    <div className="flex flex-col md:flex-row max-w-4xl pt-2 h-full w-screen mx-auto border-x-2 justify-center">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        editable={true}
        initialView="dayGridMonth"
        events={events}
        eventDrop={handleEventDrop}
        timeZone='UTC'
      />
    </div>
  );
};

export default Planner;