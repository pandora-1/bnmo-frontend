import React from 'react'
import config from "../../../config";
import axios from 'axios';
import Cookies from 'universal-cookie';

const ProfileComponent = () => {
    let [data, setData] = React.useState({
        name: "",
        saldo: "",
        username: ""
    }) // state hook
    React.useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get('token')
        const formData = new FormData();
        const id = localStorage.getItem('id');
        formData.append("id", id);
        const fetchData = async () => {
            await axios({
                method: "post",
                url: `${config.urlBackend}/user/id`,
                data: formData,
                headers: { "Authorization": `Bearer ${token}`, "Content-Type": "multipart/form-data" },
              })
                .then(function (response) {
                  //handle success
                  console.log(response);
                  setData(response.data.data)
                })
                .catch(function (response) {
                  //handle error
                  alert("Terjadi kesalahan sistem")
                });
        }
        fetchData().catch(err => console.log(err))
    }, [0])

    return(
            <div class="py-5 h-100 w-75">
                <div class="flex row justify-content-center align-items-center">
                <div class="col-md-0"></div>
                <div class="col-md-6 col-xl-4">
                    <div class="card" style={{borderRadius: "15px"}}>
                    <div class="card-body text-center">
                        <h4 class="mb-2">{data.name}</h4>
                        <p class="text-muted mb-4">@{data.username}</p>
                        <div class="mb-4 pb-2">
                        </div>
                        <div class="d-flex justify-content-between text-center mt-2 mb-2">
                        <div>
                            <p class="mb-2 h5"></p>
                            <p class="text-muted mb-0"></p>
                        </div>
                        <div class="px-3">
                            <p class="mb-2 h5">{data.saldo}</p>
                            <p class="text-muted mb-0">Saldo</p>
                        </div>
                        <div>
                            <p class="mb-2 h5"></p>
                            <p class="text-muted mb-0"></p>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
            </div>
    )
}

export default ProfileComponent