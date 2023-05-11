/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
// import { DotsVerticalIcon } from "@heroicons/react/24/outline";
// import { CheckCircleIcon } from "@heroicons/react/24/solid";

const orders = [
  {
    number: "WU88191111",
    href: "#",
    invoiceHref: "#",
    createdDate: "Jul 6, 2021",
    createdDatetime: "2021-07-06",
    deliveredDate: "July 12, 2021",
    deliveredDatetime: "2021-07-12",
    total: "$160.00",
    products: [
      {
        id: 1,
        name: "Micro Backpack",
        description:
          "Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.",
        href: "#",
        price: "$70.00",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg",
        imageAlt:
          "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
      },
      // More products...
    ],
  },
  {
    number: "WU88191111",
    href: "#",
    invoiceHref: "#",
    createdDate: "Jul 6, 2021",
    createdDatetime: "2021-07-06",
    deliveredDate: "July 12, 2021",
    deliveredDatetime: "2021-07-12",
    total: "$160.00",
    products: [
      {
        id: 1,
        name: "Micro Backpack",
        description:
          "Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.",
        href: "#",
        price: "$70.00",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg",
        imageAlt:
          "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
      },
      // More products...
    ],
  },
  // More orders...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Orders() {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    try {
      const user = async () => {
        const user = localStorage.getItem("jwt");
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        };
        const { data } = await axios.get(
          `https://devhiveserver.vercel.app/order/all/${localStorage.getItem(
            "user_id"
          )}`,

          config
        );
        setOrderData(data);
        // console.log(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(orderData);
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
          <div className="max-w-2xl lg:flex justify-between mx-auto px-4 lg:max-w-4xl lg:px-0">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-700 sm:text-3xl">
              Order history 
            </h1>
            <p className="text-right text-2xl font-extrabold tracking-tight text-gray-600 sm:text-3xl">Total: {orderData.length}</p>
            
          </div>
        </div>

        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>
          <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
            <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
              {orderData?.map(order => (
                <div className="border rounded-xl p-8">
                  <div className="flex justify-between">
                    <div>
                    <h3 className="text-xl font-semibold ">Product : {order?.product_name}</h3>
                    <h3 className="text-xl font-semibold ">Total : $ {order?.total_amount}</h3>
                    <h3 className="text-md font-semibold ">Transaction id : {order?.tran_id}</h3>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold ">Name : {order?.cus_name}</h3>
                      <h3 className="text-md font-semibold ">Email : {order?.cus_email}</h3>
                      <h3 className="text-md font-semibold ">Address : {order?.cus_add1}, {order?.cus_city}, {order?.cus_country}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="mt-4 py-2 px-2 rounded-md mr-4 bg-primary text-sm text-[white] font-semibold tracking-wide hover:bg-gray-300 hover:text-gray-800">View Orders</button>
                    <button className="mt-4 py-2 px-2 rounded-md mr-4 bg-secondary text-sm text-[white] font-semibold tracking-wide hover:bg-gray-300 hover:text-gray-800">Orders Details</button>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
