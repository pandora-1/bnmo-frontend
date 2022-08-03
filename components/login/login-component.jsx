import Link from 'next/link'
import { useForm } from "react-hook-form";
import config from "../../config";
import Cookies from 'universal-cookie';
import axios from 'axios';
import {useRouter} from 'next/router'

const LoginComponent = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("password", data.password);
        formData.append("username", data.username);
        axios({
            method: "post",
            url: `${config.urlBackend}/login`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              alert("Selamat login");
              console.log(response)
              const cookies = new Cookies();
              cookies.set('token', response.data.data, { path: '/' });
              console.log(cookies.get('token'));
              localStorage.setItem("isAdmin", response.data.isAdmin)
              localStorage.setItem("id", response.data.id)
              localStorage.setItem("username", response.data.username)
              if(response.data.isAdmin == 0) {
                router.push("/homepage-user");
              } else {
                router.push("/homepage-admin");
              }
            })
            .catch(function (response) {
              alert(response.response.data.message)
            });
    };
    return(
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group my-3">
                    <label for="exampleInputEmail1">Username</label>
                    <input {...register("username")} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                </div>
                <div class="form-group my-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input {...register("password")} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Sign In</button>
            </form>
            <p style={{color: "#454444"}}>Don't have account? <Link href="/register">Register</Link></p>
        </div>
    )
}

export default LoginComponent