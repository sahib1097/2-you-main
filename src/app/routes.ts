import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("business", "routes/business.tsx"),
  route("enterprise", "routes/enterprise.tsx"),
  route("professional", "routes/professional.tsx"),
  route("helpdesk", "routes/helpdesk.tsx"),
  route("feedback", "routes/feedback.tsx"),
] satisfies RouteConfig;
