/* eslint-disable react/prop-types */
const VehicleSelect = ({ register, errors, carList }) => {
  return (
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
            {carList?.map((c, i) => (
              <option key={i} value={c.type}>
                {c.type}
              </option>
            ))}
          </select>
          {errors.vehicleType && (
            <span className="text-red-500">{errors.vehicleType.message}</span>
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
            {carList?.map((c, i) => (
              <option key={i} value={c.make}>
                {c.make}
              </option>
            ))}
          </select>
          {errors.vehicle && (
            <span className="text-red-500">{errors.vehicle.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default VehicleSelect;
