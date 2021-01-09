import React from 'react';
import Page from '../../app/hoc/securedPage';
import asyncComponent from '../../util/asyncComponent'

const MasterTables = asyncComponent(() => import('../../routes/MasterTables'));

export default Page(() => <MasterTables/>);