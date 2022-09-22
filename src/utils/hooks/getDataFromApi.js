import axios from "axios";

export const fetchDataFromApi = async (imagesPerPage, searchValue) => {
  const url =
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&";
  const params = `api_key=${process.env.REACT_APP_API_KEY}&text=${searchValue}&format=json&nojsoncallback=1_s&per_page=${imagesPerPage}&page=1`;
  let urlArr = [];
  const request = await axios.get(url + params);
  request.data.photos.photo.forEach((ph) => {
    const photoObj = {
      id: ph.id,
      url: `https://live.staticflickr.com/7372/${ph.id}_${ph.secret}.jpg`,
      title: ph.title,
    };
    urlArr.push(photoObj);
  });
  return urlArr;
};
