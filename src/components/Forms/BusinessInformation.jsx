import React from "react";
import { FormField } from "../ui/Forms";

const BusinessInformationForm = ({ formData, setFormData }) => {
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <FormField
        label="Business Name"
        placeholder="Enter business name"
        value={formData.businessName}
        onChange={(e) => handleChange("businessName", e.target.value)}
      />

      <FormField
        label="Business Email"
        type="email"
        placeholder="Enter business email"
        value={formData.businessEmail}
        onChange={(e) => handleChange("businessEmail", e.target.value)}
      />

      <FormField
        label="Business Address"
        placeholder="Enter business address"
        value={formData.businessAddress}
        onChange={(e) => handleChange("businessAddress", e.target.value)}
      />

      <div className="sm:col-span-2">
        <label className="block mb-2 text-sm text-gray-400">
          Business Description <span className="text-gray-500">(Optional)</span>
        </label>
        <textarea
          placeholder="Briefly describe your business"
          value={formData.businessDescription || ""}
          onChange={(e) => handleChange("businessDescription", e.target.value)}
          className="w-full p-3 rounded-md bg-[#0E1A09] border border-gray-700 focus:border-green-500 outline-none text-sm min-h-[120px]"
        />
      </div>
    </form>
  );
};

export default BusinessInformationForm;
