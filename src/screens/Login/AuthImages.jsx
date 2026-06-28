import img1 from "../../assets/images/login/authImg.png";

const AuthImages = () => {
  return (
    <aside className="w-full max-w-md relative z-10">
      <img
        src={img1}
        alt="illustration"
        className="w-full h-auto rounded-[2rem] shadow-2xl object-cover transform transition-transform duration-700 hover:scale-[1.02]"
        loading="lazy"
      />
    </aside>
  );
};

export default AuthImages;
