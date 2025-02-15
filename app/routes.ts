import { type RouteConfig, index, route } from "@react-router/dev/routes";

// localhost:5173
export default [
	// localhost:5173/ => home.tsx
	index("routes/home.tsx"),

	// localhost:5173/popular => popular.tsx
	route("popular", "routes/popular.tsx"),

	// localhost:5173/search => search.tsx
	route("search", "routes/search.tsx"),
] satisfies RouteConfig;
