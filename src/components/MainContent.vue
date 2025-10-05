<template>
  <div id="carouselExample" class="carousel slide mt-5" data-bs-ride="carousel">
    <!-- Carousel indicators -->
    <div class="carousel-indicators">
      <button
        v-for="(item, index) in data1"
        :key="index"
        type="button"
        data-bs-target="#carouselExample"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
      ></button>
    </div>

    <!-- Carousel items -->
    <div class="carousel-inner text-center">
      <div
        v-for="(item, index) in data1"
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <div class="row align-items-center justify-content-center vh-100">
          <div class="col-12 col-md-6 mb-4 mb-md-0">
            <img :src="item.image" class="img-fluid" :alt="'Slide ' + (index + 1)" />
          </div>
          <div class="col-12 col-md-6">
            <h2>{{ item.title }}</h2>
            <p>{{ item.p }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel controls -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "CybersecurityCarousel",
  data() {
    return {
      data1: [
        {
          title: "Welcome to Cybersecurity",
          image:
            "https://plus.unsplash.com/premium_vector-1727472798424-ac2a798a4873?q=80&w=691&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          p: "Protecting your data and systems from online threats is essential in today’s digital world.",
        },
        {
          title: "Big Data Insights",
          image:
            "https://cdn.pixabay.com/photo/2016/09/13/13/16/big-data-1667212_960_720.png",
          p: "Analyze massive datasets to detect threats, predict risks, and strengthen security measures.",
        },
        {
          title: "Email & Network Security",
          image:
            "https://plus.unsplash.com/premium_vector-1750156569475-a9013c101d45?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          p: "Ensure your communications are safe and networks are protected against cyberattacks.",
        },
        // Add more slides as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Ensure carousel takes full viewport height */
.carousel-item {
  min-height: 80vh;
}

/* Responsive fix for small screens */
@media (max-width: 768px) {
  .vh-100 {
    height: auto !important;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
