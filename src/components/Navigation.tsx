'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center space-x-8", className)}>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
} 