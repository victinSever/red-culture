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
              <span class="name">黄继光</span>
              <span class="inf">浴火牺牲的英勇战士</span>
            </li>
            <li>
              <span class="name">黄继光</span>
              <span class="inf">浴火牺牲的英勇战士</span>
            </li>
            <li>
              <span class="name">黄继光</span>
              <span class="inf">浴火牺牲的英勇战士</span>
            </li>
            <li>
              <span class="name">黄继光</span>
              <span class="inf">浴火牺牲的英勇战士</span>
            </li>
            <li>
              <span class="name">黄继光</span>
              <span class="inf">浴火牺牲的英勇战士</span>
            </li>
            <li>
              <span class="name">黄继光</span>
              <span class="inf">浴火牺牲的英勇战士</span>
            </li>
            <li>
              <span class="name">黄继光</span>
              <span class="inf">浴火牺牲的英勇战士</span>
            </li>
            <li>
              <span class="name">黄继光</span>
              <span class="inf">浴火牺牲的英勇战士</span>
            </li>
            <li>
              <span class="name">黄继光</span>
              <span class="inf">浴火牺牲的英勇战士</span>
            </li>
            <li>
              <span class="name">黄继光</span>
              <span class="inf">浴火牺牲的英勇战士</span>
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
    width: 700px;
    border-right: 1px dotted rgb(95, 93, 93);

    
  }
  .content-right {
    float: right;
    width: 250px;

    .content-recomment {
      width: 250px;
      height: 300px;
      border: 1px solid rgb(212, 212, 212);
      border-top: 3px solid #ce3a3a;
      background-color: #f7f7f9;

      h3 {
        color: #d63926;
        font-weight: normal;
        font-family: douyu;
        margin: 10px 0;
      }

      ul {
        display: flex;
        flex-direction: column;
        margin-left: 5px;

        li {
          height: 25px;
          line-height: 25px;
          display: flex;
          justify-content: space-between;

          .name {
            margin-right: 10px;
          }

          .inf {
            font-size: 12px;
            color: rgb(100, 97, 97);
            margin-right: 5px;
          }
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