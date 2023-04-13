import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ManageCategories = () => {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState([]);
  React.useEffect(() => {
    setLoading(true);
    fetch(" https://paradox-pet.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setType(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // setLoading(false);
  }, []);
  // console.log(type);
  const handleAdd = (e) => {
    e.preventDefault();
    // console.log("clicked");
    const formData = new FormData(e.target);
    const servicedata = Object.fromEntries(formData);
    console.log(servicedata);
    fetch(" https://paradox-pet.vercel.app/addCategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(servicedata),
    })
      .then((res) => res.json())
      .then((data) => {
        {
          console.log(data);
          alert("Category Added Successfully");
          e.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      data-aos-duration="3000"
      data-aos="fade-left"
      className="w-full lg:w-[750px] dark:bg-gray-900 pt-6 lg:pt-16 pb-6 "
    >
      <h1 className="text-3xl font-bold text-center m-12 dark:text-white lg:text-5xl">
        Browse Categories
      </h1>
      {(loading === true && (
        <div role="status" >
           <div className="flex flex-col-reverse justify-center gap-3 items-center w-full h-48  rounded  ">
          <progress className="progress text-base-content w-[50vw]"></progress>
          <span className="text-base-content">Loading...</span>
        </div>
        </div>
      )) ||
        (loading === false && (
          <div className="flex items-center flex-wrap justify-evenly flex-row gap-5">
            {type.map((type) => (
              <div className="card w-60 h-72 bg-base-100 my-10 image-full">
                <figure>
                  <img src={type.picture} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title h-20">{type.category}</h2>
                  <p className="overflow-hidden h-40">{type.about}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Discover</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new Category
          </h2>
          <form action="#" onSubmit={handleAdd}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  name="category"
                  id="name"
                  defaultValue={type.category}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="image"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category image
                </label>
                <input
                  type="text"
                  name="picture"
                  id="image"
                  defaultValue={type.picture}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product image"
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category Route
                </label>
                <input
                  type="text"
                  name="route"
                  id="route"
                  // defaultValue={type.picture}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="graphics_design"
                  required=""
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="8"
                  name="about"
                  defaultValue={type.about}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex btn items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Category
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ManageCategories;
