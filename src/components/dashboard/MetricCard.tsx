import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";
import { MetricData } from "./types";
import { formatNumber } from "./utils";

interface MetricCardProps {
  title: string;
  data: MetricData;
  icon?: LucideIcon;
}

export function MetricCard({ title, data, icon: IconComponent }: MetricCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {IconComponent && <IconComponent className="w-4 h-4 text-red-600" />}
          <span className="text-sm text-gray-600 capitalize">{title}</span>
        </div>
        {data.trend === "up" ? (
          <TrendingUp className="w-4 h-4 text-green-600" />
        ) : data.trend === "down" ? (
          <TrendingDown className="w-4 h-4 text-red-600" />
        ) : null}
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">
        {title === "sentiment" ? `${Math.round(data.value)}%` : formatNumber(data.value)}
      </div>
      {data.change !== 0 && (
        <div className={`text-sm font-medium ${data.trend === "up" ? "text-green-600" : "text-red-600"}`}>
          {data.change > 0 ? "+" : ""}{data.change}% vs last hour
        </div>
      )}
    </motion.div>
  );
}