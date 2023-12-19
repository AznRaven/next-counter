import Link from 'next/link'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const Sidebar = async() => {
  const categories = await prisma.category.findMany();


  return (
    <>
      <div>
        <div className="flex flex-col gap-3">
          {categories.map((x) => (
            <div className="">
              <Link href={`/counter/${x.id}`}>
                <div
                  key={x.id}
                  className="text-sm hover:bg-slate-300 w-24 text-center"
                >
                  {x.name}
                </div>
              </Link>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
