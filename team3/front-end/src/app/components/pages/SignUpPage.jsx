import { GeldIcon } from "../Icons/Geld";
import Link from "next/link";

export const SignUpPage = () => {
  return (
    <div className="w-full flex items-center">
      <div className="w-[50%]  flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-3">
            <GeldIcon />
            <h1>Geld</h1>
          </div>
          <div className="flex justify-center">
            <h1>Create Geld account</h1>
          </div>
          <h2>Sign up below to create your Wallet account</h2>
          <label className="w-[350px] bg-[#F3F4F6] input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Name" />
          </label>
          <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
            <input type="password" className="grow" placeholder="Password" />
          </label>
          <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
            <input type="password" className="grow" placeholder="Re-password" />
          </label>
          <button className="w-[350px] btn bg-[#0166FF] rounded-[20px]">
            Log In
          </button>
          <div className="flex gap-4">
            <h1>Already have account?</h1>
            <Link className="text-blue-600" href={"/"}>
              Log In
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[1200px] bg-[#0166FF]"></div>
    </div>
  );
};
