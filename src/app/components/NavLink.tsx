import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="relative inline-block px-4 py-2 uppercase transition-all duration-300 group"
    >
      <span
        className={`relative z-10 transition-colors duration-300 ${
          isActive
            ? "text-primary font-bold"
            : "text-white group-hover:text-primary"
        }`}
      >
        {children}
      </span>

      {/* Background box for active and hover states */}
      <motion.span
        className={`absolute inset-0 border-2 transition-all duration-300 ${
          isActive
            ? "bg-white border-white"
            : "bg-transparent border-transparent group-hover:bg-white group-hover:border-white"
        }`}
        layoutId={isActive ? "activeNavLink" : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {/* Alternative: Just underline style */}
      {/* {isActive && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 bottom-0 h-1 w-full bg-primary"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )} */}
    </Link>
  );
}
