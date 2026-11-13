import google from "../../assets/google.png"
import gmail from "../../assets/gmail.png"
import phone from "../../assets/phone.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import { ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-200">
      <div className="mb-10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Masuk dulu <ShoppingBag size={30} />
        </h1>
      </div>
      <hr className="border" />
      <div>
        <div className="flex items-center border rounded-full p-1 pe-10 bg-white lg:w-96">
          <div className="me-14 lg:me-20">
            <img src={google} alt="" />
          </div>
          <p>Lanjutkan dengan Google</p>
        </div>
        <div className="flex items-center border rounded-full p-1 my-5 bg-red-500 pe-10">
          <div className="me-14 lg:me-20">
            <img src={gmail} alt="" className="rounded-full" />
          </div>
          <p className="text-white">Lanjutkan dengan Email</p>
        </div>
        <div className="flex items-center border rounded-full my-5 p-1 bg-white">
          <div className="me-14 lg:me-20">
            <img src={phone} alt="" />
          </div>
          <p>Masuk dengan No telepon</p>
        </div>
        <Link to="/register" className="flex items-center border rounded-full p-2 bg-white">
          <div className="me-14 lg:me-20">
            <span><User size={30}/></span>
          </div>
          <p>Buat Akun Manual</p>
        </Link>
      </div>
      <div className="mt-10 ">
        <h2>-- Atau lanjutkan dengan --</h2>
        <div className="flex gap-10 justify-center items-center mt-5">
          <div className="bg-white p-3 rounded-md">
            <img src={facebook} alt="" />
          </div>
          <div className="bg-white p-3 rounded-md">
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
