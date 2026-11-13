import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="flex flex-col bg-blue-200 h-screen">
      <div className="mt-10 mx-5 sm:mx-28 md:mx-48 lg:mx-60 xl:mx-96">
        <form action="" className="mt-10 bg-white p-3 rounded-md">
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-center">Buat akun dulu</h1>
          </div>
          <div className="my-5">
            <label htmlFor="">Username</label>
            <input type="text" className="border block mt-2 w-full h-9 " />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" className="border block mt-2 w-full h-9 " />
          </div>
          <div className="my-5">
            <label htmlFor="">Password</label>
            <input type="password" className="border block mt-2 w-full h-9 " />
          </div>
          <div>
            <label htmlFor="">Confirm Password</label>
            <input type="password" className="border block mt-2 w-full h-9 " />
          </div>
          <div className="my-5">
            <input type="checkbox" name="" id="" className="me-5" />
            <span>
              I agree with of <span className="text-blue-400">term of services</span>
            </span>
          </div>
          <button className="w-full bg-blue-500 py-2 px-3 text-white mb-5">Buat akun</button>
          <span className=" w-full flex justify-center items-center">
            <p className="inline-block me-2">Sudah punya akun?</p>
            <Link to="/login" className="underline inline-block">
              Masuk disini
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;
