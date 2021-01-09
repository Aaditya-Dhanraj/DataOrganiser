import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import Link from 'next/link'

import {useDispatch} from "react-redux";

import IntlMessages from "../../../util/IntlMessages";
import InfoView from "../../../app/components/InfoView";
import {onRegister} from "../../../redux/actions";

const FormItem = Form.Item;

const SignUp = (props) => {

  const dispatch = useDispatch();

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    console.log("Valus: ", values)
    dispatch(onRegister(values));
  };


  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">
              <img src='https://via.placeholder.com/272x395' alt='Neature'/>
            </div>
            <div className="gx-app-logo-wid">
              <h1><IntlMessages id="app.userAuth.signUp"/></h1>
              <p><IntlMessages id="app.userAuth.bySigning"/></p>
              <p><IntlMessages id="app.userAuth.getAccount"/></p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={("/images/logo.png")}/>
            </div>
          </div>

          <div className="gx-app-login-content">
            <Form
              initialValues={{remember: true}}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0">
              <FormItem rules={[{required: true, message: 'Please input your username!'}]} name="name">
                <Input placeholder="Name"/>
              </FormItem>

              <FormItem name="email" rules={[{
                required: true, type: 'email', message: 'The input is not valid E-mail!',
              }]}>
                <Input placeholder="Email"/>
              </FormItem>
              <FormItem name="password"
                        rules={[{required: true, message: 'Please input your Password!'}]}>
                <Input type="password" placeholder="Password"/>
              </FormItem>
              <FormItem name="remember" valuePropName="checked">
                <span>
                <Checkbox>Remember me</Checkbox>
                <Link href="/custom-views/user-auth/forgot-password">
                  <a className="gx-login-form-forgot">Forgot password</a></Link></span>
              </FormItem>
              <FormItem>
                <div><Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signUp"/>
                </Button>
                  <span><IntlMessages id="app.userAuth.or"/></span> <Link href="/signin">
                    <a><IntlMessages
                      id="app.userAuth.signIn"/></a>

                  </Link></div>
              </FormItem>
            </Form>
          </div>
          <InfoView/>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
