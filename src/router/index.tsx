import Home from "@/pages/Home";
import { Navigate, RouteObject } from "react-router-dom";
import Article from "@/pages/Home/Article";
import Details from "@/pages/Home/Article/Details";
import React, { lazy } from "react";
import Login from "@/pages/Login";
import Profile from "@/pages/Home/User/Profile/index";
import AccountSetting from "@/pages/Home/User/AccountSetting";
import { NotFount } from "@/pages/Error/404";
import ModifyPhone from "@/pages/Home/User/AccountSetting/ModifPhone";
import ModifyEmail from "@/pages/Home/User/AccountSetting/ModifyEmail";
import ModifyPwd from "@/pages/Home/User/AccountSetting/ModifyPwd";
import AccountWriteOff from "@/pages/Home/User/AccountSetting/AccountWriteOff";
import MyArticleList from "@/pages/Home/User/MyArticleList";
import ShowLoginHistory from "@/pages/Home/User/AccountSetting/ShowLoginHistory";
import { createBrowserRouter, createHashRouter } from "react-router-dom";
import User from "@/pages/Home/User";
import Call from "@/pages/Test/Call";
import FuncComponent from "@/pages/Test/FuncComponent";
import ClassComponent from "@/pages/Test/ClassComponent";
import ReduxTest from "@/pages/Test/ReduxTest/ReduxTest";
import Error from "@/pages/Error/4xx";
const lazyRouter = (
  jsxCom: JSX.Element // 路由懒加载
) => <React.Suspense fallback={<h1>加载中</h1>}>{jsxCom}</React.Suspense>;
const routes: RouteObject[] = [
  // test start
  {
    path: "/cAll",
    element: <Call />,
  },
  {
    path: "/func",
    element: <FuncComponent />,
  },
  {
    path: "/class",
    element: <ClassComponent />,
  },
  {
    path: "/redux",
    element: <ReduxTest />,
  },
  //test end
  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },

  {
    path: "/home",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Article />,
      },
      {
        path: "article",
        element: <Article />,
      },
      {
        path: "article/details/:articleId",
        element: <Details />,
      },
      {
        //个人中心
        path: "user",
        element: <User />,
        children: [
          // 账号设置
          {
            // path: "accountSetting",
            element: <AccountSetting />,
            children: [
              {
                index: true,
                element: <></>,
                // element: React.createElement(() => <h1>hello</h1>)
              },
              {
                path: "phone/modify/:userId",
                element: <ModifyPhone />,
              },
              {
                path: "email/modify/:userId",
                element: <ModifyEmail />,
              },
              {
                path: "pwd/modify/:userId",
                element: <ModifyPwd />,
              },
              {
                path: "account/writeOff/:userId",
                element: <AccountWriteOff />,
              },
              {
                path: "showLoginHistory/:userId",
                element: <ShowLoginHistory />,
              },
            ],
          },
          {
            path: "accountSetting",
            element: <Navigate to={"/home/user"} replace />,
          },
          //内容管理
          {
            path: "myArticleList",
            element: <MyArticleList />,
          },
          // 个人资料
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/404",
    element: <NotFount />,
  },
  {
    path: "/*",
    element: < Error />,
  },
];

const router = createBrowserRouter(routes);
//router放到App.tsx,routers是作为createBrowserRouter的参数
export { router, routes };
