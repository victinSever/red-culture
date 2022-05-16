<template>
  <div>
      <h2>{{this.$route.query.time}}</h2>

      <div class="simple-box">
        <div class="simple-card" v-for="item in 10" :key="item" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/role-bg.png" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">黄继光</span>
            <span class="rank">（中国人民志愿军特级英雄、志愿军某部通讯员）</span>
            </p>
            <p><span class="time">1931年1月8日～1952年10月20日</span></p>
            <p class="intro">1952年10月19日晚，黄继光所在的第2营奉命向上甘岭右翼597.9高地反击。在离天亮只有40多分钟时，黄继光用胸膛堵住疯狂扫射的敌机枪眼英勇牺牲</p>
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
          path: '/manage/redPerson/redPersonDetail',
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
    .simple-card{
      margin: 20px 0;
      display: flex;
      border: 1px solid #ccc;
      margin-right: 10px;
      box-sizing: border-box;
      cursor: pointer;

      .card-left{
        width: 70px;
        height: 100px;
        margin-right: 10px;

        img{
          height: 100px;
          width: 70px;
        }
      }

      .card-right{
        p{
          margin: 5px 0;
        }

        .time, .intro{
          font-size: 14px;
          color: rgb(96, 97, 99);
        }
      }
    }
  }
</style>