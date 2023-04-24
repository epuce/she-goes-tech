<template>
  <div>
    <table class="table-wrapper">
      <thead>
        <tr>
            <th>#</th>
          <th>Username</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>username</td>
          <td>email</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:{
    users: {
      type: Array,
      requred: true
    }
  },
  data(){
    var userList = [
      {
        userId: true,
        useName: '',
        userEmail: ''
      }
    ]
    return{
      userList
    }
  }

});
</script>
<style>


.table-wrapper {
    position: relative;
    top: 100px;
    width: 70%;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
}

button {
    background:  #f68084;
    border: none;
    border-radius: 8px;
    color: antiquewhite;
    font-weight: 600;
}

button:hover {
    
    cursor: pointer;
    background:  #f25a5f;
   
}
</style>
