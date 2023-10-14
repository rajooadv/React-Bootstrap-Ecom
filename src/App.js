import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import ResetPassword from './Pages/ResetPassword';
import CheckEmail from './Pages/CheckEmail';
import Verification from './Pages/Verification';
import NewPassword from './Pages/NewPassword'
function App() {
  return (
    <>
      {/* <SignInPage /> */}
      {/* <SignUpPage/> */}
      {/* <ResetPassword/> */}
      {/* <CheckEmail /> */}
      {/* <Verification /> */}
      <NewPassword/>
    </>
  );
}

export default App;