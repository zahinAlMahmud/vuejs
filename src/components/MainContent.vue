<template>
  <div class="container-fluid py-5 bg-primary w-full" id="home">
    <div
      id="rotatingGalleryCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(item, index) in slides"
          :key="index"
          type="button"
          data-bs-target="#rotatingGalleryCarousel"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
        ></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner">
        <div
          v-for="(item, index) in slides"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <!-- Row with responsive column order -->
          <div
            class="row align-items-center justify-content-center text-white vh-100 flex-column flex-md-row"
          >
            <!-- 🎠 Rotating Gallery (show first on mobile) -->
            <div
              class="col-12 col-md-6 d-flex justify-content-center order-1 order-md-2 mt-4 mt-md-0"
            >
              <div class="rotating-gallery">
                <div
                  v-for="(img, i) in item.gallery"
                  :key="i"
                  class="image-wrapper"
                  :style="{ '--i': i }"
                >
                  <img :src="img" class="gallery-img" />
                </div>
              </div>
            </div>

            <!-- 📝 Text Section (show below on mobile) -->
            <div
              class="col-12 col-md-6 text-center text-md-start px-4 order-2 order-md-1 mt-4 mt-md-0"
            >
              <h2
                class="fw-bold mb-3 text-text1"
                :style="{ fontSize: '3rem' }"
              >
                {{ item.title }}
              </h2>
              <p class="lead text-text1">{{ item.p }}</p>
              <button class="btn btn-outline-light mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RotatingGallery",
  data() {
    return {
      slides: [
        {
          title: "Cybersecurity",
          p: "Protecting your data and systems from online threats is essential in today’s digital world.",
          gallery: [
            "https://media.istockphoto.com/id/2035601113/photo/cybersecurity-innovations-concept-engineer-computer-working-with-laptop-computer-show-pad.jpg?s=612x612&w=0&k=20&c=zhqd2qypnGpbYCDqdOHt0BUGHDcp6ehPJzh155a5DgI=",
            "https://www.shutterstock.com/image-photo/glowing-digital-lock-surrounded-by-600nw-2517566697.jpg",
            "https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg",
          ],
        },
        {
          title: "Big Data Insights",
          p: "Analyze massive datasets to detect threats, predict risks, and strengthen security measures.",
          gallery: [
            "https://www.smartsight.in/wp-content/uploads/2021/07/Big-Data-01.jpg",
            "https://media.licdn.com/dms/image/v2/D4D12AQFNUAdgaoK2zQ/article-cover_image-shrink_600_2000/0/1692816749106?e=2147483647&v=beta&t=QS3H9YJkB7gxHWr6uwmkYQN8j04hQvUODpfIvp9VjtY",
            "https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/694991_cDO5wuA0NdevLb45zHRvog.jpeg",
          ],
        },
        {
          title: "Email Security",
          p: "Ensure your communications are safe and networks are protected against cyberattacks.",
          gallery: [
            "https://media.istockphoto.com/id/2194476573/photo/email-security-spam-virus-alert-in-email-businessman-using-smartphone-to-access-email.jpg?s=612x612&w=0&k=20&c=kRLn7Lg8xqBm9AtIWq6daUg2lY8yWTurXEd_nWClF_Y=",
            "https://media.istockphoto.com/id/1346734927/vector/hacker-and-cyber-criminals-phishing-stealing-private-personal-data-user-login-password.jpg?s=612x612&w=0&k=20&c=ZHZIlbWiMDxe1JDSb3pfOzvoMtqa1pPOUwh1lMSAhz8=",
            "https://media.istockphoto.com/id/1296958349/vector/safe-mail-message-transfer-letter-digital-concept-vector-flat-graphic-design-simple.jpg?s=612x612&w=0&k=20&c=etVLWc6-P3Aso9D-AfP5F79aCrZMM7ueMTgghpX9QbU=",
          ],
        },
        {
          title: "Network Security",
          p: "Protecting networks and data from unauthorized access and cyber threats for safe communication.",
          gallery: [
            "https://eu-images.contentstack.com/v3/assets/blt07f68461ccd75245/blt9a0dbfd66f2496de/6650a07b75c24653285b9978/the_20words_20network_20security_20surrounded_20by_20various_20IT_20icons.jpg",
            "https://www.extnoc.com/learn/wp-content/uploads/2022/02/Network-Security.jpg",
            "https://www.cyberdb.co/wp-content/uploads/2024/05/aaa.png",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Background */
body {
  background: radial-gradient(circle, #0f2027, #203a43, #2c5364);
}

/* 🎠 Rotating Gallery */
.rotating-gallery {
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  animation: spin 12s linear infinite;
  transition: all 0.4s ease;
}

.rotating-gallery:hover {
  animation-play-state: paused;
  transform: scale(1.05);
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
  border-radius: 25%;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
  opacity: 0.9;
  transition: all 0.5s ease;
}

.rotating-gallery:hover .gallery-img:hover {
  transform: scale(1.2);
  opacity: 1;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.9);
  z-index: 10;
}

@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

/* 📱 Responsive: smaller gallery & stacked layout */
@media (max-width: 768px) {
  .vh-100 {
    height: auto !important;
  }
  .rotating-gallery {
    width: 220px;
    height: 220px;
  }
  h2 {
    font-size: 2rem !important;
  }
}
</style>
