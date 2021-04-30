<template>
    <div>
        <div v-for="data in myJson" :key ="data.name">{{data}}</div>
    </div>
</template>

<script>
      import device_list from '@/json/device_list.json'
      export default{
          data(){
              return{
                  myJson: device_list
              }
          }
      }
</script>