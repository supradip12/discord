import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { initialProfile } from "@/lib/initial-profile";
import InitialModal from "@/components/modals/initial-modal";

const page = async () => {
  const profile = await initialProfile();

  // User konsa server mai hai wo dhundda ga
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  // server mila to usa usma redirect ka daga
  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <InitialModal />;
};

export default page;
