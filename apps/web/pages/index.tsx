import type { NextPage } from "next";
import HomePage from "@/components/HomePage";

const Home: NextPage = () => {
  return (
    <main className="px-5 md:w-3/4 md:m-auto">
      <HomePage />
    </main>
  );
};

export default Home;
