import { useEffect } from "react"
import getall from "../app/useStudent"
import { NavLink } from "react-router-dom"
import Loader from "../components/Loader"


const Students = () => {
  const { products, loading, getproducts, error, } = getall()

 

  useEffect(() => {
    getproducts()
  }, [])





  const handleDelete = async (id: number): Promise<void> => {
    try {
      await fetch(`https://65f88071df151452460f8b91.mockapi.io/products/${id}`, {
        method: "DELETE",
      });
      getproducts();
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };


  return (
    <>
      <div className='h1 bg-gray-100'>
        <h1 >Products</h1>
        <NavLink to='/add'><button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          Add
        </button></NavLink>


      </div>
      <div className=' w-full  '>
        {loading ? <h2><Loader /></h2> : null}
        <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg  ">
        
          <table

            className=" w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-y-scroll ...">


            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
             
                <th scope="col" className="px-6 py-3">
                  Category
                </th>

                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {products.length > 0 ? products.map((product) =>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              

                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-[100px] h-[100px] rounded-full" src={product.avatar} alt="" />
                   
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.name}
                  </th>

                  <td className="px-6 py-4">
                    {product.title}
                  </td>
                  <td className="px-6 py-4">
                    £ {product.price}
                  </td>

                  <td className="px-6 py-4 flex gap-5 items-center">




                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">Edit</button>

                    <button onClick={() => handleDelete(product.id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>



                  </td>
                </tr>
              </tbody>
            ) : null}
          </table>
        </div>

        {error ? <h2>{error.message}</h2> : null}
      </div>
    </>
  );
};

export default Students;
