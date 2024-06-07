import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import {  useEffect } from "react";

const Reserve = () => {
  const location = useLocation();
  const { car, carList } = location.state;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const pickupDateTime = watch("pickupDateTime");
  const returnDateTime = watch("returnDateTime");
  console.log(car);

  useEffect(() => {
    const calculateDuration = (pickup, returnTime) => {
      if (pickup && returnTime) {
        const pickupDate = new Date(pickup);
        const returnDate = new Date(returnTime);
  
        if (pickupDate && returnDate && returnDate > pickupDate) {
          const diffInMs = returnDate - pickupDate;
          const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
          const weeks = Math.floor(diffInDays / 7);
          const days = Math.floor(diffInDays % 7);
          const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate remaining hours
          const durationStr = `${weeks} week${weeks !== 1 ? "s" : ""} ${days} day${days !== 1 ? "s" : ""} ${hours} hour${hours !== 1 ? "s" : ""}`;
          setValue("duration", durationStr); // Update the form value
        } else {
          setValue("duration", ""); // Reset the form value
        }
      }
    };
  
    calculateDuration(pickupDateTime, returnDateTime);
  }, [pickupDateTime, returnDateTime, setValue]);
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="min-h-screen my-10 max-w-7xl mx-auto">
      <div className="p-4 bg-slate-100">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">Reservation</h1>
          </div>
          <div>
            <button className="bg-warning px-2 py-1 rounded-md text-white">
              Print / Download
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="my-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div>
              <h2 className="font-bold text-md text-slate-500">
                Reservation Details
              </h2>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Reservation ID</span>
                  </div>
                  <input
                    type="text"
                    {...register("reservationId")}
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Pickup Date and Time *</span>
                  </div>
                  <input
                    type="datetime-local"
                    {...register("pickupDateTime", {
                      required: "Pickup Date and Time is required",
                    })}
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                  {errors.pickupDateTime && (
                    <span className="text-red-500">
                      {errors.pickupDateTime.message}
                    </span>
                  )}
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Return Date and Time *</span>
                  </div>
                  <input
                    type="datetime-local"
                    {...register("returnDateTime", {
                      required: "Return Date and Time is required",
                    })}
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                  {errors.returnDateTime && (
                    <span className="text-red-500">
                      {errors.returnDateTime.message}
                    </span>
                  )}
                </label>
                <div className="my-2 px-1">
                  <label>
                    <span className="label-text mr-2">Duration</span>
                    <input
                      type="text"
                      placeholder="1 week 1 day 1 hours"
                      {...register("duration")}
                      className="input input-sm input-bordered max-w-xs"
                      readOnly // Set as read-only
                      value={watch("duration")} // Set the value attribute
                    />
                  </label>
                </div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Discount</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    {...register("discount")}
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div>
                <h2 className="font-bold text-md text-slate-500 mt-4">
                  Vehicle Information
                </h2>
                <div className="my-2">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Vehicle Type *</span>
                    </div>
                    <select
                      {...register("vehicleType", {
                        required: "Vehicle Type is required",
                      })}
                      className="select select-sm w-full max-w-xs"
                    >
                      {carList?.map((c) => (
                        <option key={c.type} value={c.type}>
                          {c.type}
                        </option>
                      ))}
                    </select>
                    {errors.vehicleType && (
                      <span className="text-red-500">
                        {errors.vehicleType.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="my-2">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Vehicle *</span>
                    </div>
                    <select
                      {...register("vehicle", {
                        required: "Vehicle is required",
                      })}
                      className="select select-sm w-full max-w-xs"
                    >
                      {carList?.map((c) => (
                        <option key={c.make} value={c.make}>
                          {c.make}
                        </option>
                      ))}
                    </select>
                    {errors.vehicle && (
                      <span className="text-red-500">
                        {errors.vehicle.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-md text-slate-500">
                Customer Information
              </h2>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">First Name *</span>
                  </div>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                  {errors.firstName && (
                    <span className="text-red-500">
                      {errors.firstName.message}
                    </span>
                  )}
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Last Name *</span>
                  </div>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                  {errors.lastName && (
                    <span className="text-red-500">
                      {errors.lastName.message}
                    </span>
                  )}
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Email *</span>
                  </div>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Phone *</span>
                  </div>
                  <input
                    type="text"
                    {...register("phone", { required: "Phone is required" })}
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                  {errors.phone && (
                    <span className="text-red-500">{errors.phone.message}</span>
                  )}
                </label>
              </div>
              <div className="my-4">
                <h2 className="font-bold text-md text-slate-500">
                  Additional Charges
                </h2>
                <div>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>
                            <div className="form-control">
                              <label className="cursor-pointer flex justify-start items-center">
                                <input
                                  type="checkbox"
                                  {...register("collisionDamageWaiver")}
                                  className="checkbox checkbox-secondary"
                                />
                                <span className="ml-2">
                                  Collision Damage Waiver
                                </span>
                              </label>
                            </div>
                          </th>
                          <th>$9.00</th>
                        </tr>
                        <tr>
                          <th>
                            <div className="form-control">
                              <label className="cursor-pointer flex justify-start items-center">
                                <input
                                  type="checkbox"
                                  {...register("liabilityInsurance")}
                                  className="checkbox checkbox-secondary"
                                />
                                <span className="ml-2">
                                  Liability Insurance
                                </span>
                              </label>
                            </div>
                          </th>
                          <th>$15.00</th>
                        </tr>
                        <tr>
                          <th>
                            <div className="form-control">
                              <label className="cursor-pointer flex justify-start items-center">
                                <input
                                  type="checkbox"
                                  {...register("rentalTax")}
                                  className="checkbox checkbox-secondary"
                                />
                                <span className="ml-2">Rental Tax</span>
                              </label>
                            </div>
                          </th>
                          <th>11.5%</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-md text-slate-500">
                Charges Summary
              </h2>
              <div>
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Charge</th>
                        <th>Unit</th>
                        <th>Rate</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>5</td>
                        <td>10</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>Collision Damage Waiver</td>
                        <td></td>
                        <td>$9.00</td>
                        <td>$9.00</td>
                      </tr>
                      <tr className="font-bold">
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>$498.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Submit Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reserve;
