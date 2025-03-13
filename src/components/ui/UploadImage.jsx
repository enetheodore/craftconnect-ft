import { CircularProgress } from "@mui/material";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { makeApiRequest } from "../../utilities/makeApiRequest";
import { useAuthContext } from "../../contexts/AuthContext";

const UploadImage = ({ imageTitle, setImageUrl, imageUrl, requrement }) => {
  const [isImageUploading, setIsImageUploading] = useState();
  const [selectedImage, setSelectedImage] = React.useState(null);
  // const [imageUrl, setCarImageUrl] = React.useState(null);
  // const { userCredentials } = useContext(AuthContext);
   const {authUser} = useAuthContext()
  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setIsImageUploading(true);
      setSelectedImage(URL.createObjectURL(selectedFile));
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        // const response = await axios.post('http://localhost:5000/file/upload', formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   }
        // });

        const response = await makeApiRequest(
          `/file/upload`,
          formData,
          "POST",
          authUser.token
        );
        setImageUrl(response.fileName);
        console.log(response.fileName);
        setIsImageUploading(false);

        // alert(response.data.message);
      } catch (error) {
        console.error("Error uploading the file:", error);
        toast.error("failed to upload image");
        setIsImageUploading(false);
      }
    }
  };

  return (
    <div>
      <h1>
        {imageTitle} Image {requrement && <>({requrement})</>}
      </h1>
      <div className="flex items-center justify-center h-32 bg-gray-100">
        <label className="flex flex-col items-center justify-center w-full h-full border-2 border-dashed border-blue-500 rounded-lg cursor-pointer hover:bg-blue-50 transition">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          {isImageUploading ? (
            <CircularProgress />
          ) : (
            <>
              {!imageUrl && (
                <span className="text-blue-500">Click to Upload</span>
              )}
              {imageUrl && (
                <img
                  src={`${import.meta.env.VITE_API_URL}/file/${imageUrl}`}
                  alt="Preview"
                  className="mt-2 w-full h-full object-contain rounded-lg"
                />
              )}
            </>
          )}
        </label>
      </div>
    </div>
  );
};

export default UploadImage;
