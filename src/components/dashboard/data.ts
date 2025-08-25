import { SocialPost, LocationData, SentimentData } from "./types";

export const INITIAL_METRICS = {
  mentions: { value: 1247, change: 12, trend: "up" as const },
  sentiment: { value: 85, change: 5, trend: "up" as const },
  engagement: { value: 2456, change: -3, trend: "down" as const },
  reach: { value: 45234, change: 18, trend: "up" as const }
};

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: "1",
    platform: "Twitter",
    user: "@arjun_tech_review",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    content: "Just tried Awshar AI's social listening tool. Amazing insights! 🚀",
    sentiment: "positive",
    engagement: 124,
    timestamp: "2m ago"
  },
  {
    id: "2", 
    platform: "LinkedIn",
    user: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    content: "The geo-fencing feature is a game changer for local businesses",
    sentiment: "positive",
    engagement: 89,
    timestamp: "5m ago"
  },
  {
    id: "3",
    platform: "Facebook",
    user: "Rajesh Kumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    content: "Need better customer support integration",
    sentiment: "negative",
    engagement: 45,
    timestamp: "8m ago"
  },
  {
    id: "4",
    platform: "Instagram",
    user: "Sneha Gupta",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    content: "Love how Awshar AI supports 20+ Indian languages! Perfect for our multilingual campaigns 🇮🇳",
    sentiment: "positive",
    engagement: 156,
    timestamp: "12m ago"
  }
];

export const TOP_LOCATIONS: LocationData[] = [
  { city: "Mumbai", count: 453 },
  { city: "Delhi", count: 387 },
  { city: "Bangalore", count: 298 }
];

export const SENTIMENT_DATA: SentimentData[] = [
  { label: "Positive", value: 85, color: "bg-green-500" },
  { label: "Neutral", value: 10, color: "bg-yellow-500" },
  { label: "Negative", value: 5, color: "bg-red-500" }
];

export const TEAM_MEMBERS = [
  {
    id: "1",
    name: "Arjun Sharma",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    status: "active",
    checkIn: "09:15 AM",
    productivity: 92,
    location: "Workstation A-12",
    lastActivity: "2m ago"
  },
  {
    id: "2",
    name: "Priya Patel",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    status: "active",
    checkIn: "09:05 AM",
    productivity: 88,
    location: "Workstation B-05",
    lastActivity: "1m ago"
  },
  {
    id: "3",
    name: "Rajesh Kumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    status: "break",
    checkIn: "08:45 AM",
    productivity: 75,
    location: "Break Room",
    lastActivity: "15m ago"
  },
  {
    id: "4",
    name: "Sneha Gupta",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    status: "active",
    checkIn: "09:30 AM",
    productivity: 95,
    location: "Meeting Room 2",
    lastActivity: "30s ago"
  }
];

export const PRODUCTIVITY_DATA = [
  { time: "9:00", value: 45 },
  { time: "10:00", value: 65 },
  { time: "11:00", value: 80 },
  { time: "12:00", value: 70 },
  { time: "13:00", value: 40 },
  { time: "14:00", value: 85 },
  { time: "15:00", value: 90 },
  { time: "16:00", value: 75 }
];

export const ACTIVITY_LOG = [
  {
    id: "1",
    employee: "Arjun Sharma",
    action: "Checked in",
    time: "09:15 AM",
    status: "success"
  },
  {
    id: "2",
    employee: "Priya Patel",
    action: "Started meeting",
    time: "10:30 AM",
    status: "info"
  },
  {
    id: "3",
    employee: "Rajesh Kumar",
    action: "Break time",
    time: "11:45 AM",
    status: "warning"
  },
  {
    id: "4",
    employee: "Sneha Gupta",
    action: "High productivity detected",
    time: "14:20 PM",
    status: "success"
  }
];

export const DASHBOARD_TABS = ["overview", "geofencing", "smartteam360", "sentiment", "analytics"];