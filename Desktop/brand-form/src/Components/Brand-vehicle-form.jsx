import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

function BrandVehicleForm() {
  const [activeTab, setActiveTab] = useState("brand");
  const [countries] = useState(["India", "USA", "Germany", "Japan"]);

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      brand: {
        name: "",
        year: "",
        is_exist: "yes",
        country: "",
        image: null,
      },
      vehicles: [{ name: "", color: [], price: "", image: null }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "vehicles",
  });

  const brandName = watch("brand.name");

  const onSubmit = (data) => {
    console.log("Final Form Data:", data);

    // Example payload (for later API use)
    /*
    const formData = new FormData();
    formData.append("brand_name", data.brand.name);
    formData.append("brand_year", data.brand.year);
    formData.append("brand_is_exist", data.brand.is_exist);
    formData.append("brand_country", data.brand.country);
    formData.append("brand_image", data.brand.image[0]);

    data.vehicles.forEach((v, i) => {
      formData.append(`vehicles[${i}][name]`, v.name);
      formData.append(`vehicles[${i}][price]`, v.price);
      formData.append(`vehicles[${i}][color]`, v.color);
      formData.append(`vehicles[${i}][image]`, v.image[0]);
    });
    */

    alert("Form data ready to send!");
    reset();
    setActiveTab("brand");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-xl mt-8">
      <h2 className="text-2xl font-semibold mb-5 text-center">
        Add Brand & Vehicles
      </h2>

      {/* TAB BUTTONS */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab("brand")}
          className={`px-4 py-2 rounded font-medium ${
            activeTab === "brand"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Brand Details
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("vehicle")}
          className={`px-4 py-2 rounded font-medium ${
            activeTab === "vehicle"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Vehicle Details
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* BRAND FORM */}
        {activeTab === "brand" && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-3 border-b pb-1">
              Brand Information
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Brand Name</label>
                <input
                  {...register("brand.name", { required: "Brand name is required" })}
                  className="w-full border p-2 rounded"
                  placeholder="e.g. Toyota"
                />
                {errors.brand?.name && (
                  <p className="text-red-500 text-sm">{errors.brand.name.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-1">Year</label>
                <input
                  type="number"
                  {...register("brand.year", {
                    required: "Year is required",
                    min: { value: 1900, message: "Enter valid year" },
                  })}
                  className="w-full border p-2 rounded"
                  placeholder="e.g. 2005"
                />
                {errors.brand?.year && (
                  <p className="text-red-500 text-sm">{errors.brand.year.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Brand Exists?</label>
              <div className="flex gap-6">
                <label>
                  <input type="radio" value="yes" {...register("brand.is_exist")} /> Yes
                </label>
                <label>
                  <input type="radio" value="no" {...register("brand.is_exist")} /> No
                </label>
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Country</label>
              <select
                {...register("brand.country", { required: "Country is required" })}
                className="w-full border p-2 rounded"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.brand?.country && (
                <p className="text-red-500 text-sm">{errors.brand.country.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Brand Image</label>
              <input
                type="file"
                {...register("brand.image", { required: "Image is required" })}
              />
              {errors.brand?.image && (
                <p className="text-red-500 text-sm">{errors.brand.image.message}</p>
              )}
            </div>

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => setActiveTab("vehicle")}
                className="bg-blue-500 text-white px-6 py-2 rounded"
              >
                Next: Add Vehicle Details →
              </button>
            </div>
          </div>
        )}

        {/* VEHICLE FORM */}
        {activeTab === "vehicle" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium mb-3 border-b pb-1">
                Vehicle Information
              </h3>
              <button
                type="button"
                onClick={() => setActiveTab("brand")}
                className="text-blue-600 underline text-sm"
              >
                ← Back to Brand
              </button>
            </div>

            <div className="bg-gray-100 p-3 rounded">
              <strong>Brand:</strong> {brandName || "Not set yet"}
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="border rounded-lg p-4 bg-gray-50 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-1">Vehicle Name</label>
                    <input
                      {...register(`vehicles.${index}.name`, {
                        required: "Vehicle name is required",
                      })}
                      className="w-full border p-2 rounded"
                      placeholder="e.g. Corolla"
                    />
                    {errors.vehicles?.[index]?.name && (
                      <p className="text-red-500 text-sm">
                        {errors.vehicles[index].name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Price</label>
                    <input
                      type="number"
                      {...register(`vehicles.${index}.price`, {
                        required: "Price is required",
                      })}
                      className="w-full border p-2 rounded"
                      placeholder="e.g. 20000"
                    />
                    {errors.vehicles?.[index]?.price && (
                      <p className="text-red-500 text-sm">
                        {errors.vehicles[index].price.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-2">
                  <label className="block font-medium mb-1">Color</label>
                  <div className="flex gap-4">
                    {["Red", "Blue", "Black", "White"].map((color) => (
                      <label key={color}>
                        <input
                          type="checkbox"
                          value={color}
                          {...register(`vehicles.${index}.color`, {
                            required: "Select at least one color",
                          })}
                        />{" "}
                        {color}
                      </label>
                    ))}
                  </div>
                  {errors.vehicles?.[index]?.color && (
                    <p className="text-red-500 text-sm">
                      {errors.vehicles[index].color.message}
                    </p>
                  )}
                </div>

                <div className="mt-2">
                  <label className="block font-medium mb-1">Vehicle Image</label>
                  <input
                    type="file"
                    {...register(`vehicles.${index}.image`, {
                      required: "Vehicle image is required",
                    })}
                  />
                  {errors.vehicles?.[index]?.image && (
                    <p className="text-red-500 text-sm">
                      {errors.vehicles[index].image.message}
                    </p>
                  )}
                </div>

                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="absolute top-2 right-2 text-red-600 text-sm"
                  >
                    ✕ Remove
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => append({ name: "", color: [], price: "", image: null })}
              className="bg-blue-500 text-white px-4 py-1 rounded"
            >
              + Add Another Vehicle
            </button>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded"
              >
                Submit All
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default BrandVehicleForm;
