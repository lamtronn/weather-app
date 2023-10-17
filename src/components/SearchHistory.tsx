import { useContext } from "react";
import { HomeContext } from "@/app/page";
import Image from "next/image";
import styles from "./SearchHistory.module.scss";

const SearchHistory = () => {
  const { onSearch } = useContext(HomeContext);
  return (
    <div className="w-full bg-white p-3 mt-3 rounded">
      <h1>Search history</h1>

      <div onClick={onSearch} className="flex justify-between">
        <p className="flex items-center">1, Johor, MY</p>
        <div className="flex gap-3 items-center">
          <p>03:15:12 PM</p>
          <button
            className="bg-slate-100 hover:bg-slate-300 text-white font-bold py-2 px-2 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            <Image
              className={styles.buttonIcon}
              src="/icons/search.svg"
              alt="Search icon"
              width="20"
              height="20"
            />
          </button>

          <button
            className="bg-slate-100 hover:bg-slate-300 text-white font-bold py-2 px-2  rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            <Image
              className={styles.buttonIcon}
              src="/icons/delete.svg"
              alt="Delete icon"
              width="20"
              height="20"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHistory;
