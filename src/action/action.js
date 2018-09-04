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

export const Addcollection_data = (data, index) => {
  return store.dispatch({
    type: "addcollection_data",
    payload: { data: data, index: index }
  });
};

export const Adddetails = (data, classindex, nameindex) => {
  return store.dispatch({
    type: "adddetails",
    payload: { data: data, classindex: classindex, nameindex: nameindex }
  });
};
