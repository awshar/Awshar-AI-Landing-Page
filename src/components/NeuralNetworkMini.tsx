"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  active: boolean;
  layer: number;
}

interface Connection {
  from: number;
  to: number;
  active: boolean;
}

export function NeuralNetworkMini() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    // Create nodes in 4 layers (input, hidden1, hidden2, output)
    const nodeData: Node[] = [];
    const connectionData: Connection[] = [];

    // Layer configurations: [input: 4, hidden1: 6, hidden2: 4, output: 2]
    const layers = [4, 6, 4, 2];
    const layerSpacing = 60;
    let nodeId = 0;

    layers.forEach((layerSize, layerIndex) => {
      const startY = (200 - (layerSize - 1) * 25) / 2; // Center vertically
      for (let i = 0; i < layerSize; i++) {
        nodeData.push({
          id: nodeId++,
          x: layerIndex * layerSpacing + 20,
          y: startY + i * 25,
          active: false,
          layer: layerIndex
        });
      }
    });

    // Create connections between adjacent layers
    let currentNodeId = 0;
    for (let layer = 0; layer < layers.length - 1; layer++) {
      const currentLayerSize = layers[layer];
      const nextLayerSize = layers[layer + 1];
      
      for (let i = 0; i < currentLayerSize; i++) {
        for (let j = 0; j < nextLayerSize; j++) {
          connectionData.push({
            from: currentNodeId + i,
            to: currentNodeId + currentLayerSize + j,
            active: false
          });
        }
      }
      currentNodeId += currentLayerSize;
    }

    setNodes(nodeData);
    setConnections(connectionData);
  }, []);

  useEffect(() => {
    if (nodes.length === 0) return;

    const interval = setInterval(() => {
      // Activate a random path through the network
      setNodes(prev => prev.map(node => ({ ...node, active: false })));
      setConnections(prev => prev.map(conn => ({ ...conn, active: false })));

      setTimeout(() => {
        // Choose random path through each layer
        const activePath: number[] = [];
        let currentLayerStart = 0;
        const layers = [4, 6, 4, 2];
        
        layers.forEach((layerSize, layerIndex) => {
          const randomNodeIndex = Math.floor(Math.random() * layerSize);
          activePath.push(currentLayerStart + randomNodeIndex);
          currentLayerStart += layerSize;
        });

        // Activate nodes
        setNodes(prev => prev.map(node => ({
          ...node,
          active: activePath.includes(node.id)
        })));

        // Activate connections between active nodes
        setConnections(prev => prev.map(conn => {
          const fromActive = activePath.includes(conn.from);
          const toActive = activePath.includes(conn.to);
          return {
            ...conn,
            active: fromActive && toActive
          };
        }));
      }, 100);
    }, 3000);

    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-full max-w-sm h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 overflow-hidden shadow-lg"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-purple-500/10" />
      </div>

      {/* Title */}
      <div className="absolute top-3 left-3">
        <h4 className="text-sm font-medium text-gray-900">Neural Network</h4>
        <p className="text-xs text-gray-600">Deep Learning Model</p>
      </div>

      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;

          return (
            <motion.line
              key={index}
              x1={fromNode.x + 6}
              y1={fromNode.y + 6}
              x2={toNode.x + 6}
              y2={toNode.y + 6}
              stroke={connection.active ? "url(#connectionGradient)" : "#e5e7eb"}
              strokeWidth={connection.active ? "2" : "1"}
              opacity={connection.active ? 1 : 0.3}
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: connection.active ? 1 : 0.8,
                opacity: connection.active ? 1 : 0.3
              }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-3 h-3 rounded-full border-2"
          style={{
            left: node.x,
            top: node.y,
            backgroundColor: node.active ? 
              (node.layer === 0 ? "#10b981" : 
               node.layer === 3 ? "#ef4444" : "#8b5cf6") : "#ffffff",
            borderColor: node.active ? 
              (node.layer === 0 ? "#10b981" : 
               node.layer === 3 ? "#ef4444" : "#8b5cf6") : "#d1d5db"
          }}
          animate={{
            scale: node.active ? [1, 1.3, 1] : 1,
            boxShadow: node.active ? 
              `0 0 20px ${node.layer === 0 ? "#10b981" : 
                          node.layer === 3 ? "#ef4444" : "#8b5cf6"}40` : "none"
          }}
          transition={{ duration: 0.3 }}
        />
      ))}

      {/* Layer labels */}
      <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs text-gray-500">
        <span>Input</span>
        <span>Processing</span>
        <span>Output</span>
      </div>

      {/* AI indicator */}
      <motion.div 
        className="absolute top-3 right-3 flex items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="w-2 h-2 bg-green-400 rounded-full"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs text-green-600 font-medium">AI</span>
      </motion.div>
    </motion.div>
  );
}