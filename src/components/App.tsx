import { createBrowserRouter, RouterProvider } from "react-router-dom";

enum Routes {
  Homepage = "/",
}

const router = createBrowserRouter([
  {
    path: Routes.Homepage,
    element: <div>Hello world!</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
