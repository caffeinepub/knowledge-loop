import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  BookOpen,
  Building2,
  Camera,
  CheckCircle,
  ChevronRight,
  Eye,
  EyeOff,
  GraduationCap,
  Hash,
  Layers,
  Lock,
  Mail,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

interface FormData {
  profilePhoto: File | null;
  fullName: string;
  collegeName: string;
  enrollmentNumber: string;
  branch: string;
  year: string;
  semester: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  fullName?: string;
  collegeName?: string;
  enrollmentNumber?: string;
  branch?: string;
  year?: string;
  semester?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const branches = [
  "Computer Science Engineering",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Information Technology",
  "Chemical Engineering",
  "Biotechnology",
  "Aerospace Engineering",
  "Other",
];

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    profilePhoto: null,
    fullName: "",
    collegeName: "",
    enrollmentNumber: "",
    branch: "",
    year: "",
    semester: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profilePhoto: file }));
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    else if (formData.fullName.length < 2)
      newErrors.fullName = "Name must be at least 2 characters";

    if (!formData.collegeName.trim())
      newErrors.collegeName = "College name is required";
    if (!formData.enrollmentNumber.trim())
      newErrors.enrollmentNumber = "Enrollment number is required";
    if (!formData.branch) newErrors.branch = "Please select your branch";
    if (!formData.year) newErrors.year = "Please select your year";
    if (!formData.semester) newErrors.semester = "Please select your semester";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const inputClass = (field: keyof FormErrors) =>
    `pl-10 h-12 transition-all focus:ring-2 focus:ring-primary/30 ${
      errors[field]
        ? "border-destructive focus:border-destructive"
        : "border-border focus:border-primary"
    }`;

  if (submitSuccess) {
    return (
      <div className="min-h-screen mesh-bg flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-card rounded-2xl p-12 text-center shadow-card-hover max-w-md w-full border border-border"
          >
            <div className="w-20 h-20 rounded-full gradient-brand flex items-center justify-center mx-auto mb-6 shadow-brand">
              <CheckCircle size={36} className="text-white" />
            </div>
            <h2 className="font-display text-3xl font-extrabold text-foreground mb-3">
              Welcome to KnowledgeLoop!
            </h2>
            <p className="text-muted-foreground mb-8">
              Your account has been created successfully. Start exploring or
              upload your first resource.
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/explore">
                <Button
                  className="w-full gradient-brand text-white border-0 font-semibold h-12"
                  data-ocid="register.success.explore_button"
                >
                  Explore Notes
                </Button>
              </Link>
              <Link to="/profile">
                <Button
                  variant="outline"
                  className="w-full h-12 font-medium"
                  data-ocid="register.success.profile_button"
                >
                  Go to My Profile
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mesh-bg">
      <Navbar />
      <main className="pt-20 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-10 pt-8"
          >
            <div className="inline-flex items-center gap-2 mb-4 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full border border-indigo-100">
              <GraduationCap size={16} />
              <span className="text-sm font-medium">Join Knowledge Loop</span>
            </div>
            <h1 className="font-display text-4xl font-extrabold text-foreground mb-3 tracking-tight">
              Create Your Account
            </h1>
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-8"
          >
            {/* Profile Photo */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-28 h-28 rounded-full bg-secondary border-2 border-dashed border-border group-hover:border-primary/50 overflow-hidden flex items-center justify-center transition-all group-hover:scale-[1.02]"
                  data-ocid="register.upload_button"
                  aria-label="Upload profile photo"
                >
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <Camera size={28} />
                      <span className="text-xs font-medium">Upload Photo</span>
                    </div>
                  )}
                </button>
                {photoPreview && (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-0 right-0 w-8 h-8 rounded-full gradient-brand border-2 border-white flex items-center justify-center shadow-sm"
                    aria-label="Change photo"
                  >
                    <Camera size={14} className="text-white" />
                  </button>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
              <p className="text-xs text-muted-foreground">
                JPG, PNG or WebP. Max 5MB.
              </p>
            </div>

            {/* Personal Info */}
            <div className="space-y-5">
              <h3 className="font-display font-bold text-sm text-muted-foreground uppercase tracking-widest">
                Personal Information
              </h3>

              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="font-medium text-sm">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id="fullName"
                    placeholder="Aryan Mehta"
                    className={inputClass("fullName")}
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    data-ocid="register.fullname_input"
                  />
                </div>
                {errors.fullName && (
                  <p
                    className="text-destructive text-xs flex items-center gap-1"
                    data-ocid="register.fullname_error"
                  >
                    <AlertCircle size={12} /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* College Name */}
              <div className="space-y-2">
                <Label htmlFor="collegeName" className="font-medium text-sm">
                  College Name <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Building2
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id="collegeName"
                    placeholder="Indian Institute of Technology"
                    className={inputClass("collegeName")}
                    value={formData.collegeName}
                    onChange={(e) =>
                      handleInputChange("collegeName", e.target.value)
                    }
                    data-ocid="register.college_input"
                  />
                </div>
                {errors.collegeName && (
                  <p
                    className="text-destructive text-xs flex items-center gap-1"
                    data-ocid="register.college_error"
                  >
                    <AlertCircle size={12} /> {errors.collegeName}
                  </p>
                )}
              </div>

              {/* Enrollment Number */}
              <div className="space-y-2">
                <Label
                  htmlFor="enrollmentNumber"
                  className="font-medium text-sm"
                >
                  College Enrollment Number{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Hash
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id="enrollmentNumber"
                    placeholder="2021CSE0045"
                    className={inputClass("enrollmentNumber")}
                    value={formData.enrollmentNumber}
                    onChange={(e) =>
                      handleInputChange("enrollmentNumber", e.target.value)
                    }
                    data-ocid="register.enrollment_input"
                  />
                </div>
                {errors.enrollmentNumber && (
                  <p
                    className="text-destructive text-xs flex items-center gap-1"
                    data-ocid="register.enrollment_error"
                  >
                    <AlertCircle size={12} /> {errors.enrollmentNumber}
                  </p>
                )}
              </div>

              {/* Branch */}
              <div className="space-y-2">
                <Label className="font-medium text-sm">
                  Branch <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <BookOpen
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none"
                  />
                  <Select
                    value={formData.branch}
                    onValueChange={(v) => handleInputChange("branch", v)}
                  >
                    <SelectTrigger
                      className={`pl-10 h-12 ${errors.branch ? "border-destructive" : ""}`}
                      data-ocid="register.branch_select"
                    >
                      <SelectValue placeholder="Select your branch" />
                    </SelectTrigger>
                    <SelectContent>
                      {branches.map((b) => (
                        <SelectItem key={b} value={b}>
                          {b}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {errors.branch && (
                  <p
                    className="text-destructive text-xs flex items-center gap-1"
                    data-ocid="register.branch_error"
                  >
                    <AlertCircle size={12} /> {errors.branch}
                  </p>
                )}
              </div>

              {/* Year & Semester */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-medium text-sm">
                    Year <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <GraduationCap
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none"
                    />
                    <Select
                      value={formData.year}
                      onValueChange={(v) => handleInputChange("year", v)}
                    >
                      <SelectTrigger
                        className={`pl-10 h-12 ${errors.year ? "border-destructive" : ""}`}
                        data-ocid="register.year_select"
                      >
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {["1st Year", "2nd Year", "3rd Year", "4th Year"].map(
                          (y) => (
                            <SelectItem key={y} value={y}>
                              {y}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  {errors.year && (
                    <p
                      className="text-destructive text-xs flex items-center gap-1"
                      data-ocid="register.year_error"
                    >
                      <AlertCircle size={12} /> {errors.year}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="font-medium text-sm">
                    Semester <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Layers
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none"
                    />
                    <Select
                      value={formData.semester}
                      onValueChange={(v) => handleInputChange("semester", v)}
                    >
                      <SelectTrigger
                        className={`pl-10 h-12 ${errors.semester ? "border-destructive" : ""}`}
                        data-ocid="register.semester_select"
                      >
                        <SelectValue placeholder="Sem" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                          <SelectItem key={s} value={String(s)}>
                            Semester {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {errors.semester && (
                    <p
                      className="text-destructive text-xs flex items-center gap-1"
                      data-ocid="register.semester_error"
                    >
                      <AlertCircle size={12} /> {errors.semester}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Account Info */}
            <div className="space-y-5">
              <h3 className="font-display font-bold text-sm text-muted-foreground uppercase tracking-widest">
                Account Details
              </h3>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium text-sm">
                  Email Address <span className="text-destructive">*</span>
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
                    className={inputClass("email")}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    data-ocid="register.email_input"
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <p
                    className="text-destructive text-xs flex items-center gap-1"
                    data-ocid="register.email_error"
                  >
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="font-medium text-sm">
                  Password <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 8 characters"
                    className={`${inputClass("password")} pr-10`}
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    data-ocid="register.password_input"
                    autoComplete="new-password"
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
                    data-ocid="register.password_error"
                  >
                    <AlertCircle size={12} /> {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="font-medium text-sm"
                >
                  Confirm Password <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Repeat your password"
                    className={`${inputClass("confirmPassword")} pr-10`}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    data-ocid="register.confirm_password_input"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p
                    className="text-destructive text-xs flex items-center gap-1"
                    data-ocid="register.confirm_password_error"
                  >
                    <AlertCircle size={12} /> {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 gradient-brand text-white border-0 font-semibold text-base gap-2 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-brand"
              data-ocid="register.submit_button"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <ChevronRight size={18} />
                </>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              By creating an account, you agree to our{" "}
              <button type="button" className="text-primary hover:underline">
                Terms of Service
              </button>{" "}
              and{" "}
              <button type="button" className="text-primary hover:underline">
                Privacy Policy
              </button>
            </p>
          </motion.form>
        </div>
      </main>
    </div>
  );
}
