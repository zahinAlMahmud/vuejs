<template>
  <div class="container py-5">
    <div class="row align-items-center">
      
      <!-- 📝 Left Side Text -->
      <div class="col-md-6 text-white mb-4 mb-md-0">
        <h2 class="fw-bold mb-3">Explore Our Collection</h2>
        <p class="lead">
          Discover stunning visuals from around the world.
          Watch as images rotate and morph dynamically.
        </p>
        <button class="btn btn-light mt-3">Learn More</button>
      </div>

      <!-- 🎠 Right Side Rotating Gallery -->
      <div class="col-md-6 d-flex justify-content-center">
        <div class="rotating-gallery position-relative">
          <div
            v-for="(img, index) in images"
            :key="index"
            class="image-wrapper"
            :style="{ '--i': index }"
          >
            <img :src="img" class="gallery-img" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "MorphingGallery",
  data() {
    return {
      images: [
        "https://picsum.photos/id/1015/300/300",
        "https://picsum.photos/id/1025/300/300",
        "https://picsum.photos/id/1035/300/300",
      ],
    };
  },
};
</script>

<style scoped>
body {
  background: radial-gradient(circle, #0f2027, #203a43, #2c5364);
}

/* Container of rotating images */
.rotating-gallery {
  position: relative;
  width: 320px;
  height: 320px;
  transform-style: preserve-3d;
  animation: spin 10s linear infinite;
}

/* Each image positioned in a circle */
.image-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(var(--i) * 120deg)) translateZ(350px);
}

/* Image styles with morphing shape */
.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  animation: morph 4s ease-in-out infinite alternate;
}

/* Rotation animation */
@keyframes spin {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

/* Shape morphing animation */
@keyframes morph {
  0%   { border-radius: 50%; transform: scale(1); }
  25%  { border-radius: 35% 65% 65% 35% / 40% 60% 40% 60%; transform: scale(1.05); }
  50%  { border-radius: 10%; transform: scale(1.1) rotate(3deg); }
  75%  { border-radius: 25% 75% 50% 50%; transform: scale(1.03); }
  100% { border-radius: 50%; transform: scale(1); }
}
</style>
