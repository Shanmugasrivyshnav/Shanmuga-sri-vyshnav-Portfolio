import rateLimit from "express-rate-limit";

// Protects the public contact form from spam/abuse.
export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: "Too many messages sent. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Slightly stricter limiter for the admin login endpoint to slow brute-force attempts.
export const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: "Too many login attempts. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});
