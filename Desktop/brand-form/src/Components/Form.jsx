import React, { useState } from "react";
import { useForm } from "react-hook-form";

function BrandVehicleForm() {
  const [activeTab, setActiveTab] = useState("brand");

  // Mock existing brand list (later you’ll fetch from API)
  const [brandList] = useState(["Toyota", "Honda", "BMW", "Tata"]);

  const {
    register: registerBrand,
    handleSubmit: handleBrandSubmit,
    reset: resetBrand,
    formState: { errors: brandErrors },
  } = useForm();

  const {
    register: registerVehicle,
    handleSubmit: handleVehicleSubmit,
    reset: resetVehicle,
    formState: { errors: vehicleErrors },
  } = useForm();

  const onBrandSubmit = (data) => {
    console.log("Brand Data:", data);
    alert("✅ Brand information submitted!");
    resetBrand();
  };

  const onVehicleSubmit = (data) => {
    console.log("Vehicle Data:", data);
    alert("✅ Vehicle information submitted!");
    resetVehicle();
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-xl mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Add Brand & Vehicle Details
      </h2>

      <div className="flex justify-center gap-4 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab("brand")}
          className={`px-5 py-2 rounded font-medium transition-all ${
            activeTab === "brand"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Brand 
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("vehicle")}
          className={`px-5 py-2 rounded font-medium transition-all ${
            activeTab === "vehicle"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Vehicle 
        </button>
      </div>

      {/* BRAND FORM */}
      {activeTab === "brand" && (
        <form onSubmit={handleBrandSubmit(onBrandSubmit)} className="space-y-4">
          <h3 className="text-lg font-medium border-b pb-1">Brand Information</h3>

          <div>
            <label className="block font-medium mb-1">Brand Name</label>
            <input
              {...registerBrand("name", { required: "Brand name is required" })}
              className="w-full border p-2 rounded"
              placeholder="e.g. Toyota"
            />
            {brandErrors.name && (
              <p className="text-red-500 text-sm">{brandErrors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Year</label>
            <input
              type="number"
              {...registerBrand("year", {
                required: "Year is required",
                min: { value: 1900, message: "Enter a valid year" },
              })}
              className="w-full border p-2 rounded"
              placeholder="e.g. 2005"
            />
            {brandErrors.year && (
              <p className="text-red-500 text-sm">{brandErrors.year.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Brand Exists?</label>
            <div className="flex gap-6">
              <label>
                <input
                  type="radio"
                  value="yes"
                  {...registerBrand("is_exist", { required: true })}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  {...registerBrand("is_exist", { required: true })}
                />{" "}
                No
              </label>
            </div>
            {brandErrors.is_exist && (
              <p className="text-red-500 text-sm">Please select an option</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Country</label>
            <select
              {...registerBrand("country", { required: "Country is required" })}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
            </select>
            {brandErrors.country && (
              <p className="text-red-500 text-sm">{brandErrors.country.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Brand Image</label>
            <input
              type="file"
              {...registerBrand("image", { required: "Image is required" })}
            />
            {brandErrors.image && (
              <p className="text-red-500 text-sm">{brandErrors.image.message}</p>
            )}
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded"
            >
              Submit Brand Details
            </button>
          </div>
        </form>
      )}

      {/* VEHICLE FORM */}
      {activeTab === "vehicle" && (
        <form onSubmit={handleVehicleSubmit(onVehicleSubmit)} className="space-y-4">
          <h3 className="text-lg font-medium border-b pb-1">Vehicle Information</h3>

          <div>
            <label className="block font-medium mb-1">Brand</label>
            <select
              {...registerVehicle("brand_name", {
                required: "Please select a brand",
              })}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Brand</option>
              {brandList.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            {vehicleErrors.brand_name && (
              <p className="text-red-500 text-sm">
                {vehicleErrors.brand_name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Vehicle Name</label>
            <input
              {...registerVehicle("name", { required: "Vehicle name is required" })}
              className="w-full border p-2 rounded"
              placeholder="e.g. Corolla"
            />
            {vehicleErrors.name && (
              <p className="text-red-500 text-sm">{vehicleErrors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="number"
              {...registerVehicle("price", { required: "Price is required" })}
              className="w-full border p-2 rounded"
              placeholder="e.g. 25000"
            />
            {vehicleErrors.price && (
              <p className="text-red-500 text-sm">{vehicleErrors.price.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Colors Available</label>
            <div className="flex gap-4">
              {["Red", "Blue", "Black", "White"].map((color) => (
                <label key={color}>
                  <input
                    type="checkbox"
                    value={color}
                    {...registerVehicle("color", {
                      required: "Select at least one color",
                    })}
                  />{" "}
                  {color}
                </label>
              ))}
            </div>
            {vehicleErrors.color && (
              <p className="text-red-500 text-sm">{vehicleErrors.color.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Vehicle Image</label>
            <input
              type="file"
              {...registerVehicle("image", { required: "Vehicle image is required" })}
            />
            {vehicleErrors.image && (
              <p className="text-red-500 text-sm">{vehicleErrors.image.message}</p>
            )}
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded"
            >
              Submit Vehicle Details
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default BrandVehicleForm;
