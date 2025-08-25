"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

const sampleConversations = [
  [
    {
      type: "user",
      content: "Analyze sentiment from our latest campaign",
    },
    {
      type: "ai",
      content:
        "📊 Sentiment analysis complete! 78% positive, 15% neutral, 7% negative. Strong engagement on social platforms.",
    },
  ],
  [
    { type: "user", content: "What are the trending topics?" },
    {
      type: "ai",
      content:
        "🔥 Top trends: #SustainableTech (↑45%), #DigitalTransformation (↑32%), #CustomerExperience (↑28%)",
    },
  ],
  [
    {
      type: "user",
      content: "Generate insights for Q4 strategy",
    },
    {
      type: "ai",
      content:
        "✨ Based on 50K+ data points: Focus on mobile engagement (+67% ROI) and personalized content (+42% conversion)",
    },
  ],
];

export function AIChatPreview() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentConversation, setCurrentConversation] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationId, setConversationId] = useState(0);

  useEffect(() => {
    const startConversation = () => {
      setMessages([]);
      const conversation = sampleConversations[currentConversation];
      const currentConvId = conversationId;
      
      // Add user message
      setTimeout(() => {
        setMessages([
          {
            id: `${currentConvId}-user-${Date.now()}`,
            type: "user",
            content: conversation[0].content,
            timestamp: new Date(),
          },
        ]);
      }, 500);

      // Show typing indicator
      setTimeout(() => {
        setIsTyping(true);
      }, 1000);

      // Add AI response
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: `${currentConvId}-ai-${Date.now()}`,
            type: "ai",
            content: conversation[1].content,
            timestamp: new Date(),
          },
        ]);
      }, 2500);

      // Move to next conversation
      setTimeout(() => {
        setCurrentConversation(
          (prev) => (prev + 1) % sampleConversations.length,
        );
        setConversationId(prev => prev + 1);
      }, 6000);
    };

    startConversation();
    const interval = setInterval(startConversation, 7000);

    return () => clearInterval(interval);
  }, [currentConversation, conversationId]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 text-white">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
          >
            <Bot className="w-4 h-4" />
          </motion.div>
          <div>
            <h4 className="font-medium text-sm">
              Awshar AI Assistant
            </h4>
            <div className="flex items-center gap-1 text-xs text-red-100">
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>Online • Processing insights</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-3 h-56 overflow-hidden">
        <AnimatePresence mode="wait">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className={`mb-3 flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex items-start gap-2 max-w-[85%] ${
                  message.type === "user"
                    ? "flex-row-reverse"
                    : "flex-row"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    message.type === "user"
                      ? "bg-gray-600"
                      : "bg-gradient-to-r from-red-500 to-purple-600"
                  }`}
                >
                  {message.type === "user" ? (
                    <User className="w-3 h-3 text-white" />
                  ) : (
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </div>

                <motion.div
                  className={`px-3 py-2 rounded-2xl text-xs ${
                    message.type === "user"
                      ? "bg-gray-600 text-white rounded-br-md"
                      : "bg-gray-100 text-gray-800 rounded-bl-md border"
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  {message.content}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              key="typing-indicator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-start gap-2 mb-3"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <div className="bg-gray-100 px-3 py-2 rounded-2xl rounded-bl-md border">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={`dot-${i}`}
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-3 py-2 bg-gray-50 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          AI-powered insights • Real-time analysis
        </div>
      </div>
    </motion.div>
  );
}