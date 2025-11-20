import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function ForgetPassword() {
  const [step, setStep] = useState(1); // 1: kirim email, 2: verifikasi OTP, 3: reset password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/forget-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();
      if (result.Success) {
        setMessage("OTP sent to your email! Please check your inbox.");
        setStep(2); 
        setOtp(""); 
      } else {
        setMessage(result.Message);
      }
    } catch (err) {
      setMessage("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!otp) {
      setMessage("Please enter OTP");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const result = await res.json();
      if (result.Success) {
        setMessage("OTP verified successfully!");
        setStep(3);
      } else {
        setMessage(result.Message);
      }
    } catch (err) {
      setMessage("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (newPassword !== confirmPassword) {
      setMessage("Password and confirm password do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/new-password`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, new_password: newPassword }),
      });

      const result = await res.json();
      if (result.Success) {
        setMessage("Password updated successfully! You can now login.");
        setStep(1);
        setEmail("");
        setOtp("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setMessage(result.Message);
      }
    } catch (err) {
      setMessage("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full max-w-md mx-auto mt-10">
      {message && <p className="text-sm text-red-500">{message}</p>}

      {step === 1 && (
        <form onSubmit={handleEmailSubmit} className="flex flex-col gap-5">
          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />
          <Button disabled={loading}>{loading ? "Sending..." : "Send OTP"}</Button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOtpVerify} className="flex flex-col gap-5">
          <Input
            label="OTP"
            name="otp"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP from email"
          />
          <Button disabled={loading}>{loading ? "Verifying..." : "Verify OTP"}</Button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleResetPassword} className="flex flex-col gap-5">
          <Input
            label="New Password"
            name="new_password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter New Password"
          />
          <Input
            label="Confirm Password"
            name="confirm_password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm New Password"
          />
          <Button disabled={loading}>{loading ? "Updating..." : "Reset Password"}</Button>
        </form>
      )}
    </div>
  );
}
