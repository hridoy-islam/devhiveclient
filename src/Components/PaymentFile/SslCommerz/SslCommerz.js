import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Reviews from "../../Reviews/Reviews";
import axios from "axios";
import { useLoaderData, useLocation, useNavigate } from "react-router";

const SslCommerz = () => {
  const userData = useSelector((state) => state.login.userData);
  const serviceInfo = useLoaderData([]);
  console.log(serviceInfo);
  let location = useLocation();
  const from = location.state?.from?.pathname || "/services";
  const navigate = useNavigate();
  // if there is no data at orderDetail, then navigate
  useEffect(() => {
    if (serviceInfo == null) {
      navigate(from, { replace: true });
    }
  }, [serviceInfo]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const BillData = Object.fromEntries(formData);
    console.log(BillData);

    try {
      const { data } = await axios.get(
        `https://devhiveserver.vercel.app/order`,
        {
          params: BillData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")},`,
          },
        }
      );
      console.log(data);
      if (data?.url != undefined) {
        window.location.replace(data?.url);
      }
    } catch (error) {
      alert("error occurred");
      console.log(error);
    }
  };

  return (
    <section className="py-12 bg-base-100 border m-3 rounded-lg">
      <h1 className="text-center text-2xl font-semibold ">
        Complete Your Order Now
      </h1>
      <Reviews></Reviews>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-50  md:py-12">
          <div className="mx-auto max-w-md space-y-2 px-4 lg:px-4">
            <div className="flow-root">
              <div className="flex items-center gap-4 py-4">
                <img
                  src={serviceInfo?.serviceImage?.img1}
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h2 className="font-medium text-gray-900">
                    {serviceInfo?.slugTitle}
                  </h2>
                  <p className="text-2xl font-medium tracking-tight text-gray-900">
                    Price: {serviceInfo?.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <!-- component --> */}
          <div class="leading-loose">
            <form
              onSubmit={handleSubmit}
              class="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
            >
              <p class="text-gray-800 font-medium">Shipment information</p>
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
                <input
                  class="hidden"
                  id="cus_id"
                  name="cus_id"
                  value={localStorage.getItem("user_id")}
                  type="text"
                  required=""
                />
                <input
                  class="hidden"
                  id="serviceId"
                  name="serviceId"
                  value={serviceInfo?._id}
                  type="text"
                  required=""
                />
              </div>
              <div class="">
                <label class="block text-sm text-gray-00" for="cus_phone">
                  Phone
                </label>
                <input
                  class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="cus_phone"
                  name="cus_phone"
                  defaultValue="+880"
                  type="text"
                  required=""
                  placeholder="Your Phone"
                  aria-label="Phone"
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
                  id="cus_add1"
                  name="cus_add1"
                  type="text"
                  required=""
                  placeholder="Street"
                  aria-label="Address"
                />
              </div>
              <div class="mt-2">
                <label
                  class="hidden text-sm block text-gray-600"
                  for="cus_city"
                >
                  City
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_city"
                  name="cus_city"
                  type="text"
                  required=""
                  placeholder="City"
                  aria-label="City"
                />
              </div>
              <div class="inline-block mt-2 w-1/2 pr-1">
                <label
                  class="hidden block text-sm text-gray-600"
                  for="cus_country"
                >
                  Country
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_country"
                  name="cus_country"
                  type="text"
                  required=""
                  placeholder="Country"
                  aria-label="Country"
                />
              </div>
              <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label
                  class="hidden block text-sm text-gray-600"
                  for="cus_postcode"
                >
                  Zip
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_postcode"
                  name="cus_postcode"
                  type="text"
                  required=""
                  placeholder="Postcode"
                  aria-label="Postcode"
                />
              </div>
              <p class="mt-4 text-gray-800 font-medium">Payment information</p>
              <div class="flex flex-row gap-3 items-center">
                <input
                  type="radio"
                  className="checked"
                  checked="true"
                  name="payWithSslCommerz"
                  id=""
                />
                <label class="block text-sm text-gray-600" for="cus_name">
                  Pay With sslCommerz
                </label>
              </div>
              <div class="mt-4">
                <button
                  class="px-4 py-1 btn btn-primary w-full text-white font-light tracking-wider bg-gray-900 rounded"
                  type="submit"
                >
                  Pay Now ট{serviceInfo?.price}
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
