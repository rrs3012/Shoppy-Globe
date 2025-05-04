import React from 'react';
import { useDispatch } from 'react-redux';
import {
  AddCartItem,
  RemoveCartItem,
  DeleteCartItem,
} from '../utlies/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ CartItems: item, index }) => {
  const dispatch = useDispatch();
  const totalItemPrice = item.price * item.quantity;

  return (
    <div className="bg-white border border-sky-200 rounded-2xl shadow-md p-4 mb-6 transition-all duration-300 hover:shadow-lg">
      {/* Index + Quantity */}
      <div className="text-sm text-sky-600 font-medium mb-2">
        #{index + 1} — Qty: {item.quantity}
      </div>

      {/* Content layout */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Product Image */}
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-32 h-32 object-cover rounded-xl border border-sky-100"
        />

        {/* Product Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold text-sky-800 mb-1">{item.title}</h2>
          <p className="text-sky-700 text-base">
            Unit Price: <span className="font-semibold">${item.price}</span>
          </p>
          <p className="text-cyan-700 mt-1">
            Total: <span className="font-semibold">${totalItemPrice}</span>
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-4 md:mt-0">
          {/* Delete */}
          <button
            onClick={() => dispatch(DeleteCartItem(item))}
            className="bg-red-100 text-red-600 hover:bg-red-500 hover:text-white px-3 py-2 rounded-xl transition-all"
            title="Remove"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>

          {/* Increase */}
          <button
            onClick={() => dispatch(AddCartItem(item))}
            className="bg-sky-100 text-sky-700 hover:bg-sky-500 hover:text-white px-3 py-2 rounded-xl transition-all"
            title="Increase"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>

          {/* Decrease */}
          <button
            onClick={() => dispatch(RemoveCartItem(item))}
            disabled={item.quantity <= 1}
            className={`px-3 py-2 rounded-xl transition-all ${
              item.quantity <= 1
                ? 'bg-teal-100 text-teal-400 cursor-not-allowed'
                : 'bg-teal-100 text-teal-700 hover:bg-teal-500 hover:text-white'
            }`}
            title="Decrease"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
