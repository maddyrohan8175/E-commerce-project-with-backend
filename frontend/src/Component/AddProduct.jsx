import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import pic from '../assets/bag.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function AddProduct() {

    let navigation = useNavigate()
    let [product_name, setProduct_name] = useState('')
    let [product_type, setProduct_type] = useState('')
    let [product_price, setProduct_price] = useState('')
    let [product_rating, setProduct_rating] = useState('')
    let [product_image, setProduct_image] = useState(null)
    console.log(product_image)
    async function handlesubmit(e) {
        let data = new FormData()
        data.append("product_name", product_name)
        data.append("product_type", product_type)
        data.append("product_price", product_price)
        data.append("product_rating", product_rating)
        data.append("product_image", product_image)
        e.preventDefault()
        await axios.post('http://localhost:5000/api/save', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        navigation('/')
    }

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-green-900 ">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Add New Product</h2>


                        <form action="#" method="POST" className="mt-8  px-10 py-10 rounded-md bg-black w-[500px]"
                            onSubmit={handlesubmit}>
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="text-base font-bold text-green-300">
                                        {' '}
                                        Product Name{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-black bg-green-100  px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Product Name"
                                            id="name"
                                            onChange={(e) => setProduct_name(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-base font-bold text-green-300">
                                        {' '}
                                        Product Type{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-green-100 px-3 py-2 text-sm placeholder:text-black  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Product Type"
                                            id="email"
                                            onChange={(e) => setProduct_type(e.target.value)}

                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-base font-bold text-green-300">
                                            {' '}
                                            Product Price{' '}
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border bg-green-100 border-gray-300 t px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Product Price"
                                            id="password"
                                            onChange={(e) => setProduct_price(e.target.value)}

                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-base  font-bold text-green-300">
                                            {' '}
                                            Product Rating{' '}
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border bg-green-100 border-gray-300  px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Product Rating"
                                            id="password"
                                            onChange={(e) => setProduct_rating(e.target.value)}

                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-base font-bold text-green-300">
                                            {' '}
                                            Product Image{' '}
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border bg-green-100 border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="file"
                                            placeholder="Product Image"
                                            id="password"
                                            onChange={(e) => setProduct_image(e.target.files[0])}
                                            accept='/*image'
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-[120px] items-center justify-center rounded-md bg-green-300 px-3.5 py-2.5  leading-7 font-bold text-black hover:bg-green-200 text-1xl"
                                    >
                                        Submit <ArrowRight className="ml-2" size={16} />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="h-full w-full ">
                    <img
                        className="mx-auto  w-[600px] mt-[150px]  rounded-md object-cover "
                        src={pic}
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}
