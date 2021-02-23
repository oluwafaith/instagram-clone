import React, { lazy, suspense } from 'react';

const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy(() => import ('./pages/login'));
const SignUp = lazy(() => import ('./pages/signup'));
const Profile = lazy(() => import ('./pages/profile'));
const NotFound = lazy(() => import ('./pages/not-found'));

function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <div className="">
      <div className="">
        Blessing Krofegha
      </div>
      <p className="">
        When I’m not coding, I switch to Netflix with biscuits and cold tea as my companion. <span></span>😜
      </p>
    </div>
    <div className="">
      <span className="">#Software Engineer</span>
      <span className="">#Writter</span>
      <span className="">#Public Speaker</span>
    </div>
  </div>
  );
}

export default App;
