<template>
  <div>
    <div class="content-intro">
      <h3><span>什么是红色诗抄？</span></h3>
      <p>
        《红色诗抄》为“五四”以来革命诗歌、进步诗歌的总结性选本。共收集120余位作者的诗作170余首。所收包括在各个革命时期产生过重大或较大影响的代表性作品，曾被选入多种同类诗集的经典性作品，以及在当时和后来虽末产生足够影响但诗艺出众或风格独特的“拾遗”性作品。它们中有的适于文本阅读，有的适于口头朗诵，更多的则兼具良好的可读性和可诵性。它们的作者包括陈辉、叶挺等革命烈士，毛泽东、周恩来等革命领袖，田间、郭小川等革命诗人，以及艾青、闻一多、穆旦、冯至等一大批优秀的现代诗人。
      </p>
    </div>

    <div class="content-time">
      <h3><span>诗抄主题&nbsp;&nbsp;</span></h3>
      <ul>
        <li  @click="gotoSimple">
          <span class="content-time-span">
            <span>理想信念</span>
          </span>
        </li>
        <li  @click="gotoSimple">
          <span class="content-time-span">
            <span>德行操守</span>
          </span>
        </li>
        <li @click="gotoSimple">
          <span class="content-time-span">
            <span>家训家风</span>
          </span>
        </li>
        <li @click="gotoSimple">
          <span class="content-time-span">
            <span>亲情友情</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "redPersonHome",
  methods: {
    gotoSimple(e) {
      console.log(e.target);
      this.$router.push({
        path: "/manage/redPoem/redPoemSimple",
        query: {
          time: e.target.innerText,
        },
      });
    },
  },
};
</script>

<style scoped lang='less'>
h3 {
  margin-bottom: 10px;
  span {
    height: 30px;
    line-height: 30px;
    background-color: #d63926;
    padding: 0 15px 0 3px;
    color: #fff;
    position: relative;
    display: inline-block;
  }

  span::before {
    content: "";
    position: absolute;
    top: -7px;
    right: -7px;
    transform: rotate(45deg);
    width: 30px;
    height: 17px;
    background-color: rgb(223, 219, 219);
  }

  span::after {
    content: "";
    position: absolute;
    bottom: -10px;
    right: -3px;
    transform: rotate(45deg);
    width: 17px;
    height: 30px;
    background-color: rgb(223, 219, 219);
  }
}

p {
  text-indent: 2em;
  line-height: 30px;
}

.content-time {
  margin-top: 50px;

  ul {
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    li {
      height: 50px;
      line-height: 50px;
      margin: 10px 0;
      background-color: aliceblue;
      border-radius: 5px;

      .content-time-span {
        margin-right: 20px;
        width: 200px;
        display: inline-block;
        cursor: pointer;
        span {
          display: inline-block;
          height: 40px;
          line-height: 40px;
          padding: 0 10px;
          border-radius: 5px;
        }
      }

      .content-time-inf {
        font-size: 14px;
        color: rgb(111, 107, 107);
      }
    }

    li:hover {
      cursor: pointer;
      background-color: #fff;

      .content-time-span:hover {
        color: #d63926;
        text-decoration: underline;
      }
    }
  }
}
</style>