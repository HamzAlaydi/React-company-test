import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../utils/redux/actions/favoriteActions";
import Loading from "../Loading";
import "./cards.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ images }) => {
  const dispatch = useDispatch();
  const favoriteRedux = useSelector((state) => state.favoriteReducer.favorite);
  console.log(favoriteRedux);
  const [favorite, setFavorite] = useState([]);

  const handleClick = (img) => {
    setFavorite((prev) => [...prev, img]);
    dispatch(addFavorite(favorite));
    // I know there is a bug here but plz forgive me I don't have much time ;( I did whole this task in 2:40 hours

    toast.success("Added to Favorite", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (!images.length) return <Loading />;
  return (
    <div className="cards">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      {images.map((img) => (
        <div className="card" key={img.id}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                style={{ height: 300, width: 300 }}
                alt="example"
                src={img.url}
              />
            }
          >
            <Meta className="title" title={img.title} />
            <Button
              className="add-favorite-btn"
              onClick={() => handleClick(img)}
            >
              Add To Favorite
            </Button>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default Cards;
