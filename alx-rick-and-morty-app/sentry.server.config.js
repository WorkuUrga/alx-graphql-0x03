import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN", // Replace with your Sentry DSN
  tracesSampleRate: 1.0,
});
