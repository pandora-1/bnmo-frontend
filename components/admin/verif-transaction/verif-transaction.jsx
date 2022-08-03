import React from 'react'
import config from "../../../config";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'

const VerifTransaction = () => {
    let [data, setData] = React.useState(null) // state hook
    const router = useRouter()

    React.useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get('token')
        const formData = new FormData();
        const username = localStorage.getItem('username');
        formData.append("username", username);
        const fetchData = async () => {
            await axios({
                method: "get",
                url: `${config.urlBackend}/admin/transaction/not-verified`,
                headers: { "Authorization": `Bearer ${token}`},
              })
                .then((response) => {
                  console.log(response);
                    setData(response.data.data)
                  }
                )
                .catch(function (response) {
                  //handle error
                  console.log(response)
                });
        }
        fetchData().catch(err => console.log(err))
    }, [0])

    const handlerVerifyYes = async (data) => {
        const cookies = new Cookies();
        const token = cookies.get('token')
        const formData = new FormData();
        formData.append("id", data);
        formData.append("accepted", 2);
        axios({
            method: "post",
            url: `${config.urlBackend}/admin/transaction/verify`,
            data: formData,
            headers: {  "Authorization": `Bearer ${token}`, "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              alert("Berhasil terupdate");
              router.reload(window.location.pathname)
            })
            .catch(function (response) {
                console.log(response)
            });
    };

    const handlerVerifyNo = (data) => {
        const cookies = new Cookies();
        const token = cookies.get('token')
        const formData = new FormData();
        formData.append("id", data);
        formData.append("accepted", 3);
        axios({
            method: "post",
            url: `${config.urlBackend}/admin/transaction/verify`,
            data: formData,
            headers: {  "Authorization": `Bearer ${token}`, "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              alert("Berhasil terupdate");
              router.reload(window.location.pathname)
            })
            .catch(function (response) {
              console.log(response)
            });
    }

    return(
        <div className='col'>
            <table className="table" style={{width: "75%"}}>
                <thead>
                    <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Saldo</th>
                    <th scope="col">Penambahan / Pengurangan</th>
                    <th scope="col">Verified</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((d, key) => (
                        <tr key={key}>
                        <th scope="row">{d.username}</th>
                        <td>{d.request}</td>
                        <td>{d.request < 0 ? "Pengurangan" : "Penambahan"}</td>
                        <td>
                            <button onClick={() => handlerVerifyYes(d.id)}>Yes</button>
                            <button onClick={() => handlerVerifyNo(d.id)}>No</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
             </table>
        </div>
    )
}


export default VerifTransaction