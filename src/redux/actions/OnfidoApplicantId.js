import { ONFIDOAPPLICANTID } from "../Types";

export const setOnfidoId = (data) => {
    return {
      type: ONFIDOAPPLICANTID,
      payload: data,
    };
  }