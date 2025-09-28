"use client";

import Link from "next/link";
import React from "react";
import logo from "./../../../screens/freshcart-logo.svg";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const {data , status} = useSession();

  signOut

  return (
    <div className=" bg-slate-200 py-5">
      <div className=" w-full md:w-[80%] mx-auto flex flex-col md:flex-row text-center justify-between items-center">
        {/* logo && links */}

        <ul className="flex flex-col md:flex-row text-center gap-6">


{status ==="authenticated" && <>

  <li>
            <Link href="/">
              <Image src={logo} alt="Logo" />
            </Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/category">Category</Link>
          </li>
          <li>
            <Link href="/brands">Brands</Link>
          </li>

</>}

{status  === "loading"&&<>

<h1>loading</h1></>}


{status === "unauthenticated" && (
  <Image src={logo} alt="logo" />
)}


        
        </ul>

        {/*icons && buttons*/}

        <div className="flex flex-col md:flex-row text-center gap-2">
          <div>
            <ul className="flex flex-row items-center gap-4">

              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col md:flex-row text-center gap-2">
        
				{status ==="authenticated" && <>

 <div>
            <button>Logout</button>
          </div>

</>}


{status === "unauthenticated" && (<>
<li>
                <Link href="/login">Login</Link>
             </li>
              <li>
                <Link href="/register">Register</Link>
              </li></>)}

            </ul>
          </div>

          <div>
            <button className="cursor-pointer" onClick={()=>signOut({
				callbackUrl:"/login"

			})}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;
