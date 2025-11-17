import cron from "node-cron";
import axios from "axios";

// Your Render app URL
const RENDER_URL = "https://afckiambaa.onrender.com";

// Schedule cron to run every 5 minutes
cron.schedule("*/5 * * * *", async () => {
  try {
    await axios.get(RENDER_URL);
    console.log("✅ Pinged Render at", new Date().toISOString());
  } catch (error) {
    console.error("❌ Failed to ping Render:", error.message);
  }
});

console.log("🕒 Render ping service started. Pinging every 5 minutes...");
