<template>
  <div class="container-fluid  bg-primary">
    <div class="row align-items-start">
      <!-- Founder Section -->
      <div class="col-lg-8 mt-5">
        <img src="https://media-cache.cinematerial.com/p/500x/rcy5s6jn/superman-british-movie-poster.jpg?v=1747442873" alt="Founder">
        <p class=" mt-2 text-text1">6 October 2025</p>
          <div>
            <h4 class="text-light-grey fs-3">Our Chairman and Founder</h4>
            <p class="container text-text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet in necessitatibus error unde voluptate temporibus voluptates quia possimus pariatur veniam minima aperiam cum doloremque nesciunt.</p>
          </div>
        
      </div>

      <!-- Cards Section -->
      <div class="col-lg-4">
        <div v-for="(item, index) in data1" :key="index" class="card mb-3">
          <div class="row g-0 align-items-center bg-medium-grey">
            <div class="col-4 ">
              <img :src="item.image" class="img-fluid rounded-start" alt="Card image">
            </div>
            <div class="col-8">
              <div class="card-body">
                <p class="card-text "><a href="/" class="text-decoration-none text-accent-purple">{{ item.p }}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: [
        {
          image: "https://media.istockphoto.com/id/1310691879/vector/man-in-work-clothes-gesture-motivated-pop.jpg?s=1024x1024&w=is&k=20&c=hWocw4NOIBr82a7IXnASqqTRYo3aTwT7m2ltUo9Rb2Q=",
          p: "Man in work clothes gesture motivated pop stock illustration"
        },
        {
          image: "https://media.istockphoto.com/id/1188134129/vector/blue-collar-worker-man.jpg?s=1024x1024&w=is&k=20&c=FGNyIslozilaFLauS2Cy3Upjps93kAggRP6-wWRPApE=",
          p: "Blue collar worker man stock illustration"
        },
        {
          image: "https://media.istockphoto.com/id/1329293463/vector/male-blue-collar-worker-gesture-illustration-inspiration-idea-solution.jpg?s=1024x1024&w=is&k=20&c=W1qPWqs33eqdjSwNw738TRZ74qXNWgk10KjtrG18Uck=",
          p: "Male blue collar worker gesture illustration | inspiration, idea, solution stock illustration"
        },
        {
          image: "https://media.istockphoto.com/id/1488477540/vector/illustration-series-of-cute-person-_-male-worker_point.jpg?s=1024x1024&w=is&k=20&c=DyD9MtE4ViugKisurVRBHU9YmfK5Mk-JhF1Jb15Ti5c=",
          p: "Illustration Series of Cute Person _ Male worker_Point stock illustration"
        }
      ]
    }
  }
}
</script>

<style>
.card {
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>
