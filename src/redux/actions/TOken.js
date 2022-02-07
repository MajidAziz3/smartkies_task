import { TOKEN } from "../Types";

export const setToken = (data) => {
    return {
      type: TOKEN,
      payload: data,
    };
  }