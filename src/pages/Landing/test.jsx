import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExpressForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    cacNumber: "",
    taxId: "",
  });

  useEffect(() => {
    if (step === 1 && formData.businessName.trim() !== "") setStep(2);
    else if (step === 2 && formData.cacNumber && formData.taxId) setStep(3);
  }, [formData, step]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  // Animation variants for sliding effect
  const slideVariants = {
    initial: { x: 80, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -80, opacity: 0 },
  };

  return (
    <section className="min-h-[50em] flex items-center justify-center bg-[#02091F]">
      <div className="max-w-md w-full mx-auto p-6 bg-[#0B1A3D] text-white rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Expression Of Interest
        </h2> 

        {/* Progress steps */}
        <div className="flex justify-center mb-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  step >= n
                    ? "bg-green-500 border-green-500"
                    : "border-gray-500"
                }`}
              >
                {n}
              </div>
              {n < 3 && (
                <div
                  className={`w-8 h-[2px] ${
                    step > n ? "bg-green-500" : "bg-gray-400"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Animated form content */}
        <div className="relative min-h-[12em]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <label className="block">
                  Business Name
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Enter Business Name"
                    className="w-full mt-2 p-2 bg-[#1E2B56] rounded-lg outline-none"
                  />
                </label>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <label className="block">
                  CAC Registration Number
                  <input
                    type="text"
                    name="cacNumber"
                    value={formData.cacNumber}
                    onChange={handleChange}
                    placeholder="Enter CAC Registration Number"
                    className="w-full mt-2 p-2 bg-[#1E2B56] rounded-lg outline-none"
                  />
                </label>

                <label className="block">
                  Tax Identification Number
                  <input
                    type="text"
                    name="taxId"
                    value={formData.taxId}
                    onChange={handleChange}
                    placeholder="Enter Tax Identification Number"
                    className="w-full mt-2 p-2 bg-[#1E2B56] rounded-lg outline-none"
                  />
                </label>

                <button
                  onClick={handleBack}
                  className="mt-4 bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg"
                >
                  Back
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="text-center space-y-4"
              >
                <h3 className="text-lg mb-4">Payment Information</h3>
                <p className="text-gray-300">Proceed to payment step...</p>
                <button
                  onClick={handleBack}
                  className="mt-4 bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg"
                >
                  Back
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExpressForm;



// import React, { useState, useEffect } from "react";
// import { expressForm } from "../../constants";
// import { motion } from "framer-motion"; // for slide animation

// import PersonalInformation from '../../components/Forms/PersonalInformation'
// import BusinessInformationForm  from "../../components/Forms/BusinessInformation";
// import PaymentInformationForm from "../../components/Forms/PaymentInformation";

// const ExpressForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     personalInformation: "",
//     businessInformation: "",
//     paymentInformation: "",
//   });

//   // ✅ Fix: useEffect syntax and logic
//   useEffect(() => {
//     if (step === 1 && formData.personalInformation.trim() !== "") {
//       setStep(2);
//     } else if (step === 2 && formData.businessInformation.trim() !== "") {
//       setStep(3);
//     }
//   }, [formData, step]);

//   return (
//     <section className="min-h-[50em] flex items-center justify-center px-4 sm:px-8">
//       <div className="w-full max-w-3xl mx-auto text-gray-300 rounded-2xl p-6 sm:p-10 bg-[#13230C] shadow-lg">
//         <h2 className="text-center text-2xl sm:text-3xl font-Poppins font-semibold mb-10">
//           Expression Of Interest
//         </h2>

//         {/* PROGRESS STEPS */}
//         <div className="flex justify-center items-center flex-wrap gap-3 mb-10">
//           {expressForm.map((n, i) => (
//             <div key={n.id} className="flex items-center">
//               {/* Each step bubble + label */}
//               <div className="flex flex-col items-center text-center mx-2 sm:mx-4">
//                 <div
//                   className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 font-medium transition-all duration-300 ${
//                     step >= n.id
//                       ? "bg-green-500 border-green-500 text-white scale-105"
//                       : "border-gray-500 text-gray-400"
//                   }`}
//                 >
//                   {n.id}
//                 </div>

//                 {/* Step label below number */}
//                 <p
//                   className={`mt-2 text-xs sm:text-sm ${
//                     step >= n.id ? "text-green-400" : "text-gray-400"
//                   }`}
//                 >
//                   {n.info}
//                 </p>
//               </div>

//               {/* Connector line between steps */}
//               {i < expressForm.length - 1 && (
//                 <div
//                   className={`w-8 sm:w-12 h-[2px] transition-all duration-300 ${
//                     step > n.id ? "bg-green-500" : "bg-gray-500"
//                   }`}
//                 ></div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* SLIDE ANIMATION FOR FORM SECTIONS */}
//         <motion.div
//           key={step}
//           initial={{ x: 50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: -50, opacity: 0 }}
//           transition={{ duration: 0.4 }}
//           className="w-full"
//         >
//           {step === 1 && (
//             <div>
//               <h3 className="text-lg mb-4 font-semibold">
//                 Personal Information
//               </h3>
//              <PersonalInformation />
//               <button
//                 onClick={() => setStep(2)}
//                 className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition"
//               >
//                 Next
//               </button>
//             </div>
//           )}

//           {step === 2 && (
//             <div>
//               <h3 className="text-lg mb-4 font-semibold">
//                 Business Information
//               </h3>
//               <input
//                 type="text"
//                 placeholder="Enter business info..."
//                 value={formData.businessInformation}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     businessInformation: e.target.value,
//                   })
//                 }
//                 className="w-full p-3 rounded-md bg-[#0E1A09] border border-gray-700 focus:border-green-500 outline-none text-sm"
//               />
//               <div className="flex justify-between mt-6">
//                 <button
//                   onClick={() => setStep(1)}
//                   className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={() => setStep(3)}
//                   className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}

//           {step === 3 && (
//             <div>
//               <h3 className="text-lg mb-4 font-semibold">
//                 Payment Information
//               </h3>
//               <input
//                 type="text"
//                 placeholder="Enter payment info..."
//                 value={formData.paymentInformation}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     paymentInformation: e.target.value,
//                   })
//                 }
//                 className="w-full p-3 rounded-md bg-[#0E1A09] border border-gray-700 focus:border-green-500 outline-none text-sm"
//               />
//               <div className="flex justify-between mt-6">
//                 <button
//                   onClick={() => setStep(2)}
//                   className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={() => alert("Submitted!")}
//                   className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ExpressForm;