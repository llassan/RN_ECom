import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: 0,
  price: 0,
  totalPrice: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[productIndex].cartQuantity += 1;
    },
    incrementItem: (state, action) => {
      state.item += 1;
    },
    decrement: (state, action) => {
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[productIndex].cartQuantity -= 1;
    },
    decrementItem: (state) => {
      state.item -= 1;
    },
    productAdded: (state, action) => {
      state.totalProduct = [
        ...state.totalProduct,
        {
          count: action.payload.count,
          product: action.payload.product,
        },
      ];
      console.log(state.totalProduct);
    },
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        state.item += 1;
        const product = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(product);
      }
      console.log(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.item = 0;
    },
    applyOffer: (state, action) => {
      let price, index;
      switch (action.payload.text) {
        case "BESTDEAL":
          price =
            action.payload.cartItem.price - action.payload.cartItem.price * 0.4;
          console.log(action.payload.text, action.payload.cartItem);
          index = state.cartItems.findIndex(
            (item) => item.id === action.payload.cartItem.id
          );
          state.cartItems[index].price = price;
          break;
        case "GET20":
          price =
            action.payload.cartItem.price - action.payload.cartItem.price * 0.2;
          console.log(action.payload.text, action.payload.cartItem);
          index = state.cartItems.findIndex(
            (item) => item.id === action.payload.cartItem.id
          );
          state.cartItems[index].price = price;

          break;
        case "GET10":
          console.log(action.payload);
          price =
            action.payload.cartItem.price - action.payload.cartItem.price * 0.1;
          console.log(action.payload.text, action.payload.cartItem);
          index = state.cartItems.findIndex(
            (item) => item.id === action.payload.cartItem.id
          );
          state.cartItems[index].price = Math.ceil(price);

          break;
        default:
          break;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  incrementItem,
  decrement,
  decrementItem,
  productAdded,
  addToCart,
  clearCart,
  applyOffer,
} = cartSlice.actions;

export default cartSlice.reducer;
