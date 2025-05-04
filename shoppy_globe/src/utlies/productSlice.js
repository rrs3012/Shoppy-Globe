// Importing necessary modules
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Initial state with full item list and cart item list
const initialState = {
  fullItems: [],
  items: [],
};

// Creating the slice
const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    // Sets the complete list of products
    SetFullData: (state, action) => {
      state.fullItems = action.payload;
    },

    // Adds an item to the cart or updates quantity if already exists
    AddCartItem: (state, action) => {
      const itemId = state.items.find((item) => item.id === action.payload.id);
      const data = { ...action.payload, quantity: 1 };

      if (!itemId) {
        // If item doesn't exist in cart, add it
        state.items.push(data);
        toast.success("Item added to Cart");
      } else if (itemId.minimumOrderQuantity > 0) {
        // If in stock, increase quantity
        itemId.quantity++;
        itemId.minimumOrderQuantity--;
        toast("product added to cart");
      } else if (itemId.minimumOrderQuantity === 0) {
        // If out of stock
        toast("Out of Stock");
      }
    },

    // Removes one quantity of an item or deletes it if only one left
    RemoveCartItem: (state, action) => {
      const itemId = state.items.find((item) => item.id === action.payload.id);

      if (itemId.quantity <= 1) {
        // Remove item if quantity is 1
        state.items = state.items.filter((item) => item.id != itemId.id);
      } else {
        // Decrease quantity otherwise
        itemId.quantity--;
        itemId.minimumOrderQuantity++;
        toast("product quantity reduced");
      }
    },

    // Deletes the item entirely from the cart
    DeleteCartItem: (state, action) => {
      const itemId = state.items.find((item) => item.id === action.payload.id);
      state.items = state.items.filter((item) => item.id != itemId.id);
      toast.success("Product removed from cart");
    },

    // Clears the entire cart
    clearCartItem: (state, action) => {
      state.items.length = 0;
    },
  },
});

// Exporting action creators
export const {
  SetFullData,
  AddCartItem,
  RemoveCartItem,
  DeleteCartItem,
  clearCartItem,
} = productSlice.actions;

// Exporting reducer
export default productSlice.reducer;
