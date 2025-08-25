export const getSentimentColor = (sentiment: string): string => {
  switch (sentiment) {
    case "positive": return "text-green-600 bg-green-50";
    case "negative": return "text-red-600 bg-red-50";
    default: return "text-gray-600 bg-gray-50";
  }
};

export const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

export const generateMetricUpdate = (prevValue: number, isPercentage = false) => {
  const maxValue = isPercentage ? 100 : prevValue * 1.1;
  const minValue = isPercentage ? 0 : prevValue * 0.9;
  const randomValue = isPercentage 
    ? Math.max(0, Math.min(100, prevValue + (Math.random() - 0.5) * 4))
    : prevValue + Math.floor(Math.random() * (isPercentage ? 5 : 50));
  
  return {
    value: Math.max(minValue, Math.min(maxValue, randomValue)),
    change: Math.floor(Math.random() * (isPercentage ? 10 : 25)) - (isPercentage ? 5 : 7),
    trend: Math.random() > 0.5 ? "up" as const : "down" as const
  };
};