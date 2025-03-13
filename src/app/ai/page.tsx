'use client'
import { Chat } from "@/components/Chat";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/Toggle";
import { ChatAI } from "@/components/ui/ChatAI";
import React, { useState } from 'react';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header>
        <h1 className="text-white absolute left-1/2 transform -translate-x-1/2 text-center">Welcome!</h1>
        <div className="justify-self-end p-4 ml-auto">
          <ThemeToggle />
        </div>
      </Header>


      <div className="flex h-screen overflow-x-hidden">
        <button
          className="md:hidden fixed top-4 left-4 p-2 bg-gray-800 text-white rounded z-20"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>

        <div
          className={`animate-none lg:animate-slide-right md:animate-slide-right fixed top-0 left-0 h-full w-80 p-2 bg-[#2563eb] dark:bg-slate-950 text-white transform rounded-r-md ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out md:translate-x-0 z-10`}
        >
          <div className="pt-[60px] md:p-4 lg:p-4">
            <h2 className="text-lg font-semibold">History</h2>
          </div>

          <nav className="mt-4">
            <Chat />
          </nav>
        </div>

        <div className="flex-1 pt-[60px] md:ml-64">
          <div className="grid w-full h-full items-center justify-center bg-[url('https://carcinocheck.com.br/assets/images/banner-bg.jpg')] bg-cover bg-center dark:bg-slate-900 dark:bg-none">
            <ChatAI />
          </div>
        </div>
      </div>
    </>
  );
}
