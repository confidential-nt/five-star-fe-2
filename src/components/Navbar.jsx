import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full max-w-6xl">
      <nav className="flex justify-center relative ">
        <div>
          <Link to="/">
            <h1 className="text-center">K-TOUR Planner</h1>
          </Link>
          <p>여행하고 싶은 곳을 CLICK! 나만의 여행 계획을 세워요</p>
        </div>
        <Link to="/" className="absolute top-0 right-0">
          로그인
        </Link>
      </nav>
    </header>
  );
}
