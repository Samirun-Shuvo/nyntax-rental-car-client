const ReservationHeader = () => (
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
);
export default ReservationHeader;
