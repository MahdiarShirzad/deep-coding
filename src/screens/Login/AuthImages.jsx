import img1 from "../../assets/images/login/authImg.png";

const AuthImages = () => {
  return (
    <div className=" w-2/5 relative max-lg:hidden">
      <img
        className="rounded-3xl shadow-xl shadow-emerald-950 "
        src={img1}
        alt=""
      />
    </div>
  );
};

export default AuthImages;
