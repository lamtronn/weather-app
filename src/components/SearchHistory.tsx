import { useCallback, useContext } from "react";
import { HomeContext } from "@/app/page";
import Image from "next/image";
import moment from "moment/moment";
import { CityType } from "@/types/type";

const SearchHistory = () => {
  const { onSearch, searchHistory, setSearchHistory } = useContext(HomeContext);

  const onClickRemoveButton = useCallback(
    (id: string) => {
      const newSearchHistory = searchHistory.filter((item) => item.id !== id);
      setSearchHistory(newSearchHistory);
    },
    [searchHistory, setSearchHistory]
  );

  const onClickSearchButton = useCallback(
    (item: CityType) => {
      onSearch(item?.city, item?.country);
    },
    [onSearch]
  );

  if (searchHistory.length === 0) {
    return (
      <div className="w-full h-40 bg-white p-3 mt-3 rounded flex justify-center items-center">
        <p className="text-gray-400">No record</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white p-3 mt-3 rounded">
      <h1 className="text-lg font-bold mb-2">Search history</h1>
      <hr />
      {searchHistory?.reverse().map((item, index) => (
        <>
          <div className="flex justify-between py-3" key={item?.id}>
            <div className="flex items-center">
              <p className="w-12">{`${index + 1}`}</p>
              <p>{`${item?.city} ${item?.country}`}</p>
            </div>
            <div className="flex gap-3 items-center">
              <p>{moment(item?.createdDate).format("hh:mm:ss A")}</p>
              <button
                className="bg-slate-100 hover:bg-slate-300 text-white font-bold py-2 px-2 rounded-full focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => onClickSearchButton(item)}
              >
                <Image
                  src="/icons/search.svg"
                  alt="Search icon"
                  width="20"
                  height="20"
                />
              </button>

              <button
                className="bg-slate-100 hover:bg-slate-300 text-white font-bold py-2 px-2  rounded-full focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => onClickRemoveButton(item?.id)}
              >
                <Image
                  src="/icons/delete.svg"
                  alt="Delete icon"
                  width="20"
                  height="20"
                />
              </button>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default SearchHistory;
