import { useForm } from "react-hook-form";
import config from "../../../config";
import axios from 'axios';
import Cookies from 'universal-cookie';
import React from 'react'

const TransferComponent = () => {
    const { register, handleSubmit } = useForm();

    const [mataUang, setMataUang] = React.useState({
        IDR: "Rupiah"
    })
    React.useEffect(() => {
        const matauang = localStorage.getItem('matauang');
        console.log(matauang)
        const fetchData = async () => {
            var myHeaders = new Headers();
            myHeaders.append("apikey", "QAWsyB8QB8mg5EVd9XK1fkp5IBfMSnNk");

            var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
            };

            await fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
            .then(response => response.text())
            .then(response => {
                let hasil = JSON.parse(matauang)
                setMataUang(hasil.symbols)
                localStorage.setItem("matauang", response)
            })
            .catch(error => console.log('error', error));
        }
        if (matauang == "") {
            fetchData().catch(err => console.log(err))
        } else {
            let hasil = JSON.parse(matauang)
            setMataUang(hasil.symbols)
        }
    }, [0])

    const onSubmit = async (data) => {
        const formData = new FormData();
        const cookies = new Cookies();
        const token = cookies.get('token')
        if(localStorage.getItem('username') == data.usernameTujuan) {
            alert("Tidak bisa memasukkan username yang sama")
        } else {
            formData.append("username", localStorage.getItem('username'));
            formData.append("total", data.total);
            formData.append("usernameTujuan", data.usernameTujuan);
            formData.append("matauang", data.matauang);
            axios({
                method: "post",
                url: `${config.urlBackend}/user/transfer`,
                data: formData,
                headers: { "Authorization": `Bearer ${token}`, "Content-Type": "multipart/form-data" },
              })
                .then(function (response) {
                  //handle success
                  alert("Sukses melakukan transfer")
                })
                .catch(function (response) {
                  //handle error
                  alert(response.response.data.message)
                });
        }
    };
    return(
        <form className="w-75 flex row justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="col">
                <div className="row-md-6">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username tujuan</label>
                        <input {...register("usernameTujuan")} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Total uang</label>
                        <input type="text" {...register("total")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Mata uang</label>
                        <select {...register("matauang")} class="form-select mb-3" aria-label="Default select example">
                            <option selected>Transfer dalam bentuk</option>
                            {
                                Object.keys(mataUang).map((key, index) => ( 
                                    <option key={index} value={key}>{mataUang[key]}</option> 
                                ))
                            }
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Transfer</button>
                </div>
            </div>
        </form>
    )
}

export default TransferComponent