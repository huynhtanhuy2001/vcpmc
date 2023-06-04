import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "./firebase/cofig";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { addInfoCurrentUser } from "./redux/slice/authSlice";
import { IParams } from "./types/index";

const generatePage = (name: string) => {
  let checkName =
    name.indexOf("reset-password") !== -1 ||
    name.indexOf("forgot-password") !== -1 ||
    name.indexOf("sendlink-resetpw") !== -1 ||
    name.indexOf("linkpage-error") !== -1
      ? true
      : false;
  if (!checkName) {
    const page = () => require(`./pages/${name}`).default;

    try {
      return React.createElement(page());
    } catch (error) {
      return <h2> Not Found</h2>;
    }
  } else {
    const page = () => require(`./pages`).default;

    try {
      return React.createElement(page());
    } catch (error) {
      return <h2> Not Found</h2>;
    }
  }
};

const PageRender = () => {

  const { page, control, id }: IParams = useParams();
 
  let name = "";
  if (page) {
    name = `${page}`;
  }

  return generatePage(name);
};

export default PageRender;

