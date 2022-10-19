<template>
  <div>
      <h2>{{this.$route.query.time}}</h2>

      <div class="simple-box">
        <div class="simple-card" @click="gotoDetail">
          <div>
            <img src="@/assets/images/goods/爱泼斯坦在重庆从事新闻工作期间的相关证件.jpg" alt="未找到">
            <p>爱泼斯坦在重庆从事新闻工作期间的相关证件</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div>
            <img src="@/assets/images/goods/车耀先主办的刊物《图存》.jpg" alt="未找到">
            <p>车耀先主办的刊物《图存》</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div>
            <img src="@/assets/images/goods/侯方岳在开国大典上穿的礼服.jpg" alt="未找到">
            <p>侯方岳在开国大典上穿的礼服</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div>
            <img src="@/assets/images/goods/江竹筠给谭竹安的信.jpg" alt="未找到">
            <p>江竹筠给谭竹安的信</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div>
            <img src="@/assets/images/goods/江竹筠给竹安弟的信.jpg" alt="未找到">
            <p>江竹筠给竹安弟的信</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div>
            <img src="@/assets/images/goods/留美科协人员兰毓钟在美国使用的物品.jpg" alt="未找到">
            <p>留美科协人员兰毓钟在美国使用的物品</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div>
            <img src="@/assets/images/goods/罗世文给罗汉材的信.jpg" alt="未找到">
            <p>罗世文给罗汉材的信</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div>
            <img src="@/assets/images/goods/许晓轩狱中寄爱人姜绮华的信.jpg" alt="未找到">
            <p>许晓轩狱中寄爱人姜绮华的信</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div>
            <img src="@/assets/images/goods/杨虎城出国纪念锦旗.jpg" alt="未找到">
            <p>杨虎城出国纪念锦旗</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div>
            <img src="@/assets/images/goods/红色文物.jpg" alt="未找到">
            <p>红色文物书刊</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'redPersonSimple',
    methods: {
      gotoDetail(e){
        console.log(e.target);
        this.$router.push({
          path: '/manage/redGoods/redGoodsDetail',
          query: {
              time: e.target.tagName
          }
        })
      }
    }
}
</script>

<style scoped lang='less'>
  h2{
    margin-bottom: 20px;
  }
  .simple-box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .simple-card{
      width: 33%;    
      cursor: pointer;
      margin: 15px 0;

      div{
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;

        img{
          width: 100%;
        }

        p{
          text-align: center;
        }
      }

    }
  }
</style>