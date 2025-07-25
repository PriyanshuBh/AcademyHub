import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

import useLoadingBarStore from "@/store/useLoadingBarStore";
import useAuthStore from "@/store/useAuthStore";
import useProfileStore from "@/store/useProfileStore";
import useCartStore from "@/store/useCartStrore";

interface ApiError extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints;

export async function sendOtp(email: string, router: (path: string) => void) {
  const { setLoading } = useAuthStore.getState();
  const { setProgress } = useLoadingBarStore.getState();

  // const toastId = toast.loading("Loading...")
  console.log("in send otp authapi");
  setLoading(true);
  try {
    const response = await apiConnector("POST", SENDOTP_API, {
      email,
      checkUserPresent: true,
    });
    setProgress(100);
    console.log("SENDOTP API RESPONSE............", response);

    console.log(response.data.success);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("OTP Sent Successfully");
    router("/verify-email");
  } catch (error) {
    console.log("SENDOTP API ERROR............", error);
    const errorMessage =
      (error as any)?.response?.data?.message ||
      "Something went wrong. Please try again.";
    toast.error(errorMessage);
    setProgress(100);
  }
  setLoading(false);
  // toast.dismiss(toastId)
}

export async function signUp(
  accountType: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  otp: string,
  router: (path: string) => void
) {
  const { setLoading } = useAuthStore.getState();
  const { setProgress } = useLoadingBarStore.getState();

  const toastId = toast.loading("Loading...");
  setLoading(true);
  try {
    console.log("signUp apiConnector is calling");
    const response = await apiConnector("POST", SIGNUP_API, {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      otp,
    });

    console.log("SIGNUP API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    setProgress(100);
    toast.success("Signup Successful");
    login(email, password, router);
    // router("/login");
  } catch (error) {
    setProgress(100);
    console.log("SIGNUP API ERROR............", error);
    toast.error("Signup Failed");
    router("/signup");
  }
  setLoading(false);
  toast.dismiss(toastId);
}

export async function login(
  email: string,
  password: string,
  router: (path: string) => void
) {
  const { setLoading, setToken } = useAuthStore.getState();
  const { setUser } = useProfileStore.getState();
  const { setProgress } = useLoadingBarStore.getState();

  console.log(" IN login api function");
  const toastId = toast.loading("Loading...");
  setLoading(true);
  try {
    const response = await apiConnector("POST", LOGIN_API, {
      email,
      password,
    });

    console.log("LOGIN API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    setProgress(100);
    toast.success("Login Successful");
    setToken(response.data.token);
    const userImage = response.data?.user?.image
      ? response.data.user.image
      : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
    setUser({ ...response.data.user, image: userImage });
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    router("/dashboard/my-profile");
  } catch (error) {
    setProgress(100);
    console.log("LOGIN API ERROR............", error);
    const errorMessage =
      (error as any)?.response?.data?.message ||
      "Something went wrong. Please try again.";
    toast.error(errorMessage);
  }
  setLoading(false);
  toast.dismiss(toastId);
}

export async function getPasswordResetToken(email: string, setEmailSent: any) {
  const { setLoading } = useAuthStore.getState();

  const toastId = toast.loading("Loading...");
  setLoading(true);
  try {
    const response = await apiConnector("POST", RESETPASSTOKEN_API, {
      email,
    });

    console.log("RESETPASSTOKEN RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Reset Email Sent");
    setEmailSent(true);
  } catch (error) {
    console.log("RESETPASSTOKEN ERROR............", error);
    toast.error("Failed To Send Reset Email");
  }
  toast.dismiss(toastId);
  setLoading(false);
}

export async function resetPassword(
  password: string,
  confirmPassword: string,
  token: any,
  setresetComplete: any
) {
  const { setLoading } = useAuthStore.getState();

  const toastId = toast.loading("Loading...");
  setLoading(true);
  try {
    const response = await apiConnector("POST", RESETPASSWORD_API, {
      password,
      confirmPassword,
      token,
    });

    console.log("RESETPASSWORD RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Password Reset Successfully");
    setresetComplete(true);
  } catch (error) {
    console.log("RESETPASSWORD ERROR............", error);
    toast.error("Failed To Reset Password");
  }
  toast.dismiss(toastId);
  setLoading(false);
}

export function logout(router: (path: string) => void) {
  const { setToken } = useAuthStore.getState();
  const { resetCart } = useCartStore.getState();
  const { setUser } = useProfileStore.getState();
  setToken(null);
  setUser(null);
  resetCart();
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  toast.success("Logged Out");
  router("/");
}

export async function forgotPassword(email: string, setEmailSent: any) {
  const { setLoading } = useAuthStore.getState();

  // const toastId = toast.loading("Loading...")
  setLoading(true);
  try {
    const response = await apiConnector("POST", RESETPASSTOKEN_API, {
      email,
    });

    console.log("FORGOTPASSWORD RESPONSE............", response);

    if (!response.data.success) {
      toast.error(response.data.message);
      throw new Error(response.data.message);
    }

    toast.success("Reset Email Sent");
    setEmailSent(true);
  } catch (error) {
    console.log("FORGOTPASSWORD ERROR............", error);
  }
  // toast.dismiss(toastId)
  setLoading(false);
}
