import React, { Component } from 'react';

class StudentList extends Component {
  constructor(props) {
    super(props);
    // Khởi tạo state với mảng sinh viên
    this.state = {
      students: [
        { id: 1, name: 'Linh', age: 26 },
        { id: 2, name: 'Nhân', age: 27 },
        { id: 3, name: 'Phúc', age: 28 },
      ],
      name: '',
      age: '',
      editId: null,
    };
  }

  // Hàm xử lý khi thay đổi input
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Thêm sinh viên mới
  addStudent = () => {
    const { students, name, age } = this.state;
    const newStudent = {
      id: students.length + 1,
      name,
      age: parseInt(age, 10),
    };
    this.setState({
      students: [...students, newStudent],
      name: '',
      age: '',
    });
  };

  // Sửa sinh viên
  editStudent = (student) => {
    this.setState({
      name: student.name,
      age: student.age,
      editId: student.id,
    });
  };

  // Cập nhật sinh viên đã sửa
  updateStudent = () => {
    const { students, name, age, editId } = this.state;
    const updatedStudents = students.map((student) =>
      student.id === editId ? { ...student, name, age: parseInt(age, 10) } : student
    );
    this.setState({
      students: updatedStudents,
      name: '',
      age: '',
      editId: null,
    });
  };

  // Xóa sinh viên
  deleteStudent = (id) => {
    this.setState((prevState) => ({
      students: prevState.students.filter((student) => student.id !== id),
    }));
  };

  render() {
    const { students, name, age, editId } = this.state;
    return (
      <div>
        <h1>Danh sách sinh viên</h1>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.age} tuổi
              <button onClick={() => this.editStudent(student)}>Sửa</button>
              <button onClick={() => this.deleteStudent(student.id)}>Xóa</button>
            </li>
          ))}
        </ul>

        <h2>{editId ? 'Sửa sinh viên' : 'Thêm sinh viên'}</h2>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Tên sinh viên"
          onChange={this.handleInputChange}
        />
        <input
          type="number"
          name="age"
          value={age}
          placeholder="Tuổi"
          onChange={this.handleInputChange}
        />
        <button onClick={editId ? this.updateStudent : this.addStudent}>
          {editId ? 'Cập nhật' : 'Thêm'}
        </button>
      </div>
    );
  }
}

export default StudentList;
