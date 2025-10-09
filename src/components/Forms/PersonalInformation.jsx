// src/components/PersonalInformationForm.jsx
import React, { useEffect, useState } from "react";
import {FormField} from "../ui/Forms";

const PersonalInformationForm = ({ formData, setFormData }) => {
  const [occupations, setOccupations] = useState([]);

  useEffect(() => {
    // Simulate fetching occupations from API
    setOccupations([
      "Software Engineer",
      "Designer",
      "Entrepreneur",
      "Student",
      "Trader",
      "Other",
    ]);
  }, []);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <FormField
        label="First Name"
        placeholder="Enter first name"
        value={formData.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
      />

      <FormField
        label="Email"
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <FormField
        label="Phone"
        type="tel"
        placeholder="Enter phone number"
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />

      <FormField
        label="Address"
        placeholder="Enter address"
        value={formData.address}
        onChange={(e) => handleChange("address", e.target.value)}
      />

      {/* Occupation dropdown */}
      <div className="sm:col-span-2">
        <label className="block mb-2 text-sm text-gray-400">Occupation</label>
        <select
          value={formData.occupation}
          onChange={(e) => handleChange("occupation", e.target.value)}
          className="w-full p-3 rounded-md bg-[#0E1A09] border border-gray-700 focus:border-green-500 outline-none text-sm"
        >
          <option value="">Select occupation</option>
          {occupations.map((occ, index) => (
            <option key={index} value={occ}>
              {occ}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default PersonalInformationForm;
