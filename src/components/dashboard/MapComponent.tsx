"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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

interface MapComponentProps {
  geofences: GeofenceZone[];
  selectedZone: string | null;
  onZoneSelect: (zoneId: string) => void;
}

export function MapComponent({ geofences, selectedZone, onZoneSelect }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [leaflet, setLeaflet] = useState<any>(null);
  const [zoom, setZoom] = useState(12);
  const [center, setCenter] = useState({ lat: 19.0760, lng: 72.8777 });
  const [mapError, setMapError] = useState<boolean>(false);

  // Load Leaflet dynamically
  useEffect(() => {
    const loadLeaflet = async () => {
      // Load Leaflet CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Load Leaflet JS
      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = () => {
          setLeaflet(window.L);
        };
        script.onerror = () => {
          setMapError(true);
        };
        document.head.appendChild(script);
      } else {
        setLeaflet(window.L);
      }
    };

    loadLeaflet();
  }, []);

  // Initialize map
  useEffect(() => {
    if (!leaflet || !mapRef.current || map) return;

    const mapInstance = leaflet.map(mapRef.current, {
      zoomControl: false,
      attributionControl: false
    }).setView([center.lat, center.lng], zoom);

    // Add OpenStreetMap tiles
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(mapInstance);

    setMap(mapInstance);

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, [leaflet]);

  // Add geofence zones to map
  useEffect(() => {
    if (!map || !leaflet || !geofences.length) return;

    // Clear existing layers
    map.eachLayer((layer: any) => {
      if (layer.options && layer.options.className === 'geofence-zone') {
        map.removeLayer(layer);
      }
    });

    // Add geofence zones
    geofences.forEach((zone, index) => {
      const colorMap: { [key: string]: string } = {
        'bg-green-500': '#10b981',
        'bg-blue-500': '#3b82f6',
        'bg-red-500': '#ef4444',
        'bg-purple-500': '#8b5cf6',
        'bg-orange-500': '#f97316',
        'bg-yellow-500': '#eab308'
      };

      const color = colorMap[zone.color] || '#6b7280';
      
      // Create circle for geofence
      const circle = leaflet.circle([zone.lat, zone.lng], {
        color: color,
        fillColor: color,
        fillOpacity: zone.status === 'active' ? 0.3 : 0.15,
        radius: zone.radius,
        weight: zone.status === 'alert' ? 3 : 2,
        className: 'geofence-zone'
      }).addTo(map);

      // Create marker
      const markerHtml = `
        <div class="relative">
          <div class="w-8 h-8 ${zone.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg cursor-pointer hover:scale-110 transition-transform">
            ${index + 1}
          </div>
          ${zone.status === 'active' ? `
            <div class="absolute inset-0 ${zone.color} rounded-full animate-ping opacity-75"></div>
          ` : ''}
        </div>
      `;

      const customIcon = leaflet.divIcon({
        html: markerHtml,
        className: 'custom-geofence-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = leaflet.marker([zone.lat, zone.lng], { 
        icon: customIcon,
        className: 'geofence-marker'
      }).addTo(map);

      // Add click event
      marker.on('click', () => {
        onZoneSelect(zone.id);
      });

      // Add popup
      const popupContent = `
        <div class="p-2">
          <div class="font-semibold text-gray-900">${zone.name}</div>
          <div class="text-sm text-gray-600 mt-1">
            <div>👥 ${zone.visitors} visitors</div>
            <div>⏱️ ${zone.avgTime} avg time</div>
            <div>📍 ${zone.coordinate}</div>
            ${zone.alerts > 0 ? `<div class="text-red-600">⚠️ ${zone.alerts} alerts</div>` : ''}
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
      circle.bindPopup(popupContent);

      // Highlight selected zone
      if (selectedZone === zone.id) {
        circle.setStyle({
          weight: 4,
          color: '#dc2626',
          fillOpacity: 0.4
        });
      }
    });
  }, [map, leaflet, geofences, selectedZone]);

  const handleZoomIn = () => {
    if (map) {
      const newZoom = Math.min(zoom + 1, 18);
      setZoom(newZoom);
      map.setZoom(newZoom);
    }
  };

  const handleZoomOut = () => {
    if (map) {
      const newZoom = Math.max(zoom - 1, 1);
      setZoom(newZoom);
      map.setZoom(newZoom);
    }
  };

  return (
    <div className="relative h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
      {/* Map Container */}
      <div 
        ref={mapRef} 
        className="w-full h-full"
        style={{ 
          background: 'linear-gradient(to bottom right, #dbeafe, #dcfce7)',
          position: 'relative',
          zIndex: 1
        }}
      />
      
      {/* Map Styles */}
      <style>{`
        .custom-geofence-marker {
          background: transparent !important;
          border: none !important;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .leaflet-popup-tip {
          background: white;
        }
        .leaflet-control-attribution {
          display: none;
        }
      `}</style>
      
      {/* Loading overlay */}
      {!map && !mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <div className="text-sm text-gray-600">Loading map...</div>
          </div>
        </div>
      )}

      {/* Error fallback */}
      {mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Interactive Map Preview</h4>
            <p className="text-sm text-gray-600 mb-4">Map visualization showing geofence zones across Mumbai</p>
            <div className="grid grid-cols-2 gap-2">
              {geofences.slice(0, 4).map((zone, index) => (
                <motion.div
                  key={zone.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-2 bg-white/80 rounded-lg cursor-pointer hover:bg-white transition-colors ${selectedZone === zone.id ? 'ring-2 ring-red-500' : ''}`}
                  onClick={() => onZoneSelect(zone.id)}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${zone.color} rounded-full`}></div>
                    <span className="text-xs font-medium text-gray-900">{zone.name}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{zone.visitors} visitors</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-2 z-10">
        <div className="flex flex-col space-y-2">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleZoomIn}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
          >
            <Plus className="w-4 h-4" />
          </motion.button>
          <div className="w-px h-4 bg-gray-300 mx-auto"></div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleZoomOut}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
          >
            <Minus className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Map Info */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 z-10">
        <div className="text-sm text-gray-700">
          <div className="font-medium">Mumbai, Maharashtra</div>
          <div className="text-xs text-gray-500">Zoom: {zoom}</div>
        </div>
      </div>
    </div>
  );
}