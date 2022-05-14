import { useState } from "react";
import Axios from "axios";
const UploadContent = () => {
  const [selectedFile, setSelectedFile] = useState("");

  const handleUpload = () => {
    if (selectedFile[0]) {
      const formData = new FormData();
      formData.append("file", selectedFile[0]);
      formData.append("upload_preset", "thobtku9");
      Axios.post(
        "https://api.cloudinary.com/v1_1/dx7vhxxmg/image/upload",
        formData
      )
        .then((res) => {
          console.log("uploaded file info", res);
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Select file properly!!");
    }
  };
  return (
    <div className="upload-content my-5 d-flex align-items-center justify-content-center">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="mb-2">
          <label className="form-label fw-bold text-dark" for="customFile">
            Choose a file to upload on Cloudinary.
          </label>
          {/* file */}
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files)}
            className="form-control"
            id="customFile"
          />
        </div>
        {/* upload btn */}
        <button
          className="btn btn-primary btn-block rounded-0"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadContent;
