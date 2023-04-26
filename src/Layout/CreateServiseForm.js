import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import CreateServiseFormHeader from '../Components/Header/CreateServiseFormHeader';
// import CreateServiseOverview from '../Pages/CreateServiseOverview';
// import CreateServisePricing from '../Pages/CreateServisePricing';
// import CreateServiseRequirements from '../Pages/CreateServiseRequirements';

const CreateServiseForm = () => {
    const { register, formState: { errors } } = useForm();

    const [step, setStep] = useState(1)

    let content;

    if (step === 1) {
        content = < div className='w-8/12 m-auto h-96 bg-[gray] px-36 py-20'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Gig Title
            </label>
            <textarea type="text"  {...register("gig_title", {
                required: 'gig_title is required',

            })} className="input input-bordered w-full " placeholder='I will do Something i am really good at' />

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
            </label>


            <select {...register("category")} className="input input-bordered w-full ">
                <option defaultValue='SELECT A CATEGORY'>SELECT A CATEGORY</option>
                <option value="graphicsDesign">GRAPHICS & DESIGN</option>
                <option value="programmingTech">PROGRAMMING & TECH</option>
                <option value="videoAnimation">VIDEO & ANIMATION</option>
            </select>

            <button className='btn btn-secondary absolute right-72 mt-20' onClick={() => setStep(2)} >Continue</button>

        </div>

    }
    if (step === 2) {
        content = <div className=' px-32 py-36 '>
            <div className='grid grid-cols-4 lg:grid-cols-4 '>

                <div></div>
                <div>
                    <h3 className='bg-accent text-center py-4'>BASIC</h3>
                    <input type="text"  {...register("package", {
                        required: 'package is required',
                    })} className="input input-bordered input-group-lg w-full py-10 px-1 placeholder:text-sm "
                        placeholder='Name your package' />

                    <input type="text"  {...register("details", {
                        required: 'details is required',
                    })} className="input input-bordered input-group-lg w-full py-10 px-1 placeholder:text-sm "
                        placeholder='Describe the details of your offering' />


                    <select {...register("delivary time")} className="input input-bordered w-full max-w-xs ">
                        <option disabled selected>Delivary Time</option>
                        <option value="graphicsDesign"> 1 day delivary</option>
                        <option value="programmingTech">2 days delivary</option>
                        <option value="videoAnimation">3 days delivary</option>
                    </select>


                </div>

                <div>
                    <h3 className='bg-accent text-center py-4'>STANDARD</h3>
                    <input type="text"  {...register("package", {
                        required: 'package is required',
                    })} className="input input-bordered input-group-lg w-full py-10 px-1 placeholder:text-sm "
                        placeholder='Name your package' />

                    <input type="text"  {...register("details", {
                        required: 'details is required',
                    })} className="input input-bordered input-group-lg w-full py-10 px-1 placeholder:text-sm "
                        placeholder='Describe the details of your offering' />


                    <select {...register("delivary time")} className="input input-bordered w-full max-w-xs ">
                        <option disabled selected>Delivary Time</option>
                        <option value="graphicsDesign"> 1 day delivary</option>
                        <option value="programmingTech">2 days delivary</option>
                        <option value="videoAnimation">3 days delivary</option>
                    </select>


                </div>


                <div>
                    <h3 className='bg-accent text-center py-4'>PREMIUM</h3>
                    <input type="text"  {...register("package", {
                        required: 'package is required',
                    })} className="input input-bordered input-group-lg w-full py-10 px-1 placeholder:text-sm "
                        placeholder='Name your package' />

                    <input type="text"  {...register("details", {
                        required: 'details is required',
                    })} className="input input-bordered input-group-lg w-full py-10 px-1 placeholder:text-sm "
                        placeholder='Describe the details of your offering' />


                    <select  {...register("delivary time")} className="input input-bordered w-full max-w-xs ">
                        <option disabled selected >Delivary Time</option>
                        <option value="graphicsDesign"> 1 day delivary</option>
                        <option value="programmingTech">2 days delivary</option>
                        <option value="videoAnimation">3 days delivary</option>
                    </select>


                </div>

            </div>
            <button className='btn btn-secondary absolute right-48 mt-8' onClick={() => setStep(3)} >Continue</button>

        </div>

    }

    if (step === 3) {
        content = <div className=' px-32 py-36 ' >


            <section class="bg-gray-200 ">
                <div class="mx-auto  px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div class="lg:col-span-2 lg:py-12">


                        </div>

                        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="" class="space-y-4">
                                <div>
                                    <label class="sr-only" for="name">Name</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label class="sr-only" for="email">Email</label>
                                        <input
                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label class="sr-only" for="phone">Phone</label>
                                        <input
                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <input
                                            class="peer sr-only"
                                            id="option1"
                                            type="radio"
                                            tabindex="-1"
                                            name="option"
                                        />

                                        <label
                                            for="option1"
                                            class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                            tabindex="0"
                                        >
                                            <span class="text-sm font-medium"> Option 1 </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            class="peer sr-only"
                                            id="option2"
                                            type="radio"
                                            tabindex="-1"
                                            name="option"
                                        />

                                        <label
                                            for="option2"
                                            class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                            tabindex="0"
                                        >
                                            <span class="text-sm font-medium"> Option 2 </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            class="peer sr-only"
                                            id="option3"
                                            type="radio"
                                            tabindex="-1"
                                            name="option"
                                        />

                                        <label
                                            for="option3"
                                            class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                            tabindex="0"
                                        >
                                            <span class="text-sm font-medium"> Option 3 </span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label class="sr-only" for="message">Message</label>

                                    <textarea
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div class="mt-4">
                                    <button
                                        type="submit"
                                        class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <button className='btn btn-secondary absolute right-48 mt-8' onClick={() => setStep(4)} >Continue</button>

        </div>
    }


    return (
        <div>
            <div>
                <ul className="steps flex justify-center">
                    <li className={`step ${step === 1 && 'step-primary'}`}>
                        <span>Overview</span>
                    </li>
                    <li className={`step ${step >= 1 && 'step-primary'}`}>
                        <span>Pricing</span>
                    </li>
                    <li className="step  ">
                        <span>Requirements</span>
                    </li>

                    <li className="step">
                        <span>Publish</span>
                    </li>
                </ul>
                <div className='divide'></div>
            </div>
            {content}
        </div>
    );
};

export default CreateServiseForm;