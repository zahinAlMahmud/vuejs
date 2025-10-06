<template>
<nav class="navbar navbar-expand-lg bg-accent-blue text-text1">
  <div class="container-fluid me-0">
    <router-link 
    class="nav-link active text-text1 font-size-xxl" 
    aria-current="page" 
    to="/" style="cursor: pointer;">Metaheed</router-link>

    <!-- Toggler for mobile view -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar content aligned to the right -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav align-items-center">
        <li class="nav-item">
          <router-link 
    class="nav-link active text-text1" 
    aria-current="page" 
    to="/" style="cursor: pointer;">Home</router-link>
        </li>
         <li class="nav-item">
          <router-link 
    class="nav-link active text-text1" 
    aria-current="page" 
    to="/about" style="cursor: pointer;">About</router-link>
        </li>
         <li class="nav-item">
         <router-link 
    class="nav-link active text-text1" 
    aria-current="page" 
    to="/who-we-are" style="cursor: pointer;">Who We Are</router-link>
        </li>
         <li class="nav-item">
          <a class="nav-link active text-text1" aria-current="page" to="/Our company">Our Company</a>
        </li>
        <li class="nav-item dropdown">
          <button class="btn btn-primary dropdown-toggle ms-3" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            CLients
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><button class="dropdown-item" type="button">International Standard University (ISU)</button></li>
            <li><button class="dropdown-item" type="button">Green CyberSec</button></li>
            <li><button class="dropdown-item" type="button">Open Journal System (OJS)</button></li>
            <li><button class="dropdown-item" type="button">MultiGroup</button></li>
            <li><button class="dropdown-item" type="button">On Demand Open Object  (Odoo)</button></li>
          </ul>
        </li>
        <!-- Dropdown menu -->
        <li class="nav-item dropdown">
          <button class="btn btn-main dropdown-toggle ms-3" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Service
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><button class="dropdown-item" type="button">Landing Page & Website</button></li>
            <li><button class="dropdown-item" type="button">Wazuh</button></li>
            <li><button class="dropdown-item" type="button">Opensense & PfSense</button></li>
            <li><button class="dropdown-item" type="button">Graphics Design</button></li>
            <li><button class="dropdown-item" type="button">System Admistration</button></li>
            <li><button class="dropdown-item" type="button">Cloud Computing</button></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
export default{
    name:'HelloWorld',
    // props:{
    //     msg:String
    // }
}
</script>

<style>
</style> 