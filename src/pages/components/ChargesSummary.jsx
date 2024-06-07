const ChargesSummary = () => (
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
);

export default ChargesSummary;
