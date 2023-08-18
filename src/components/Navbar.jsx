import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full max-w-6xl border-b border-b-black py-2">
      <nav className="flex justify-center relative">
        <div>
          <Link to="/">
            <h1 className="text-center text-xl lg:text-2xl font-semibold">
              K-TOUR Planner
            </h1>
          </Link>
          <p className="text-center text-sm lg:text-base font-light">
            여행하고 싶은 곳을 CLICK! 나만의 여행 계획을 세워요
          </p>
        </div>
        <Link to="/login" className="absolute top-0 right-4 lg:right-0">
          로그인
        </Link>
      </nav>
    </header>
  );
}
