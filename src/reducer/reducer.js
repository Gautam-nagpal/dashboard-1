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
};

export const store = createStore(login);

store.subscribe(() => {
  console.log("current state", store.getState());
});
