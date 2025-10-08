<template>
  <nav
    class="navbar navbar-expand-lg fixed-top"
    :class="isDark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'"
  >
    <div class="container-fluid">
      <!-- Brand / Logo -->
      <router-link
        class="navbar-brand fw-bold"
        to="/"
        style="cursor: pointer;"
      >
        Metaheed
      </router-link>

      <!-- Mobile toggler button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible navbar content -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-lg-center text-center">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', hash: '#home' }">
              Home
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', hash: '#about' }">
              About
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', hash: '#who-we-are' }">
              Who We Are
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/our-company">
              Our Company
            </router-link>
          </li>

          <!-- Clients Dropdown -->
          <li class="nav-item dropdown">
            <button
              class="btn btn-primary dropdown-toggle mt-2 mt-lg-0 ms-lg-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Clients
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item">International Standard University (ISU)</button></li>
              <li><button class="dropdown-item">Green CyberSec</button></li>
              <li><button class="dropdown-item">Open Journal System (OJS)</button></li>
              <li><button class="dropdown-item">MultiGroup</button></li>
              <li><button class="dropdown-item">On Demand Open Object (Odoo)</button></li>
            </ul>
          </li>

          <!-- Services Dropdown -->
          <li class="nav-item dropdown">
            <button
              class="btn btn-secondary dropdown-toggle mt-2 mt-lg-0 ms-lg-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item">Landing Page & Website</button></li>
              <li><button class="dropdown-item">Wazuh</button></li>
              <li><button class="dropdown-item">Opensense & PfSense</button></li>
              <li><button class="dropdown-item">Graphics Design</button></li>
              <li><button class="dropdown-item">System Administration</button></li>
              <li><button class="dropdown-item">Cloud Computing</button></li>
            </ul>
          </li>

          <!-- Dark/Light Mode Toggle -->
          <li class="nav-item mt-3 mt-lg-0 ms-lg-3">
            <button class="btn btn-outline-secondary" @click="toggleTheme">
              <i :class="isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
              {{ isDark ? 'Light' : 'Dark' }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return { isDark: false }
  },
  mounted() {
    const saved = localStorage.getItem('theme')
    this.isDark = saved === 'dark'
    this.applyTheme()
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
      this.applyTheme()
    },
    applyTheme() {
      const theme = this.isDark ? 'dark' : 'light'
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }
}
</script>

<style>
html,
body {
  transition: background-color 0.3s, color 0.3s;
}

.section-title {
  transition: color 0.3s ease;
}

/* Theme text colors */
[data-bs-theme="light"] .section-title,
[data-bs-theme="light"] p {
  color: #000;
}

[data-bs-theme="dark"] .section-title,
[data-bs-theme="dark"] p {
  color: #fff;
}

/* Fix for mobile dropdown alignment */
@media (max-width: 991px) {
  .navbar-nav {
    gap: 10px;
  }
  .dropdown-menu {
    position: static !important;
    float: none;
  }
}
</style>
