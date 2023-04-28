import React from "react";
import { useSelector } from "react-redux";

const SslCommerz = () => {
  const userData = useSelector((state) => state.login.userData);
  return (
    <section className="py-12 bg-base-100 border m-3 rounded-lg">
      <h1 className="text-center text-2xl font-semibold ">
        Complete Your Order Now
      </h1>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-50  md:py-12">
          <div className="mx-auto max-w-md space-y-2 px-4 lg:px-4">
            <div className="flow-root">
              <div className="flex items-center gap-4 py-4">
                <img
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h2 className="font-medium text-gray-900">
                    Create Your Website Within 3 Days
                  </h2>
                  <p className="text-2xl font-medium tracking-tight text-gray-900">
                    ট99.99
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <!-- component --> */}
          <div class="leading-loose">
            <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
              <p class="text-gray-800 font-medium">Customer information</p>
              <div class="">
                <label class="block text-sm text-gray-00" for="cus_name">
                  Name
                </label>
                <input
                  class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="cus_name"
                  name="cus_name"
                  defaultValue={userData?.displayName}
                  type="text"
                  required=""
                  placeholder="Your Name"
                  aria-label="Name"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-600" for="cus_email">
                  Email
                </label>
                <input
                  class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  defaultValue={userData?.email}
                  required=""
                  placeholder="Your Email"
                  aria-label="Email"
                />
              </div>
              <div class="mt-2">
                <label class=" block text-sm text-gray-600" for="cus_email">
                  Address
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Street"
                  aria-label="Email"
                />
              </div>
              <div class="mt-2">
                <label
                  class="hidden text-sm block text-gray-600"
                  for="cus_email"
                >
                  City
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="City"
                  aria-label="Email"
                />
              </div>
              <div class="inline-block mt-2 w-1/2 pr-1">
                <label
                  class="hidden block text-sm text-gray-600"
                  for="cus_email"
                >
                  Country
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Country"
                  aria-label="Email"
                />
              </div>
              <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label
                  class="hidden block text-sm text-gray-600"
                  for="cus_email"
                >
                  Zip
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Zip"
                  aria-label="Email"
                />
              </div>
              <p class="mt-4 text-gray-800 font-medium">Payment information</p>
              <div class="">
                <label class="block text-sm text-gray-600" for="cus_name">
                  Pay With sslCommerz
                </label>
              </div>
              <div class="mt-4">
                <button
                  class="px-4 py-1 btn w-full text-white font-light tracking-wider bg-gray-900 rounded"
                  type="submit"
                >
                  Pay Now ট99.99
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SslCommerz;
