"use client"
import { useState } from "react";
import Link from "next/link";

const RelevantPeople_Card = ({ user }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <main className="bg-cards border-[1px] border-gray-500 w-[95%] h-[150px] rounded-xl flex flex-col justify-evenly pl-5">
        <h1 className="text-2xl font-bold ">Relevant people</h1>
        <Link href={`/${user.userId}`}>
          <div className="flex flex-row gap-3">
           
            <div className="flex flex-col">
              <header className="flex flex-row">
                <div>
                <p>{user.name}</p>
                <p>{user.userId}</p>
                </div>
                <button onMouseLeave={() => setIsHovered(false)} onMouseEnter={() => setIsHovered(true)} className="border-[1px] border-gray-500 rounded-full font-semibold w-24 h-10 hover:border-red-600 hover:text-red-600">{isHovered ? 'unfollow' : 'following'}</button>
              </header>
              <footer>
                {user.bio}
              </footer>
            </div>
          </div>
        </Link>
      </main>
    );
  };
  export default RelevantPeople_Card;