import { useContext } from "react";
import { HomeContext } from "@/app/page";
import Image from "next/image";
import styles from "./SearchHistory.module.scss";

const SearchHistory = () => {
  const { onSearch } = useContext(HomeContext);
  return (
    <div className="w-full bg-white p-3 mt-3">
      <h1>Search history</h1>

      <div onClick={onSearch} className="flex justify-between">
        <p>1, Johor, MY</p>
        <div className="flex gap-3">
          <p>03:15:12 PM</p>
          <p>
            <Image
              className={styles.buttonIcon}
              src="/icons/delete.svg"
              alt="Delete icon"
              width="25"
              height="25"
            />
          </p>
          <p>
            <Image
              className={styles.buttonIcon}
              src="/icons/search.svg"
              alt="Search icon"
              width="30"
              height="30"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchHistory;
