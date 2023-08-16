import React from "react";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function Login() {
  return (
    <section className="w-full h-full max-w-6xl flex justify-center items-center">
      <h2 className="hidden">로그인페이지</h2>
      <div className="bg-slate-100  w-full md:w-2/5 lg:w-2/5 px-6 py-3 -translate-y-1/4">
        <h2 className="mb-3">
          간편<strong>로그인</strong>
        </h2>
        <a
          href="#none"
          className="flex items-center bg-naver text-white mb-3  relative after:w-full after:bg-black after:absolute after:h-full after:opacity-20 after:hidden hover:after:block"
        >
          <span className="flex justify-center items-center p-3 border-r basis-1/6 text-center">
            <SiNaver />
          </span>
          <span className="p-3 basis-5/6 text-center">
            네이버 아이디로 로그인
          </span>
        </a>
        <a
          href="#none"
          className="flex items-center bg-kakao relative after:w-full after:bg-black after:absolute after:h-full after:opacity-20 after:hidden hover:after:block"
        >
          <span className="flex justify-center items-center p-3 border-r basis-1/6 text-2xl">
            <RiKakaoTalkFill />
          </span>
          <span className="p-3 basis-5/6 text-center">
            카카오 아이디로 로그인
          </span>
        </a>
      </div>
    </section>
  );
}
