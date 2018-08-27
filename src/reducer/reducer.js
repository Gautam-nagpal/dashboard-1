import { createStore } from "redux";

export let initialstate = {
  storage: []
};

export let login = (state = initialstate, action) => {
  if (action.type === "resignup") {
    let { storage } = state;
    storage = [...storage, action.payload];
    let abc = state;
    abc = JSON.stringify(storage);
    console.log("valueeeee", storage);
    localStorage.setItem("data", abc);

    return { ...state, storage };
  }
};

export const store = createStore(login);

store.subscribe(() => {
  console.log(store.getState());
});
