import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="md:flex items-center justify-center px-6 sticky inset-0">
      <div className="max-w-[1180px] w-full flex items-center justify-between h-24">
        <Image src="/logo.png" width={64} height={64} alt="" />

        <button className="md:hidden text-dark-blue-400">
          <FaBars size={32} />
        </button>

        <nav className="md:flex hidden items-center justify-center list-none gap-8 font-bold uppercase text-lg text-dark-blue-400">
          <li>
            <Link href="" className="hover:text-orange-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-orange-400 transition-colors">
              Sobre nós
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-orange-400 transition-colors">
              Nossa liderança
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-orange-400 transition-colors">
              Contato
            </Link>
          </li>
        </nav>
      </div>
    </header>
  );
};

export { Header };
