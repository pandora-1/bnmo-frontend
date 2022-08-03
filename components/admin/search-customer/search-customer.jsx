import React, {useState} from 'react'
import config from "../../../config";
import axios from 'axios';
import Cookies from 'universal-cookie';

const SearchCustomer = () => {
    let [data, setData] = React.useState(null) // state hook
    React.useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get('token')
        const formData = new FormData();
        const id = localStorage.getItem('id');
        formData.append("id", id);
        const fetchData = async () => {
            await axios({
                method: "get",
                url: `${config.urlBackend}/admin/users`,
                headers: { "Authorization": `Bearer ${token}`},
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

    const [name, setName] = useState('');

    // the search result
    const [foundUsers, setFoundUsers] = useState(data);
  
    const filter = (e) => {
      const keyword = e.target.value;
  
      if (keyword !== '') {
        const results = data.filter((user) => {
          return user.name.toLowerCase().startsWith(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundUsers(results);
      } else {
        setFoundUsers(data.slice(0,data.length > 20 ? 20 : data.length));
        // If the text field is empty, show all users
      }
  
      setName(keyword);
    };

    return(
        <div style={{width: "75%", marginTop: "5vw"}}>
            <h1>Search Customer</h1>
            <div class="input-group input-group-sm mb-3" style={{marginTop: "1vw"}}>
                <input value={name} onChange={filter} type="search" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map((user, key) => (
                    <div key={key} style={{display: "flex", textAlign: "center"}}>
                        <p>{user.name} - </p>
                        <p> @{user.username} - </p>
                        <p> Rp.{user.saldo},00 - </p>
                        <p> {user.isAccepted == 1 ? "Belum disetujui" : (user.isAccepted == 2 ? "Terverifikasi" : "Ditolak")}</p>
                    </div>
                ))
            ) : <p>No result found</p>}
        </div>
    )
}

export default SearchCustomer