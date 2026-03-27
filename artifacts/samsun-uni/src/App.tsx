import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import About from "@/pages/about";
import Programs from "@/pages/programs";
import News from "@/pages/news";
import Contact from "@/pages/contact";
import Research from "@/pages/research";
import International from "@/pages/international";
import StudentLife from "@/pages/student-life";
import Faculties from "@/pages/faculties";
import Career from "@/pages/career";
import Announcements from "@/pages/announcements";
import Library from "@/pages/library";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs" component={Programs} />
      <Route path="/news" component={News} />
      <Route path="/news/:id" component={News} />
      <Route path="/contact" component={Contact} />
      <Route path="/research" component={Research} />
      <Route path="/international" component={International} />
      <Route path="/student-life" component={StudentLife} />
      <Route path="/faculties" component={Faculties} />
      <Route path="/career" component={Career} />
      <Route path="/announcements" component={Announcements} />
      <Route path="/library" component={Library} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
