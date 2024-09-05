import { MainProps } from "@/types/main";
import RectangleShape from "../atoms/RectangleShape";

export default function Main({ children }: MainProps) {
  return (
    <main className="relative mx-auto mt-20 w-full max-w-7xl p-4 sm:px-8 lg:px-16">
      <RectangleShape />
      {children}
    </main>
  );
}
