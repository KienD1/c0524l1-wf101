import React, { useState } from 'react';


const UserList = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Doe', age: 22 },
        { id: 3, name: 'John Smith', age: 25 },
    ]);


    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [editingUserId, setEditingUserId] = useState(null);


    const addUser = (e) => {
        e.preventDefault();
        const newUser = {
            id: users.length + 1,
            name,
            age: Number(age),
        };
        setUsers([...users, newUser]);
        resetForm();
    };


    const editUser = (user) => {
        setEditingUserId(user.id);
        setName(user.name);
        setAge(user.age);
    };


    const updateUser = (e) => {
        e.preventDefault();
        const updatedUsers = users.map(user =>
            user.id === editingUserId ? { ...user, name, age: Number(age) } : user
        );
        setUsers(updatedUsers);
        resetForm();
    };


    const deleteUser = (id) => {
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers);
    };


    const resetForm = () => {
        setName('');
        setAge('');
        setEditingUserId(null);
    };


    return (
        <div>
            <h1>Danh Sách Người Dùng</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.age} tuổi
                        <button onClick={() => editUser(user)}>Sửa</button>
                        <button onClick={() => deleteUser(user.id)}>Xóa</button>
                    </li>
                ))}
            </ul>


            <h2>{editingUserId ? 'Cập Nhật Người Dùng' : 'Thêm Người Dùng Mới'}</h2>
            <form onSubmit={editingUserId ? updateUser : addUser}>
                <input
                    type="text"
                    placeholder="Tên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Tuổi"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <button type="submit">{editingUserId ? 'Cập Nhật' : 'Thêm'}</button>
            </form>
        </div>
    );
};


export default UserList;



