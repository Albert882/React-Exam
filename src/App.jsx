import React, { useEffect, useRef, useState } from "react";
import { products } from "./dataBase/dataBase";
import { v4 as uuidv4 } from "uuid";
import Home from "./pages/Home";
import Periphery from "./pages/Periphery";
import About from "./pages/About";
import Company from "./pages/Company";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/ui/Navbar";
import Layout from "./layout/Layout";
import ReadyBuilds from "./pages/ReadyBuilds";
import ModalCart from "./Components/ui/ModalCart";
import LogModal from "./Components/ui/LogModal";
import RegisterModal from "./Components/ui/RegisterModal";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice } from "./redux/features/cart-slice";

function App() {
  const [modalCart, setModalCart] = useState(false);
  const [modalLog, setModalLog] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const modalRef = useRef();

  const handleOpenCartModal = () => {
    setModalCart(!modalCart);
  };

  const handleOpenLogModal = () => {
    setModalLog(!modalLog);
  };

  const handleShowRegister = () => {
    setModalLog(!modalLog);
    setIsRegister(!isRegister)
  }

  const handleCloseRegisterModal = () => setIsRegister(false);


  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);
  useEffect(() => {
    dispatch(getTotalPrice());
  }, [dispatch, cartItems])
  


  // useEffect(() => {
  //   const handleCloseOutside = (e) => {
  //     if (modalRef?.current && !modalRef?.current?.contains(e.target)) {
  //       setModalLog(false);
  //     }
  //   }
  //   document.addEventListener("mouseup", handleCloseOutside);

  //   return () => document.removeEventListener("mouseup", handleCloseOutside);
  // }, [])

  // modalLog || modalCart
  //   ? (document.body.style.overflowY = "hidden")
  //   : (document.body.style.overflowY = "auto");

  return (
    <div
      className=" flex items-center flex-col "
      style={{
        background:
          "rgb(25,28,54)  linear-gradient(90deg, rgba(25,28,54,1) 0%, rgba(90,144,154,1) 50%, rgba(36,74,101,1) 100%)",
      }}
    >
      {modalCart ? (
        <ModalCart handleOpenCartModal={handleOpenCartModal} modalCart={modalCart} />
      ) : null}
      {modalLog ? (
        <LogModal handleOpenLogModal={handleOpenLogModal} modalRef={modalRef} handleShowRegister={handleShowRegister}/>
      ) : null}
      {
        isRegister ? <RegisterModal handleShowRegister={handleShowRegister} handleCloseRegisterModal={handleCloseRegisterModal}/> : null
      }
      <Routes>
        <Route
          element={
            <Layout
              handleOpenCartModal={handleOpenCartModal}
              handleOpenLogModal={handleOpenLogModal}
            />
          }
        >
          <Route
            path="/"
            element={<Home handleOpenCartModal={handleOpenCartModal} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/company" element={<Company/>} />
          <Route path="/readybuilds" element={<ReadyBuilds />} />
        </Route>
        <Route path="/periphery" element={<Periphery />} />
      </Routes>
    </div>
  );
}

export default App;
