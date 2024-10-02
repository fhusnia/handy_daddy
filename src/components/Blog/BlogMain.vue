<template>
  <div class="container">
    <div class="row pt-5 flex-wrap justify-content-center">
      <div class="col-12">
        <div class="d-flex justify-content-center">
          <div class="title">
            <h4 class="text-center">Blog</h4>
            <p></p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row gap-sm-0 gap-4">
          <div class="col-12 col-sm-4" v-for="post in posts" :key="post.id">
            <div class="card">
              <img :src="post.imageUrl" alt="Blog Image" />
              <div class="card-body p-4">
                <span>{{ formatDate(post.date) }}</span>
                <p class="card-text pt-2">{{ post.title }}</p>
                <router-link
                  :to="{ name: 'BlogDetail', params: { id: post.id } }"
                >
                  <button>
                    Read More
                    <font-awesome-icon icon="fa-solid fa-arrow-right" />
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogMain",
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3000/blogs");
      this.posts = response.data;
    } catch (error) {
      console.error("Failed to load blog posts:", error);
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
.card {
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.card:hover {
  background-color: $yellow;
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  button {
    background: white;
  }
}

.card-body {
  span {
    font-size: 12px;
  }
}

.card-text {
  font-weight: 500;
}
button {
  width: 120px;
  padding: 8px;
  border-radius: 2px;
  background: $yellow;
  border: 1px solid $yellow;
  font-size: 14px;
  font-weight: 400;
}
.card img {
  height: 200px;
}
.title {
  padding-left: 20px;
  p {
    width: 90px;
    border-bottom: 3px solid $yellow;
  }
}
.pagination {
  --bs-pagination-border-width: none;
  --bs-pagination-color: rgb(33, 33, 33);
  --bs-pagination-bg: none;
}
</style>
