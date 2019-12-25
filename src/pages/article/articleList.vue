<template>
  <div class="list-container">
    <ul class="note-list">
      <li class="have-img" v-for="item in articleList">
        <a @click.prevent class="wrap-img"><img :src="item.pictures[0].path" alt="" class="img-blur-done" v-if="item.pictures && item.pictures.length > 0 "></a>
        <div class="content">
          <router-link :to="{path:'/articleDetail',query:{articleId:item.articleId}}" class="title">
            {{item.title}}
          </router-link>
          <p class="abstract" v-text="item.text"></p>
          <div class="meta">
            <a @click.prevent class="nickname">{{item.nickname}}</a>
            <a @click.prevent v-text="item.commentNum"><i class="iconfont ic-list-comments"></i></a>
            <span v-text="item.likeNum"><i class="iconfont ic-list-like"></i></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "articleList",
        props:['articleList']
    }
</script>

<style scoped>

</style>
