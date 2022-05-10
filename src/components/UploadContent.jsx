const UploadContent = () => {
  return (
    <div className="upload-content vh-100 d-flex align-items-center justify-content-center">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="mb-2">
          <label className="form-label fw-bold text-dark" for="customFile">
            Choose a file to upload on Cloudinary.
          </label>
          {/* file */}
          <input type="file" class="form-control" id="customFile" />
        </div>
        {/* upload btn */}
        <button className="btn btn-primary btn-block rounded-0">Upload</button>
      </div>
    </div>
  );
};

export default UploadContent;
