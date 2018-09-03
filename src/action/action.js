import { store } from "../reducer/reducer";

export const resignup = e => {
  return store.dispatch({ type: "resignup", payload: e });
};

export const willmount = e => {
  return store.dispatch({ type: "willmount", payload: e });
};

export const Addcollection = e => {
  return store.dispatch({ type: "add_collection", payload: e });
};
