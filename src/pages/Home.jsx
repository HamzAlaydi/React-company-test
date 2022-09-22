import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import SortingItems from "../components/SortingItems";
import { fetchDataFromApi } from "../utils/hooks/getDataFromApi";

const Homes = () => {
  const [images, setImages] = useState([]);

  const imagesPerPage = useSelector(
    (state) => state.imagesPerPageReducer.images
  );
  const searchValue = useSelector((state) => state.searchValue.search);

  useEffect(() => {
    const getData = async () => {
      let data = await fetchDataFromApi(imagesPerPage, searchValue);
      setImages(data);
    };
    getData();
  }, [imagesPerPage, searchValue]);

  return (
    <div className="App">
      <SearchBar />
      <SortingItems />
      <Cards images={images} />
    </div>
  );
};

export default Homes;
