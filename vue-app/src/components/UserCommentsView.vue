<template>
  <div class="user-comments">
    <div class="user-comments__comments"></div>
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
        <div v-for="user in userList" :key="user.id" class="user-list__user">
          {{ user.first_name }} {{ user.last_name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent, ref} from "vue";
export default defineComponent({
  setup() {
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
        body: JSON.stringify(payload),
      })
        .then((resp) => resp.json())
        .then((resp) => {
          if (!resp.error) {
            // we must be sure that the response was successful
            userList.value.push({
              ...payload,
              id: resp.data.inserId,
            });
            user.value = {
              first_name: "",
              last_name: "",
            };
          }
        });
    };

    return {
      userList,
      onUserSave,
      user,
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
  margin-bottom: 8px;
  cursor: pointer;
}
.user-list__user:hover {
  background: rgba(33, 33, 144, 0.1);
}
</style>
