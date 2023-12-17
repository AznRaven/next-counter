import React from "react";
import Counter from "../(components)/counters/counter";
import Sidebar from "../(components)/Sidebar";

async function getCategories() {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
}

const CounterPage = async () => {
  const categories = await getCategories();
  return (
    <main className="px-10 py-10 border flex justify-around">
      <div className="w-1/5 flex flex-col gap-4">
        <Sidebar categories={categories} />
      </div>
      <div className="w-3/5 flex flex-col justify-center items-center border">
        <Counter />
      </div>
    </main>
  );
};

export default CounterPage;
