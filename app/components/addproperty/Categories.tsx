import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div
        onClick={() => setCategory("cabin")}
        className="pt-3 cursor-pointer pb-6 flex items-center space-x-12"
      >
        <div className="pt-3 cursor-pointer flex items-center space-x-12">
          <div
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
              dataCategory == "cabin" ? "border-gray-800" : "border-white"
            }  opacity-60 hover:border-gray-100 hover:opacity-100`}
          >
            <Image src="/c_cabin.jpg" height={20} width={20} alt="" />
            <span className="text-xs">Cabin</span>
          </div>
          <div
            onClick={() => setCategory("amazingView")}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
              dataCategory == "amazingView" ? "border-gray-800" : "border-white"
            }  opacity-60 hover:border-gray-100 hover:opacity-100`}
          >
            <Image src="/c_amazing_view.jpg" height={20} width={20} alt="" />
            <span className="text-xs">Amazing View</span>
          </div>
          <div
            onClick={() => setCategory("beach")}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
              dataCategory == "beach" ? "border-gray-800" : "border-white"
            }  opacity-60 hover:border-gray-100 hover:opacity-100`}
          >
            <Image src="/c_beach.jpg" height={20} width={20} alt="" />
            <span className="text-xs">Beach</span>
          </div>
          <div
            onClick={() => setCategory("countryside")}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
              dataCategory == "countryside" ? "border-gray-800" : "border-white"
            }  opacity-60 hover:border-gray-100 hover:opacity-100`}
          >
            <Image src="/c_countryside.jpg" height={20} width={20} alt="" />
            <span className="text-xs">Countryside</span>
          </div>
          <div
            onClick={() => setCategory("lake")}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
              dataCategory == "lake" ? "border-gray-800" : "border-white"
            }  opacity-60 hover:border-gray-100 hover:opacity-100`}
          >
            <Image src="/c_lake.jpg" height={20} width={20} alt="" />
            <span className="text-xs">Lake</span>
          </div>
          <div
            onClick={() => setCategory("topCity")}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
              dataCategory == "topCity" ? "border-gray-800" : "border-white"
            }  opacity-60 hover:border-gray-100 hover:opacity-100`}
          >
            <Image src="/c_top_city.jpg" height={20} width={25} alt="" />
            <span className="text-xs">Top City</span>
          </div>
          <div
            onClick={() => setCategory("treeHouse")}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
              dataCategory == "treeHouse" ? "border-gray-800" : "border-white"
            }  opacity-60 hover:border-gray-100 hover:opacity-100`}
          >
            <Image src="/c_tree_house.jpg" height={20} width={20} alt="" />
            <span className="text-xs">Tree House</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
