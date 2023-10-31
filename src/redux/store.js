import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.redux";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: userReducer,
});
const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

export { store, useAppDispatch, useAppSelector };
  