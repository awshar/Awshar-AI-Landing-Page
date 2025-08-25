"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Users, 
  Clock, 
  TrendingUp, 
  TrendingDown,
  Filter,
  Search,
  Plus,
  MoreVertical,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Edit3,
  Trash2,
  Settings
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MapComponent } from "./MapComponent";

interface GeofenceZone {
  id: string;
  name: string;
  type: "store" | "competitor" | "event" | "restricted";
  status: "active" | "inactive" | "alert";
  visitors: number;
  avgTime: string;
  alerts: number;
  coordinate: string;
  color: string;
  lat: number;
  lng: number;
  radius: number;
}

interface LiveVisitor {
  id: string;
  name: string;
  avatar: string;
  zone: string;
  entryTime: string;
  duration: string;
  activity: string;
}

export function GeofencingDashboard() {
  const [selectedZone, setSelectedZone] = useState<string | null>("zone-1");
  const [liveVisitors, setLiveVisitors] = useState<LiveVisitor[]>([
    {
      id: "1",
      name: "Ananya Patel",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      zone: "Downtown Store",
      entryTime: "2m ago",
      duration: "8m",
      activity: "browsing"
    },
    {
      id: "2",
      name: "Vikram Singh",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      zone: "Mall Location",
      entryTime: "5m ago",
      duration: "12m",
      activity: "purchased"
    },
    {
      id: "3",
      name: "Kavya Reddy",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      zone: "Airport Branch",
      entryTime: "1m ago",
      duration: "3m",
      activity: "entering"
    },
    {
      id: "4",
      name: "Arjun Mehta",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      zone: "Downtown Store",
      entryTime: "3m ago",
      duration: "11m",
      activity: "comparing"
    }
  ]);

  const [geofences] = useState<GeofenceZone[]>([
    {
      id: "zone-1",
      name: "Downtown Store",
      type: "store",
      status: "active",
      visitors: 234,
      avgTime: "15m",
      alerts: 2,
      coordinate: "19.0760° N, 72.8777° E",
      color: "bg-green-500",
      lat: 19.0760,
      lng: 72.8777,
      radius: 500
    },
    {
      id: "zone-2", 
      name: "Mall Location",
      type: "store",
      status: "active",
      visitors: 189,
      avgTime: "22m",
      alerts: 0,
      coordinate: "19.0596° N, 72.8295° E",
      color: "bg-blue-500",
      lat: 19.0596,
      lng: 72.8295,
      radius: 400
    },
    {
      id: "zone-3",
      name: "Competitor Store",
      type: "competitor",
      status: "alert",
      visitors: 98,
      avgTime: "18m",
      alerts: 5,
      coordinate: "19.0676° N, 72.8426° E",
      color: "bg-red-500",
      lat: 19.0676,
      lng: 72.8426,
      radius: 300
    },
    {
      id: "zone-4",
      name: "Airport Branch",
      type: "store",
      status: "active",
      visitors: 156,
      avgTime: "9m",
      alerts: 1,
      coordinate: "19.0896° N, 72.8656° E",
      color: "bg-purple-500",
      lat: 19.0896,
      lng: 72.8656,
      radius: 600
    },
    {
      id: "zone-5",
      name: "Bandra Store",
      type: "store",
      status: "active",
      visitors: 201,
      avgTime: "19m",
      alerts: 0,
      coordinate: "19.0596° N, 72.8295° E",
      color: "bg-green-500",
      lat: 19.0596,
      lng: 72.8295,
      radius: 450
    },
    {
      id: "zone-6",
      name: "Andheri Outlet",
      type: "store",
      status: "inactive",
      visitors: 87,
      avgTime: "13m",
      alerts: 0,
      coordinate: "19.1136° N, 72.8697° E",
      color: "bg-gray-500",
      lat: 19.1136,
      lng: 72.8697,
      radius: 350
    }
  ]);

  const [metrics] = useState({
    totalZones: 15,
    activeVisitors: 1543,
    avgDwellTime: "16m",
    conversionRate: 23.4
  });

  // Simulate live visitor updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitors(prev => 
        prev.map(visitor => ({
          ...visitor,
          duration: `${parseInt(visitor.duration) + 1}m`
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-green-600 bg-green-50";
      case "inactive": return "text-gray-600 bg-gray-50";
      case "alert": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "inactive": return <XCircle className="w-4 h-4 text-gray-600" />;
      case "alert": return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "store": return "🏪";
      case "competitor": return "🏢";
      case "event": return "🎉";
      case "restricted": return "🚫";
      default: return "📍";
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-blue-600">Total Zones</span>
            <MapPin className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{metrics.totalZones}</div>
          <div className="text-sm text-blue-600">+2 this week</div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-50 to-white p-4 rounded-xl border border-green-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-green-600">Active Visitors</span>
            <Users className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{metrics.activeVisitors.toLocaleString()}</div>
          <div className="text-sm text-green-600 flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            +12% vs yesterday
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl border border-purple-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-purple-600">Avg Dwell Time</span>
            <Clock className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{metrics.avgDwellTime}</div>
          <div className="text-sm text-purple-600">Optimal range</div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-orange-600">Conversion Rate</span>
            <TrendingUp className="w-4 h-4 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{metrics.conversionRate}%</div>
          <div className="text-sm text-orange-600">+3.2% improvement</div>
        </motion.div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Interactive Map Placeholder */}
        <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Live Geofence Map</h4>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-red-600 rounded-lg hover:bg-red-50">
                <Filter className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-600 rounded-lg hover:bg-red-50">
                <Search className="w-4 h-4" />
              </button>
              <button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 flex items-center space-x-1">
                <Plus className="w-4 h-4" />
                <span className="text-sm">Add Zone</span>
              </button>
            </div>
          </div>
          
          {/* Interactive Map */}
          <MapComponent 
            geofences={geofences}
            selectedZone={selectedZone}
            onZoneSelect={setSelectedZone}
          />
          
          {/* Map Legend */}
          <div className="mt-4 flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Active Zones</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-600">Alert Zones</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Store Locations</span>
            </div>
          </div>
        </div>

        {/* Zone Details & Live Visitors */}
        <div className="space-y-6">
          
          {/* Live Visitors Feed */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">Live Visitors</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Real-time</span>
              </div>
            </div>
            
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {liveVisitors.map((visitor, index) => (
                <motion.div
                  key={visitor.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-3 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center space-x-3">
                    <ImageWithFallback
                      src={visitor.avatar}
                      alt={visitor.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm text-gray-900 truncate">{visitor.name}</span>
                        <span className="text-xs text-gray-500">{visitor.entryTime}</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        <span>{visitor.zone}</span> • <span>{visitor.duration}</span>
                      </div>
                      <div className="text-xs text-blue-600 mt-1 capitalize">{visitor.activity}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Zone Quick Actions */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 text-left">
                <Eye className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-sm font-medium text-gray-900">View Analytics</div>
                <div className="text-xs text-gray-600">Detailed insights</div>
              </button>
              <button className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 text-left">
                <Edit3 className="w-5 h-5 text-green-600 mb-2" />
                <div className="text-sm font-medium text-gray-900">Edit Zone</div>
                <div className="text-xs text-gray-600">Modify settings</div>
              </button>
              <button className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 text-left">
                <Settings className="w-5 h-5 text-purple-600 mb-2" />
                <div className="text-sm font-medium text-gray-900">Configure</div>
                <div className="text-xs text-gray-600">Alert settings</div>
              </button>
              <button className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 text-left">
                <Activity className="w-5 h-5 text-orange-600 mb-2" />
                <div className="text-sm font-medium text-gray-900">Reports</div>
                <div className="text-xs text-gray-600">Export data</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Zone Management Table */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-gray-900">Geofence Zones</h4>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search zones..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 text-gray-600 hover:text-red-600 rounded-lg hover:bg-red-50">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Zone</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Visitors</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Avg Time</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Alerts</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {geofences.map((zone) => (
                <motion.tr
                  key={zone.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-b border-gray-100 hover:bg-white transition-colors duration-200"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 ${zone.color} rounded-full`}></div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">{getTypeIcon(zone.type)}</span>
                          <span className="font-medium text-gray-900">{zone.name}</span>
                        </div>
                        <div className="text-xs text-gray-500">{zone.coordinate}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(zone.status)}
                      <span className={`text-sm px-2 py-1 rounded-full ${getStatusColor(zone.status)}`}>
                        {zone.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-900">{zone.visitors}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{zone.avgTime}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {zone.alerts > 0 ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        {zone.alerts}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">None</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}