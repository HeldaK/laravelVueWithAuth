<template>
    <div>
        <h2>Dashboard</h2>
        <h3>Name: {{user.name}}</h3>
        <h3>Email: {{user.email}}</h3>
        <button class="btn btn-warning btn-sm mr-2" @click.prevent="logout">Logout</button> 
        <hr/>
    </div>
</template>

<script>
export default {
    data() {
      return {
          user: null
      }  
    },
    methods:{
        logout(){
            axios.post(`/api/logout`).then(() => {
                this.$router.push({name: "directory"});
            })
        }
    },
    mounted(){
        axios.get(`/api/user`)
            .then((res) => {
                this.user = res.data;
            })
    }
}
</script>

<style scoped>

</style>