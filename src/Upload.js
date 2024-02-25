import React, { useState } from "react";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log("!!!!");
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("http://localhost:3000/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          console.log("File upload successful");
        } else {
          console.error("File upload failed:", data.message);
        }
      } catch (error) {
        console.error("Error during file upload:", error.message);
      }
    }
  };

  return (
    <html lang="en">
      <head>{/* ... (head content remains the same) */}</head>
      <body>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form
                className="login100-form validate-form"
                onSubmit={handleFileSubmit}
              >
                <span className="login100-form-title p-b-26">
                  Upload File Here
                </span>
                <span className="login100-form-title p-b-48">
                  <i className="zmdi zmdi-font"></i>
                </span>

                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    <button className="login100-form-btn" type="submit">
                      Submit
                    </button>
                  </div>
                </div>

                <div className="text-center p-t-115"></div>
              </form>
            </div>
          </div>
        </div>

        <div id="dropDownSelect1"></div>
      </body>
    </html>
  );
}

export default Upload;
