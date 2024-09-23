import { useEffect, useState } from "react";
import axios from "axios";

export function DemoUseEffect() {
    const [list, setList] = useState([]);
    const getData = () => {
        axios.get("http://dummyjson.com/todos").then((res) => {
            let newList = res.data.todos;
            console.log(newList)
            setList(newList);
        }) 
    }

    useEffect(() => {
        getData()
    }, []) // sẽ thực hiện tác vụ 1 lần render đầu tiên

    return (
        <>
            <h1> List to do</h1>    

            {/* <button onClick={getData}>Click</button> */}

            <table border={1}>
                <tr>
                    <td>id</td>
                    <td>todo</td>
                    <td>completed</td>
                    <td>userId</td>
                </tr>
                {
                    list.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.todo}</td>
                            <td>{item.completed + ''}</td>
                            <td>{item.userId}</td>
                        </tr>
                    ))
                }
            </table>

        </>
    )

}
export default DemoUseEffect;

// API  LÀ NƠI CUNG CẤP DỮ LIỆU THÔNG QUA CÁC ĐƯỜNG DẪN
// Sinh ra từ server, cung cấp dịch vụ cho FE sử dụng.