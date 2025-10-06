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
        <div class="container py-5">
          <div class="row align-items-center">
            
            <!-- Left Side: Text -->
            <div class="col-md-6 text-white mb-4 mb-md-0">
              <h2 class="fw-bold mb-3">{{ item.title }}</h2>
              <p class="lead">{{ item.p }}</p>
              <button class="btn btn-light mt-3">Learn More</button>
            </div>

            <!-- Right Side: Rotating Gallery -->
            <div class="col-md-6 d-flex justify-content-center">
              <div class="rotating-gallery position-relative">
                <div
                  v-for="(img, i) in item.images"
                  :key="i"
                  class="image-wrapper"
                  :style="{ '--i': i }"
                >
                  <img :src="img" class="gallery-img" />
                </div>
              </div>
            </div>

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
  name: "CombinationSection",
  data() {
    return {
      data1: [
        {
          title: "Explore Our Collection",
          p: "Discover stunning visuals from around the world. Watch as images rotate and morph dynamically.",
          images: [
            "https://picsum.photos/id/1015/300/300",
            "https://picsum.photos/id/1025/300/300",
            "https://picsum.photos/id/1035/300/300",
          ],
        },
        {
          title: "Big Data Insights",
          p: "Analyze massive datasets to detect threats, predict risks, and strengthen security measures.",
          images: [
            "https://cdn.pixabay.com/photo/2016/09/13/13/16/big-data-1667212_960_720.png",
            "https://picsum.photos/id/1027/300/300",
            "https://picsum.photos/id/1045/300/300",
          ],
        },
        {
          title: "Cybersecurity Protection",
          p: "Ensure your communications are safe and networks are protected against cyberattacks.",
          images: [
            "https://plus.unsplash.com/premium_vector-1727472798424-ac2a798a4873?q=80&w=691",
            "https://plus.unsplash.com/premium_vector-1750156569475-a9013c101d45?q=80&w=580",
            "https://picsum.photos/id/1011/300/300",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
body {
  background: radial-gradient(circle, #0f2027, #203a43, #2c5364);
}

/* Carousel base */
.carousel-item {
  min-height: 80vh;
}

/* Rotating gallery styles */
.rotating-gallery {
  position: relative;
  width: 320px;
  height: 320px;
  transform-style: preserve-3d;
  animation: spin 10s linear infinite;
}

.image-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(var(--i) * 120deg)) translateZ(350px);
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  animation: morph 4s ease-in-out infinite alternate;
}

/* Animations */
@keyframes spin {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

@keyframes morph {
  0%   { border-radius: 50%; transform: scale(1); }
  25%  { border-radius: 35% 65% 65% 35% / 40% 60% 40% 60%; transform: scale(1.05); }
  50%  { border-radius: 10%; transform: scale(1.1) rotate(3deg); }
  75%  { border-radius: 25% 75% 50% 50%; transform: scale(1.03); }
  100% { border-radius: 50%; transform: scale(1); }
}

/* Responsive fix */
@media (max-width: 768px) {
  .rotating-gallery {
    width: 220px;
    height: 220px;
    animation-duration: 12s;
  }
}
</style>
