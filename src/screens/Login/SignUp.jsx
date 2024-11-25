import AuthImages from "./AuthImages";
import SignUPForm from "./SignUPForm";

const SignUp = () => {
  return (
    <div className=" ">
      <div className="container max-w-[1320px] mx-auto flex items-center justify-between py-24 ">
        <div className="px-6  py-4 bg-gray-200 rounded-2xl">
          <SignUPForm />
        </div>
        <AuthImages />
      </div>
    </div>
  );
};

export default SignUp;
