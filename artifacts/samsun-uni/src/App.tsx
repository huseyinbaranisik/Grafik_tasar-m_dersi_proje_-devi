import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import About from "@/pages/about";
import Courses from "@/pages/courses";
import News from "@/pages/news";
import Contact from "@/pages/contact";
import Research from "@/pages/research";
import Faculty from "@/pages/faculty-members";
import Labs from "@/pages/labs";
import Internship from "@/pages/internship";
import Alumni from "@/pages/alumni";
import Announcements from "@/pages/announcements";
import Admission from "@/pages/admission";
import StudentLife from "@/pages/student-life";
import Career from "@/pages/career";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
      <Route path="/news" component={News} />
      <Route path="/news/:id" component={News} />
      <Route path="/contact" component={Contact} />
      <Route path="/research" component={Research} />
      <Route path="/faculty" component={Faculty} />
      <Route path="/labs" component={Labs} />
      <Route path="/internship" component={Internship} />
      <Route path="/alumni" component={Alumni} />
      <Route path="/announcements" component={Announcements} />
      <Route path="/admission" component={Admission} />
      <Route path="/student-life" component={StudentLife} />
      <Route path="/career" component={Career} />
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
