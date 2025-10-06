<template>
  <div class="our-story">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1 class="title">Our Story</h1>
        <p class="subtitle">
          Delivering success through collaboration, transformation, and a commitment to our planet.
        </p>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="overview">
      <div class="container">
        <h2 class="section-title">Our Dedication</h2>
        <p>
          At MGH, our dedication lies in delivering groundbreaking supply chain solutions that disrupt the norm. With over three decades of logistics expertise, we take pride in our role as a worldwide industry frontrunner, facilitating seamless global trade and commerce.
        </p>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vision-mission">
      <div class="container">
        <div class="vision">
          <h2>Our Vision</h2>
          <p>
            To help brands and entrepreneurs reach their customers where on-ground barriers have been cost-effectively simplified by MGH.
          </p>
        </div>
        <div class="mission">
          <h2>Our Mission</h2>
          <p>
            MGH wishes to democratize or simplify the supply chain so that anyone can decide to use the process to sell, buy, collect, and trade to the fullest.
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <div class="container">
        <p>
          If you're looking to dissolve borders, our comprehensive logistics solutions can give you a headstart. If you're looking to expand your business footprint, our end-to-end e-commerce solutions can help you fast-track your go-to-market.
        </p>
        <p>
          If you're looking for a partner that has the planet in their heart, we've got you covered. Our commitment to our planet is delivered through our robust ESG practices.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'OurStoryPage',
};
</script>

<style scoped>
.our-story {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.hero {
  background-color: #f4f4f4;
  padding: 50px 0;
  text-align: center;
}

.hero .title {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero .subtitle {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.overview,
.vision-mission,
.cta {
  padding: 50px 0;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.vision-mission {
  display: flex;
  justify-content: space-between;
}

.vision,
.mission {
  width: 48%;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}
</style>
