import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Clock,
  FileText,
  Filter,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Star,
  TrendingUp,
  Video,
  X,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { useMemo, useState } from "react";

type ResourceType = "All" | "Notes" | "Guide" | "Video";

const filterTabs: ResourceType[] = ["All", "Notes", "Guide", "Video"];

const mockResources = [
  {
    id: 1,
    title: "Data Structures & Algorithms — Complete Handwritten Notes",
    subject: "DSA",
    seller: "Aryan Mehta",
    college: "IIT Delhi",
    type: "Notes" as const,
    price: 149,
    rating: 4.9,
    sales: 842,
    views: 3240,
    description:
      "Complete DSA notes covering arrays, trees, graphs, dynamic programming with solved examples.",
    color: "from-indigo-400 to-indigo-600",
    badge: "Best Seller",
    badgeColor: "bg-amber-100 text-amber-700",
    pages: 84,
    date: "Dec 2024",
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals — Video Lecture Series",
    subject: "ML",
    seller: "Priya Sharma",
    college: "NIT Bangalore",
    type: "Video" as const,
    price: 499,
    rating: 4.8,
    sales: 631,
    views: 2180,
    description:
      "12-lecture series covering supervised/unsupervised learning, neural networks, and real-world projects.",
    color: "from-violet-400 to-purple-600",
    badge: "New",
    badgeColor: "bg-emerald-100 text-emerald-700",
    pages: 12,
    date: "Jan 2025",
  },
  {
    id: 3,
    title: "DBMS Complete Study Guide — All Exam Topics",
    subject: "DBMS",
    seller: "Rohan Das",
    college: "VIT Vellore",
    type: "Guide" as const,
    price: 199,
    rating: 4.7,
    sales: 1204,
    views: 4890,
    description:
      "Comprehensive DBMS guide with ER diagrams, normalization, SQL queries, and transaction management.",
    color: "from-blue-400 to-cyan-500",
    badge: "Trending",
    badgeColor: "bg-blue-100 text-blue-700",
    pages: 120,
    date: "Nov 2024",
  },
  {
    id: 4,
    title: "Operating Systems — Lecture Notes & PYQs",
    subject: "OS",
    seller: "Sneha Patel",
    college: "BITS Pilani",
    type: "Notes" as const,
    price: 129,
    rating: 4.6,
    sales: 489,
    views: 1960,
    description:
      "Detailed OS notes covering processes, threads, memory management, and file systems with PYQ solutions.",
    color: "from-emerald-400 to-teal-500",
    badge: "Popular",
    badgeColor: "bg-violet-100 text-violet-700",
    pages: 72,
    date: "Oct 2024",
  },
  {
    id: 5,
    title: "System Design Primer — Interview Preparation Guide",
    subject: "System Design",
    seller: "Karan Gupta",
    college: "IIT Bombay",
    type: "Guide" as const,
    price: 349,
    rating: 4.9,
    sales: 723,
    views: 3100,
    description:
      "Prepare for system design interviews with real-world examples: Twitter, Netflix, Uber architecture.",
    color: "from-orange-400 to-red-500",
    badge: "Premium",
    badgeColor: "bg-orange-100 text-orange-700",
    pages: 96,
    date: "Jan 2025",
  },
  {
    id: 6,
    title: "Computer Networks — Video Lectures (Complete)",
    subject: "CN",
    seller: "Ananya Singh",
    college: "DTU Delhi",
    type: "Video" as const,
    price: 299,
    rating: 4.7,
    sales: 368,
    views: 1420,
    description:
      "8 video lectures covering OSI model, TCP/IP, routing protocols, and network security.",
    color: "from-pink-400 to-rose-500",
    badge: "New",
    badgeColor: "bg-emerald-100 text-emerald-700",
    pages: 8,
    date: "Jan 2025",
  },
  {
    id: 7,
    title: "Discrete Mathematics — Formula Sheet & Notes",
    subject: "Discrete Math",
    seller: "Rahul Verma",
    college: "NIT Trichy",
    type: "Notes" as const,
    price: 89,
    rating: 4.5,
    sales: 921,
    views: 3680,
    description:
      "Compact formula sheet and notes for discrete math: sets, logic, graph theory, combinatorics.",
    color: "from-yellow-400 to-amber-500",
    badge: "Best Value",
    badgeColor: "bg-amber-100 text-amber-700",
    pages: 48,
    date: "Sep 2024",
  },
  {
    id: 8,
    title: "Software Engineering — Agile & Design Patterns Guide",
    subject: "SE",
    seller: "Divya Menon",
    college: "PESIT Bangalore",
    type: "Guide" as const,
    price: 179,
    rating: 4.6,
    sales: 452,
    views: 1840,
    description:
      "Complete software engineering guide covering SDLC, design patterns, Agile methodology, and UML.",
    color: "from-cyan-400 to-blue-500",
    badge: "Trending",
    badgeColor: "bg-blue-100 text-blue-700",
    pages: 88,
    date: "Dec 2024",
  },
];

const sortOptions = [
  { label: "Most Popular", value: "popular", icon: TrendingUp },
  { label: "Newest", value: "newest", icon: Clock },
  { label: "Top Rated", value: "rating", icon: Star },
  { label: "Top Sellers", value: "sales", icon: Award },
];

const typeIcons = {
  Notes: FileText,
  Guide: BookOpen,
  Video: Video,
};

const typeColors = {
  Notes: "text-indigo-600 bg-indigo-50",
  Guide: "text-blue-600 bg-blue-50",
  Video: "text-violet-600 bg-violet-50",
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<ResourceType>("All");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = mockResources;

    if (activeFilter !== "All") {
      result = result.filter((r) => r.type === activeFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.subject.toLowerCase().includes(q) ||
          r.seller.toLowerCase().includes(q),
      );
    }

    result = [...result].sort((a, b) => {
      if (sortBy === "popular") return b.views - a.views;
      if (sortBy === "newest") return b.id - a.id;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "sales") return b.sales - a.sales;
      return 0;
    });

    return result;
  }, [search, activeFilter, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="hero-bg pt-16 noise-overlay">
        <div className="container mx-auto px-4 py-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <Badge className="mb-4 bg-white/10 text-white border-white/20 hover:bg-white/15 px-3 py-1.5">
              <Search size={12} className="mr-1.5" />
              Browse Resources
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
              Explore <span className="text-violet-300">Knowledge</span>
            </h1>
            <p className="text-white/60 max-w-md mx-auto">
              Discover notes, guides, and video lectures from top students
              across India.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="text"
                placeholder="Search by subject, topic, or seller name..."
                className="pl-12 pr-12 h-14 text-base rounded-xl glass border-white/30 focus:border-white/60 focus:ring-2 focus:ring-white/20 placeholder:text-muted-foreground/60 bg-white/90 backdrop-blur-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                data-ocid="explore.search_input"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters & Content */}
      <main className="container mx-auto px-4 py-10">
        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
        >
          {/* Type Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {filterTabs.map((tab) => (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === tab
                    ? "gradient-brand text-white shadow-brand"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                data-ocid={`explore.${tab.toLowerCase()}_tab`}
              >
                {tab}
                {tab !== "All" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({mockResources.filter((r) => r.type === tab).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Sort & Filter */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              data-ocid="explore.filter_toggle"
            >
              <SlidersHorizontal size={15} />
              Sort & Filter
            </button>
          </div>
        </motion.div>

        {/* Sort Options (collapsible) */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-secondary rounded-xl p-4 mb-6 flex flex-wrap gap-3"
          >
            <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5 shrink-0">
              <Filter size={14} /> Sort by:
            </span>
            {sortOptions.map((opt) => (
              <button
                type="button"
                key={opt.value}
                onClick={() => setSortBy(opt.value)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  sortBy === opt.value
                    ? "gradient-brand text-white"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                <opt.icon size={13} />
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            resources
            {search && (
              <span>
                {" "}
                for "<span className="text-primary font-medium">{search}</span>"
              </span>
            )}
          </p>
        </div>

        {/* Resources Grid */}
        {filtered.length > 0 ? (
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            animate="visible"
            key={`${activeFilter}-${sortBy}-${search}`}
          >
            {filtered.map((resource, i) => {
              const Icon = typeIcons[resource.type];
              const typeStyle = typeColors[resource.type];
              return (
                <motion.div
                  key={resource.id}
                  variants={fadeInUp}
                  className="card-lift bg-card rounded-2xl overflow-hidden shadow-card border border-border group flex flex-col"
                  data-ocid={`explore.item.${i + 1}`}
                >
                  {/* Card Visual */}
                  <div
                    className={`h-36 bg-gradient-to-br ${resource.color} flex items-center justify-center relative shrink-0`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${typeStyle}`}
                      >
                        {resource.type}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${resource.badgeColor}`}
                      >
                        {resource.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 text-white/70 text-xs bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {resource.type === "Video"
                        ? `${resource.pages} lectures`
                        : `${resource.pages} pages`}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <div>
                      <h3 className="font-display font-bold text-foreground text-sm leading-snug mb-1 line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {resource.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-5 h-5 rounded-full gradient-brand flex items-center justify-center text-white text-[9px] font-bold shrink-0">
                        {resource.seller[0]}
                      </div>
                      <span className="truncate">
                        {resource.seller}, {resource.college}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star
                          size={12}
                          className="text-amber-400 fill-amber-400"
                        />
                        <span className="font-medium text-foreground">
                          {resource.rating}
                        </span>
                        <span>({resource.sales})</span>
                      </div>
                      <span className="font-display font-bold text-indigo-600 text-base">
                        ₹{resource.price}
                      </span>
                    </div>

                    <Button
                      className="w-full mt-auto gradient-brand text-white border-0 font-medium gap-1.5 hover:opacity-90 transition-opacity h-9"
                      size="sm"
                      data-ocid={`explore.buy_button.${i + 1}`}
                    >
                      <ShoppingCart size={14} />
                      Buy Now
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <div className="text-center py-24" data-ocid="explore.empty_state">
            <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-muted-foreground/40" />
            </div>
            <h3 className="font-display font-bold text-foreground text-xl mb-2">
              No results found
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-6">
              Try adjusting your search terms or removing filters.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
              data-ocid="explore.clear_filters_button"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      {/* CTA */}
      <section className="bg-indigo-950 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-extrabold text-white mb-3">
            Have Notes to Share?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Upload your study materials and start earning from students who need
            them.
          </p>
          <Link to="/register">
            <Button
              size="lg"
              className="bg-white text-indigo-700 hover:bg-white/90 font-semibold px-10 gap-2"
              data-ocid="explore.seller_cta_button"
            >
              Start Selling Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
