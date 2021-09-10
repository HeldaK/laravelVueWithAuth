<template>
    <div>
        <div class="form-group">
            <label for="name">Name</label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Enter Name" 
                class="form-control"
                v-model="item.name">
        </div>

        <div class="form-group">
            <label for="phone">Phone</label>
            <input 
                type="text" 
                name="phone" 
                id="phone" 
                placeholder="Enter Phonenumber" 
                class="form-control"
                v-model="item.phone">
        </div>

    <button class="btn btn-success btn-block"
            @click="save"
    >
        {{isEditing ? 'Update' : 'Save'}}
    </button>

    <div class="col-md-12 mt-3" v-if="lists.length > 0">
        <h2 class="text-center">Telephone Numbers</h2>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in lists" :key="item.id">
                {{item.name}} - {{item.phone}}
                <span class="float-right">
                    <button class="btn btn-warning btn-sm mr-2" @click="editTel(item)">Edit</button> 
                    <button class="btn btn-danger btn-sm mr-2"  @click="deleteTel(item.id)">Delete</button>   
                </span>    
            </li>
        </ul>
    </div>

    </div>
</template>

<script>
export default {
    name: 'Directory',
    data(){
        return {
            lists: [],
            item: {
                name: "",
                phone: ""
            },
            tem_id: null,
            isEditing: false
        }
    },
    mounted() {
        this.fetchAll();
    },
    
    methods: {
        fetchAll(){
            axios.get(`api/tel`)
                .then(res=> this.lists = res.data);
        },
        save() {
            let method = axios.post;
            let url = `api/tel`;
            if(this.isEditing){
                method = axios.put;
                url = `api/tel/${this.temp_id}`;
            }

            try{
                method(url, this.item)
                .then(res=>{
                    this.fetchALL();
                    this.item = {
                        name: "",
                        phone: ""
                    };
                    this.tem_id = null;
                    this.isEditing = false;

                })
            }catch(e){
                console.log(e);
            }
        },
        editTel(tel){
            this.item = {
                name: tel.name,
                phone: tel.phone
            };
            this.temp_id = tel.id;
            this.isEditing = true;
        },
        deleteTel(id){
            try{
                axios.delete(`api/tel/${id}`)
                .then(res => this.fetchAll())
            }catch(e){

            }
        }
    },
};
</script>

</<style  scoped>
    
</style>