import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  ChevronRight,
  DollarSign,
  FileText,
  ShoppingCart,
  Sparkles,
  Star,
  TrendingUp,
  Upload,
  UserPlus,
  Users,
  Video,
  Wallet,
  Zap,
} from "lucide-react";
import { type Variants, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: Upload,
    title: "Upload Notes",
    description:
      "Share your handwritten notes, solved guides, and study materials as PDF with students who need them most.",
    color: "from-indigo-500 to-indigo-600",
    badge: "For Sellers",
    points: ["PDF & Image support", "Instant publish", "Set your own price"],
  },
  {
    icon: DollarSign,
    title: "Sell Knowledge",
    description:
      "Monetize your hard work. Set your price, reach thousands of students, and earn passive income from your notes.",
    color: "from-violet-500 to-purple-600",
    badge: "Earn Money",
    points: ["80% revenue share", "Instant payouts", "Sales analytics"],
  },
  {
    icon: BookOpen,
    title: "Learn Smarter",
    description:
      "Buy peer-written notes and video lectures. Learn from students who aced the same courses.",
    color: "from-blue-500 to-indigo-500",
    badge: "For Learners",
    points: ["Verified resources", "Preview before buy", "Lifetime access"],
  },
];

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Profile",
    description:
      "Sign up with your college details and set up your student profile in under 2 minutes.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    number: "02",
    icon: Upload,
    title: "Upload Notes or Lectures",
    description:
      "Upload your study materials — handwritten notes, guides, or recorded video lectures.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "Students Purchase",
    description:
      "Your resources go live on the marketplace. Students browse and buy instantly.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    number: "04",
    icon: Wallet,
    title: "You Earn Money",
    description:
      "Get paid directly to your account. No middlemen. 80% of every sale is yours.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

const stats = [
  { label: "Active Students", value: "12,400+", icon: Users },
  { label: "Resources Shared", value: "38,200+", icon: FileText },
  { label: "Earned by Students", value: "₹42L+", icon: TrendingUp },
  { label: "Avg. Rating", value: "4.8★", icon: Star },
];

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen hero-bg flex items-center overflow-hidden noise-overlay"
      >
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-[10%] w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: "oklch(0.56 0.26 295 / 0.25)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "oklch(0.42 0.22 265 / 0.2)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            {
              icon: FileText,
              pos: "top-32 left-[12%]",
              delay: 0,
              color: "text-indigo-300",
            },
            {
              icon: DollarSign,
              pos: "top-48 right-[15%]",
              delay: 1,
              color: "text-violet-300",
            },
            {
              icon: BookOpen,
              pos: "bottom-40 left-[8%]",
              delay: 2,
              color: "text-blue-300",
            },
            {
              icon: Video,
              pos: "bottom-32 right-[12%]",
              delay: 0.5,
              color: "text-violet-300",
            },
            {
              icon: Zap,
              pos: "top-[45%] left-[20%]",
              delay: 1.5,
              color: "text-indigo-200",
            },
            {
              icon: Star,
              pos: "top-[35%] right-[8%]",
              delay: 2.5,
              color: "text-yellow-300",
            },
          ].map(({ icon: Icon, pos, delay, color }, i) => (
            <motion.div
              key={pos}
              className={`absolute ${pos} ${color} opacity-50`}
              animate={{
                y: i % 2 === 0 ? [-10, 10, -10] : [10, -10, 10],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay,
              }}
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 pt-20 pb-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              className="space-y-8"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="gap-1.5 bg-white/10 text-white border-white/20 hover:bg-white/15 px-3 py-1.5">
                  <Sparkles size={12} />
                  <span>India's Student Knowledge Marketplace</span>
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight"
              >
                Turn Your{" "}
                <span className="relative">
                  <span className="gradient-brand-text">Notes</span>
                </span>{" "}
                Into{" "}
                <span className="relative">
                  <span className="text-violet-300">Income</span>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-white/70 max-w-lg leading-relaxed"
              >
                Upload your notes, guides, or lectures and help students while
                earning money. Join thousands of students already monetizing
                their knowledge.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link to="/explore">
                  <Button
                    size="lg"
                    className="bg-white text-indigo-700 hover:bg-white/90 font-semibold text-base px-8 gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                    data-ocid="hero.start_learning_button"
                  >
                    Start Learning
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold text-base px-8 gap-2 transition-all"
                    data-ocid="hero.start_earning_button"
                  >
                    Start Earning
                    <ChevronRight size={18} />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-6 pt-2"
              >
                <div className="flex -space-x-2">
                  {["A", "P", "R", "S"].map((l) => (
                    <div
                      key={l}
                      className="w-8 h-8 rounded-full gradient-brand border-2 border-indigo-900 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div className="text-white/60 text-sm">
                  <span className="text-white font-semibold">
                    12,400+ students
                  </span>{" "}
                  already earning
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Hero Image + Stats */}
            <motion.div
              className="relative"
              style={{ y: heroY }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {/* Hero illustration */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-gradient-to-br from-indigo-900/80 via-purple-900/60 to-indigo-800/80 p-8 flex items-center justify-center min-h-[340px]">
                  {/* Inline SVG illustration: student uploading notes and earning */}
                  <svg
                    viewBox="0 0 480 340"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-lg"
                    role="img"
                    aria-label="Student uploading notes and earning money"
                  >
                    <title>Knowledge Loop Hero Illustration</title>
                    {/* Background glow */}
                    <defs>
                      <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
                        <stop
                          offset="0%"
                          stopColor="#818cf8"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#818cf8"
                          stopOpacity="0"
                        />
                      </radialGradient>
                      <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
                        <stop
                          offset="0%"
                          stopColor="#a78bfa"
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="100%"
                          stopColor="#a78bfa"
                          stopOpacity="0"
                        />
                      </radialGradient>
                    </defs>
                    <ellipse
                      cx="240"
                      cy="180"
                      rx="200"
                      ry="130"
                      fill="url(#glow1)"
                    />

                    {/* Desk */}
                    <rect
                      x="80"
                      y="240"
                      width="320"
                      height="14"
                      rx="7"
                      fill="#312e81"
                      opacity="0.7"
                    />

                    {/* Laptop */}
                    <rect
                      x="160"
                      y="180"
                      width="160"
                      height="100"
                      rx="10"
                      fill="#1e1b4b"
                    />
                    <rect
                      x="168"
                      y="188"
                      width="144"
                      height="80"
                      rx="6"
                      fill="#4f46e5"
                    />
                    {/* Screen content lines */}
                    <rect
                      x="178"
                      y="200"
                      width="60"
                      height="6"
                      rx="3"
                      fill="#a5b4fc"
                    />
                    <rect
                      x="178"
                      y="212"
                      width="90"
                      height="5"
                      rx="2.5"
                      fill="#818cf8"
                      opacity="0.7"
                    />
                    <rect
                      x="178"
                      y="222"
                      width="75"
                      height="5"
                      rx="2.5"
                      fill="#818cf8"
                      opacity="0.5"
                    />
                    <rect
                      x="178"
                      y="232"
                      width="50"
                      height="5"
                      rx="2.5"
                      fill="#818cf8"
                      opacity="0.4"
                    />
                    {/* Upload icon on screen */}
                    <circle cx="280" cy="218" r="18" fill="#6366f1" />
                    <polyline
                      points="272,222 280,214 288,222"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="280"
                      y1="214"
                      x2="280"
                      y2="226"
                      stroke="#fff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="274"
                      y1="226"
                      x2="286"
                      y2="226"
                      stroke="#fff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Laptop base */}
                    <rect
                      x="148"
                      y="278"
                      width="184"
                      height="10"
                      rx="5"
                      fill="#312e81"
                    />

                    {/* Student figure (right side) */}
                    {/* Head */}
                    <circle cx="370" cy="170" r="26" fill="#fbbf24" />
                    {/* Hair */}
                    <ellipse cx="370" cy="150" rx="26" ry="14" fill="#92400e" />
                    {/* Body */}
                    <rect
                      x="346"
                      y="195"
                      width="48"
                      height="60"
                      rx="10"
                      fill="#4f46e5"
                    />
                    {/* Arms */}
                    <rect
                      x="318"
                      y="200"
                      width="32"
                      height="12"
                      rx="6"
                      fill="#fbbf24"
                    />
                    <rect
                      x="394"
                      y="200"
                      width="32"
                      height="12"
                      rx="6"
                      fill="#fbbf24"
                    />
                    {/* Smile */}
                    <path
                      d="M362 177 Q370 184 378 177"
                      fill="none"
                      stroke="#92400e"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    {/* Eyes */}
                    <circle cx="363" cy="170" r="3" fill="#1e1b4b" />
                    <circle cx="377" cy="170" r="3" fill="#1e1b4b" />

                    {/* Notes stack (left side) */}
                    <rect
                      x="80"
                      y="195"
                      width="70"
                      height="90"
                      rx="6"
                      fill="#e0e7ff"
                      transform="rotate(-8,115,240)"
                    />
                    <rect
                      x="88"
                      y="192"
                      width="70"
                      height="90"
                      rx="6"
                      fill="#c7d2fe"
                      transform="rotate(-3,123,237)"
                    />
                    <rect
                      x="96"
                      y="190"
                      width="70"
                      height="90"
                      rx="6"
                      fill="#fff"
                    />
                    <rect
                      x="106"
                      y="202"
                      width="40"
                      height="5"
                      rx="2.5"
                      fill="#6366f1"
                    />
                    <rect
                      x="106"
                      y="213"
                      width="50"
                      height="4"
                      rx="2"
                      fill="#a5b4fc"
                    />
                    <rect
                      x="106"
                      y="222"
                      width="45"
                      height="4"
                      rx="2"
                      fill="#a5b4fc"
                      opacity="0.7"
                    />
                    <rect
                      x="106"
                      y="231"
                      width="30"
                      height="4"
                      rx="2"
                      fill="#a5b4fc"
                      opacity="0.5"
                    />

                    {/* Arrow from notes to laptop */}
                    <path
                      d="M166 235 Q185 220 200 220"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="2.5"
                      strokeDasharray="6,4"
                      strokeLinecap="round"
                      markerEnd="url(#arrowhead)"
                    />
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="8"
                        markerHeight="6"
                        refX="8"
                        refY="3"
                        orient="auto"
                      >
                        <polygon points="0 0, 8 3, 0 6" fill="#6366f1" />
                      </marker>
                    </defs>

                    {/* Coin / earning badge */}
                    <circle
                      cx="340"
                      cy="130"
                      r="28"
                      fill="#fbbf24"
                      opacity="0.15"
                    />
                    <circle cx="340" cy="130" r="20" fill="#f59e0b" />
                    <text
                      x="340"
                      y="136"
                      textAnchor="middle"
                      fontSize="18"
                      fill="#fff"
                      fontWeight="bold"
                    >
                      $
                    </text>

                    {/* Small floating icons */}
                    <circle
                      cx="130"
                      cy="130"
                      r="16"
                      fill="#6366f1"
                      opacity="0.2"
                    />
                    <circle cx="130" cy="130" r="11" fill="#4f46e5" />
                    <text
                      x="130"
                      y="135"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#fff"
                    >
                      📄
                    </text>

                    <circle
                      cx="420"
                      cy="260"
                      r="14"
                      fill="#a78bfa"
                      opacity="0.2"
                    />
                    <circle cx="420" cy="260" r="10" fill="#7c3aed" />
                    <text
                      x="420"
                      y="264"
                      textAnchor="middle"
                      fontSize="10"
                      fill="#fff"
                    >
                      ★
                    </text>
                  </svg>
                </div>

                {/* Floating stat cards */}
                <motion.div
                  className="absolute -left-8 top-1/4 glass rounded-xl p-3 shadow-card"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <TrendingUp size={16} className="text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        This month
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        ₹8,240 earned
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-4 bottom-1/4 glass rounded-xl p-3 shadow-card"
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 4.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                      <Users size={16} className="text-violet-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Students reached
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        842 buyers
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="glass rounded-xl p-4 text-center"
              >
                <p className="font-display text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 mesh-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16 space-y-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-indigo-50 text-indigo-600 border-indigo-100 hover:bg-indigo-100 px-3 py-1.5">
                Platform Features
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight"
            >
              Everything You Need to{" "}
              <span className="gradient-brand-text">Succeed</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Whether you're a knowledge creator or an eager learner, Knowledge
              Loop has the tools to help you grow.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="card-lift bg-card rounded-2xl p-8 shadow-card border border-border group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-brand group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="text-white" size={26} />
                </div>
                <Badge className="mb-3 text-xs bg-secondary text-secondary-foreground border-0">
                  {feature.badge}
                </Badge>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <CheckCircle
                        size={14}
                        className="text-indigo-500 shrink-0"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-indigo-950 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 60% at 50% 0%, oklch(0.42 0.22 265 / 0.3) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-16 space-y-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/15 px-3 py-1.5">
                Simple Process
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
            >
              How It <span className="text-violet-400">Works</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/60 text-lg max-w-xl mx-auto"
            >
              Four simple steps to start earning from your knowledge — takes
              less than 10 minutes to get started.
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-y-1/2" />

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="relative text-center group"
                >
                  {/* Step number connector */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mx-auto border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <step.icon size={28} className={step.color} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <span className="text-white/70 text-[10px] font-bold">
                        {i + 1}
                      </span>
                    </div>
                  </div>
                  <p
                    className={`font-display font-bold text-4xl mb-2 ${step.color} opacity-30`}
                  >
                    {step.number}
                  </p>
                  <h3 className="font-display text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 hero-bg relative overflow-hidden noise-overlay">
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/15 px-3 py-1.5">
            <Sparkles size={12} className="mr-1.5" />
            Ready to Begin?
          </Badge>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            Your Notes Are Worth <br />
            <span className="text-violet-300">More Than You Think</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Join 12,400+ students who are already sharing knowledge and earning
            money. Start today — free forever.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-white text-indigo-700 hover:bg-white/90 font-semibold text-base px-10 gap-2 shadow-lg hover:scale-[1.02] transition-all"
                data-ocid="cta.register_button"
              >
                Create Free Account
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/explore">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-10"
                data-ocid="cta.explore_button"
              >
                Explore Notes
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
