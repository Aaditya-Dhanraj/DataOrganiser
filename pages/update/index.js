import React from "react";
import Page from "../../app/hoc/securedPage";
import asyncComponent from "../../util/asyncComponent";

const Update = asyncComponent(() => import("../../routes/Update"));

export default Page(() => <Update />);
