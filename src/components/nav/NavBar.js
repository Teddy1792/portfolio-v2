"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const isAdmin = true;
    const isSession = true;

    return (
        <nav className="flex flex-row justify-between w-[320px] lg:w-full">
            <h1 className='text-3xl lg:text-5xl'>THEO_AB.</h1>
            <div>
                <div className="hidden lg:flex flex-row gap-4 w-full justify-end text-3xl lg:text-5xl">
                    <Link href="/Contact">Contact</Link>
                    {isSession ? (<button>Logout</button>) : (<button>Login</button>)}
                    {isAdmin && <Link href="/admin">Admin</Link>}
                </div>
                <div className="relative flex flex-col w-full justify-end lg:hidden">
                    <button
                        className="bg-custom-text text-black text-start text-3xl p-1 pl-0 mb-2 w-[90px] h-[40px] relative"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                    <div
                        className={`absolute top-full left-0 flex flex-col gap-4 w-full text-3xl lg:text-5xl transition-all duration-300 ease-in-out transform ${
                            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                    >
                        <Link href="/Contact">Contact</Link>
                        {isSession ? (<button className="text-left">Logout</button>) : (<button className="text-left">Login</button>)}
                        {isAdmin && <Link href="/admin">Admin</Link>}
                    </div>
                </div>
            </div>
        </nav>
    );
}
