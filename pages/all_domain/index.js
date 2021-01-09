import React from 'react';
import Page from '../../app/hoc/securedPage';
import asyncComponent from '../../util/asyncComponent'

const AllDomain = asyncComponent(() => import('../../routes/AllDomain'));

export default Page(() => <AllDomain/>);
