import React from "react";
import { Button, Select } from "antd";
import "./sorting.css";
import { useDispatch } from "react-redux";
import {
  fiftyImagesPerPage,
  tenImagesPerPage,
  twentyImagesPerPage,
} from "../../utils/redux/actions/ImagesPerPageActions";
import { Link } from "react-router-dom";

const SortingItems = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e == 10) dispatch(tenImagesPerPage());
    if (e == 20) dispatch(twentyImagesPerPage());
    if (e == 50) dispatch(fiftyImagesPerPage());
  };
  return (
    <div className="sortingItems">
      <div className="right-content">
        <Select
          defaultValue={10}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Select.Option value="10">10 Per Page</Select.Option>
          <Select.Option value="20">20 Per Page</Select.Option>
          <Select.Option value="50">50 Per Page</Select.Option>
        </Select>
      </div>
      <div className="left-content">
        <Link to="/favorite">
          <Button>Favorite</Button>
        </Link>
      </div>
    </div>
  );
};

export default SortingItems;
