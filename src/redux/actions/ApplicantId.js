import { APPLICANTID } from "../Types";

export const setApplicantId = (data) => {
    return {
      type: APPLICANTID,
      payload: data,
    };
  }