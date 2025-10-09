import React from "react";
import { FormField } from "../ui/Forms";

const PaymentInformationForm = ({ formData, setFormData }) => {
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <FormField
        label="Cardholder Name"
        placeholder="Enter name on card"
        value={formData.cardholderName}
        onChange={(e) => handleChange("cardholderName", e.target.value)}
      />

      <FormField
        label="Card Number"
        type="text"
        placeholder="1234 5678 9012 3456"
        value={formData.cardNumber}
        onChange={(e) => handleChange("cardNumber", e.target.value)}
      />

      <FormField
        label="Expiry Date"
        type="text"
        placeholder="MM/YY"
        value={formData.expiryDate}
        onChange={(e) => handleChange("expiryDate", e.target.value)}
      />

      <FormField
        label="CVV"
        type="password"
        placeholder="123"
        value={formData.cvv}
        onChange={(e) => handleChange("cvv", e.target.value)}
      />
    </form>
  );
};

export default PaymentInformationForm;
