/* eslint-disable react-hooks/immutability */
import { useNavigate, useParams } from "react-router";
import { useProducts } from "../context/Products.context";
import { useState } from "react";

const Product = () => {
    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const { products } = useProducts();
    const navigate = useNavigate();

    let product = products.find(p => p._id === id);
    
    if (localStorage.getItem("product")) product = JSON.parse(localStorage.getItem("product"));

    const handleChange = (e) => {
        const quantity = e.target.value;

        product.quantity = quantity;
    }

    console.log(product);

    return (
        <section>
            <div className="h-160 mt-20 flex justify-center items-center">
                <img src={product.img} alt={product.title} className="h-150 w-150 shadow rounded-[45px] mr-10 hover:shadow-lg duration-400" />
                <div>
                    <h1 className="text-2xl">{product.title}</h1>
                    <p className="text-[30px] font-bold text-[#21B3F1] border-b border-b-gray-200 pb-3">${product.price}.00</p>
                    <div className="leading-6.25 border-b border-b-gray-200 pb-3 mb-3">
                        <h1 className="mt-3">Availability: <span className="text-green-500">in Stock</span></h1>
                        <h1 className="">Tags: <span className="text-[#21B3F1] cursor-pointer" onClick={() => navigate(`/products/${product.category}`)}>{product.category}</span></h1>
                        <h1>Collections: <span className="text-[#21B3F1] cursor-pointer" onClick={() => navigate(`/products/${product.category}`)}>{product.category}</span></h1>
                    </div>

                    <div className="relative">
                        <label htmlFor="qty" className="text-gray-500">Qty:</label>
                        <input type="number" name="quantity" id="qty" defaultValue="1" onChange={(e) => handleChange(e)} className="mt-25 ml-7 border border-gray-300 outline-none rounded-full h-10 w-23 pl-10 text-gray-400" />

                        <div className="hover:bg-[#21B3F1] absolute border cursor-pointer border-gray-300 hover:border-white rounded-full right-0 bottom-0 h-10 w-10">
                            <img src="../icons/heartBlack.png" className="p-2 duration-300 hover:invert" />
                        </div>
                    </div>

                    <button className="mt-10 text-center w-123 rounded-full hover:bg-[#21B3F1] hover:text-white duration-300 cursor-pointer font-bold h-10 border border-gray-300">Add to Cart</button>

                    <div className="flex justify-between items-center mt-5">
                        <div className="relative">
                            <h1 className="text-[20px]">Product Details</h1>

                            {
                                open && <p className="absolute top-10 w-124">{product.description}</p>
                            }
                        </div>

                        {
                            open ? <img src="../icons/minus.png" className="cursor-pointer h-3" onClick={() => setOpen(false)} /> : <img src="../icons/plus.png" className="cursor-pointer h-3" onClick={() => setOpen(true)} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;