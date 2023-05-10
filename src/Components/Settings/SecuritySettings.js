// import { getAuth } from "firebase/auth";
import React from "react";
// import app from "../../Configs/Firebase.config";
// import { useSelector } from "react-redux";

const SecuritySettings = () => {
  // const auth = getAuth(app);
  // const user = useSelector((state) => state.login.userData);
  return (
    <div
    data-aos-duration="3000"
      data-aos="fade-left"
    >

    <form>
      <div >
        <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">New Password</dt>
          <input
            type="password"
            name="name"
            id="name"
            className="input input-bordered w-full"
            placeholder="*******"

          />

        </div>
        <div >
          <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Confirm Password</dt>
            <input
              type="password"
              name="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="******"
            />
          </div>
        </div>
            <p className="mt-3">8 characters or longer. Combine upper and lowercase letters and numbers.</p>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="submit" class=" btn btn-info bg-primary-700 rounded-md  px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
      <div className="divider"></div>

      <div >
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">PHONE VERIFICATION</dt>
            <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 sm:grid-cols-2">
            <dd >Your phone is verified with Fiverr. Click Edit to change your phone number</dd>
            <button className="btn btn-info  px-4 py-1">Edit</button>
            </div>
           
          </div>
        </div>

        <div >
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">PHONE VERIFICATION</dt>
            <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <dd >Your phone is verified with Fiverr. Click Edit to change your phone number</dd>
            <button className="btn btn-info  px-4 py-1">Edit</button>
            </div>
            
          </div>
        </div>
    </form>
    </div>
  )
};

export default SecuritySettings;
