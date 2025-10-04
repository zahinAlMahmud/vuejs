<template>
    <div class="container mt-5">
      <h2 class="text-primary">Hello World</h2>
      <button type="button" class="btn btn-success">Click Me</button>
  
      <div class="row align-items-center justify-content-center vh-100 text-center">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <img
            class="img-fluid"
            src="https://tse4.mm.bing.net/th/id/OIP.R56mc_WXX0pOnFmh0Mw3jgHaFs?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Example Image"
          />
        </div>
        <div class="col-12 col-md-6">
          <h2>Welcome</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit non, amet ipsa aspernatur repellendus totam sint similique neque corporis beatae possimus. Porro, odio minima! Alias ab quia rerum nisi ipsa?
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CenteredContentExample",
  };
  </script>
  
  <style scoped>
  /* Optional: make sure text remains vertically centered on smaller screens */
  @media (max-width: 768px) {
    .vh-100 {
      height: auto !important;
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }

  
  </style>
  