import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";

const Favorite = () => {
  const favoriteRedux = useSelector((state) => state.favoriteReducer.favorite);

  return (
    <div>
      <Link to="/">
        <Button>Back Home</Button>
      </Link>
      <Cards images={favoriteRedux} />
    </div>
  );
};

export default Favorite;
