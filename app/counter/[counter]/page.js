import Sidebar from "@/app/(components)/Sidebar";
import React from "react";
import Counter from "@/app/(components)/counters/Counter";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const CounterID = async ({ params }) => {
  const { counter } = params;

  const category = await prisma.category.findUnique({
    where: { id: counter },
    include: {
      counters: true,
    },
  });
//   console.log(category);
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full text-center flex flex-col gap-4">
          {category.counters.map(x => <Counter name={x.name} count={x.countValue} key={x.id}/>)}
        </div>
      </div>
    </>
  );
};

export default CounterID;
