<template>
  <div class="container text-center my-5 bg-accect-blue">
    <div class="row justify-content-center">
      <div class="col-md-3 col-sm-6 mb-4" v-for="(stat, index) in stats" :key="index">
        <div class="stat-card p-4 border rounded shadow-sm h-100 d-flex flex-column align-items-center">
          <!-- Icon -->
          <div class="mb-2">
            <i :class="stat.icon" style="font-size: 2rem; color: #007bff;"></i>
          </div>
          <!-- Number -->
          <h3 class="mb-1">{{ stat.number }}</h3>
          <!-- Label -->
          <p class="mb-0 text-muted">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { icon: "fas fa-shield-alt", number: "500+", label: "Cyberattacks prevented this year" },
        { icon: "fas fa-network-wired", number: "1200", label: "Secured network endpoints" },
        { icon: "fas fa-user-secret", number: "350", label: "Employees trained in cybersecurity" },
        { icon: "fas fa-envelope", number: "99%", label: "Emails scanned for threats daily" },
      ],
    };
  },
};
</script>

<style scoped>
.stat-card {
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: default;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

h3 {
  font-weight: bold;
  color: #007bff;
}

p {
  font-size: 0.9rem;
}
</style>
