export interface CaseStudyMetrics {
  sessions: number;
  totalSales: number;
  orders: number;
  conversionRate: number;
  spending?: number;
  profit?: number;
  currency?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  results: string;
  dateRange: string;
  metrics: CaseStudyMetrics;
  dashboardImage?: string; // URL or path to dashboard screenshot
}

export const CaseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "E-Commerce Store Performance",
    description: "So these are the results on 16 September, 2025. 3 orders in 67 sessions.",
    results: "Achieved 3 orders from 67 sessions with a conversion rate of 4.47% and total sales of AED 271.",
    dateRange: "September 16, 2025",
    metrics: {
      sessions: 67,
      totalSales: 271,
      orders: 3,
      conversionRate: 4.47,
      spending: 4100,
      currency: "AED",
    },
  },
  {
    id: "2",
    title: "6-Day Sales Campaign",
    description:
      "So these are the results from last 6 days, DHS 1000 in sales and a great profit margin. This happens when you do proper testing and right targeting.",
    results:
      "Generated AED 1,000 in total sales from 578 sessions with 14 orders and a 2.4% conversion rate over 6 days.",
    dateRange: "September 14-19, 2025",
    metrics: {
      sessions: 578,
      totalSales: 1000,
      orders: 14,
      conversionRate: 2.4,
      currency: "AED",
    },
  },
  {
    id: "3",
    title: "New Client Onboarding Success",
    description:
      "On boarded this client on 12 September, 2025. They were facing issues of irrelevant audience and very low but fake orders, I did complete audit of their ad account and highlighted some mistakes. So, after starting the testing phase, we got good results from one adset and the creative was good also. We are also trying to get one more winner before getting this store to scaling.",
    results:
      "On day 2, we have total 6 orders in UAE MARKET, and the client is in profit of almost 62 DHS (EXCLUDING AD SPEND).",
    dateRange: "September 14-15, 2025",
    metrics: {
      sessions: 91,
      totalSales: 273,
      orders: 6,
      conversionRate: 6.59,
      spending: 3767,
      currency: "AED",
    },
  },
];
