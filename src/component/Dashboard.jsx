import React, { useState } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

function Dashboard({ open, setOpen }) {
  // const [open, setOpen] = useState(true);

  const openbar = () => {
    open ? setOpen(false) : setOpen(true);
    // className = "newbtn";
  };

  return (
    <>
      <div className="header-container bg-gray-800">
        <div>
          <i
            onClick={() => {
              openbar();
            }}
            class="hover:scale-110 transition-all pl-5 pb-5 text-3xl fa-solid fa-bars"
          ></i>
        </div>
        <form onSubmit="" className="form-contant">
          <input id="inp1" required type="text" />
          <label htmlFor="inp1">Search Here</label>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={open ? "close" : "z-10 box-container"}>
        <a className="icons" href="#">
          <i class="fa-solid fa-house"></i>
        </a>{" "}
        <label htmlFor="">
          {" "}
          <button className="newbtn">Dashboard</button>
        </label>
        <a className={"icons"} href="#">
          <Link to="login">
            {" "}
            <i class="fa-solid fa-user"></i>{" "}
          </Link>
        </a>
        <label htmlFor="">
          {" "}
          <Link to="login">
            {" "}
            <button className="newbtn">Profile</button>{" "}
          </Link>
        </label>
        <a className={"icons"} href="#">
          <i class="fa-solid fa-chart-simple"></i>
        </a>
        <label htmlFor="">
          {" "}
          <button className="newbtn">Leaderboard</button>
        </label>
        <a className={"icons"} href="#">
          <i class="fa-solid fa-cart-shopping"></i>
        </a>
        <label htmlFor="">
          {" "}
          <button className="newbtn">Orders</button>
        </label>
        <a className={"icons"} href="#">
          <i class="fa-solid fa-truck"></i>
        </a>
        <label htmlFor="">
          {" "}
          <button className="newbtn">Track order</button>
        </label>
        <a className={"icons"} href="#">
          <Link to="order">
            {" "}
            <i class="fa-solid fa-server"></i>{" "}
          </Link>
        </a>
        <label htmlFor="">
          {" "}
          <Link to="order">
            {" "}
            <button className="newbtn">Manage orders</button>
          </Link>
        </label>
      </div>
    </>
  );
}

export default Dashboard;