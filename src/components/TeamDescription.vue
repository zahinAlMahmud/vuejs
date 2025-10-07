<template>
  <div class="container py-5">
    <div class="row g-4 justify-content-center">
        <h2 class="text-accent-purple">Team Member</h2>
      <div
        v-for="(member, index) in team"
        :key="index"
        class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
      >
        <div class="card custom-card text-center">
          <div class="card-body">
            <h5 class="card-title fw-semibold">{{ member.name }}</h5>
            <p class="card-text">{{ member.Designation }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamDescription",
  data() {
    return {
      team: [
        { name: "John", Designation: "Frontend Developer" },
        { name: "Sophia", Designation: "UI/UX Designer" },
        { name: "David", Designation: "Backend Engineer" },
        { name: "Ava", Designation: "Project Manager" },
        { name: "Liam", Designation: "AI Specialist" },
      ],
    };
  },
};
</script>

<style scoped>
.custom-card {
  width: 18rem;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  background: orangered;
  position: relative;
}

/* Gradient hover effect */
.custom-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
}

.custom-card:hover::before {
  opacity: 1;
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.card-body {
  position: relative;
  z-index: 1;
  color: #333;
  transition: color 0.5s ease;
}

.custom-card:hover .card-body {
  color: #fff;
}
</style>
