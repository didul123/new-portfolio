import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add any custom Next.js configurations here if needed
};

// Sentry configuration options
const sentryWebpackPluginOptions = {
  // Sentry organization and project configuration
  org: "wemixt", // Ensure this matches your Sentry organization
  project: "portfolio", // Ensure this matches your Sentry project

  // Suppresses source map uploading logs during build
  silent: !process.env.CI,

  // Disable source map generation and upload
  sourcemaps: {
    disable: true, // This disables source map generation and upload
  },

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers
  tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
