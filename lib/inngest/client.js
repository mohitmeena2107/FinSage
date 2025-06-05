import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "FinSage", // Unique app ID
  name: "FinSage", // App name
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
