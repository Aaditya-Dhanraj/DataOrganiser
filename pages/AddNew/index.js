import React from 'react';
import Page from '../../app/hoc/securedPage';
import asyncComponent from '../../util/asyncComponent'

const AddNew = asyncComponent(() => import('../../routes/AddNew'));

export default Page(() => <AddNew/>);