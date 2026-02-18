import { useProducts } from "../context/Products.context";
import { useForm } from "../hooks/useForm";

const UploadProduct = () => {
    const [formData, handleChange, handleSubmit] = useForm({
        title: "",
        description: "",
        imageUrl: "",
        count: 0
    });

    const { uploadProduct } = useProducts();

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e, uploadProduct)}>
                <input type="text" name="title" value={formData.title} placeholder="Enter title" onChange={handleChange} />
                <input type="text" name="description" value={formData.description} placeholder="Enter description" onChange={handleChange} />
                <input type="text" name="imageUrl" value={formData.imageUrl} placeholder="Enter image url" onChange={handleChange} />
                <input type="number" name="count" value={formData.count} placeholder="Enter product count" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UploadProduct;