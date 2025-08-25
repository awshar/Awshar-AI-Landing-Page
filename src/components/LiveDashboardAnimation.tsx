"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bell, RefreshCw, BarChart3 } from "lucide-react";
import { MetricCard } from "./dashboard/MetricCard";
import { SocialFeed } from "./dashboard/SocialFeed";
import { SentimentChart } from "./dashboard/SentimentChart";
import { GeofencingDashboard } from "./dashboard/GeofencingDashboard";
import { SmartTeam360Dashboard } from "./dashboard/SmartTeam360Dashboard";
import { MetricData } from "./dashboard/types";
import { INITIAL_METRICS, DASHBOARD_TABS } from "./dashboard/data";
import { generateMetricUpdate } from "./dashboard/utils";

export function LiveDashboardAnimation() {
  const [metrics, setMetrics] = useState<{ [key: string]: MetricData }>(INITIAL_METRICS);
  const [activeTab, setActiveTab] = useState("overview");
  const [notifications, setNotifications] = useState(3);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        mentions: generateMetricUpdate(prev.mentions.value),
        sentiment: generateMetricUpdate(prev.sentiment.value, true),
        engagement: generateMetricUpdate(prev.engagement.value),
        reach: generateMetricUpdate(prev.reach.value)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Simulate notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prev => prev + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-white">
              <h3 className="text-xl font-bold">DeepSense AI Dashboard</h3>
              <p className="text-red-100 text-sm">Real-time Social Listening & Analytics</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={handleRefresh}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-red-100 p-2 rounded-lg bg-red-500/20"
            >
              <motion.div
                animate={isRefreshing ? { rotate: 360 } : {}}
                transition={{ duration: 1, ease: "linear" }}
              >
                <RefreshCw className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <div className="relative">
              <Bell className="w-5 h-5 text-white" />
              {notifications > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                >
                  {notifications}
                </motion.div>
              )}
            </div>
            
            <div className="flex items-center space-x-2 text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
        <div className="flex space-x-6">
          {DASHBOARD_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-red-600 text-white shadow-md"
                  : "text-gray-600 hover:text-red-600 hover:bg-red-50"
              }`}
            >
              {tab === "geofencing" ? "GeoFencing" : 
               tab === "smartteam360" ? "Smart Team 360" : 
               tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(metrics).map(([key, data]) => (
                <MetricCard key={key} title={key} data={data} />
              ))}
            </div>

            {/* Live Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SocialFeed />
              <SentimentChart />
            </div>
          </div>
        )}

        {activeTab === "geofencing" && <GeofencingDashboard />}
        
        {activeTab === "smartteam360" && <SmartTeam360Dashboard />}

        {activeTab !== "overview" && activeTab !== "geofencing" && activeTab !== "smartteam360" && (
          <div className="text-center py-12">
            <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2 capitalize">
              {activeTab} Analytics
            </h4>
            <p className="text-gray-600">
              Advanced {activeTab} insights and analytics would be displayed here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}