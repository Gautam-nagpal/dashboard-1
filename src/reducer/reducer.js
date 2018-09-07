import { createStore } from "redux";

export let initialstate = {
  storage: [],
  collections: []
};

export let login = (state = initialstate, action) => {
  if (action.type === "resignup") {
    let { storage } = state;
    storage = [...storage, action.payload];

    localStorage.setItem("data", JSON.stringify(storage));
    return { ...state, storage };
  }
  //
  //
  else if (action.type === "willmount") {
    if (action.payload === null) {
      alert("null data ");
    } else {
      let { storage } = state;
      storage = action.payload;

      return { ...state, storage };
    }
  }
  //
  //
  else if (action.type === "add_collection") {
    let { collections } = state;
    collections = [...collections, action.payload];
    return { ...state, collections };
  }
  //
  //
  else if (action.type === "addcollection_data") {
    let { collections } = state;
    collections[action.payload.index].data = [
      ...collections[action.payload.index].data,
      action.payload.data
    ];
    return { ...state, collections };
  }
  //
  //
  else if (action.type === "adddetails") {
    let { collections } = state;

    collections[action.payload.classindex].data[
      action.payload.nameindex
    ][0].details = action.payload.data;
    return { ...state, collections };
  }

  //
  //
  else if (action.type === "deletedetails") {
    let { collections } = state;
    collections[action.payload.classindex].data[
      action.payload.nameindex
    ][0].details = action.payload.data;
    return { ...state, collections };
  }
};

export const store = createStore(login);

store.subscribe(() => {
  console.log("current state", store.getState());
});
