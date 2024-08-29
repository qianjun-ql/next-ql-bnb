import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";
import Image from "next/image";

const HostDetailPage = () => {
  return (
    <div className="max-w-[2000px] mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border-gray-300 shadow-xl">
            <Image
              src="/Airbnb_Logo.png"
              width={200}
              height={200}
              alt=""
              className="rounded-full"
            />

            <h1 className="mt-6 text-2xl">Host Name</h1>
            <ContactButton />
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <PropertyList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostDetailPage;
