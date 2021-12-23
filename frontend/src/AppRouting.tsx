import { Router, Route, Switch } from "wouter";
import Layout from "./components/Layout/Layout";
import AboutUs from "./pages/about-us/AboutUs";
import AcademyRecord from "./pages/academy-record/AcademyRecord";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/page-not-found/PageNotFound";

const AppRouting = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/nosotros" component={AboutUs} />
          <Route path="/record" component={AcademyRecord} />
          <Route path="/horario" component={AcademyRecord} />
          <Route path="/pendientes" component={AcademyRecord} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouting;
