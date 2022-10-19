<template>
  <div>
    <div class="content">
      <div class="content-left">
        <router-view></router-view>
      </div>

      <div class="content-right">
        <div class="title">
          <h2>红色文物</h2>
        </div>
        <div class="content-recomment">
          <h3>瑰宝在世</h3>
          <ul>
            <li>
              <span class="name"
                >1.爱泼斯坦在重庆从事新闻工作期间的相关证件</span
              >
            </li>
            <li>
              <span class="name">2.车耀先主办的刊物《图存》</span>
            </li>
            <li>
              <span class="name">3.侯方岳在开国大典上穿的礼服</span>
            </li>
            <li>
              <span class="name">4.江竹筠给谭竹安的信</span>
            </li>
            <li>
              <span class="name">5.江竹筠给竹安弟的信</span>
            </li>
            <li>
              <span class="name">6.留美科协人员兰毓钟在美国使用的物品</span>
            </li>
            <li>
              <span class="name">7.罗世文给罗汉材的信</span>
            </li>
            <li>
              <span class="name">8.许晓轩狱中寄爱人姜绮华的信</span>
            </li>
            <li>
              <span class="name">9.杨虎城出国纪念锦旗</span>
            </li>
            <li>
              <span class="name">10.红色文物书刊</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "redGoods",
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
            white-space: nowrap;

            overflow: hidden;

            text-overflow: ellipsis;
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