import React from 'react';

const Checkout = () => {
    return (

        <section className='py-12'>
            <h1 className='text-center text-2xl font-semibold py-6'>Complete Your Order Now</h1>
            <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-50 py-6 md:py-12">
                    <div className="mx-auto max-w-md space-y-2 px-4 lg:px-4">
                            <div className="flow-root">
                                <div className="flex items-center gap-4 py-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                        alt=""
                                        className="h-16 w-16 rounded object-cover"
                                    />

                                    <div>
                                        <h2 className="font-medium text-gray-900">Create Your Website Within 3 Days</h2>
                                        <p className="text-2xl font-medium tracking-tight text-gray-900">
                                            $99.99
                                        </p>
                                    </div>
                                </div>

                            </div>
                        
                    </div>
                </div>

                <div className="bg-white py-6 md:py-12">
                    <div className="mx-auto max-w-lg px-4 lg:px-8">
                        <form className="grid grid-cols-6 gap-4 border p-6 border-gray-200 shadow-sm">

                            <fieldset className="col-span-6">
                                <legend className="block text-sm font-medium text-gray-700">
                                    Card Details
                                </legend>

                                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                    <div>
                                        <label for="CardNumber" className="sr-only"> Card Number </label>

                                        <input
                                            type="text"
                                            id="CardNumber"
                                            placeholder="Card Number"
                                            className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                                        />
                                    </div>

                                    <div className="flex -space-x-px">
                                        <div className="flex-1">
                                            <label for="CardExpiry" className="sr-only"> Card Expiry </label>

                                            <input
                                                type="text"
                                                id="CardExpiry"
                                                placeholder="Expiry Date"
                                                className="relative w-full rounded-bl-md border-gray-200 focus:z-10 sm:text-sm"
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <label for="CardCVC" className="sr-only"> Card CVC </label>

                                            <input
                                                type="text"
                                                id="CardCVC"
                                                placeholder="CVC"
                                                className="relative w-full rounded-br-md border-gray-200 focus:z-10 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div className="col-span-6">
                                <button
                                    className="block w-full font-semibold rounded-md bg-black p-2.5 text-sm bg-primary text-[white] transition hover:shadow-lg"
                                >
                                    Pay Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;