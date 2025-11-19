"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import useTheme from "./hooks/useTheme";

export default function Home() {
  const { dark } = useTheme();
  return (
    <div className="flex min-h-screen items-center justify-center">
      {dark ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}
