import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchValue } from "../../utils/redux/actions/searchValueActions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    dispatch(addSearchValue(value));
  };

  return (
    <div>
      <Input.Group compact>
        <Input
          onChange={handleChange}
          style={{
            width: "calc(100% - 600px)",
          }}
          placeholder="Enter Image Title"
        />
        <Button type="primary" onClick={handleClick}>
          Submit
        </Button>
      </Input.Group>
    </div>
  );
};

export default SearchBar;
