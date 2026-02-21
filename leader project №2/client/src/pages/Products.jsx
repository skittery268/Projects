import { useNavigate, useParams } from "react-router";
import { useProducts } from "../context/Products.context";
import { useCategories } from "../context/Categories.context";
import { useCart } from "../context/CartContext";

const Products = () => {
    const { categories } = useCategories();
    const { categori } = useParams();
    const { products } = useProducts();
    const { addToCart, cart, setCart, changeQuantity } = useCart();
    const navigate = useNavigate();

    const saveToLocalStorage = (product) => {
        localStorage.setItem("product", JSON.stringify(product));
    }

    const addCart = (product) => {
        const exist = cart.find(p => p._id === product._id)

        if (exist) {
            setCart(prev => {
                return prev.map(p => {
                    if (p._id === product._id) {
                        changeQuantity(p._id, p.quantity + 1);
                        return { ...p, quantity: p.quantity + 1 };
                    } else {
                        return p;
                    }
                })
            })
        } else {
            addToCart(product);
        }
    }

    const filteredProducts = products.filter(p => p.category === categori);

    return (
        <section className="flex justify-center  mt-30">
            <div className="flex justify-center items-start flex-col h-60 w-75 rounded-[10px] bg-[#F8F8F8]">
                <h1 className="ml-5 mb-5 text-[22px]">Categories</h1>
                {
                    categories.map(categori => {
                        return (
                            <button key={categori._id} className="ml-5 mb-2 text-gray-400 hover:text-blue-400 duration-300 cursor-pointer" onClick={() => navigate(`/products/${categori.categori}`)}>{categori.categori}</button>
                        )
                    })
                }
            </div>
            <div className="flex justify-center items-center flex-wrap gap-5 w-250">
                {
                    filteredProducts.map(product => {
                        return (
                            <div key={product._id} className="relative w-70 flex justify-center items-center flex-col shadow rounded-[20px] h-100 hover:shadow-lg duration-300 group">
                                <img src={product.img} alt={product.title} className="w-70 h-[80%] cursor-pointer" onClick={() => { saveToLocalStorage(product); navigate(`/product/${product._id}`) }} />
                                <p className="text-center h-[20%] text-[14px] mt-2 hover:text-[#21B3F1] duration-500 cursor-pointer" onClick={() => { saveToLocalStorage(product); navigate(`/product/${product._id}`) }}>{product.title}</p>
                                <p className="text-center h-[20%] text-[16px] text-[#21B3F1] font-bold">${product.price}.00</p>
                                <button className="absolute bg-white h-10 w-30 border border-gray-300 rounded-full -bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:bottom-5 hover:bg-[#21B3F1] hover:text-white cursor-pointer" onClick={() => addCart(product)}>Add To Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Products;