import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const AddressForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        bg-zinc-900
        border border-zinc-800
        rounded-3xl
        p-8
      "
    >
      {/* header */}
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="text-orange-500" />
        <h2 className="text-2xl font-semibold">Delivery Address</h2>
      </div>

      {/* form grid */}
      <div className="grid md:grid-cols-2 gap-5">

        <input
          placeholder="Full Name"
          className="px-4 py-3 rounded-xl bg-black border border-zinc-700 focus:border-orange-500 outline-none"
        />

        <input
          placeholder="Phone Number"
          className="px-4 py-3 rounded-xl bg-black border border-zinc-700 focus:border-orange-500 outline-none"
        />

        <input
          placeholder="Pincode"
          className="px-4 py-3 rounded-xl bg-black border border-zinc-700 focus:border-orange-500 outline-none"
        />

        <input
          placeholder="City"
          className="px-4 py-3 rounded-xl bg-black border border-zinc-700 focus:border-orange-500 outline-none"
        />

        <input
          placeholder="State"
          className="px-4 py-3 rounded-xl bg-black border border-zinc-700 focus:border-orange-500 outline-none"
        />

        <input
          placeholder="Country"
          className="px-4 py-3 rounded-xl bg-black border border-zinc-700 focus:border-orange-500 outline-none"
        />
      </div>

      {/* full address */}
      <textarea
        rows={4}
        placeholder="Full Address (House no, street, area)"
        className="mt-5 w-full px-4 py-3 rounded-xl bg-black border border-zinc-700 focus:border-orange-500 outline-none"
      />

      {/* save */}
      <button
        className="
          mt-6
          w-full
          bg-orange-500
          hover:bg-orange-600
          py-3
          rounded-xl
          font-semibold
          transition-all
        "
      >
        Save Address
      </button>
    </motion.div>
  );
};

export default AddressForm;