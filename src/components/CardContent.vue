<template>
    <div class="row mx-auto justify-content-center">
        <div class="card" style="width: 15rem; margin-bottom: 1rem;"
    v-for="(data ,index) in  data1" 
    :key="index">
  <img :src="data.img" class="card-img-top" alt="">
  <div class="card-body">
    <p class="card-text">{{ data.id }}</p>
    <p class="card-text">{{ data.text }}</p>
    <p class="card-text">{{ data.p }}</p>
  </div>
</div>
    </div>
</template>
<script>

export default {
    name:"CardContent",
    data(){
        return{
            data1:[
                {id: 1 ,
                    text:"Some quick example text to build on the card title and make u",
                    p:"Some quick example text to build on the card",
                    img:"https://tse4.mm.bing.net/th/id/OIP.R56mc_WXX0pOnFmh0Mw3jgHaFs?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                },
                {id: 2 ,
                    text:"Some quick example text to build on the card title and make u",
                    p:"Some quick example text to build on the card",
                    img:"https://tse4.mm.bing.net/th/id/OIP.R56mc_WXX0pOnFmh0Mw3jgHaFs?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                },
                {id: 3 ,
                    text:"Some quick example text to build on the card title and make u",
                    p:"Some quick example text to build on the card",
                    img:"https://tse4.mm.bing.net/th/id/OIP.R56mc_WXX0pOnFmh0Mw3jgHaFs?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                },
                {id: 4 ,
                    text:"Some quick example text to build on the card title and make u",
                    p:"Some quick example text to build on the card",
                    img:"https://tse4.mm.bing.net/th/id/OIP.R56mc_WXX0pOnFmh0Mw3jgHaFs?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                },
                {id: 5 ,
                    text:"Some quick example text to build on the card title and make u",
                    p:"Some quick example text to build on the card",
                    img:"https://tse4.mm.bing.net/th/id/OIP.R56mc_WXX0pOnFmh0Mw3jgHaFs?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                },


            ]
        }
    }
}
</script>
<style>
</style>