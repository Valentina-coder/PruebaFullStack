// app/routes.ts
import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Ruta raíz -> "/"
  route("/welcome", "routes/welcome.tsx"),
  route("/contact", "routes/contact.tsx"),
] satisfies RouteConfig;
