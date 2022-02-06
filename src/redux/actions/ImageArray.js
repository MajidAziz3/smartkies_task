import { IMAGE_ARRAY } from "../Types";

export const setImagesArray = (data) => {
    return {
      type: IMAGE_ARRAY,
      payload: data,
    };
  }