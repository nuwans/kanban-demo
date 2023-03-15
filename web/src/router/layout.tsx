import React from "react";
import { Suspense } from "react";
import Layout from '../components/layout'

type PrivateRouterProps = {

};

const LayoutRoute: React.FC<PrivateRouterProps> = () => {
  return (
    <Layout>
      <Suspense fallback={<div  >Loading</div>}>
      </Suspense>
    </Layout>
  );
};
export default LayoutRoute;
