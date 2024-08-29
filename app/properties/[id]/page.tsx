import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

const PropertyDetailPage = () => {
  return (
    <div className="max-w-[2000px] mx-auto px-10">
      <div className="w-full h-[64vh] mb-8 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/cabin_1.webp"
          className="object-cover w-full h-full"
          alt=""
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="pr-6 col-span-3">
          <h1 className="mb-1 text-xl">Property Name</h1>
          {/* <span className="mb-6 block text-lg text-gray-600">6 guests</span> */}
          <ul className="mb-6 flex text-md  text-gray-600 list-none space-x-1">
            <li>6 guests</li>
            <li className="before:content-['•'] before:mr-1">4 bedrooms</li>
            <li className="before:content-['•'] before:mr-1">5 beds</li>
            <li className="before:content-['•'] before:mr-1">2 baths</li>
          </ul>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/Airbnb_Logo.png"
              width={40}
              height={40}
              className="rounded-full"
              alt=""
            />
            <div className="flex flex-col">
              <p>Hosted by Qianjun</p>
              <p className="text-gray-400 text-sm">4 years hosting</p>
            </div>
          </div>
          <hr />
          <div className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nam
            blanditiis maiores commodi veritatis sapiente dolores explicabo
            cupiditate corrupti omnis animi, non repudiandae laudantium
            voluptatum accusantium. Quasi sint repudiandae quisquam.
          </div>
        </div>
        <ReservationSidebar />
      </div>
    </div>
  );
};

export default PropertyDetailPage;
