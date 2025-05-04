import React from 'react';
import { useDispatch } from 'react-redux';
import { AddCartItem, RemoveCartItem, DeleteCartItem } from '../utlies/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

// Component to render a single cart item row
const CartItem = ({ CartItems: item, index }) => {
  const dispatch = useDispatch();

  // Calculate total price for this item
  const totalItemPrice = item.price * item.quantity;

  return (
    <tr className="text-center border-b hover:bg-gray-50 transition duration-200">
      {/* Item index and quantity */}
      <td className="py-4 font-semibold text-lg text-gray-700">
        {index + 1}. ({item.quantity} Qty)
      </td>

      {/* Item image */}
      <td className="py-4">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-28 h-28 object-cover rounded-lg mx-auto"
        />
      </td>

      {/* Item title */}
      <td className="py-4 text-indigo-700 font-bold text-lg">
        {item.title}
      </td>

      {/* Item price and total */}
      <td className="py-4 text-yellow-600 font-semibold text-lg">
        ${item.price} <br />
        <span className="text-sm text-gray-500">Total: ${totalItemPrice}</span>
      </td>

      {/* Action buttons: Delete, Increase, Decrease quantity */}
      <td className="py-4">
        <div className="flex justify-center gap-4">
          {/* Delete item button */}
          <button
            onClick={() => dispatch(DeleteCartItem(item))}
            className="text-red-600 border border-red-400 px-3 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200"
            title="Remove item"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>

          {/* Increase quantity button */}
          <button
            onClick={() => dispatch(AddCartItem(item))}
            className="text-sky-600 border border-sky-400 px-3 py-2 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-200"
            title="Increase quantity"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>

          {/* Decrease quantity button (disabled when quantity is 1) */}
          <button
            onClick={() => dispatch(RemoveCartItem(item))}
            disabled={item.quantity <= 1}
            className={`${
              item.quantity <= 1
                ? 'cursor-not-allowed opacity-50 border border-amber-300 text-amber-400'
                : 'text-amber-600 border border-amber-400 hover:bg-amber-500 hover:text-white'
            } px-3 py-2 rounded-lg transition-all duration-200`}
            title="Decrease quantity"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
