import React, { useState } from "react";
import { motion } from "framer-motion";
import PersonalInformationForm from "../../components/Forms/PersonalInformation";
import BusinessInformationForm from "../../components/Forms/BusinessInformation";
import PaymentInformationForm from "../../components/Forms/PaymentInformation";
import { expressForm } from "../../constants/index";
const ExpressForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInformation: {
      firstName: "",
      email: "",
      phone: "",
      address: "",
      occupation: "",
    },
    businessInformation: {
      businessName: "",
      businessDescription: "",
    },
    paymentInformation: {
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });

  const isPersonalInfoComplete = Object.values(
    formData.personalInformation
  ).every((value) => value.trim() !== "");

  const isBusinessInfoComplete = Object.values(
    formData.businessInformation
  ).every((value) => value.trim() !== "");

  const isPaymentInfoComplete = Object.values(
    formData.paymentInformation
  ).every((value) => value.trim() !== "");

  const handleSubmit = () => {
    if (
      isPersonalInfoComplete &&
      isBusinessInfoComplete &&
      isPaymentInfoComplete
    ) {
      alert("Form submitted successfully!");
      console.log(formData);
    } else {
      alert("Please complete all sections.");
    }
  };

  return (
    <section className="min-h-[50em] flex items-center justify-center px-4 sm:px-8 ">
      <div className="w-full max-w-6xl h-full mx-auto text-gray-300 rounded-2xl p-6 sm:p-10 bg-[#13230C] shadow-lg">
        <h2 className="text-center text-2xl sm:text-3xl font-Poppins font-semibold mb-10">
          Expression Of Interest
        </h2>

        {/* PROGRESS BAR */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          {expressForm.map((n, i) => (
            <div key={n.id} className="flex flex-col sm:flex-row items-center">
              {/* Step Circle + Label */}
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 font-medium transition-all duration-300 ${
                    step >= n.id
                      ? "bg-green-500 border-green-500 text-white scale-105"
                      : "border-gray-500 text-gray-400"
                  }`}
                >
                  {n.id}
                </div>
                <p
                  className={`mt-2 text-xs sm:text-sm ${
                    step >= n.id ? "text-green-400" : "text-gray-400"
                  }`}
                >
                  {n.info}
                </p>
              </div>

              {/* Connector (horizontal on desktop, vertical on mobile) */}
              {i < expressForm.length - 1 && (
                <div
                  className={`${
                    step > n.id ? "bg-green-500" : "bg-gray-600"
                  } sm:w-12 w-[2px] sm:h-[2px] h-6 sm:mx-2 my-2 sm:my-0 transition-all duration-300`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* FORM SECTIONS */}
        <motion.div
          key={step}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          {step === 1 && (
            <>
              <h3 className="text-lg mb-4 font-semibold">
                Personal Information
              </h3>
              <PersonalInformationForm
                formData={formData.personalInformation}
                setFormData={(data) =>
                  setFormData({ ...formData, personalInformation: data })
                }
              />
              <button
                onClick={() => setStep(2)}
                disabled={!isPersonalInfoComplete}
                className={`mt-6 w-full ${
                  isPersonalInfoComplete
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-700 cursor-not-allowed"
                } text-white font-medium py-2 rounded-lg transition`}
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="text-lg mb-4 font-semibold">
                Business Information
              </h3>
              <BusinessInformationForm
                formData={formData.businessInformation}
                setFormData={(data) =>
                  setFormData({ ...formData, businessInformation: data })
                }
              />
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!isBusinessInfoComplete}
                  className={`px-6 py-2 ${
                    isBusinessInfoComplete
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-700 cursor-not-allowed"
                  } rounded-lg text-white`}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="text-lg mb-4 font-semibold">
                Payment Information
              </h3>
              <PaymentInformationForm
                formData={formData.paymentInformation}
                setFormData={(data) =>
                  setFormData({ ...formData, paymentInformation: data })
                }
              />
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!isPaymentInfoComplete}
                  className={`px-6 py-2 ${
                    isPaymentInfoComplete
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-700 cursor-not-allowed"
                  } rounded-lg text-white`}
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpressForm;
