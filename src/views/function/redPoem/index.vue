<template>
  <div>
    <div class="content">
      <div class="content-left">
        <router-view></router-view>
      </div>

      <div class="content-right">
        <div class="title">
          <h2>红色诗抄</h2>
        </div>
        <div class="content-recomment">
          <h3>热点诗抄</h3>
          <ul>

            <li>
              <span class="name">1.叶挺</span>
              <span class="inf">《囚歌》</span>
            </li>
            <li>
              <span class="name">2.毛泽东</span>
              <span class="inf">《沁园春·雪》</span>
            </li>
            <li>
              <span class="name">3.董必武</span>
              <span class="inf">《重庆办事处五周年纪念》</span>
            </li>
            <li>
              <span class="name">4.车耀先</span>
              <span class="inf">《自誓诗》</span>
            </li>
            <li>
              <span class="name">5.陈然</span>
              <span class="inf">《我的“自白”书》</span>
            </li>
            <li>
              <span class="name">6.何雪松</span>
              <span class="inf">《灵魂颂》</span>
            </li>
            <li>
              <span class="name">7.罗世文</span>
              <span class="inf">《罗世文·诗一首》</span>
            </li>
            <li>
              <span class="name">8.许晓轩</span>
              <span class="inf">《除夕有感》</span>
            </li>
            <li>
              <span class="name">9.何敬平</span>
              <span class="inf">《把牢底坐穿》</span>
            </li>
            <li>
              <span class="name">10.刘国鋕</span>
              <span class="inf"> 《就义诗》</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "redPoem",
};
</script>

<style scoped lang='less'>
.title {
  margin-bottom: 30px;

  h2 {
    font-family: douyu;
    font-size: 35px;
    text-shadow: -2px -2px 0 #d63926, 1px -1px 0 #d63926, -1px 1px 0 #d63926,
      1px 1px 0 #d63926;
    color: rgb(247, 132, 132);
  }
}

.content {
  .content-left {
    float: left;
    width: 880px;
    border-right: 1px dotted rgb(95, 93, 93);
    border-left: 1px dotted rgb(95, 93, 93);
    padding: 0 20px;
  }
  .content-right {
    float: right;
    width: 250px;
    border-right: 1px dotted rgb(95, 93, 93);
    padding-right: 10px;

    .content-recomment {
      width: 250px;
      height: 360px;
      border: 1px solid rgb(212, 212, 212);
      border-top: 3px solid #ce3a3a;
      background-color: #f7f7f9;

      h3 {
        color: #d63926;
        font-weight: normal;
        font-family: douyu;
        margin: 10px 0;
        padding-left: 10px;
      }

      ul {
        display: flex;
        flex-direction: column;

        li {
          height: 25px;
          line-height: 25px;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          margin: 3px 0;
          padding-left: 5px;

          .name {
            margin-right: 10px;
          }

          .inf {
            font-size: 12px;
            color: rgb(100, 97, 97);
            margin-right: 5px;
          }
        }

        li:hover {
          background-color: #e7e7ea;
        }

        li:nth-child(1) {
          .name {
            color: red;
          }
        }

        li:nth-child(2) {
          .name {
            color: rgb(249, 129, 38);
          }
        }

        li:nth-child(3) {
          .name {
            color: rgb(248, 161, 68);
          }
        }
      }
    }
  }
}
</style>