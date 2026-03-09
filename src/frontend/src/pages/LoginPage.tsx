import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  Eye,
  EyeOff,
  GraduationCap,
  Lock,
  LogIn,
  Mail,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen mesh-bg flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4 pt-20">
        <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-card-hover">
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative hero-bg p-12 hidden lg:flex flex-col justify-between overflow-hidden noise-overlay"
          >
            {/* Floating elements */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-16 right-12 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"
                animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Mail size={28} className="text-violet-300" />
              </motion.div>
              <motion.div
                className="absolute bottom-24 left-8 w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                animate={{ y: [8, -8, 8], rotate: [3, -3, 3] }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Lock size={22} className="text-indigo-300" />
              </motion.div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-12">
                <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center shadow-brand">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <span className="font-display font-bold text-xl text-white">
                  Knowledge<span className="text-violet-300">Loop</span>
                </span>
              </div>

              <h2 className="font-display text-4xl font-extrabold text-white leading-tight mb-4">
                Welcome back, <br />
                <span className="text-violet-300">Scholar!</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Sign in to access your notes, track your earnings, and help
                thousands of students learn smarter.
              </p>

              <div className="space-y-3">
                {[
                  "Access your uploaded resources",
                  "Track purchases and earnings",
                  "Discover new study materials",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-400/20 border border-violet-400/30 flex items-center justify-center shrink-0">
                      <Sparkles size={10} className="text-violet-300" />
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center text-white text-xs font-bold">
                    P
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">
                      Priya Sharma
                    </p>
                    <p className="text-white/50 text-xs">
                      NIT Bangalore · CSE 3rd Year
                    </p>
                  </div>
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  "Earned ₹12,400 in 3 months by sharing my ML notes. Best side
                  income ever!"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-card p-10 flex flex-col justify-center"
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-1 lg:hidden">
                <div className="w-7 h-7 rounded-lg gradient-brand flex items-center justify-center">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <span className="font-display font-bold text-base text-foreground">
                  Knowledge<span className="text-violet-500">Loop</span>
                </span>
              </div>
              <h1 className="font-display text-3xl font-extrabold text-foreground mb-1.5">
                Sign In
              </h1>
              <p className="text-muted-foreground text-sm">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary font-medium hover:underline"
                >
                  Sign up free
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium text-sm">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id="email"
                    type="email"
                    placeholder="aryan@college.edu"
                    className={`pl-10 h-12 transition-all focus:ring-2 focus:ring-primary/30 ${
                      errors.email ? "border-destructive" : ""
                    }`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email)
                        setErrors((p) => ({ ...p, email: undefined }));
                    }}
                    data-ocid="login.email_input"
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <p
                    className="text-destructive text-xs flex items-center gap-1"
                    data-ocid="login.email_error"
                  >
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="font-medium text-sm">
                    Password
                  </Label>
                  <button
                    type="button"
                    className="text-xs text-primary hover:underline font-medium"
                    data-ocid="login.forgot_password_link"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`pl-10 pr-10 h-12 transition-all focus:ring-2 focus:ring-primary/30 ${
                      errors.password ? "border-destructive" : ""
                    }`}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password)
                        setErrors((p) => ({ ...p, password: undefined }));
                    }}
                    data-ocid="login.password_input"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p
                    className="text-destructive text-xs flex items-center gap-1"
                    data-ocid="login.password_error"
                  >
                    <AlertCircle size={12} /> {errors.password}
                  </p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <Checkbox
                  id="rememberMe"
                  checked={rememberMe}
                  onCheckedChange={(v) => setRememberMe(!!v)}
                  data-ocid="login.remember_me_checkbox"
                />
                <Label
                  htmlFor="rememberMe"
                  className="text-sm font-normal cursor-pointer text-muted-foreground"
                >
                  Remember me for 30 days
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 gradient-brand text-white border-0 font-semibold text-base gap-2 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-brand"
                data-ocid="login.submit_button"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn size={18} />
                    Sign In
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-secondary rounded-xl">
              <p className="text-xs text-muted-foreground text-center">
                Demo credentials:{" "}
                <span className="font-mono text-foreground font-medium">
                  demo@college.edu
                </span>{" "}
                /{" "}
                <span className="font-mono text-foreground font-medium">
                  password123
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
