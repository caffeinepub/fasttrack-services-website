import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EmployersPage from "./pages/EmployersPage";
import HomePage from "./pages/HomePage";
import IndustriesPage from "./pages/IndustriesPage";
import JobSeekersPage from "./pages/JobSeekersPage";
import PresentationPage from "./pages/PresentationPage";
import ServicesPage from "./pages/ServicesPage";

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const industriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries",
  component: IndustriesPage,
});

const jobSeekersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/job-seekers",
  component: JobSeekersPage,
});

const employersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employers",
  component: EmployersPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const presentationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/presentation",
  component: PresentationPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
  industriesRoute,
  jobSeekersRoute,
  employersRoute,
  contactRoute,
  presentationRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
