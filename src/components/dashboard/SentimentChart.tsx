import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SENTIMENT_DATA, TOP_LOCATIONS } from "./data";

export function SentimentChart() {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <h4 className="font-semibold text-gray-900 mb-4">Sentiment Trends</h4>
      <div className="space-y-3">
        {SENTIMENT_DATA.map((sentiment, index) => (
          <div key={sentiment.label} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{sentiment.label}</span>
              <span className="font-medium">{sentiment.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full ${sentiment.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${sentiment.value}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Geographic Data */}
      <div className="mt-6">
        <h5 className="font-medium text-gray-900 mb-3">Top Locations</h5>
        <div className="space-y-2">
          {TOP_LOCATIONS.map((location) => (
            <div key={location.city} className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="text-gray-700">{location.city}</span>
              </div>
              <span className="font-medium text-gray-900">{location.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}