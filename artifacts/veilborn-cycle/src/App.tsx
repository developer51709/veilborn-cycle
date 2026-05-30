import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import BookReader from "@/pages/BookReader";
import NotFound from "@/pages/not-found";
import AuthorButton from "@/components/AuthorButton";

function Router() {
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
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
      <AuthorButton />
      <Toaster />
    </WouterRouter>
  );
}

export default App;
