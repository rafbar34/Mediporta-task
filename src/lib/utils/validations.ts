import { errorTostify } from "./errorUtils";

export const inputNumberValidations = (value: number) => {
  if (value < 100 && value > 0) {
    return true;
  } else {
    errorTostify("You have to enter number between 1-99");
    return false;
  }
};
