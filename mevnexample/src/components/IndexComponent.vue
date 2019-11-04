<template>
  <div>
    <h1>Posts</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
      </div>
    </div>
    <br>
    <br>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post._id">
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary">Edit</router-link>
             | 
            <button class="btn btn-danger" @click.prevent="deletePost(post._id,post)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      uri: "http://localhost:4000/posts"
    };
  },
  created() {
    this.axios.get(this.uri).then(response => {
      this.posts = response.data;
    });
  },
  methods: {
    loadData(){
      this.axios.get(this.uri).then(function(response){
        this.posts = response.data;
      });
    },
    deletePost(id,posts) {
      let uri = `http://localhost:4000/posts/delete/${id}`;
      this.axios.delete(uri).then(() => {
        // this.index = this.posts.indexOf(id);
        this.posts.splice(this.posts.indexOf(posts), 1);
        // this.$router.push({ name: "posts" });
        // this.$router.go();
        // res;
      });
    }
  }
};
</script>