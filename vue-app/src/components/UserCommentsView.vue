<template>
  <div class="user-comments">
    <div class="user-comments__comments">
      <div class="user-comments__users">
        <div
          v-for="user in userList"
          @click="onUserSelect(user.id)"
          :key="user.id"
          :title="user.first_name + '' + user.last_name"
          :class="{
            'user-comments__user-avatar--active': comment.user_id === user.id,
          }"
          class="user-comments__user-avatar"
        >
          {{ user.first_name[0] }}{{ user.last_name[0] }}
        </div>
      </div>
      <div class="user-comments__teaxtarea-wrapper" v-if="comment.user_id">
        <textarea
          v-model="comment.data"
          class="user-comments__textarea"
        ></textarea>
        <!-- we enable the saving once there's at least one characted in the textarea -->
        <button
          type="button"
          v-if="comment.data.length > 0"
          @click="onSaveComment()"
        >
          Save
        </button>
      </div>
      <div class="comment-list">
        <div v-for="item in comment.list" :key="item.id">
          {{ item.comment }}
        </div>
      </div>
    </div>
    <div class="user-comments__user">
      <form>
        <label
          >First name
          <input v-model="user.first_name" />
        </label>
        <label
          >Last name
          <input v-model="user.last_name" />
        </label>
        <!-- after putting button inside div button doesn't take the whole width, just the width it needs -->
        <div>
          <button type="button" @click="onUserSave()">Save</button>
        </div>
      </form>
      <div class="user-list">
        <div
          v-for="item in userList"
          :key="item.id"
          :class="{
            'user-list__user--active': user.id === item.id,
          }"
          @click="fillUserForm(item)"
        >
          {{ item.first_name }} {{ item.last_name }}

          <font-awesome-icon
            icon="fa-trash"
            @click.stop="onUserDelete(item.id)"
            class="user-list__delete"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent, ref} from "vue";
export default defineComponent({
  setup() {
    const comment = ref({
      user_id: null,
      data: "",
      list: [],
    });
    // we define it by saying empty list
    const userList = ref([]);

    const user = ref({
      first_name: "",
      last_name: "",
      id: null,
    });
    // we connect to our UI with the back-end data. We get the back-end data we created with SQL. We get URL from Insomnia
    fetch("http://localhost:8002/api/users")
      .then((resp) => resp.json())
      .then((resp) => {
        userList.value = resp.data;
      });

    const onUserSave = () => {
      const payload = {
        first_name: user.value.first_name,
        last_name: user.value.last_name,
      };

      // we get URL from insomnia, we push this to the list in the back-end
      fetch("http://localhost:8002/api/users", {
        method: "POST",
        // we need to specify that we are sending content in json format
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:8002",
        },
        body: JSON.stringify(payload),
      })
        .then((resp) => resp.json())
        .then((resp) => {
          if (!resp.error) {
            // we must be sure that the response was successful
            userList.value.push({
              ...payload,
              id: resp.data.insertId,
            });
            user.value = {
              first_name: "",
              last_name: "",
            };
          }
        });
    };
    const onUserDelete = (userId) => {
      fetch(`http://localhost:8002/api/users/${userId}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then(() => {
          // we loop through userList and filter it: we will check if the element's ID is not equal to the userID we have just deleted. If not equal, we will keep it in the list. We will not need to refresh the page for the list to update
          userList.value = userList.value.filter((user) => user.id !== userId);
        });
    };
    const fillUserForm = (tmpUser) => {
      // we clone the object with spead operator {...tmpUser} to not overwrite the whole object just the object values. We create a new object where we use the values from tmpUser. This removes the reactivity - when we update one the other will not change
      user.value = {...tmpUser};
    };

    const onUserSelect = (userId) => {
      // we add the selected user id to the list
      comment.value.user_id = userId;
      // don't need to specify the options whn we use GET method
      fetch(`http://localhost:8002/api/comments?user_id=${userId}`)
        .then((resp) => resp.json())
        .then((resp) => {
          comment.value.list = resp.data;
        });
    };

    const onSaveComment = () => {
      const payload = {
        comment: comment.value.data,
        user_id: comment.value.user_id,
      };

      fetch(`http://localhost:8002/api/comments`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:8002",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          if (!resp.error) {
            comment.value.list.push({
              ...payload,
              id: resp.data.inserId,
            });
          }
        });
    };

    return {
      userList,
      onUserSave,
      user,
      onUserDelete,
      fillUserForm,
      onUserSelect,
      comment,
      onSaveComment,
    };
  },
});
</script>
<style>
.user-comments {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
}
.user-comments__comments,
.user-comments__user {
  padding: 16px;
}
.user-comments__comments {
  background: rgba(0, 0, 0, 0.1);
}
.user-comments__user form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.user-comments__user input {
  display: block;
}
.user-list {
  padding: 16px 0;
}
/* we use margin so that empty space wouldn't be clickable and change the color. With padding, the whole block (uncluding empty space) would be colored */
.user-list__user {
  padding: 2px 0;
  margin-bottom: 8px;
  cursor: pointer;
}
.user-list__user:hover,
.user-list__user--active {
  background: rgba(33, 33, 144, 0.1);
}
/* when .user-list__user is hovered find the chidl element .user-list__delete and show it */
.user-list__user:hover .user-list__delete {
  display: inline-block;
}
.user-list__delete path {
  fill: rgba(0, 0, 0, 0.3);
}
.user-list__delete {
  /* display: none; */
  float: right;
  margin-right: 2px;
}
.user-comments__users {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.user-comments__user-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
}
.user-comments__user-avatar--active {
  background: rgba(0, 0, 100, 0.2);
}
.user-comments__textarea {
  margin-top: 16px;
  width: 100%;
  height: 300px;
  /* we don't allow resizing */
  resize: none;
}
.user-comments__teaxtarea-wrapper {
  position: relative;
}
.user-comments__teaxtarea-wrapper button {
  position: absolute;
  right: 8px;
  bottom: 8px;
}
</style>
