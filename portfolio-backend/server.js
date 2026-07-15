import "dotenv/config";
import { createApp } from "./src/app.js";

const app = createApp();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
  console.log(`Allowed frontend origin: ${process.env.FRONTEND_URL || "http://localhost:3000"}`);
});
