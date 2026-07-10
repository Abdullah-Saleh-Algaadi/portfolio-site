import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // أو أي إضافات أخرى تستخدمها

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-site/", // أضف هذا السطر واسم المستودع بين العلامتين
});
