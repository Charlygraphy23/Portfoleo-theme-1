import { init } from "@emailjs/browser";
import 'firebase/firestore';
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactMe from "./contact";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  // @ts-expect-error
  init(process.env.EMAILJS_USER_ID);


  return (
    <>

      <main>


        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />

        {children}

        {/* // Modal */}
        <ContactMe />
      </main>
    </>
  );
};

export default Layout;
