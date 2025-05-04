import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartItem } from '../utlies/productSlice';
import { toast } from 'react-toastify';

const Checkout = () => {
  const [TotalPrice, SetTotalPrice] = useState(0);
  const [DeliveryCountry, SetDeliveryCountry] = useState("India");
  const [Email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [CardDetails, setCardDetails] = useState("Card");

  const cartitems = useSelector((state) => state.Products.items);
  const dispatch = useDispatch();

  const prices = cartitems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    SetTotalPrice(prices);
  }, [prices]);

  function handleSubmitButton(e) {
    e.preventDefault();
    const zipStr = zipCode.toString();

    if (zipStr.length > 6) {
      toast.error("ZIP code cannot be more than 6 digits");
      return;
    }

    if (!Email || !address || !City || !state || zipStr.length === 0 || !DeliveryCountry || !CardDetails) {
      toast.error("Please fill out all required fields correctly.");
      return;
    }

    toast.success("🎉 Order placed successfully!");
    setTimeout(() => {
      dispatch(clearCartItem());
      setEmail("");
      setAddress("");
      setCity("");
      setState("");
      setZipCode("");
      SetDeliveryCountry("India");
      setCardDetails("Card");
    }, 300);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmitButton}
        className="w-full max-w-4xl bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-sky-200 space-y-10"
      >
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Final <span className="text-sky-500">Checkout</span>
          </h2>
          <p className="text-lg mt-2 text-gray-600">
            Total Payable: <span className="text-teal-600 font-semibold">${Math.floor(TotalPrice)}</span>
          </p>
        </div>

        {/* Inputs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <InputField label="Email" type="email" value={Email} onChange={setEmail} placeholder="you@example.com" />
            <SelectField
              label="Delivery Country"
              value={DeliveryCountry}
              onChange={SetDeliveryCountry}
              options={["India", "China", "Russia", "USA", "Japan", "Pakistan", "Nepal"]}
            />
            <SelectField
              label="Payment Method"
              value={CardDetails}
              onChange={setCardDetails}
              options={["Card", "NetBanking", "BitCoin", "BankTransfer"]}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <InputField label="Street Address" type="text" value={address} onChange={setAddress} placeholder="123 Main Street" />
            <div className="flex space-x-4">
              <InputField label="City" type="text" value={City} onChange={setCity} />
              <InputField label="State" type="text" value={state} onChange={setState} />
            </div>
            <InputField label="ZIP Code" type="number" value={zipCode} onChange={setZipCode} />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 mt-6 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

// Reusable Input Component
const InputField = ({ label, type, value, onChange, placeholder = "" }) => (
  <div className="w-full">
    <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      required
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
    />
  </div>
);

// Reusable Select Component
const SelectField = ({ label, value, onChange, options }) => (
  <div className="w-full">
    <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default Checkout;
