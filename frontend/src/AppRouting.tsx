import { Router, Route, Switch } from "wouter";
import Layout from "./components/Layout/Layout";
import AboutUs from "./pages/about-us/AboutUs";
import AcademyRecord from "./pages/academy-record/AcademyRecord";
import Home from "./pages/home/Home";
import Horary from "./pages/horary/Horary";
import Login from "./pages/login/Login";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import SingleClass from "./pages/single-class/SingleClass";
import Slopes from "./pages/slopes/Slopes";

const AppRouting = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SingleClass} />
          <Route path="/nosotros" component={AboutUs} />
          <Route path="/record" component={AcademyRecord} />
          <Route path="/horario" component={Horary} />
          <Route path="/pendientes" component={Slopes} />
          <Route path="/materia/:id" component={SingleClass} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouting;
