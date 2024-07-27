import { auth } from "@/auth";

export default async function handler() {
  const authUser = await auth();
 return authUser?.user;
}