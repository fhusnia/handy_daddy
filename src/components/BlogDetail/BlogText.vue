<template>
  <div class="row pt-5 pb-5">
    <div class="col-12 pb-4">
      <div class="text">
        <h2>{{ post.content }}</h2>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-start">
      <div class="detail">
        <div v-html="post.contentheader"></div>
        <span>Published on: {{ formatDate(post.date) }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "BlogDetail",
  data() {
    return {
      post: {},
    };
  },
  async created() {
    const postId = this.$route.params.id;
    try {
      const response = await axios.get(`http://localhost:3000/blogs/${postId}`);
      this.post = response.data;
    } catch (error) {
      console.error("Failed to load blog post:", error);
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  letter-spacing: 1px;
  h2 {
    font-weight: 600;
  }
}
.detail {
  width: 95%;
  p {
    text-align: justify;
    letter-spacing: 1px;
    line-height: 2;
  }
  a {
    color: black;
    font-weight: bold;
  }
  span {
    font-weight: 400;
  }
}
@media only screen and (max-width: 576px) {
  text {
    h2 {
      font-size: 15px;
      font-weight: none;
    }
    h3 {
      font-size: 18px;
    }
  }
}
</style>
