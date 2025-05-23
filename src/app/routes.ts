import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("business", "routes/business.tsx"),
  route("enterprise", "routes/enterprise.tsx"),
  route("professional", "routes/professional.tsx"),
  route("helpdesk", "routes/helpdesk.tsx"),
  route("feedback", "routes/feedback.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("security", "routes/security.tsx"),
  route("terms-of-service", "routes/terms-of-service.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("support", "routes/support.tsx")
] satisfies RouteConfig;
