import AuthImages from "./AuthImages";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className=" ">
      <div className="container max-w-[1320px] mx-auto flex items-center justify-between py-24 ">
        <div className="px-6  py-4 bg-gray-200 rounded-2xl">
          <LoginForm />
        </div>
        <AuthImages />
      </div>
    </div>
  );
};

export default Login;
