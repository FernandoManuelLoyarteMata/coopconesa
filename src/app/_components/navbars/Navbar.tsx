"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../../public/coopConesaLogoSVG.svg";
import { MdMenu } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
  ];
  const pathname = usePathname();

  return (
    <div className=" px-8 md:px-20  flex justify-between items-center h-16 bg-white text-primary shadow-sm fixed w-full lg:px-40 z-50 ">
      <div className="flex items-center gap-4 select-none ">
        <Image src={logo} alt="logo" className="h-8 w-8" />
        {/* Texto visible solo en md y tamaños menores */}
        <div className="font-bold lg:hidden block">CoopConesa</div>
        {/* Texto visible solo en lg y tamaños mayores */}
        <div className="font-bold lg:block hidden leading-[100%]">
          Cooperativa Integral de Agua, Obras,
          <br /> y Servicios Públicos de Conesa Ltda.
        </div>
      </div>
      <div>
        <div className=" items-center md:flex hidden font-bold select-none gap-4   ">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`relative py-1 ${
                  pathname === link.href
                    ? "after:content-[''] after:block after:w-full after:h-[3px] after:bg-primary after:absolute after:bottom-0 after:left-0"
                    : ""
                }`}
              >
                <span className="text-primary">{link.label}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <MdMenu className="text-primary w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
