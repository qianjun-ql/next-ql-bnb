import Image from "next/image";

const MyReservatiosnPage = () => {
  return (
    <div className="max-w-[2000px] mx-auto px-10">
      <h1 className="my-6 text-2xl">My Reservations</h1>

      <div className="space-y-4">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/cabin_1.webp"
                className="hover:scale-110 object-cover transition h-full w-full "
                alt=""
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">Property Name</h2>
            <p className="mb-2">
              <strong>Check in date: </strong> 5/15/2025
            </p>
            <p className="mb-2">
              <strong>Check out date: </strong> 5/15/2025
            </p>
            <p className="mb-2">
              <strong>Number of nights: </strong> 3
            </p>
            <p className="mb-2">
              <strong>Total: </strong> 300 CAD
            </p>

            <div className=" mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
              Go to property
            </div>
          </div>
        </div>

        <div>
          <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
            <div className="col-span-1">
              <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                  fill
                  src="/cabin_1.webp"
                  className="hover:scale-110 object-cover transition h-full w-full "
                  alt=""
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-3">
              <h2 className="mb-4 text-xl">Property Name</h2>
              <p className="mb-2">
                <strong>Check in date: </strong> 5/15/2025
              </p>
              <p className="mb-2">
                <strong>Check out date: </strong> 5/15/2025
              </p>
              <p className="mb-2">
                <strong>Number of nights: </strong> 3
              </p>
              <p className="mb-2">
                <strong>Total: </strong> 300 CAD
              </p>

              <div className=" mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
                Go to property
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservatiosnPage;
