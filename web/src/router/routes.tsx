import Home from "../pages/home/home";

type RouterProps = {
  path: string;
  component: any;
  exact: boolean;
};

const routes: RouterProps[] = [
  {
    path: "/",
    exact: true,
    component: <Home />,
  },
];

export default routes;
