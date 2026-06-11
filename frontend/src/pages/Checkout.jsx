import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import MainLayout from '../layouts/MainLayout';
import { MapPin, CreditCard, ShieldCheck, Landmark, Wallet, AlertCircle } from 'lucide-react';
import axios from 'axios';

const Checkout = () => {
  // 🔥 FIX: clearCart ke bajay setCartItems pull kiya context se
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // 📝 Shipping Form States
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });
  
  const [paymentMethod, setPaymentMethod] = useState('Cash On Delivery');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); 

  // Math Summary calculations
  const subtotal = cartItems ? cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0;
  const shippingCharges = subtotal > 500 ? 0 : 40; 
  const totalAmount = subtotal + shippingCharges;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 Real Full-Stack Order Placement Function
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setError('');
    
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    
    if (!userInfo || !userInfo.token) {
      setError('Authentication Required! Please login first to place your order.');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    try {
      setLoading(true);

      // Backend Validation Match Formatter
      const formattedOrderItems = cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        image: item.image,
        price: item.price,
        product: item._id, 
      }));

      const orderPayload = {
        orderItems: formattedOrderItems, 
        shippingAddress: {
          fullName: formData.fullName,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
          country: 'India' 
        },
        itemsPrice: subtotal,
        shippingPrice: shippingCharges,
        totalPrice: totalAmount,
        paymentMethod: paymentMethod, 
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      // 🔌 API Node hit trigger
      const { data } = await axios.post('http://localhost:5000/api/orders', orderPayload, config);
      
      console.log("Database Response Data Packet:", data);

      // 🎉 FIX SUCCESS CYCLE: Cart ko bina crash kiye empty kiya aur localStorage saaf kiya
      if (setCartItems) {
        setCartItems([]);
      }
      localStorage.removeItem('crunch_cart'); // Apne context ki cart localstorage key se match kar lena
      
      setLoading(false);
      navigate('/order-success'); 

    } catch (err) {
      console.error("Transmission failed context:", err);
      setError(err.response && err.response.data.message ? err.response.data.message : err.message);
      setLoading(false);
    }
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <MainLayout>
        <div className="text-center py-20 font-black uppercase text-gray-400 tracking-wider text-xs">
          No items found in buffer registry to checkout.
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-white w-full py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight uppercase border-b pb-4">
            Secure Checkout
          </h1>

          {/* Error Alert Display Block */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-bold uppercase tracking-wide flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> {error}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* 📬 LEFT COLUMN */}
            <form onSubmit={handlePlaceOrder} className="lg:col-span-7 space-y-8">
              
              <div className="space-y-6">
                <h3 className="font-black text-sm uppercase tracking-wider text-gray-800 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" /> Shipping Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-gray-400">Full Name</label>
                    <input required type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Shruti Sharma" className="w-full bg-gray-50/60 border border-gray-200 rounded-xl p-3 text-xs font-semibold text-gray-700 focus:outline-none focus:border-amber-500 transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-gray-400">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="98765XXXXX" className="w-full bg-gray-50/60 border border-gray-200 rounded-xl p-3 text-xs font-semibold text-gray-700 focus:outline-none focus:border-amber-500 transition-all" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-gray-400">Doorstep Address</label>
                  <textarea required rows="2" name="address" value={formData.address} onChange={handleInputChange} placeholder="Flat / House No. / Street / Apartment..." className="w-full bg-gray-50/60 border border-gray-200 rounded-xl p-3 text-xs font-semibold text-gray-700 focus:outline-none focus:border-amber-500 transition-all resize-none" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-gray-400">City</label>
                    <input required type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="New Delhi" className="w-full bg-gray-50/60 border border-gray-200 rounded-xl p-3 text-xs font-semibold text-gray-700 focus:outline-none focus:border-amber-500 transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-gray-400">Pincode</label>
                    <input required type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} placeholder="110001" className="w-full bg-gray-50/60 border border-gray-200 rounded-xl p-3 text-xs font-semibold text-gray-700 focus:outline-none focus:border-amber-500 transition-all" />
                  </div>
                </div>
              </div>

              {/* Payment Selector Row */}
              <div className="space-y-4">
                <h3 className="font-black text-sm uppercase tracking-wider text-gray-800 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-amber-500" /> Select Payment Method
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div onClick={() => setPaymentMethod('Cash On Delivery')} className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col gap-2 ${paymentMethod === 'Cash On Delivery' ? 'bg-[#FFFBF0] border-amber-500' : 'bg-white border-gray-200'}`}>
                    <Wallet className={`w-5 h-5 ${paymentMethod === 'Cash On Delivery' ? 'text-amber-500' : 'text-gray-400'}`} />
                    <div><h4 className="text-xs font-black text-gray-900 uppercase">COD</h4><p className="text-[9px] text-gray-400 font-bold uppercase">Pay at door</p></div>
                  </div>

                  <div onClick={() => setPaymentMethod('UPI / QR Scan')} className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col gap-2 ${paymentMethod === 'UPI / QR Scan' ? 'bg-[#FFFBF0] border-amber-500' : 'bg-white border-gray-200'}`}>
                    <Landmark className={`w-5 h-5 ${paymentMethod === 'UPI / QR Scan' ? 'text-amber-500' : 'text-gray-400'}`} />
                    <div><h4 className="text-xs font-black text-gray-900 uppercase">UPI / GPay</h4><p className="text-[9px] text-gray-400 font-bold uppercase">Mock QR Code</p></div>
                  </div>

                  <div onClick={() => setPaymentMethod('Credit / Debit Card')} className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col gap-2 ${paymentMethod === 'Credit / Debit Card' ? 'bg-[#FFFBF0] border-amber-500' : 'bg-white border-gray-200'}`}>
                    <CreditCard className={`w-5 h-5 ${paymentMethod === 'Credit / Debit Card' ? 'text-amber-500' : 'text-gray-400'}`} />
                    <div><h4 className="text-xs font-black text-gray-900 uppercase">Cards</h4><p className="text-[9px] text-gray-400 font-bold uppercase">Visa, MasterCard</p></div>
                  </div>
                </div>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-gray-900 hover:bg-amber-500 disabled:bg-gray-400 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl transition shadow-lg flex items-center justify-center">
                {loading ? 'Submitting Order Stream to Database...' : `Place Full-Stack Order via ${paymentMethod}`}
              </button>
            </form>

            {/* 📦 RIGHT COLUMN */}
            <div className="lg:col-span-5 bg-[#FFFBF0] border border-[#F3EFE4] p-6 rounded-3xl space-y-4 shadow-sm h-fit">
              <h3 className="font-black text-xs uppercase tracking-widest text-gray-900">Items Manifest</h3>
              <div className="space-y-3 max-h-[180px] overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex items-center justify-between text-xs font-semibold text-gray-600 bg-white/60 p-2.5 rounded-xl border border-gray-100/50">
                    <span className="truncate max-w-[200px] uppercase font-black text-gray-800 text-[11px]">{item.name} <span className="text-amber-500 font-bold">x{item.quantity}</span></span>
                    <span className="font-black text-gray-900">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <hr className="border-gray-200/60" />
              <div className="space-y-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <div className="flex justify-between"><span>Items Price</span><span className="text-gray-800 font-black">₹{subtotal}</span></div>
                <div className="flex justify-between"><span>Shipping Fee</span><span className="text-gray-800 font-black">{shippingCharges === 0 ? 'FREE' : `₹${shippingCharges}`}</span></div>
                <div className="flex justify-between border-t pt-3 border-gray-200/60 text-sm"><span className="text-gray-900 font-black">Total Bill</span><span className="text-xl font-black text-amber-600">₹{totalAmount}</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;