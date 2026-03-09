import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Calendar,
  DollarSign,
  Download,
  Edit,
  Eye,
  FileText,
  Plus,
  Share2,
  Star,
  TrendingUp,
  Upload,
  Users,
  Video,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { useState } from "react";

const mockUser = {
  name: "Aryan Mehta",
  college: "Indian Institute of Technology, Delhi",
  branch: "Computer Science Engineering",
  year: "3rd Year",
  semester: "Semester 6",
  email: "aryan@iitd.ac.in",
  avatar: null as string | null,
  joined: "August 2024",
  totalEarned: "₹18,420",
  totalSales: 284,
  rating: 4.9,
};

const mockUploads = [
  {
    id: 1,
    title: "Data Structures & Algorithms — Complete Notes",
    type: "Notes",
    subject: "DSA",
    price: "₹149",
    sales: 213,
    rating: 4.9,
    views: 1840,
    color: "from-indigo-400 to-indigo-600",
    icon: FileText,
    date: "Dec 2024",
  },
  {
    id: 2,
    title: "DBMS Hand-Written Guide — All Topics Covered",
    type: "Guide",
    subject: "DBMS",
    price: "₹199",
    sales: 142,
    rating: 4.8,
    views: 1204,
    color: "from-violet-400 to-purple-600",
    icon: BookOpen,
    date: "Nov 2024",
  },
  {
    id: 3,
    title: "Operating Systems — Lecture Series (8 Videos)",
    type: "Video",
    subject: "OS",
    price: "₹399",
    sales: 89,
    rating: 4.7,
    views: 654,
    color: "from-blue-400 to-blue-600",
    icon: Video,
    date: "Oct 2024",
  },
  {
    id: 4,
    title: "Computer Networks — Quick Revision Notes",
    type: "Notes",
    subject: "CN",
    price: "₹99",
    sales: 61,
    rating: 4.6,
    views: 488,
    color: "from-emerald-400 to-teal-600",
    icon: FileText,
    date: "Sep 2024",
  },
];

const mockPurchases = [
  {
    id: 1,
    title: "Machine Learning — From Scratch Explained",
    type: "Video",
    subject: "ML",
    seller: "Priya Sharma",
    price: "₹499",
    rating: 5.0,
    purchasedOn: "Jan 2025",
    color: "from-orange-400 to-red-500",
    icon: Video,
  },
  {
    id: 2,
    title: "System Design Primer — Interview Ready",
    type: "Guide",
    subject: "System Design",
    seller: "Rohit Das",
    price: "₹299",
    rating: 4.8,
    purchasedOn: "Jan 2025",
    color: "from-violet-400 to-pink-500",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Advanced Algorithms — Competitive Programming",
    type: "Notes",
    subject: "Algorithms",
    seller: "Ananya Gupta",
    price: "₹179",
    rating: 4.9,
    purchasedOn: "Dec 2024",
    color: "from-indigo-400 to-cyan-500",
    icon: FileText,
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("uploads");

  const initials = mockUser.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Profile Header */}
      <div className="hero-bg relative overflow-hidden noise-overlay pt-16">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center sm:items-end gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl gradient-brand flex items-center justify-center text-white text-4xl font-display font-bold shadow-brand ring-4 ring-white/20">
                {initials}
              </div>
              <button
                type="button"
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white shadow-card flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-colors"
                aria-label="Edit profile photo"
              >
                <Edit size={14} />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <h1 className="font-display text-3xl font-extrabold text-white">
                  {mockUser.name}
                </h1>
                <Award size={20} className="text-amber-300" />
              </div>
              <p className="text-white/70 text-sm mb-1">{mockUser.college}</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-3">
                <Badge className="bg-white/10 text-white border-white/20 text-xs">
                  {mockUser.branch}
                </Badge>
                <Badge className="bg-white/10 text-white border-white/20 text-xs">
                  {mockUser.year}
                </Badge>
                <Badge className="bg-white/10 text-white border-white/20 text-xs">
                  {mockUser.semester}
                </Badge>
                <Badge className="bg-white/10 text-white border-white/20 text-xs">
                  <Calendar size={10} className="mr-1" />
                  Joined {mockUser.joined}
                </Badge>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 gap-1.5"
                data-ocid="profile.share_button"
              >
                <Share2 size={14} /> Share
              </Button>
              <Link to="/explore">
                <Button
                  size="sm"
                  className="bg-white text-indigo-700 hover:bg-white/90 gap-1.5 font-semibold"
                  data-ocid="profile.upload_button"
                >
                  <Plus size={14} /> Upload
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              {
                label: "Total Earned",
                value: mockUser.totalEarned,
                icon: DollarSign,
                color: "text-emerald-300",
              },
              {
                label: "Total Sales",
                value: mockUser.totalSales,
                icon: TrendingUp,
                color: "text-violet-300",
              },
              {
                label: "Avg Rating",
                value: `${mockUser.rating}★`,
                icon: Star,
                color: "text-amber-300",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-4 text-center"
              >
                <stat.icon size={18} className={`${stat.color} mx-auto mb-2`} />
                <p className="font-display text-xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content Tabs */}
      <main className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-secondary h-12 rounded-xl p-1 mb-8 w-full sm:w-auto">
            <TabsTrigger
              value="uploads"
              className="flex-1 sm:flex-none rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-xs data-[state=active]:text-primary font-medium gap-2"
              data-ocid="profile.uploads_tab"
            >
              <Upload size={16} />
              My Uploads ({mockUploads.length})
            </TabsTrigger>
            <TabsTrigger
              value="purchases"
              className="flex-1 sm:flex-none rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-xs data-[state=active]:text-primary font-medium gap-2"
              data-ocid="profile.purchases_tab"
            >
              <Download size={16} />
              My Purchases ({mockPurchases.length})
            </TabsTrigger>
          </TabsList>

          {/* Uploads */}
          <TabsContent value="uploads">
            <motion.div
              className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {mockUploads.map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="card-lift bg-card rounded-2xl overflow-hidden shadow-card border border-border group"
                  data-ocid={`profile.uploads.item.${i + 1}`}
                >
                  <div
                    className={`h-24 bg-gradient-to-br ${item.color} flex items-center justify-center relative`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/20 text-white border-0 text-xs backdrop-blur-sm">
                        {item.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display font-bold text-foreground text-sm leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-4">
                      {item.subject} · {item.date}
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[
                        { label: "Sales", value: item.sales, icon: Users },
                        { label: "Views", value: item.views, icon: Eye },
                        {
                          label: "Rating",
                          value: `${item.rating}★`,
                          icon: Star,
                        },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-secondary rounded-lg p-2 text-center"
                        >
                          <p className="font-display font-bold text-sm text-foreground">
                            {stat.value}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-indigo-600 text-lg">
                        {item.price}
                      </span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1 text-xs h-8"
                          data-ocid={`profile.uploads.edit_button.${i + 1}`}
                        >
                          <Edit size={12} /> Edit
                        </Button>
                        <Button
                          size="sm"
                          className="gap-1 text-xs h-8 gradient-brand text-white border-0"
                          data-ocid={`profile.uploads.share_button.${i + 1}`}
                        >
                          <Share2 size={12} /> Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Upload CTA */}
              <motion.div variants={fadeInUp}>
                <Link to="/explore">
                  <div className="h-full min-h-[200px] rounded-2xl border-2 border-dashed border-border hover:border-primary/50 bg-secondary/50 hover:bg-indigo-50 transition-all flex flex-col items-center justify-center gap-4 p-8 cursor-pointer group">
                    <div className="w-14 h-14 rounded-xl bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center transition-colors">
                      <Plus size={26} className="text-indigo-600" />
                    </div>
                    <div className="text-center">
                      <p className="font-display font-bold text-foreground mb-1">
                        Upload New Resource
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Share your notes, guides, or video lectures
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Purchases */}
          <TabsContent value="purchases">
            <motion.div
              className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {mockPurchases.map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="card-lift bg-card rounded-2xl overflow-hidden shadow-card border border-border group"
                  data-ocid={`profile.purchases.item.${i + 1}`}
                >
                  <div
                    className={`h-28 bg-gradient-to-br ${item.color} flex items-center justify-center relative`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/20 text-white border-0 text-xs backdrop-blur-sm">
                        {item.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display font-bold text-foreground text-sm leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">
                      by {item.seller} · {item.subject}
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      <Star
                        size={12}
                        className="text-amber-400 fill-amber-400"
                      />
                      <span className="text-xs font-medium text-foreground">
                        {item.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        · Purchased {item.purchasedOn}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-indigo-600">
                        {item.price}
                      </span>
                      <Button
                        size="sm"
                        className="gap-1 text-xs h-8 gradient-brand text-white border-0"
                        data-ocid={`profile.purchases.view_button.${i + 1}`}
                      >
                        <Eye size={12} /> View
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Empty state placeholder if needed */}
              {mockPurchases.length === 0 && (
                <div
                  className="col-span-full text-center py-16"
                  data-ocid="profile.purchases.empty_state"
                >
                  <BookOpen
                    size={48}
                    className="mx-auto text-muted-foreground/30 mb-4"
                  />
                  <p className="font-display font-bold text-foreground mb-2">
                    No purchases yet
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">
                    Browse and buy resources from the marketplace
                  </p>
                  <Link to="/explore">
                    <Button className="gradient-brand text-white border-0">
                      Explore Notes
                    </Button>
                  </Link>
                </div>
              )}
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
