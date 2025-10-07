<template>
<section class="who-we-are-section py-5 text-center" id="who">
  <div class="container">
    <h3 class="fw-semibold text-dark mb-4 fade-in-title text-text1">Who We Are</h3>
    <p class="lead  fade-in-text text-text1">
      We’re a group of passionate technologists, designers, and problem-solvers who believe 
      technology can change the way the world works.
      <br><br>
      From web and mobile development to AI automation and digital transformation, 
      we build smart, scalable, and impactful solutions that help businesses move faster and smarter.
      <br><br>
      Innovation is at the heart of everything we do — because the future belongs 
      to those who build it.
    </p>
  </div>
</section>
</template>
<script>
export default{
    name:"WeAreView"
}
</script>
<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Section styling */
.who-we-are-section {
  background-color: #070f2b; /* soft light gray */
  border-radius: 10px;
  padding: 60px 20px;
  color: #333;
}

/* Typography & animation */
.fade-in-title {
  animation: fadeIn 1s ease-out;
}

.fade-in-text {
  animation: fadeIn 1.5s ease-out;
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}
</style>