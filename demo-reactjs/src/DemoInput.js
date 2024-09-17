import React from "react";
export class DemoInput extends React.Component {
    constructor() {
        super();
        this.state = {
            data: '',
            list: [
                "Linh",
                "Hoa",
                "Huy",
                "Hai",
            ],
            dataEdit: '',
            editIndex: null,
            searchQuery: '', // Lưu giá trị tìm kiếm
        };
    }

    getData = (event) => { 
        let newData = event.target.value;
        this.setState({
            data: newData,
        });
    };

    getEditData = (event) => {
        let newDataEdit = event.target.value;
        this.setState({
            dataEdit: newDataEdit,
        });
    };

    getSearchData = (event) => {
        let searchQuery = event.target.value;
        this.setState({
            searchQuery: searchQuery,
        });
    };

    add = () => {
        let newData = this.state.data;
        let newList = this.state.list;
        newList.push(newData);
        this.setState({
            list: newList,
            data: '', // Reset input sau khi thêm
        });
    };

    showEdit = (index) => {
        let oldData = this.state.list[index];
        this.setState({
            dataEdit: oldData,
            editIndex: index, // Lưu chỉ số phần tử cần sửa
        });
    };

    edit = () => {
        let { list, editIndex, dataEdit } = this.state;
        if (editIndex !== null) {
            list[editIndex] = dataEdit; // Cập nhật giá trị mới
            this.setState({
                list: list,
                dataEdit: '', // Reset input sau khi sửa
                editIndex: null, // Xóa chỉ số sau khi sửa xong
            });
        }
    };

    deleteItem = (index) => {
        let newList = this.state.list.filter((_, i) => i !== index);
        this.setState({
            list: newList,
        });
    };

    render() {
        // Lọc danh sách dựa trên giá trị tìm kiếm
        const filteredList = this.state.list.filter(item => 
            item.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        );

        // Box shadow style
        const buttonStyle = {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            padding: '5px 5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '5px',
            color: 'white',
        };

        return (
            <div>
                <input 
                    placeholder="Nhập dữ liệu"
                    onChange={this.getData}
                    value={this.state.data} // Hiển thị giá trị trong ô input
                />
                <button 
                    onClick={this.add} 
                    style={{ ...buttonStyle, backgroundColor: 'blue' }}
                >
                    Thêm mới
                </button>
                <br />
                <input 
                    placeholder="Sửa dữ liệu" 
                    value={this.state.dataEdit} 
                    onChange={this.getEditData} // Cập nhật giá trị mới khi sửa
                />
                <button 
                    onClick={this.edit} 
                    style={{ ...buttonStyle, backgroundColor: 'green' }}
                >
                    Sửa
                </button>
                <br />
                <input 
                    placeholder="Tìm kiếm theo tên" 
                    value={this.state.searchQuery}
                    onChange={this.getSearchData} // Cập nhật giá trị tìm kiếm
                />
                <h1>Data: {this.state.data}</h1>
                <h1>Danh sách học viên :</h1>
                {
                    filteredList.map((item, index) => (
                        <div key={index}>
                            <h3>
                                {index} - {item} | 
                                <button 
                                    onClick={() => this.showEdit(index)} 
                                    style={{ ...buttonStyle, backgroundColor: 'green' }}
                                >
                                    Sửa
                                </button> 
                                <button 
                                    onClick={() => this.deleteItem(index)} 
                                    style={{ ...buttonStyle, backgroundColor: 'red' }}
                                >
                                    Xóa
                                </button>
                            </h3>
                        </div>
                    ))
                }
            </div>
        );
    }
}
