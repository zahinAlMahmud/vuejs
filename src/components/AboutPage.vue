<template>
  <div class="our-story pt-6" id="about">
    <!-- Hero Section -->
    <section class="hero" style="background-color: #000041;">
      <div class="container">
        <button class="btn-about">About Us </button>
        <!-- <h1 class="title font-size-xl  mt-5" style="color: #cfb997;">Our Story</h1>
        <p class="subtitle font-size-lg" style="color:#cfb997; font-weight: 600;">
     <span style="font-weight: 900; font-size: 32px; transform: scaleX(1.5); display: inline-block; color: #000041;   text-shadow: 1px 0 black, -1px 0 black;">/</span>
 Delivering success through collaboration, transformation, and a commitment to our planet.
        </p> -->
  <div class="text-section">
    <!-- Buttons -->
    <div class="button-group mb-4">
      <button 
        class="btn-section" 
        :class="{ active: activeSection === 1 }" 
        @click="activeSection = 1">
        About Meta Heed
      </button>
      <button 
        class="btn-section" 
        :class="{ active: activeSection === 2 }" 
        @click="activeSection = 2">
        Vision
      </button>
      <button 
        class="btn-section" 
        :class="{ active: activeSection === 3 }" 
        @click="activeSection = 3">
        Mission
      </button>
    </div>

    <!-- Text + Image -->
    <div class="content-container">
      <div class="text-content" v-if="activeSection === 1">
        <p>
          TheTeamPhoenix (TTP) is a Bangladesh-based cybersecurity social enterprise and collective dedicated to advancing security, innovation, and community growth. We combine research, education, real-world solutions, and career development to address cybersecurity challenges in South Asia and globally.
        </p>
      </div>
      <div class="text-content" v-if="activeSection === 2">
        <p>
          To be a globally recognized force driving innovation, education, and research in Cyber Security and Technology, resulting in safer and smarter Cyberspace.
        </p>
      </div>
      <div class="text-content" v-if="activeSection === 3">
        <p>
          To empower individuals, fortify defenses, and ensure sustained growth in the ever-evolving realm of Cyber Security and Technology.
        </p>
      </div>

      <div class="image-content">
        <img 
          v-if="activeSection === 1" 
          src="https://media.istockphoto.com/id/114283644/photo/about-us.webp?s=1024x1024&w=is&k=20&c=IeyxyQnO2W4Hle811lTC-YM8Z9gztphPnM-EvTm_s9M=" 
          alt="About Image"
        />
        <img 
          v-if="activeSection === 2" 
          src="https://media.istockphoto.com/id/2014424610/photo/business-colleagues-talking-on-stairs-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=g1EMnWTMeIReKwqbXjI424qmJbxvbNkynge2p14bxhw=" 
          alt="Vision Image"
        />
        <img 
          v-if="activeSection === 3" 
          src="https://plus.unsplash.com/premium_photo-1682124869082-f3f3b6f36ed6?q=80&w=1014&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Mission Image"
        />
      </div>
    </div>
  </div>
    </div>
    
    </section>

    <!-- Company Overview -->
    <section class="overview">
      <div class="container">
        <h2 class="section-title ">Our Dedication</h2>
        <p>
          At MGH, our dedication lies in delivering groundbreaking supply chain solutions that disrupt the norm. With over three decades of logistics expertise, we take pride in our role as a worldwide industry frontrunner, facilitating seamless global trade and commerce.
        </p>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vision-mission">
      <div class="container">
        <div class="vision">
          <h2 class="text-text1">Our Vision</h2>
          <p style="color: blueviolet;">
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
  data() {
    return {
      activeSection: 1
    }
  }
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
.btn-about {
  background-color: rgba(31, 31, 92, 0.8); /* Orange */
  color: white;
  font-weight: 600;
  padding: 12px 28px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  transition: all 0.3s ease; /* smooth transitions */
}

.button-group {
  display: flex;
  gap: 12px;
}

.btn-section {
  background-color: #000041;
  color: #cfb997;
  border: none;
  padding: 10px 24px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-section:hover {
  background-color: #1f1f5c;
  transform: translateY(-2px);
}

.btn-section.active {
  background-color: #cfb997;
  color: #000041;
  font-weight: bold;
}
.content-container {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  flex-wrap: wrap; /* stacks on small screens */
  margin-top: 20px;
}

.text-content {
  flex: 1; /* text takes half or more of available space */
  min-width: 250px;
}

.image-content {
  flex: 1; /* image takes half or more of available space */
  min-width: 250px;
}

.image-content img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}



</style>
