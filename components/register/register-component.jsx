import Link from 'next/link'
import { useForm } from "react-hook-form";
import config from "../../config";

const RegisterComponent = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        console.log(data.ktp[0])
        formData.append("ktp", data.ktp[0]);
        formData.append("name", data.name);
        formData.append("password", data.password);
        formData.append("username", data.username);
        console.log(formData)
        const res = await fetch(`${config.urlBackend}/register`, {
            method: "POST",
            body: formData,
        }).then((res) => alert("Sukses terdaftar! Silahkan menunggu verifikasi dari admin"))
    };

    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group my-3">
                    <label for="name">Name</label>
                    <input type="text" {...register("name")} class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" />
                    <small id="nameHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
                </div>
                <div class="form-group my-3">
                    <label for="email">Username</label>
                    <input type="text" {...register("username")} class="form-control" id="email" aria-describedby="username" placeholder="Enter username" />
                </div>
                <div class="form-group my-3">
                    <label for="password">Password</label>
                    <input type="password" {...register("password")} class="form-control" id="password" placeholder="Password" />
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">KTP file</label>
                    <input class="form-control" {...register("ktp")} type="file" id="formFile" />
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>
            <p style={{color: "#454444"}}>Already have account? <Link href="/login">Login</Link></p>
        </div>
    )
}

export default RegisterComponent