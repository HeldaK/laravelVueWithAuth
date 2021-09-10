<template>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="Enter email" 
                    class="form-control"
                    v-model="form.email">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input 
                    type="text" 
                    name="password" 
                    id="password" 
                    placeholder="Enter password" 
                    class="form-control"
                    v-model="form.password">
            </div>
        <button type="submit" class="btn btn-success btn-block" @click.prevent="loginUser">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
          form:{
              email: '',
              password: ''
          },
          errors:[]
      }  
    },
    methods:{
        loginUser(){
            axios.post(`api/login`, this.form)
                .then(() => {
                    this.$router.push({name: "dashboard"});
                }).catch((error) => {
                    this.errors = error.response.data.errors;
                });
        }
    }
}
</script>

<style scoped>

</style>