import React, { useEffect } from "react";
import Axios from "axios";
const UploadedContentList = () => {
  const getUploadedContentList = () => {
    Axios.get("https://api.cloudinary.com/v1_1/dx7vhxxmg/resources/image")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    getUploadedContentList();
  }, []);

  return <div>UploadedContentList</div>;
};

export default UploadedContentList;
