import PropertyList from "../components/properties/PropertyList";

const MyPropertiesPage = () => {
  return (
    <div className="max-w-[2000px] mx-auto px-10">
      <h1 className="my-6 text-2xl">My Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <PropertyList />
      </div>
    </div>
  );
};
export default MyPropertiesPage;
