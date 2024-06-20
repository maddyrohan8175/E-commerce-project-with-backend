import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Table() {

  let [data,setData]=useState([])
  let {id} = useParams()
  useEffect(()=>{
    getData()
  },[])

  async function getData(){
    let result= await axios.get(`http://localhost:5000/api/get`,{
      product_name:data.product_name,
      product_type:data.product_type,
      product_price:data.product_price,
      product_rating:data.product_rating,
      product_image:data.product_image,
    })
    setData(result.data)
  }

  async function deleteData(id){
     let result= confirm('are u sure to delete')
     if(result==true){
      await axios.delete(`http://localhost:5000/api/delete/${id}`)
      getData()
    }
     }
    

  return (
    <>
      <section className=" mx-auto w-full max-w-7xl px-4 py-4 bg-black absolute mt-[60px] ml-[40px] text-white rounded">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Products</h2>
            <p className="mt-1 text-sm text-white">
              This is a list of all products. You can add new Products, edit, delete or view existing
              ones.
            </p>
          </div>
          <div>
            <Link
            to={'/addproduct'}
              type="button"
              className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new Product
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-green-300 ">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-black"
                      >
                        <span>Product_Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-semibold text-black"
                      >
                       Product_Type
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-black"
                      >
                       Product_Price
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-black"
                      >
                        Product_Rating
                      </th>
                     
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-green-100">
                    {data.map((data) => (
                      <tr>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover "
                                src={`http://localhost:5000/${data.product_image}`}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{data.product_name}</div>
                              {/* <div className="text-sm text-gray-700">{person.email}</div> */}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{data.product_type}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {data.product_price}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {data.product_rating}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                           
                          <Link type="button"
                          to={`/view/${data.id}`}
                          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View</Link>
                          <button type="button"
                          onClick={()=>deleteData(data.id)}
                          class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                          <Link type="button" 
                          to={`/update/${data.id}`}
                          class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
