import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";

export default function UploadImages({ setIsImgUploading, setImgUrl }) {
  const [images, setImages] = React.useState([]);
  const [imageUrls, setImageUrls] = React.useState({});
  const maxNumber = 6;
  useEffect(() => {
    console.log(imageUrls);
    setImgUrl(imageUrls);
  }, [setImageUrls, setImgUrl, imageUrls]);
  const uploadImage = (formData) => {
    console.log(formData);
    // const apiKey = process.env.IMGBBAPI;
    if (formData.length == 0) {
      return;
    }
    setIsImgUploading(true);
    fetch(
      `https://api.imgbb.com/1/upload?key=d1cfe20a3fbc8743b93b754fbabc2085&expiration=0`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.data.url;
        setImageUrls((prevUrls) => ({
          ...prevUrls,
          [`img${images.length + 1}`]: imageUrl,
        }));

        console.log(imageUrl);
        setIsImgUploading(false);
        // Do something with the imageUrl, like save it to a database
        //    const newUsers = { ...users };
        //    newUsers.image = imageUrl;
        //    setUsers(newUsers);
        //    setImgUploading(false);
      })
      .catch((error) => console.error(error));
  };
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    //submit to imgbb

    const formData = new FormData();
    // formData.append("image", imageList[0].file);
    imageList.forEach((image) => {
      formData.append("image", image.file);
    });
    setImages(imageList);
    if (imageList.length == 0) {
      setImgUrl("");
      return;
    }

    uploadImage(formData);

    console.log(imageList, addUpdateIndex);
  };

  // listen to removeAllImg and setImgUrl to ""
  useEffect(() => {
    if (imageUrls.length == 0) {
      setImgUrl("");
    }
  }, [imageUrls, setImgUrl]);

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              className="btn btn-xs btn-secondary"
              style={isDragging ? { color: "blue" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              {imageUrls.length != 0
                ? "Click or Drop here"
                : "Add more images (max 6)"}
            </button>
            &nbsp;
            <button className="btn btn-xs btn-error" onClick={onImageRemoveAll}>
              Remove all images
            </button>
            <div className="flex flex-row items-center justify-center m-2 gap-2 flex-wrap ">
              {imageList.map((image, index) => (
                <div key={index} className="image-item ">
                  <img
                    src={image["data_url"]}
                    className=""
                    alt=""
                    width="100"
                    margin="2"
                  />

                  {/* <div className="image-item__btn-wrapper">
                  <button
                    className="btn btn-success btn-xs btn-outline mr-2"
                    onClick={() => onImageUpdate(index)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-error btn-xs btn-outline"
                    onClick={() => onImageRemove(index)}
                  >
                    Remove
                  </button>
                </div> */}
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
