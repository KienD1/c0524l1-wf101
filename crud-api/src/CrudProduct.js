import React, { useState, useEffect } from 'react';

const CrudProduct = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({
        name: '',
        description: '',
        img: '',
        price: '',
        stock: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [message, setMessage] = useState('');

    // Fetch all products when the component mounts
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const fetchProductById = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/products/${id}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const createProduct = async () => {
        try {
            await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            setProduct({ name: '', description: '', img: '', price: '', stock: '' });
            fetchProducts();
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    const updateProduct = async (id) => {
        try {
            await fetch(`http://localhost:3000/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            setProduct({ name: '', description: '', img: '', price: '', stock: '' });
            setIsEditing(false);
            setEditingId(null);
            fetchProducts();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const deleteProduct = async (id) => {
        const isConfirmed = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
        if (!isConfirmed) return;
        try {
            await fetch(`http://localhost:3000/products/${id}`, {
                method: 'DELETE',
            });
            setMessage('Xóa sản phẩm thành công!');
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            setMessage('Xóa sản phẩm thất bại!');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            updateProduct(editingId);
        } else {
            createProduct();
        }
    };

    const handleEdit = (product) => {
        setProduct(product);
        setIsEditing(true);
        setEditingId(product.id);
    };

    return (
        <div>
            <h1>Product Management</h1>
            {message && <p style={{ color: 'green' }}>{message}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                />
                <textarea
                    placeholder="Product Description"
                    value={product.description}
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={product.img}
                    onChange={(e) => setProduct({ ...product, img: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={product.price}
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Stock"
                    value={product.stock}
                    onChange={(e) => setProduct({ ...product, stock: e.target.value })}
                />
                <button type="submit">{isEditing ? 'Update' : 'Create'} Product</button>
            </form>

            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                        <img src={product.img} alt={product.name} style={{ width: '350px', height: '350px', objectFit: 'cover' }} />
                        <strong>{product.name}</strong>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Stock: {product.stock}</p>
                        <div>
                            <button onClick={() => handleEdit(product)} style={{marginRight: '5px'}}>Edit</button>
                            <button onClick={() => deleteProduct(product.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CrudProduct;
