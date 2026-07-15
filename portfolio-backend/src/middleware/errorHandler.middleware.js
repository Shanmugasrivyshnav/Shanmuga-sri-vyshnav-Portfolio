/**
 * Central error handler. Any error passed to next(err), or thrown inside
 * an asyncHandler-wrapped route, ends up here.
 */
export function errorHandler(err, req, res, next) {
  console.error(err);

  // Prisma "record not found" style errors
  if (err.code === "P2025") {
    return res.status(404).json({ error: "Resource not found" });
  }

  // Prisma unique constraint violation
  if (err.code === "P2002") {
    return res.status(409).json({ error: `Duplicate value for: ${err.meta?.target}` });
  }

  const status = err.status || 500;
  const message =
    status === 500 && process.env.NODE_ENV === "production"
      ? "Internal server error"
      : err.message;

  res.status(status).json({ error: message });
}

export function notFoundHandler(req, res) {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
}
