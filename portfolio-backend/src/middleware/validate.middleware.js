/**
 * Generic Zod validation middleware.
 * Usage: router.post("/", validate(contactSchema), controller.create)
 */
export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.flatten().fieldErrors,
    });
  }
  req.body = result.data; // use the parsed/sanitized data downstream
  next();
};
