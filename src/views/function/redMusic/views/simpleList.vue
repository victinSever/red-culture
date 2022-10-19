<template>
  <div>
    <h2>{{ this.$route.query.time }}</h2>

    <div class="simple-box">
      <div
        class="simple-card"
        @click="gotoDetail"
      >
        <div class="card-left">
          <img src="@/assets/images/music/我的祖国.jpg" alt="未找到" />
        </div>
        <div class="card-right">
          <p>
            <span class="name"> 我的祖国 </span>
            <span class="rank">（郭兰英和中国歌剧舞剧院合唱团演唱歌曲）</span>
          </p>
          <p class="intro">
            《我的祖国》是由郭兰英和中国歌剧舞剧院合唱团演唱的一首歌曲，于1959年录音
            。收录于中国唱片集团公司1984年1月1日发行的专辑《著名歌唱家郭兰英独唱选》中
            。此歌曲还是电影《上甘岭》的插曲。
            1989年，乔羽、刘炽、郭兰英凭借该曲获得第一届金唱片奖
          </p>
        </div>
      </div>

      <div
        class="simple-card"
        @click="gotoDetail"
      >
        <div class="card-left">
          <img src="@/assets/images/music/走向复兴.jpg" alt="未找到" />
        </div>
        <div class="card-right">
          <p>
            <span class="name"> 走向复兴 </span>
            <span class="rank">（深圳市委宣传部和深圳广电集团）</span>
          </p>
          <p class="intro">
            《走向复兴》，是一首为中华人民共和国成立六十周年华诞献礼的中文普通话歌曲，由深圳市委宣传部和深圳广电集团共同组织创作。该歌曲的曲作者为印青，词作者为李维福，创作于2009年。
          </p>
        </div>
      </div>

      <div
        class="simple-card"
        @click="gotoDetail"
      >
        <div class="card-left">
          <img src="@/assets/images/music/迎风飘扬的旗.jpg" alt="未找到" />
        </div>
        <div class="card-right">
          <p>
            <span class="name"> 迎风飘扬的旗 </span>
            <span class="rank">（唐跃生作词、姚峰作曲）</span>
          </p>
          <p class="intro">
            《迎风飘扬的旗》是总政合唱团演唱的歌曲，由唐跃生作词、姚峰作曲，于2011年10月1日单曲发行。
          </p>
        </div>
      </div>

      <div
        class="simple-card"
        @click="gotoDetail"
      >
        <div class="card-left">
          <img src="@/assets/images/music/我的祖国.jpg" alt="未找到" />
        </div>
        <div class="card-right">
          <p>
            <span class="name"> 我的祖国 </span>
            <span class="rank">（郭兰英和中国歌剧舞剧院合唱团演唱歌曲）</span>
          </p>
          <p class="intro">
            《我的祖国》是由郭兰英和中国歌剧舞剧院合唱团演唱的一首歌曲，于1959年录音
            。收录于中国唱片集团公司1984年1月1日发行的专辑《著名歌唱家郭兰英独唱选》中
            。此歌曲还是电影《上甘岭》的插曲。
            1989年，乔羽、刘炽、郭兰英凭借该曲获得第一届金唱片奖
          </p>
        </div>
      </div>

      <div
        class="simple-card"
        @click="gotoDetail"
      >
        <div class="card-left">
          <img src="@/assets/images/music/最美的歌儿唱给妈妈.jpg" alt="未找到" />
        </div>
        <div class="card-right">
          <p>
            <span class="name"> 最美的歌儿唱给妈妈 </span>
            <span class="rank">（蒋大为作词、作曲）</span>
          </p>
          <p class="intro">
           《最美的歌儿唱给妈妈》是由蒋大为作词、作曲并演唱的歌曲，收录于蒋大为2011年8月20日发行的专辑《最美的歌儿唱给妈妈》中。
          </p>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "redPersonSimple",
  methods: {
    gotoDetail(e) {
      console.log(e.target);
      this.$router.push({
        path: "/manage/redMusic/redMusicDetail",
        query: {
          time: e.target.tagName,
        },
      });
    },
  },
};
</script>

<style scoped lang='less'>
h2 {
  margin-bottom: 20px;
}
.simple-box {
  .simple-card {
    margin: 20px 0;
    display: flex;
    border: 1px solid #ccc;
    margin-right: 10px;
    box-sizing: border-box;
    cursor: pointer;

    .card-left {
      width: 100px;
      height: 100px;
      margin-right: 10px;

      img {
        height: 100px;
        width: 100px;
      }
    }

    .card-right {
      p {
        margin: 5px 0;
      }

      .time,
      .intro {
        font-size: 14px;
        color: rgb(96, 97, 99);
        text-indent: 2em;
        line-height: 23px;
      }
    }
  }
}
</style>