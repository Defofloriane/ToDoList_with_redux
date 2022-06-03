import { applyMiddleware, createStore,configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
// import {persistStore,persistReducer, PersistConfig} from "redux-persist";
// import storage  from "redux-persist/lib/storage";
// import reducer from "./reducer";


// const PersistConfig={
//   key:'main-root',
//   storage,
// }

// const persitedReducer = persistReducer(PersistConfig,reducer);
// const storee = createStore(persitedReducer,applyMiddleware());

// const Persistor = persistStore(storee);
interface Todo {
  id: number;
  done: boolean;
  text: string;
}

interface TodosSliceState {
  todos: Todo[];
}

const initialState: TodosSliceState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state:any, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length,
          text: action.payload,
          done: false,
        },
      ];
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
  
});

type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todos.todos;
// export {Persistor} ;
// export  {storee};
export default store;