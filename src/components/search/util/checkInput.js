import { isValidIPAddress } from "./isValidIPAddress";
import { isValidDomain } from "./isValidDomain";

export const checkInput = (input) => {
  const isValidIP = isValidIPAddress(input);
  const isValidDOMAIN = isValidDomain(input);

  console.log(isValidDOMAIN);
  console.log(isValidIP);

  if (isValidDOMAIN || isValidIP) {
    return true;
  } else {
    return false;
  }
};
