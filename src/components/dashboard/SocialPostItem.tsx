import { motion } from "framer-motion";
import { Heart, Clock } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SocialPost } from "./types";
import { getSentimentColor } from "./utils";

interface SocialPostItemProps {
  post: SocialPost;
  index: number;
}

export function SocialPostItem({ post, index }: SocialPostItemProps) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start space-x-3">
        <ImageWithFallback
          src={post.avatar}
          alt={post.user}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-medium text-sm text-gray-900">{post.user}</span>
            <span className="text-xs text-gray-500">{post.platform}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${getSentimentColor(post.sentiment)}`}>
              {post.sentiment}
            </span>
          </div>
          <p className="text-sm text-gray-700 mb-2">{post.content}</p>
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Heart className="w-3 h-3" />
              <span>{post.engagement}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}