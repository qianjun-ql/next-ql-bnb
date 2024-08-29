const ReservationSidebar = () => {
  return (
    <div className="p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-2xl">$441 CAD night</h2>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="mb-2 block font-bold text-xs">GUESTS</label>
        <select className="w-full -ml-1 text-sm">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>

      <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">
        Reserve
      </div>

      <div className="mb-4 flex justify-between items-center underline text-md">
        <p>$441 CAD x 5 nights</p>
        <p>$800 CAD</p>
      </div>

      <div className="mb-4 flex justify-between items-center underline text-md">
        <p>Djangobnb service fee</p>
        <p>$100 CAD</p>
      </div>
      <div className="mb-6 flex justify-between items-center underline text-md">
        <p>Tax</p>
        <p>$100 CAD</p>
      </div>
      <hr />
      <div className="mt-6 flex justify-between items-center underline font-bold">
        <p>Total</p>
        <p>$1000 CAD</p>
      </div>
    </div>
  );
};

export default ReservationSidebar;
