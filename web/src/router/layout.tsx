import React from "react";
import { Suspense } from "react";
import Layout from '../components/layout'

type PrivateRouterProps = {
  path: string;
  element: any;
};

const LayoutRoute: React.FC<PrivateRouterProps> = ({
  element,
  path,
}) => {
  return (
    <Layout>
      <Suspense fallback={<div  >Loading</div>}>{element}</Suspense>
    </Layout>
  );
};
export default LayoutRoute;
