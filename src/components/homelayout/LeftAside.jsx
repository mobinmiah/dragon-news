import React, { Suspense } from "react";
import AllCategories from "../AllCategories/AllCategories";
import Loading from "../../pages/Loading";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>
        <AllCategories></AllCategories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
