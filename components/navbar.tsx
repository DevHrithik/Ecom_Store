import { UserButton } from "@clerk/nextjs";
import React from "react";
import MainNav from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prisma.store.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <div>
          <StoreSwitcher items={stores} />
        </div>
        <div>
          <MainNav className="mx-6" />
        </div>
        <div className="ml-auto flex items-center">
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
