import {
  MessageSquare,
  MapPin,
  BarChart3,
  Users,
  Target,
  Languages,
} from "lucide-react";

// Custom Multi-Language Icon Component
export const MultiLanguageIcon = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="flex flex-col items-center space-y-1">
      <span className="text-xs font-bold text-current">हिंदी</span>
      <span className="text-xs font-bold text-current">ਪੰਜਾਬੀ</span>
      <span className="text-xs font-bold text-current">தமிழ்</span>
    </div>
  </div>
);

export const features = [
  {
    icon: MessageSquare,
    title: "Social Listening & Sentiment Analysis",
    description:
      "Monitor brand mentions across all social platforms with advanced AI-powered sentiment analysis to understand public perception in real-time.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: MapPin,
    title: "Geo-fencing & Field Team Monitoring",
    description:
      "Track field operations and competitor activities with precise location-based monitoring and automated alerts for strategic insights.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: BarChart3,
    title: "Competitor Benchmarking",
    description:
      "Compare your brand performance against competitors with comprehensive analytics and market positioning insights.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Users,
    title: "Influencer Discovery",
    description:
      "Identify and analyze key influencers in your industry with engagement metrics and audience insights for targeted partnerships.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Target,
    title: "Campaign Impact Tracking",
    description:
      "Measure the effectiveness of your marketing campaigns with detailed ROI analysis and performance metrics across all channels.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: MultiLanguageIcon,
    title: "Multi-Language Support",
    description:
      "Available in 20+ Indian languages including Hindi, Bengali, Tamil, Telugu, and more. Understand regional conversations and local sentiment accurately.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];