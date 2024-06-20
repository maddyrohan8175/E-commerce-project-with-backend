import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function View() {
    let { id } = useParams()
    let [data, setData] = useState([])
    async function ViewDataById() {
        let result = await axios.get(`http://localhost:5000/api/view/${id}`, {
            product_name: data.product_name,
            product_type: data.product_type,
            product_price: data.product_price,
            product_rating: data.product_rating,
            product_image: data.product_image,
        })
        setData(result.data)
    }
    useEffect(() => {
        ViewDataById()
    }, [])
    return (
        <>
            {
                data.map((data) => (
                    <div>
                    <div class="w-full h-[550px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-[25px]">
                        <a href="#">
                            <img class="p-8 rounded-t-lg h-[400px] w-full" 
                            src={`http://localhost:5000/${data.product_image}`}
                             alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h1 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white border-black border-[2px] text-center bg-red-300 rounded-md ">{data.product_name}
                                </h1>
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">{data.product_type}
                                </h5>
                                
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                <h1 className=' text-xl'>Rating:-</h1>
                                <span class="bg-blue-100 text-blue-800 text-xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{data.product_rating}⭐</span>
                            </div>
                            <div class="flex items-center justify-between mt-[-30px] ml-50px">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white mt-[14px]">₹{data.product_price}</span>
                                <Link to="/" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Back to home</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                ))
            }
        </>
    )
}
