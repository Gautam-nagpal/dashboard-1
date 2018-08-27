import { store } from "../reducer/reducer";

export const resignup = e => {
  return store.dispatch({ type: "resignup", payload: e });
};
