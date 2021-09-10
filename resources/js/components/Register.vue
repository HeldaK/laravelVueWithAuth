<template>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="name">Name</label>
                <span v-if="errors.name">{{errors.name[0]}}</span>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Enter name" 
                    class="form-control"
                    v-model="form.name">
            </div>

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

            <div class="form-group">
                <label for="password_confirmation">Confirm Password</label>
                <input 
                    type="text" 
                    name="password_confirmation" 
                    id="password_confirmation" 
                    placeholder="Enter confirm password" 
                    class="form-control"
                    v-model="form.password_confirmation">
            </div>

        <button type="submit" class="btn btn-success btn-block" @click.prevent="saveForm">Register</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
          form:{
              name: '',
              email: '',
              password: '',
              password_confirmation: ''
          },
          errors:[]
      }  
    },
    methods:{
        saveForm(){
            axios.post(`api/register`, this.form)
                .then(() => {
                    console.log('saved');
                }).catch((error) => {
                    this.errors = error.response.data.errors;
                });
        }
    }
}
</script>

<style scoped>

</style>