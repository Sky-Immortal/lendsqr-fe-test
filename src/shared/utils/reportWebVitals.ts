/**
 * Web Vitals Performance Monitoring
 * 
 * This module sets up performance monitoring using web-vitals library.
 * It tracks the following Core Web Vitals metrics:
 * - CLS (Cumulative Layout Shift)
 * - FID (First Input Delay)
 * - FCP (First Contentful Paint)
 * - LCP (Largest Contentful Paint)
 * - TTFB (Time to First Byte)
 */

import { Metric, onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

/**
 * Reports performance metrics using the provided callback
 * @param onPerfEntry Optional callback function to handle performance metrics
 */
const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Register callbacks for each web vital metric
    onCLS(onPerfEntry);  
    onFID(onPerfEntry);  
    onFCP(onPerfEntry);  
    onLCP(onPerfEntry);  
    onTTFB(onPerfEntry); 
  }
};

export default reportWebVitals;
