import AdditionalCharges from "./AdditionalCharges";

/* eslint-disable react/prop-types */
const CustomerInformation = ({ register, errors }) => (
  <div>
    <h2 className="font-bold text-md text-slate-500">Customer Information</h2>
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
          <span className="text-red-500">{errors.firstName.message}</span>
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
          <span className="text-red-500">{errors.lastName.message}</span>
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
    <AdditionalCharges register={register}></AdditionalCharges>
  </div>
);
export default CustomerInformation;
