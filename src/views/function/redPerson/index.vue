<template>
  <div>
    <div class="content">
      <div class="content-left">
        <router-view></router-view>
      </div>

      <div class="content-right">
        <div class="title">
          <h2>红色人物</h2>
        </div>
        <div class="content-recomment">
          <h3>人物推荐</h3>
          <ul>
            <li>
              <span class="name">邹容</span>
              <span class="inf">狂飚式的人物</span>
            </li>
            <li>
              <span class="name">杨沧白</span>
              <span class="inf">“公强会”的创立者</span>
            </li>
            <li>
              <span class="name">赵世炎</span>
              <span class="inf">无产阶级革命家、政治家</span>
            </li>
            <li>
              <span class="name">邓蟾秋</span>
              <span class="inf">江津的孟尝君</span>
            </li>
            <li>
              <span class="name">杨闇公</span>
              <span class="inf">英雄模范</span>
            </li>
            <li>
              <span class="name">何其芳</span>
              <span class="inf">文学评论家和“红学”理论家</span>
            </li>
            <li>
              <span class="name">王朴</span>
              <span class="inf">红岩英烈</span>
            </li>
            <li>
              <span class="name">杨若愚</span>
              <span class="inf">十年树木，百年树人</span>
            </li>
            <li>
              <span class="name">陶行知</span>
              <span class="inf">重庆创办育才学校</span>
            </li>
            <li>
              <span class="name">张伯苓</span>
              <span class="inf">教育家、艺术家和革命家。</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "redPerson",
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
    border-left: 1px dotted rgb(98, 96, 96);
    padding: 0 20px;

    
  }
  .content-right {
    float: right;
    width: 250px;
    padding-right: 10px;
    border-right: 1px dotted rgb(98, 96, 96);

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

        li:hover{
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