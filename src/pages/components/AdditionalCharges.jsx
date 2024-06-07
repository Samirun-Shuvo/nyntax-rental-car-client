/* eslint-disable react/prop-types */
const AdditionalCharges = ({ register }) => (
  <div className="my-4">
    <h2 className="font-bold text-md text-slate-500">Additional Charges</h2>
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
                    <span className="ml-2">Collision Damage Waiver</span>
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
                    <span className="ml-2">Liability Insurance</span>
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
);
export default AdditionalCharges;
