import React, { useEffect, useState } from 'react';


const CatList = () => {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newCatUrl, setNewCatUrl] = useState('');
    const [editingCatId, setEditingCatId] = useState(null);
    const [editingCatUrl, setEditingCatUrl] = useState('');


    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCats(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };


        fetchCats();
    }, []);


    const addCat = (e) => {
        e.preventDefault();
        const newCat = { id: Date.now(), url: newCatUrl };
        setCats([...cats, newCat]);
        setNewCatUrl('');
    };


    const editCat = (cat) => {
        setEditingCatId(cat.id);
        setEditingCatUrl(cat.url);
    };


    const updateCat = (e) => {
        e.preventDefault();
        const updatedCats = cats.map(cat =>
            cat.id === editingCatId ? { ...cat, url: editingCatUrl } : cat
        );
        setCats(updatedCats);
        setEditingCatId(null);
        setEditingCatUrl('');
    };


    const deleteCat = (id) => {
        const filteredCats = cats.filter(cat => cat.id !== id);
        setCats(filteredCats);
    };


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div>
            <h1>Danh Sách Ảnh Mèo</h1>
            <ul>
                {cats.map(cat => (
                    <li key={cat.id}>
                        <img src={cat.url} alt="Cat" style={{ width: '200px', height: 'auto' }} />
                        <button onClick={() => editCat(cat)}>Sửa</button>
                        <button onClick={() => deleteCat(cat.id)}>Xóa</button>
                    </li>
                ))}
            </ul>


            <h2>{editingCatId ? 'Cập Nhật Ảnh Mèo' : 'Thêm Ảnh Mèo Mới'}</h2>
            <form onSubmit={editingCatId ? updateCat : addCat}>
                <input
                    type="text"
                    placeholder="URL Ảnh"
                    value={editingCatId ? editingCatUrl : newCatUrl}
                    onChange={(e) => {
                        if (editingCatId) {
                            setEditingCatUrl(e.target.value);
                        } else {
                            setNewCatUrl(e.target.value);
                        }
                    }}
                    required
                />
                <button type="submit">{editingCatId ? 'Cập Nhật' : 'Thêm'}</button>
            </form>
        </div>
    );
};


export default CatList;



