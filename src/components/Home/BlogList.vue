<template>
  <div id="blogList">
    <div
      class="blogListItem"
      :data-pid="item.pid"
      v-for="item in listData"
      :key="item.id"
      @click="handletiezi($event)"
    >
      <div class="itemHeader">
        <img :src="item.avatar" />
        <div class="editInfo">
          <span>{{ item.username }}</span>
          <span class="time">{{ item.pdate }}</span>
        </div>
      </div>
      <div class="itemMain">
        <span>{{ item.ptext }}</span>
        <img :src="item.imgurl" />
      </div>
    </div>
    <div class="listFooter" @click="handleAddmore">
      <div v-if="isLoading">
        <span class="el-icon-loading" style="font-size: 1.9rem"></span>
      </div>
      <div v-else>
        <span>点击加载更多</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [],
      listpage: 1,
      isLoading: false
    };
  },
  methods: {
    handletiezi(e) {
      const pid = e.currentTarget.dataset.pid;
      this.$store.commit("changeTieziStatus", true);
      this.$router.push({
        path: "/tiezi",
        query: { id: pid },
      });
    },
    handleAddmore() {
      this.isLoading = !this.isLoading
      this.listpage++
      this.axios.get('/tiezilist',{
        params: {
          listpage: this.listpage
        }        
      }).then(res => {
        setTimeout(() => {
          this.isLoading = !this.isLoading
          this.listData = this.listData.concat(res.data.data)
        },500)
      })
    }
  },
  created() {
    this.axios
      .get("/tiezilist", {
        params: {
          listpage: this.listpage,
        },
      })
      .then((res) => {
        this.listData = this.listData.concat(res.data.data)
      });
  },
};
</script>

<style>
#blogList {
  margin-bottom: 6rem;
}
.blogListItem {
  border-top: 0.1rem solid #ccc;
  padding: 1rem;
  font-size: 1.5rem;
}
.itemHeader {
  width: 100%;
  height: 4rem;
  display: flex;
}

.itemHeader img {
  margin: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  margin-right: 2rem;
}

.editInfo {
  display: flex;
  flex-direction: column;
}

.itemHeader span {
  height: 2rem;
  line-height: 2rem;
}

.time {
  font-size: 1.2rem;
  color: rgb(180, 180, 180);
}

.itemMain {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}

.itemMain span {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.itemMain img {
  margin-top: 0.5rem;
  border-radius: 0.3rem;
  width: 10rem;
}

.listFooter span {
  display: block;
  text-align: center;
  font-size: 1.4rem;
}
</style>