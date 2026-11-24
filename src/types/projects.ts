import cover1 from "@/assets/ESSENTIAL-cover.png";
import cover2 from "@/assets/PRINTER-cover.png";
import cover3 from "@/assets/SaqlainPortfolio-cover.jpg";
import cover4 from "@/assets/PitchFi-cover.jpg";
import cover5 from "@/assets/swippy-cover.jpg";
import cover6 from "@/assets/MystifyingBardeen-cover.jpg";
import cover7 from "@/assets/shopian-cover.jpg";
import cover8 from "@/assets/BeautyEssence-cover.png";
import cover9 from "@/assets/HybridHomeService-cover.png";
import cover10 from "@/assets/Kickora-cover.png";
import { Project, ProjectCategory } from ".";

export const Projects: Project[] = [
  {
    title: "Beauty Essence | Hair & Beauty Salon",
    description:
      "A premium hair and beauty salon website for Kirkland's top-rated salon, featuring service bookings, gallery, and blog.",
    image: cover8,
    category: [ProjectCategory.WebDevelopment, ProjectCategory.DigitalMarketing, ProjectCategory.SEO],
    url: "https://beautyessence.salon/",
    metrics: { duration: "2 months", platform: "Next.js, SEO" },
  },
  {
    title: "Hybrid Home Service | Luxury Painting & Wallpaper",
    description:
      "A luxury painting and wallpaper installation service website for a licensed, bonded, and insured Washington State business.",
    image: cover9,
    category: [ProjectCategory.WebDevelopment, ProjectCategory.DigitalMarketing, ProjectCategory.SEO],
    url: "https://hybridwallpaperhangers.com/",
    metrics: { duration: "2 months", platform: "Next.js, SEO, Social Media" },
  },
  {
    title: "KickOra | Cloud ERP for Finance Teams",
    description:
      "A multi-tenant accounting and ERP SaaS covering invoicing, purchases, bank reconciliation, sales tax and withholding, inventory, payroll and financial reports, all posted to one set of books.",
    image: cover10,
    category: [ProjectCategory.WebDevelopment, ProjectCategory.AppDevelopment],
    url: "https://kickora.io/",
    metrics: { duration: "Ongoing", platform: "SaaS, Multi-tenant ERP" },
  },
  {
    title: "Essential Hair Salon",
    description:
      "A modern, award-winning website for Kirkland's #1 rated hair salon, featuring online booking, services showcase, and SEO optimization.",
    image: cover1,
    category: [ProjectCategory.WebDevelopment, ProjectCategory.DigitalMarketing, ProjectCategory.SEO],
    url: "https://essential.salon/",
    metrics: { duration: "2 months", platform: "Multi-channel, SEO, Social Media" },
  },
  {
    title: "Saqlain Printers Website",
    description: "Saqlain Printers - Your one-stop solution for high-quality printing, design, and branding services.",
    image: cover2,
    category: [ProjectCategory.WebDevelopment],
    url: "https://saqlainprinters.web.app/",
    metrics: { duration: "1 months", platform: "ReactJS" },
  },
  {
    title: "PitchFi | Blockchain Crowdfunding Platform",
    description:
      "A streamlined platform to craft, share and track investor-ready pitch decks with ease. Crowdfunding platform for crypto projects.",
    image: cover4,
    category: [ProjectCategory.WebDevelopment, ProjectCategory.Blockchain],
    url: "https://pitchfi.io/",
    metrics: { duration: "6 months", platform: "Multi-channel, Blockchain" },
  },
  {
    title: "Saqlain Portfolio",
    description:
      "A personal portfolio showcasing skills, projects, and expertise in modern web development and design.",
    image: cover3,
    category: [ProjectCategory.WebDevelopment],
    url: "https://saqlain1020.com/",
    metrics: { duration: "2  months", platform: "ReactJS" },
  },
  {
    title: "Swippy - Profile Sharing App",
    description:
      "A user profile page sharing personal information and activity in a simple nfc enabled web application.",
    image: cover5,
    category: [ProjectCategory.WebDevelopment],
    url: "https://competent-jennings-aee101.netlify.app/profile/User1",
    metrics: { duration: "4 months", platform: "MERN, Firebase" },
  },
  {
    title: "Shopian App - Online Marketplace",
    description:
      "A user-friendly e-commerce platform where you can browse products, view detailed items, and shop seamlessly from web to checkout.",
    image: cover7,
    category: [ProjectCategory.WebDevelopment],
    url: "https://shopian-app.web.app/authentication",
    metrics: { duration: "2 months", platform: "MERN" },
  },
];

export const AllProjects: Project[] = [
  ...Projects,
  {
    title: "Drag Editor",
    description: "A drag and drop editor for creating and editing content.",
    image: cover6,
    category: [ProjectCategory.WebDevelopment],
    url: "https://mystifying-bardeen-45fd62.netlify.app/",
    metrics: { duration: "2 months", platform: "ReactJS" },
  },
];
