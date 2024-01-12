import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";
import NavigationAction from "./navigation-action";

const NavigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) return redirect("/");

  // All the servers this user part of
  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
      <NavigationAction />
    </div>
  );
};

export default NavigationSidebar;
