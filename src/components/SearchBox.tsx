import { useForm } from "react-hook-form";
import useGetGeoData from "@/api/v1.0/useGetGeoData";
import { useCallback, useContext, useEffect } from "react";
import { HomeContext } from "@/app/page";

type FormType = {
  city: string;
  country: string;
};

const SearchBox = () => {
  const { register, handleSubmit, reset } = useForm();
  const { getGeoData, location } = useGetGeoData();
  const { onSearch, setWeatherData } = useContext(HomeContext);

  useEffect(() => {
    if (location) {
      onSearch(location);
    }
  }, [location]);

  const submit = useCallback(
    async (data: FormType) => {
      const { city, country } = data;
      onSearch(city, country);
    },
    [getGeoData]
  );

  const handleClickClearButton = useCallback(() => {
    reset();
    setWeatherData();
  }, []);

  return (
    <div className="w-full mt-3">
      <form
        className="block md:flex gap-3"
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <div className="block md:flex gap-3 w-full">
          <div className="flex gap-3 mr-5">
            <label
              className="w-1/5 flex text-gray-700 text-sm font-bold items-center"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              placeholder="City"
              {...register("city")}
            />
          </div>
          <div className="flex gap-3 mr-5 mt-3 md:mt-0">
            <label
              className="w-1/5 flex text-gray-700 text-sm font-bold items-center"
              htmlFor="country"
            >
              Country
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="text"
              placeholder="Country"
              {...register("country")}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Search
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleClickClearButton}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
