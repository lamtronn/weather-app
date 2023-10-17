const SearchBox = () => {
  return (
    <div className="w-full mt-3">
      <form className="flex gap-3">
        <div className="flex gap-3 mr-5">
          <label
            className="flex text-gray-700 text-sm font-bold items-center"
            htmlFor="city"
          >
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="City"
          />
        </div>
        <div className="flex gap-3 mr-5">
          <label
            className="flex text-gray-700 text-sm font-bold items-center"
            htmlFor="country"
          >
            Country
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            type="text"
            placeholder="Country"
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Search
          </button>

          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
