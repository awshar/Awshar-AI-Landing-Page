"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Clock, 
  TrendingUp, 
  Camera, 
  MapPin, 
  Activity,
  AlertTriangle,
  CheckCircle,
  Coffee,
  Monitor
} from "lucide-react";
import { MetricCard } from "./MetricCard";
import { TEAM_MEMBERS, PRODUCTIVITY_DATA, ACTIVITY_LOG } from "./data";

interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  status: "active" | "break" | "absent";
  checkIn: string;
  productivity: number;
  location: string;
  lastActivity: string;
}

export function SmartTeam360Dashboard() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(TEAM_MEMBERS);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTeamMembers(prev => 
        prev.map(member => ({
          ...member,
          productivity: Math.max(60, Math.min(100, member.productivity + (Math.random() - 0.5) * 5)),
          lastActivity: Math.random() > 0.7 ? "Just now" : member.lastActivity
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const teamMetrics = {
    totalEmployees: { value: teamMembers.length, change: 0, trend: "neutral" as const },
    activeNow: { value: teamMembers.filter(m => m.status === "active").length, change: 2, trend: "up" as const },
    avgProductivity: { 
      value: Math.round(teamMembers.reduce((sum, m) => sum + m.productivity, 0) / teamMembers.length), 
      change: 5, 
      trend: "up" as const 
    },
    cctvCameras: { value: 24, change: 0, trend: "neutral" as const }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "break": return <Coffee className="w-4 h-4 text-yellow-500" />;
      case "absent": return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default: return <CheckCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "break": return "bg-yellow-100 text-yellow-800";
      case "absent": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">SmartTeam360™ Dashboard</h3>
          <p className="text-gray-600">AI-powered team productivity & activity monitoring</p>
        </div>
        <div className="flex items-center space-x-2 text-green-600">
          <Camera className="w-5 h-5" />
          <span className="text-sm font-medium">24 Cameras Active</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Employees" data={teamMetrics.totalEmployees} icon={Users} />
        <MetricCard title="Active Now" data={teamMetrics.activeNow} icon={Activity} />
        <MetricCard title="Avg Productivity" data={teamMetrics.avgProductivity} icon={TrendingUp} />
        <MetricCard title="CCTV Cameras" data={teamMetrics.cctvCameras} icon={Monitor} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Team Members List */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-semibold text-gray-900">Live Team Status</h4>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Real-time tracking</span>
            </div>
          </div>

          <div className="space-y-3">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                  selectedMember === member.id 
                    ? "border-red-500 bg-red-50" 
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1">
                      {getStatusIcon(member.status)}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-medium text-gray-900 truncate">
                        {member.name}
                      </h5>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
                        {member.status}
                      </span>
                    </div>
                    
                    <div className="mt-2 grid grid-cols-2 gap-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Check-in: {member.checkIn}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {member.location}
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Productivity Score</span>
                        <span className="font-medium text-gray-900">{member.productivity}%</span>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${
                            member.productivity >= 90 ? "bg-green-500" :
                            member.productivity >= 75 ? "bg-yellow-500" : "bg-red-500"
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${member.productivity}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {selectedMember === member.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-gray-500">Last Activity:</span>
                        <p className="font-medium">{member.lastActivity}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Facial Recognition:</span>
                        <p className="font-medium text-green-600">Verified ✓</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Productivity Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Today's Productivity</h4>
            <div className="space-y-3">
              {PRODUCTIVITY_DATA.slice(-4).map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{data.time}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-red-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${data.value}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="text-sm font-medium w-8">{data.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h4>
            <div className="space-y-3">
              {ACTIVITY_LOG.map((activity) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start space-x-3"
                >
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === "success" ? "bg-green-500" :
                    activity.status === "warning" ? "bg-yellow-500" :
                    activity.status === "info" ? "bg-blue-500" : "bg-gray-500"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.employee}</p>
                    <p className="text-xs text-gray-500">{activity.action}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">System Status</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Facial Recognition</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">CCTV Network</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">24/24 Online</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">AI Processing</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}