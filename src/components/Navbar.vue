<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid me-0">
    <a class="navbar-brand" href="#">Navbar</a>

    <!-- Toggler for mobile view -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar content aligned to the right -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav align-items-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <button class="btn btn-primary dropdown-toggle ms-3" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Features
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><button class="dropdown-item" type="button">Action</button></li>
            <li><button class="dropdown-item" type="button">Another action</button></li>
            <li><button class="dropdown-item" type="button">Something else here</button></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-disabled="true">Disabled</a>
        </li>

        <!-- Dropdown menu -->
        <li class="nav-item dropdown">
          <button class="btn btn-main dropdown-toggle ms-3" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><button class="dropdown-item" type="button">Action</button></li>
            <li><button class="dropdown-item" type="button">Another action</button></li>
            <li><button class="dropdown-item" type="button">Something else here</button></li>
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
    props:{
        msg:String
    }
}
</script>

<style>
</style> 