import {
  TENIMAGESPERPAGE,
  TWENTYIMAGESPERPAGE,
  FIFTYIMAGESPERPAGE,
} from "./ImagesPerPageTypes";

export const tenImagesPerPage = () => {
  return { type: TENIMAGESPERPAGE };
};
export const twentyImagesPerPage = () => {
  return { type: TWENTYIMAGESPERPAGE };
};

export const fiftyImagesPerPage = () => {
  return { type: FIFTYIMAGESPERPAGE };
};
