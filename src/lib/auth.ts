import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function getUser() {
  const { getUser } = getKindeServerSession();
  return getUser();
}

export async function isAuthenticated() {
  const user = await getUser();
  return !!user;
}
