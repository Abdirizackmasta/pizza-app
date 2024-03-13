// Test ID: IIDSAT


import {useLoaderData} from 'react-router-dom';
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import CartItem from '../cart/CartItem';
import OrderItem from './OrderItem';

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className='py-6 px-4 space-y-8'>
      <div className='flex items-center justify-between flex-wrap gap-2'>
        <h2 className='text-xl font-semibold'>Order # {id}Status</h2>

        <div className='space-x-2'>
          {priority && <span className='bg-red-500 px-3 py-1 text-red-50 tracking-wide rounded-full text-sm uppercase font-semibold'>Priority</span>}
          <span className='bg-green-500 px-3 py-1 text-green-50 tracking-wide rounded-full text-sm uppercase font-semibold'>{status} order</span>
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5'>
        <p className='font-medium '>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className='text-xs text-slate-500'>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className='divide-stone-200 border-b border-t divide-y'>
        {cart.map((item) => <OrderItem item={item} key={item.id}/>)}
      </ul>


      <div className='space-x-2 bg-stone-200 py-5 px-6'>
        <p className='text-sm font-medium text-stone-600'>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className='text-sm font-medium text-stone-600'>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className='font-bold '>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}
export async function loader({params}){
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
