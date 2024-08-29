import Image from "next/image";

const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src="/cabin_1.webp"
          sizes="(max-width: 768px): 768px, (max-width: 1200px): 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
          alt=""
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">Cabin</p>
      </div>

      <div className="mt-2">
        <p className="text-sm">
          <strong>$200 CAD</strong> night
        </p>
      </div>
    </div>
  );
};

export default PropertyListItem;
