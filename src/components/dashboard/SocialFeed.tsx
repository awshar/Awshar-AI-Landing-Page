import { SocialPostItem } from "./SocialPostItem";
import { SOCIAL_POSTS } from "./data";

export function SocialFeed() {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-900">Live Social Feed</h4>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">Real-time</span>
        </div>
      </div>
      
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {SOCIAL_POSTS.map((post, index) => (
          <SocialPostItem key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}