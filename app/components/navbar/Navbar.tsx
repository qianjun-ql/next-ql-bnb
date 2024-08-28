import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[2000px] mx-auto px-6">
        <div className="flex justify-between items-center ">
          <Link href="/">
            <Image src="/Airbnb_Logo.png" width={120} height={40} alt="" />
          </Link>
          <div className="flex space-x-6">Search filter</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
