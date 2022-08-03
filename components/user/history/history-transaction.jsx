import React from 'react'
import config from "../../../config";
import axios from 'axios';
import Cookies from 'universal-cookie';

const HistoryTransaction = () => {
    let [data, setData] = React.useState(null) // state hook
    let [page, setPage] = React.useState(1) // state hook
    let [dataTemporer, setDataTemporer] = React.useState(null) // state hook

    React.useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get('token')
        const formData = new FormData();
        const username = localStorage.getItem('username');
        formData.append("username", username);
        const fetchData = async () => {
            await axios({
                method: "post",
                url: `${config.urlBackend}/user/history/transaction`,
                data: formData,
                headers: { "Authorization": `Bearer ${token}`, "Content-Type": "multipart/form-data" },
              })
                .then((response) => {
                  console.log(response);
                    setData(response.data.data)
                    if(response.data.data.length < 2) {
                        setDataTemporer(response.data.data)
                      } else{
                        setDataTemporer(response.data.data.slice(0,2))
                    }
                  }
                )
                .catch(function (response) {
                  //handle error
                  console.log(response)
                });
        }
        fetchData().catch(err => console.log(err))
    }, [0])

    const handlerAddPage = () => {
        if (page <= data.length / 2) {
            setPage(page + 1)
            setDataTemporer(data.slice((page) * 2, (page+1) * 2))
        }
    }

    const handlerSubstractPage = () => {
        if (page > 1) {
            setPage(page - 1)
            setDataTemporer(data.slice((page-2) * 2, (page-1) * 2))
        }
    }

    return(
        <div className='col'>
            <table className="table" style={{width: "75%"}}>
                <thead>
                    <tr>
                    <th scope="col">Waktu</th>
                    <th scope="col">Perubahan saldo</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTemporer && dataTemporer.map((d, key) => (
                        <tr key={key}>
                        <th scope="row">{d.created_at.slice(0,10)}</th>
                        <td>{d.request > 0 ? "+" + d.request : d.request}</td>
                        <td>{d.isVerified == 1 ? "belum disetujui" : d.isVerified == 2 ? "sudah disetujui" : "ditolak"}</td>
                        </tr>
                    ))}
                </tbody>
             </table>
             <div>
                <button onClick={handlerSubstractPage} style={{marginRight: "1vw"}}>-</button>
                <button style={{marginRight: "1vw"}} disabled>{page}</button>
                <button onClick={handlerAddPage}>+</button>
             </div>
        </div>
    )
}


export default HistoryTransaction