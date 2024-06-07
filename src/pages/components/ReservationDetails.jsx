import VehicleSelect from "./VehicleSelect";

/* eslint-disable react/prop-types */
const ReservationDetails = ({ register, errors, carList }) => {
  return (
    <div>
      <h2 className="font-bold text-md text-slate-500">Reservation Details</h2>
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
              placeholder="1 week 1 day"
              {...register("duration")}
              className="input input-sm input-bordered max-w-xs"
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
      <VehicleSelect
        register={register}
        errors={errors}
        carList={carList}
      ></VehicleSelect>
    </div>
  );
};
export default ReservationDetails;
