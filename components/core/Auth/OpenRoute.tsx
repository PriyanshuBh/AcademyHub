// This will prevent authenticated users from accessing this route

import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

function OpenRoute({ children }: any) {
  const { token } = useAuthStore();
  const Navigate = useRouter();
  if (token === null) {
    return children;
  } else {
    // return <Navigate to="/dashboard/my-profile" />
    Navigate.push("/dashboard/my-profile");
    return;
  }
}

export default OpenRoute;
