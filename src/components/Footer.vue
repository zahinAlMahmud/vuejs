<template>
  <footer class="bg-dark text-light pt-5 pb-4">
    <div class="container">
      <div class="row">
        <!-- About Section -->
        <div class="col-12 col-md-6 mb-4">
          <h5 class="fw-bold mb-3 gradient-text">MetaHeed</h5>
          <p>
            At MetaHeed, we redefine business strategy through AI-driven solutions, cloud consulting, 
            and cybersecurity, enabling sustainable growth in a digital landscape.
          </p>
        </div>

        <!-- Contact Info Section -->
        <div class="col-12 col-md-6 mb-4">
          <h5 class="fw-bold mb-3 gradient-text">Contact Info</h5>
          <p class="mb-1"><i class="bi bi-envelope-fill me-2"></i>contact@metaheed.com</p>
          <p class="mb-1"><i class="bi bi-telephone-fill me-2"></i>+880 1901 635511</p>
          <p class="mb-1"><i class="bi bi-geo-alt-fill me-2"></i>96 Ilford Lane, Ilford IG1 2LD, UK</p>
          <p><i class="bi bi-geo-alt-fill me-2"></i>32 Road 1/A Niketan, Gulshan 1, Dhaka 1212, Bangladesh</p>
        </div>
      </div>

      <hr class="bg-secondary" />

      <div class="text-center small">
        &copy; {{ new Date().getFullYear() }} MetaHeed. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
footer {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 0.95rem;
}

/* Gradient text effect for titles */
.gradient-text {
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Contact icons spacing */
.bi {
  vertical-align: -.125em;
}

/* Horizontal rule styling */
footer hr {
  margin: 1rem 0;
}
</style>
