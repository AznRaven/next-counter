import React from "react";
import Sidebar from "../(components)/Sidebar";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// async function getCategories() {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch categories");
//   }
//   return res.json();
// }


const CounterPage = async () => {
  // const categories = await getCategories();
  // await prisma.category.create({
  //   data: {
  //     name: 'Excercise',
  //     counters: {
  //       create: {
  //         name: 'Pushups',
  //         countValue: 5,
  //       },
  //     },
  //   },
  // })

  const categories = await prisma.category.findMany({
    include:{
      counters: true
    }
  })
  console.dir(categories,{depth: null})
  return (
    <main className="px-10 py-10 border flex">
      <div className="w-1/5 flex flex-col gap-4">
        <Sidebar categories={categories} id={categories.id}/>
      </div>
      {/* <div className="w-3/5 flex flex-col justify-center items-center border">
        <Counter />
      </div> */}
    </main>
  );
};

export default CounterPage;
