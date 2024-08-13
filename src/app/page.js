import Image from "next/image";
import Navbar from "./Components/Navbar";

import Categories from "./Components/Categories";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Categories />
    </main>
  );
}
