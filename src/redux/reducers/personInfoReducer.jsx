import * as CryptoJS from "crypto-js";
import { SECRET_KEY } from "../../environment";

const initialState = {
  personInfo: "",
};
const encryptedPersonData = sessionStorage.getItem("personInfo")
  ? sessionStorage.getItem("personInfo")
  : "";
if (encryptedPersonData) {
  const decryptedPersonData = CryptoJS.AES.decrypt(
    encryptedPersonData,
    SECRET_KEY
  ).toString(CryptoJS.enc.Utf8);
  initialState.personInfo = JSON.parse(decryptedPersonData);
}

const personInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PERSON_INFO":
      const encryptPersonData = CryptoJS.AES.encrypt(
        JSON.stringify(action.personInfo),
        SECRET_KEY
      ).toString();
      sessionStorage.setItem("personInfo", encryptPersonData);
      return {
        ...state,
        personInfo: action.personInfo,
      };
    default:
      return state;
  }
};

export default personInfoReducer;
