type RouterProps = {
  path: string;
  exact: boolean;
};

const routes: RouterProps[] = [
  {
    path: "/",
    exact: true,
  },
];

export default routes;
