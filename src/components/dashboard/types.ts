export interface MetricData {
  value: number;
  change: number;
  trend: "up" | "down";
}

export interface SocialPost {
  id: string;
  platform: string;
  user: string;
  avatar: string;
  content: string;
  sentiment: "positive" | "negative" | "neutral";
  engagement: number;
  timestamp: string;
}

export interface LocationData {
  city: string;
  count: number;
}

export interface SentimentData {
  label: string;
  value: number;
  color: string;
}