<template>
  <div>
    <div class="content">
      <div class="content-left">
        <router-view></router-view>
      </div>

      <div class="content-right">
        <div class="title">
          <h2>红色歌曲</h2>
        </div>
        <div class="content-recomment">
          <h3>经典永流传</h3>
          <ul>

            <li>
              <span class="name">1.走向复兴</span>
              <span class="inf"></span>
            </li>
            <li>
              <span class="name">2.迎风飘扬的旗 </span>
              <span class="inf"></span>
            </li>
            <li>
              <span class="name">3.最美的歌儿唱给妈妈 </span>
              <span class="inf"></span>
            </li>
            <li>
              <span class="name">4.情系老百姓 </span>
              <span class="inf"></span>
            </li>
            <li>
              <span class="name">5.中国我为你歌唱</span>
              <span class="inf"></span>
            </li>
            <li>
              <span class="name">6.家的牵挂 </span>
              <span class="inf"></span>
            </li>
            <li>
              <span class="name">7.南湖菱花开</span>
              <span class="inf"></span>
            </li>
            <li>
              <span class="name">8.红旗之恋 </span>
              <span class="inf"></span>
            </li>
            <li>
              <span class="name">9.喜庆的日子 </span>
              <span class="inf"></span>
            </li>
            <li>
              <span class="name">10.家乡的味道</span>
              <span class="inf"> </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "redMusic",
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