import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import MyTask from "../Pages/MyTask/MyTask";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import AddTask from "../Pages/DashBoard/AddTask";
import Profile from "../Pages/DashBoard/Profile";
import TodoTask from "../Pages/DashBoard/TodoTask";
import Ongoing from "../Pages/DashBoard/Ongoing";
import Previous from "../Pages/DashBoard/Previous";
import UpdateTodoTask from "../Pages/DashBoard/UpdateTodoTask";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/mytask",
        element: <MyTask></MyTask>,
        loader: () =>
          fetch("https://task-management-paltform-server.vercel.app/tasks"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "addtask",
        element: <AddTask></AddTask>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "todoTask",
        element: <TodoTask></TodoTask>,
        loader: () =>
          fetch("https://task-management-paltform-server.vercel.app/tasks"),
      },
      {
        path: "ongoing",
        element: <Ongoing></Ongoing>,
      },
      {
        path: "previous",
        element: <Previous></Previous>,
      },
      {
        path: "updatetodotask/:id",
        element: <UpdateTodoTask></UpdateTodoTask>,
        loader: ({ params }) =>
          fetch(
            `https://task-management-paltform-server.vercel.app/tasks/${params.id}`
          ),
      },
    ],
  },
]);
