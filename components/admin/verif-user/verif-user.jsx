import React from 'react'
import config from "../../../config";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'

const VerifUser = () => {
    let [data, setData] = React.useState(null) // state hook
    const router = useRouter()

    function debugBase64(base64URL){
        var win = window.open();
        win.document.write('<iframe src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    }

    React.useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get('token')
        const formData = new FormData();
        const username = localStorage.getItem('username');
        formData.append("username", username);
        const fetchData = async () => {
            await axios({
                method: "get",
                url: `${config.urlBackend}/admin/not-verified`,
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
        formData.append("username", data);
        formData.append("accepted", 2);
        axios({
            method: "post",
            url: `${config.urlBackend}/admin/verify`,
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
        formData.append("username", data);
        formData.append("accepted", 3);
        axios({
            method: "post",
            url: `${config.urlBackend}/admin/verify`,
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
                    <th scope="col">Nama</th>
                    <th scope="col">Username</th>
                    <th scope="col">KTP</th>
                    <th scope="col">Verified</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((d, key) => (
                        <tr key={key}>
                        <th scope="row">{d.name}</th>
                        <td>{d.username}</td>
                        <td><a onClick={() => debugBase64(d.ktp)}>link</a></td>
                        <td>
                            <button onClick={() => handlerVerifyYes(d.username)}>Yes</button>
                            <button onClick={() => handlerVerifyNo(d.username)}>No</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
             </table>
        </div>
    )
}


export default VerifUser