import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import BookReader from "@/pages/BookReader";
import NotFound from "@/pages/not-found";
import AuthorButton from "@/components/AuthorButton";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/read/:slug" component={BookReader} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <Router hook={useHashLocation}>
      <AppRoutes />
      <AuthorButton />
      <Toaster />
    </Router>
  );
}

export default App;
