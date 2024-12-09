"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

/**
 * LoginPage component that handles phone & OTP based authentication.
 * Implements a two-step login process with phone number verification followed by OTP verification.
 * Features responsive design, input validation, loading states, and a clean UI.
 *
 * Key Features:
 * - Two-step authentication (phone -> OTP)
 * - Phone number validation (10 digits only)
 * - 6-digit OTP input with separated slots
 * - Loading states during API calls
 * - Responsive design with mobile-first approach
 * - Dark mode support
 * - Gradient backgrounds and animations
 *
 * @component
 * @returns {JSX.Element} The rendered login page component
 */
export default function LoginPage() {
  // Track current authentication step (phone input or OTP verification)
  const [step, setStep] = useState<"phone" | "otp">("phone");

  // Store user input values
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  // Track loading state during API calls
  const [loading, setLoading] = useState(false);

  // Resend OTP timer state
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  /**
   * Handles the phone number form submission.
   * Validates phone number and initiates OTP sending process.
   *
   * @param {React.FormEvent} e - Form submission event
   */
  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call to send OTP
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStep("otp");
    setResendTimer(30); // Start 30 second timer
    setLoading(false);
  };

  /**
   * Handles the OTP verification form submission.
   * Validates OTP and completes authentication process.
   *
   * @param {React.FormEvent} e - Form submission event
   */
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call to verify OTP
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Handle successful login here
    setLoading(false);
  };

  /**
   * Handles resending of OTP
   * Clears current OTP and starts resend timer
   */
  const handleResendOTP = async () => {
    setLoading(true);
    setOtp(""); // Clear current OTP
    // Simulate API call to resend OTP
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setResendTimer(30); // Reset timer to 30 seconds
    setLoading(false);
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-green-950 dark:via-black dark:to-green-950 p-4 sm:p-6">
      <Card className="w-full max-w-md shadow-xl border-0 backdrop-blur-sm bg-white/80 dark:bg-black/80">
        <CardHeader className="space-y-4 p-4 sm:p-6">
          <CardTitle className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-sm sm:text-base font-medium">
            {step === "phone"
              ? "Enter your phone number to login"
              : "Enter the 6-digit code sent to your phone"}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          {step === "phone" ? (
            <form
              onSubmit={handlePhoneSubmit}
              className="space-y-6 sm:space-y-8"
            >
              <div className="space-y-2 sm:space-y-3">
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                    setPhone(onlyNums);
                  }}
                  className="text-base sm:text-lg tracking-wide text-center rounded-xl h-10 sm:h-12 transition-all duration-300 focus:scale-[1.02]"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                />
                <p className="text-xs sm:text-sm text-muted-foreground text-center font-medium">
                  Enter 10-digit mobile number
                </p>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transition-all duration-300 text-sm sm:text-base py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-green-500/25"
                disabled={loading || phone.length !== 10}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Sending OTP...
                  </span>
                ) : (
                  "Send OTP"
                )}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-6 sm:space-y-8">
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                  className="gap-2 sm:gap-4"
                >
                  <InputOTPGroup>
                    <InputOTPSlot
                      index={0}
                      className="w-10 h-10 sm:w-14 sm:h-14 text-base sm:text-lg rounded-xl transition-all duration-300 hover:border-green-500"
                    />
                    <InputOTPSlot
                      index={1}
                      className="w-10 h-10 sm:w-14 sm:h-14 text-base sm:text-lg rounded-xl transition-all duration-300 hover:border-green-500"
                    />
                    <InputOTPSlot
                      index={2}
                      className="w-10 h-10 sm:w-14 sm:h-14 text-base sm:text-lg rounded-xl transition-all duration-300 hover:border-green-500"
                    />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot
                      index={3}
                      className="w-10 h-10 sm:w-14 sm:h-14 text-base sm:text-lg rounded-xl transition-all duration-300 hover:border-green-500"
                    />
                    <InputOTPSlot
                      index={4}
                      className="w-10 h-10 sm:w-14 sm:h-14 text-base sm:text-lg rounded-xl transition-all duration-300 hover:border-green-500"
                    />
                    <InputOTPSlot
                      index={5}
                      className="w-10 h-10 sm:w-14 sm:h-14 text-base sm:text-lg rounded-xl transition-all duration-300 hover:border-green-500"
                    />
                  </InputOTPGroup>
                </InputOTP>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {`Didn't receive code?`}
                  {resendTimer > 0 ? (
                    <span className="text-green-600">
                      Resend in {resendTimer}s
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      disabled={loading}
                      className="text-green-600 hover:text-green-500 transition-colors font-semibold hover:underline disabled:opacity-50 disabled:hover:no-underline"
                    >
                      Resend
                    </button>
                  )}
                </p>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transition-all duration-300 text-sm sm:text-base py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-green-500/25"
                disabled={loading || otp.length !== 6}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Verifying...
                  </span>
                ) : (
                  "Verify OTP"
                )}
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full hover:text-green-600 hover:bg-green-50/50 dark:hover:bg-green-950/50 rounded-xl font-medium text-sm sm:text-base"
                onClick={() => {
                  setStep("phone");
                  setOtp(""); // Clear OTP when going back
                  setResendTimer(0); // Reset timer
                }}
                disabled={loading}
              >
                Change Phone Number
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
