import {
  createBrowserRouter,
} from "react-router-dom";
import { Products } from "./pages/products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
]);