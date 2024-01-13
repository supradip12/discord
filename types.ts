// For helpiing the server-header custom server created beacause prisma doesnt give us the same
import { Server, Member, Profile } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};
