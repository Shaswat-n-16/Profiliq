import "../pages/header.css";
// import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { toast } from "react-hot-toast";

import swal from "sweetalert";

import { Button } from "@material-tailwind/react";
export default function Header() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    swal({
      title: "Are you sure you want to logout?",
      text: "You will be logged out of the system.",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((value) => {
      if (value) {
        setAuth({
          ...auth,
          user: null,
          token: "",
        });
        localStorage.removeItem("portfolio");
        localStorage.removeItem("auth");
        toast.success("Logged out Successfully!");

        window.location.href = "/";
      }
    });
  };

  return (
    <div>
      {/* <!-- component --> */}
      <div className="bg-gray-100 font-sans w-full m-0">
        <div className="bg-white shadow">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div class=" head w-10 h-10 text-purple-600" viewBox="0 0 24 24">
                <h1>profoliqs</h1>
              </div>

              <div className=" contents hidden sm:flex sm:items-center">
                <a
                  href="/"
                  className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-6"
                >
                  Home
                </a>
                <a
                  href="/whatarewe"
                  className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-6"
                >
                  What are we?
                </a>
                <a
                  href="profiliqs"
                  className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-6"
                >
                  Profiliqs
                </a>
                <a
                  href="/go-premium"
                  className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-6"
                >
                  Pricing
                </a>
                <a
                  href="/aboutus"
                  className="text-gray-800 text-sm font-semibold hover:text-purple-600"
                >
                  About us
                </a>
              </div>

              <div className=" content hidden sm:flex sm:items-center">
                {!auth.user ? (
                  <Button
                    variant="text"
                    type="submit"
                    color="blue"
                    onClick={() => navigate("/login")}
                    className="flex items-center gap-2"
                  >
                    Log In{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                ) : (
                  <>
                    <div className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                      Welcome ,{auth.user.name}
                    </div>
                    <Button
                      variant="text"
                      color="blue"
                      onClick={handleLogout}
                      className="flex items-center gap-2"
                    >
                      Log out
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
