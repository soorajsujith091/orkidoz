import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Leaf, ShieldCheck, CreditCard, Smartphone, Building, Banknote } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Button from '../components/ui/Button';
import { showToast } from '../components/ui/Toast';

const paymentMethods = [
  { id: 'upi', icon: Smartphone, label: 'UPI / GPay' },
  { id: 'card', icon: CreditCard, label: 'Credit/Debit Card' },
  { id: 'netbanking', icon: Building, label: 'Net Banking' },
  { id: 'cod', icon: Banknote, label: 'Cash on Delivery' },
];

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState(2); // 1=cart, 2=details, 3=payment
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '',
    address1: '', address2: '', city: '', state: '', pin: '',
    country: 'India',
  });

  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    showToast('Order placed successfully! Thank you for shopping with Orkidoz.');
    clearCart();
  };

  const inputClass = "w-full border border-border rounded-sm px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition placeholder:text-muted/50";

  return (
    <main>
      <Helmet>
        <title>Checkout | Orkidoz</title>
      </Helmet>

      {/* Minimal Header */}
      <div className="py-6 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0 text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <Leaf size={22} className="text-sage" />
            <span className="text-[18px] font-semibold text-ink">orkidoz</span>
          </Link>

          {/* Steps */}
          <div className="flex items-center justify-center gap-3 mt-4 text-[13px]">
            {['Cart', 'Details', 'Payment'].map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                <span className={i + 1 <= step ? 'text-sage font-medium' : 'text-muted'}>
                  {s}
                </span>
                {i < 2 && <span className="text-muted">→</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 bg-canvas" aria-label="Checkout form">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="font-display text-[32px] text-ink">Your cart is empty</h2>
              <Link to="/shop" className="text-sage hover:underline mt-4 inline-block">Back to Shop</Link>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder}>
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
                {/* Left — Forms */}
                <div className="lg:w-[58%] space-y-8">
                  {/* Contact */}
                  <div>
                    <h3 className="text-[16px] font-medium text-ink">Contact</h3>
                    <div className="mt-4">
                      <input name="email" type="email" value={form.email} onChange={handleChange}
                        className={inputClass} placeholder="Email address" required />
                    </div>
                  </div>

                  {/* Delivery */}
                  <div>
                    <h3 className="text-[16px] font-medium text-ink">Delivery</h3>
                    <div className="mt-4 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input name="firstName" value={form.firstName} onChange={handleChange}
                          className={inputClass} placeholder="First name" required />
                        <input name="lastName" value={form.lastName} onChange={handleChange}
                          className={inputClass} placeholder="Last name" required />
                      </div>
                      <input name="address1" value={form.address1} onChange={handleChange}
                        className={inputClass} placeholder="Address line 1" required />
                      <input name="address2" value={form.address2} onChange={handleChange}
                        className={inputClass} placeholder="Address line 2 (optional)" />
                      <div className="grid grid-cols-3 gap-4">
                        <input name="city" value={form.city} onChange={handleChange}
                          className={inputClass} placeholder="City" required />
                        <input name="state" value={form.state} onChange={handleChange}
                          className={inputClass} placeholder="State" required />
                        <input name="pin" value={form.pin} onChange={handleChange}
                          className={inputClass} placeholder="PIN Code" required />
                      </div>
                      <input name="country" value={form.country} onChange={handleChange}
                        className={inputClass} placeholder="Country" />
                    </div>
                  </div>

                  {/* Payment */}
                  <div>
                    <h3 className="text-[16px] font-medium text-ink">Payment Method</h3>
                    <div className="mt-4 space-y-3">
                      {paymentMethods.map(method => {
                        const Icon = method.icon;
                        return (
                          <label
                            key={method.id}
                            className={`flex items-center gap-3 border rounded-sm p-4 cursor-pointer transition-all ${
                              paymentMethod === method.id
                                ? 'border-sage bg-sage-lt'
                                : 'border-border hover:border-muted'
                            }`}
                          >
                            <input
                              type="radio"
                              name="payment"
                              value={method.id}
                              checked={paymentMethod === method.id}
                              onChange={() => setPaymentMethod(method.id)}
                              className="sr-only"
                            />
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              paymentMethod === method.id ? 'border-sage' : 'border-border'
                            }`}>
                              {paymentMethod === method.id && (
                                <div className="w-2 h-2 rounded-full bg-sage" />
                              )}
                            </div>
                            <Icon size={18} className="text-muted" />
                            <span className="text-[14px] text-ink">{method.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <Button variant="primary" fullWidth type="submit" className="!py-4">
                    Place Order →
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-[12px] text-muted mt-4">
                    <ShieldCheck size={14} className="text-sage" />
                    256-bit SSL encrypted checkout
                  </div>
                </div>

                {/* Right — Order Review */}
                <div className="lg:w-[42%]">
                  <div className="bg-surface rounded-2xl p-8 lg:sticky lg:top-8">
                    <h3 className="text-[18px] font-medium text-ink">Order Review</h3>

                    <div className="mt-6 space-y-0">
                      {items.map(item => (
                        <div key={`${item.id}-${item.size}`} className="flex gap-4 py-3 border-b border-border/50">
                          <div className="w-16 h-16 bg-canvas rounded-lg flex-shrink-0 overflow-hidden">
                            {item.images && item.images[0] ? (
                              <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="text-[8px] text-muted/40 text-center">{item.name}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-medium text-ink truncate">{item.name}</p>
                            <p className="text-[11px] text-muted">Size: {item.size}</p>
                          </div>
                          <div className="text-[13px] text-ink text-right flex-shrink-0">
                            <p>{item.qty} × ₹{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex justify-between text-[14px]">
                        <span className="text-muted">Subtotal</span>
                        <span className="text-ink">₹{subtotal}</span>
                      </div>
                      <div className="flex justify-between text-[14px]">
                        <span className="text-muted">Shipping</span>
                        <span className={shipping === 0 ? 'text-sage font-medium' : 'text-ink'}>
                          {shipping === 0 ? 'FREE ✓' : `₹${shipping}`}
                        </span>
                      </div>
                    </div>

                    <hr className="border-border my-4" />

                    <div className="flex justify-between text-[17px] font-bold">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
