/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaAngleDoubleRight,
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="p-10 bg-base-200 text-base-content ">
        <footer className="footer pb-5 mx-auto max-w-screen-xl">
          <aside>
            <nav className="text-[#00bcc2] font-bold text-4xl"> Taskgain</nav>
            <div className="my-2">
              <a className="link link-hover ">
                {" "}
                <div>
                  <a className="link link-hover ">
                    {" "}
                    <div className="flex gap-2">
                      <FaLocationArrow className="text-[#00bcc2] text-2xl" />{" "}
                      <span className="font-bold">LOCATION</span>
                    </div>
                    <div>
                      <p>
                        205 Olazu Familia, Herba
                        <br /> Street Front USA
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-2">
                  <a className="link link-hover ">
                    {" "}
                    <div className="flex gap-2 ">
                      <MdAttachEmail className="text-[#00bcc2] text-2xl" />{" "}
                      <span className="font-bold"> EMAIL US</span>
                    </div>
                    <div>
                      <p>support@gmail.com</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a className="link link-hover ">
                    {" "}
                    <div className="flex gap-2">
                      <FaPhone className="text-[#00bcc2] text-2xl" />{" "}
                      <span className="font-bold">CALL US</span>
                    </div>
                    <div>
                      <p>002- 01008431112</p>
                    </div>
                  </a>
                </div>
              </a>
            </div>
          </aside>
          <nav>
            <header className="footer-title text-bold text-gray-600 text-xl">
              Task Categories
            </header>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              Work from Home
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              to-do list
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              ongoing list,
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              completed list
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              my task
            </a>
          </nav>
          <nav>
            <header className="footer-title text-gray-600 text-xl">
              Task Type
            </header>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              Create Account
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              Career Counselingt
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              My Oficiona
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              FAQ
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              Report a Problem
            </a>
          </nav>
          <nav>
            <header className="footer-title text-gray-600 text-xl">
              Resources
            </header>

            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              My Account
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              Support
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              How It Works
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              Underwriting
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              {" "}
              <FaAngleDoubleRight className="text-[#00bcc2]"></FaAngleDoubleRight>{" "}
              Employers
            </a>
          </nav>
        </footer>
        <footer className="footer footer-center px-10 bg-base-200 text-base-content rounded">
          <div className="max-w-screen-xl mx-auto ">
            <hr></hr>

            <div className="lg:flex  align-items-center justify-content-center gap-3  py-4">
              {/* <img
                src="https://opencart.dostguru.com/PT01/petshop_02/image/catalog/app1.png"
                alt=""
              /> */}
              <img
                src="https://opencart.dostguru.com/PT01/petshop_02/image/catalog/app2.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center text-4xl gap-3">
              <a>
                <Link to="https://www.twitter.com/ ">
                  <FaTwitter className="text-[#1DA1F2] text-4xl"></FaTwitter>
                </Link>
              </a>
              <a>
                <Link to="https://www.youtube.com/">
                  <FaYoutube className="text-[#FF0000]"></FaYoutube>
                </Link>
              </a>
              <a>
                <Link to="https://www.facebook.com/">
                  <FaFacebook className="text-[#4267B2]"></FaFacebook>
                </Link>
              </a>
              {/* <a>
                <FaGooglePlus className="text-[#1976D2]"></FaGooglePlus>
              </a> */}
              <a>
                <Link to="https://www.linkedin.com/">
                  <FaLinkedin className="text-[#0077b5]"></FaLinkedin>
                </Link>
              </a>
              <a>
                <Link to="https://www.instagram.com/">
                  <FaInstagramSquare className="text-[#C13584]"></FaInstagramSquare>
                </Link>
              </a>
            </div>
            <p className="text-center my-2 text-gray-500">
              Copyright © 2023 Task Management Platform. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
