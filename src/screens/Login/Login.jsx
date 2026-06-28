import AuthImages from "./AuthImages.jsx";
import LoginForm from "./LoginForm.jsx";

const Login = () => {
  return (
    <main className="min-h-screen  bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col mt-16 lg:flex-row">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-8 sm:p-12 lg:p-16">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 bg-indigo-50/50 hidden lg:flex items-center justify-center p-12 relative overflow-hidden">
          {/* Decorative background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl"></div>
          <AuthImages />
        </div>
      </div>
    </main>
  );
};

export default Login;
