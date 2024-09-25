//import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <nav className="text-1xl font-light text-center text-gray-400 justify-center items-center p-4 gap-4 flex">
        <ul className="flex gap-4">
          <li className="hover:underline hover:text-gray-300 transition duration-300 ease-in">
            <a href="/">Home</a>
          </li>
          <li className="hover:underline hover:text-gray-300 transition duration-300 ease-in">
            <a href="/about">About</a>
          </li>
          <li className="hover:underline hover:text-gray-300 transition duration-300 ease-in">
            <a href="/contact">Contact</a>
          </li>
          <li className="hover:underline hover:text-gray-300 transition duration-300 ease-in">
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center h-full min-h-screen">
        <h1 className="text-6xl font-extrabold">hi</h1>
        <p className="text-2xl font-light">made by william commu</p>
      </div>
      <footer className="text-center text-gray-500">
        <p>
          made by{" "}
          <a
            href="https://example.com"
            className="hover:underline"
          >
            william commu
          </a>
        </p>
      </footer>
    </div>  
  );
}
