<template>
    <div class="container">
     <div class="row mt-5">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">System User</h3>

                <div class="card-tools">
<!--                   <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                    </div>
                  </div> -->
                  <button type="button" id="" class="btn btn-success btn-sm" data-toggle="modal" data-target="#addnewuser">Add New <i class="fas fa-user-plus fa-fw"></i></button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0" style="height: 600px;">
                <table class="table table-head-fixed text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Type</th>
                      <th>Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>183</td>
                      <td>John Doe</td>
                      <td>11-7-2014</td>
                      <td><span class="tag tag-success">Approved</span></td>
                      <td>
                          <a href="">
                              <i class="fa fa-edit text-blue"></i>
                          </a>
                          /
                          <a href="">
                              <i class="fa fa-trash text-red"></i>
                          </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
            <!-- Modal -->
<div class="modal fade" id="addnewuser" tabindex="-1" role="dialog" aria-labelledby="addnewuserLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addnewuserLabel">Add New System User</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
             <form @submit.prevent="editmode ? updateUser() : createUser()">
            <div class="modal-body">
                <div class="form-group">
                   <input v-model="form.name" type="text" name="name"
                   placeholder="Name"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                    <has-error :form="form" field="name"></has-error>
               </div>

                <div class="form-group">
                   <input v-model="form.email" type="email" name="email"
                   placeholder="Email Address"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                    <has-error :form="form" field="email"></has-error>
               </div>

               <div class="form-group">
                        <textarea v-model="form.bio" name="bio" id="bio"
                        placeholder="Short bio for user (Optional)"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
                        <has-error :form="form" field="bio"></has-error>
              </div>


             <div class="form-group">
                        <select name="type" v-model="form.type" id="type" class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                            <option value="">Select User Role</option>
                            <option value="admin">Admin</option>
                            <option value="author">Faculty</option>
                            <option value="user">Departtment</option>
                        </select>
                        <has-error :form="form" field="type"></has-error>
              </div>

             <div class="form-group">
                        <input v-model="form.password" type="password" name="password" id="password"
                        placeholder="Password"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                        <has-error :form="form" field="password"></has-error>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Create</button>
            </div>
            </form>
        </div>
    </div>
</div>
          </div>
        </div>
        <!-- /.row -->
    </div>

</template>

<script>
    export default {
        data () {
    return {
      // Create a new form instance
      form: new Form({
        name: '',
        email: '',
        password: '',
        type: '',
        bio: '',
        photo: ''
      })
    }
  },
  methods: {
       loadUser(){

       },
       createUser(){
         this.form.post('api/user');
       }
   },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
