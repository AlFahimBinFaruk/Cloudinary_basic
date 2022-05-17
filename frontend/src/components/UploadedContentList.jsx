import React, { useEffect, useState } from "react";
import Axios from "axios";
const UploadedContentList = () => {
  const [filelist, setFilelist] = useState();

  //get file list
  const getFileList = () => {
    Axios.get("http://localhost:8000/api").then((res) => {
      setFilelist(res.data)
    }).catch((err) => {
      console.log(err)
    });

  }

  //handledelete
  const handleDelete = (id) => {
    Axios.delete(`http://localhost:8000/api/delete/${id}`).then((res) => {
      console.log("res",res.data)
      alert("deleted")
    }).catch((err) => {
     alert("cant delete file")
    });
  }


  useEffect(() => {
    getFileList()
  }, [])
  return <div className="row">
    {filelist && filelist.map((i, index) => {
      return <div className="col-12 col-md-4">
        <div className="card card-body shadow">
          <img src={i.url} alt="" srcset="" className="img-fluid" />
          <div className="d-flex justify-content-between mt-3 align-item-center">
            <h6 className="fw-bold ">{i.name}</h6>
            {/* delete btn */}
            <i class="fas fa-trash" role="button" onClick={() => handleDelete(i.id)}></i>
          </div>
        </div>
      </div>
    })}

  </div>
};

export default UploadedContentList;
