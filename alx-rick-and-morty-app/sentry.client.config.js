import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN", // Replace with your Sentry DSN
  tracesSampleRate: 1.0, // Adjust sample rate for performance monitoring (optional)
});
