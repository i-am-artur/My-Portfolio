import { useRouter } from "next/router";

export function basePath() {
  const router = useRouter();
  return router.basePath;
}
