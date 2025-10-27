import Header from "../components/Header";
import ProtectedRoute from "../components/helper/ProtectedRoute";
import User from "../components/user/User";
import NotFound from "../NotFound";
import Login from "../components/login/Login";
import Home from "../components/Home";
import Footer from "../components/Footer";
import UserContext from "../UserContext";

import styles from "./Page.module.css";

import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Photo from "../components/photo/Photo";
import UserProfile from "../components/user/UserProfile";

const Page = () => {
  const { modalPhoto } = useContext(UserContext);
  return (
    <div className={`App ${styles.page} ${modalPhoto && styles.hasModal}`}>
      <Header />
      <main className="AppBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route
            path="account/*"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route path="picture/:id" element={<Photo />} />
          <Route path="profile/:user" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      {modalPhoto && (
        <style>
          {`
        body {
          overflow: clip;
        }
        `}
        </style>
      )}
    </div>
  );
};

export default Page;
