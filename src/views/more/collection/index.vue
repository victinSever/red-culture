<template>
  <div class="root">
    <div class="collction-top-box">
      <div class="collection-top-in-box">
        <div class="collction-top-top">
          <el-carousel height="250px" direction="vertical" :interval="8000">
            <el-carousel-item v-for="(item, p) in carousel" :key="p">
              <img :src="item.imgUrl" alt="" height="250px" width="100%" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="collction-top-bottom">
          <div class="collction-top-bottom-nav">
            <div class="nav-left">
              <div class="logo">
                <img src="@/assets/images/logo3.png" alt="" />
              </div>
              <div class="title">
                <span>创意中心</span>
              </div>
            </div>
            <div class="nav-right">
              <div class="login-title">
                <span class="el-icon-position">&nbsp;登陆</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="collction-bottom-box">
      <div class="collction-bottom-in-box">
        <div class="collction-bottom-left">
          <div class="main-create">
            <button class="el-icon-upload">&nbsp;投稿</button>
          </div>
          <div class="nav-vercial-list">
            <ul>
              <li>
                <span><i class="el-icon-s-home"></i> 首页</span>
              </li>
              <li>
                <span><i class="el-icon-s-cooperation"></i> 内容管理</span>
              </li>
              <li>
                <span><i class="el-icon-baseball"></i> 互动管理</span>
              </li>
              <li>
                <span><i class="el-icon-star-on"></i> 数据中心</span>
              </li>
              <li>
                <span><i class="el-icon-paperclip"></i> 收益管理</span>
              </li>
              <li>
                <span><i class="el-icon-s-flag"></i> 任务成就</span>
              </li>
              <li>
                <span><i class="el-icon-s-opportunity"></i> 创作权益</span>
              </li>
              <li>
                <span><i class="el-icon-delete"></i> 创作设置</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="collction-bottom-right">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "collectionPage",
  data() {
    return {
      carousel: [
        {
          imgUrl: require("@/assets/images/bgc1.jpg"),
        },
        {
          imgUrl: require("@/assets/images/bgc3.jpg"),
        },
        {
          imgUrl: require("@/assets/images/bgc2.jpg"),
        },
      ],
    };
  },
};
</script>

<style scopd lang='less'>
.root {
  background-color: #efefef;

  .collction-top-box {
    height: 350px;
    width: 100%;

    .collection-top-in-box {
      height: 100%;
      width: 1000px;
      margin: 0 auto;

      //大图轮播图
      .collction-top-top {
        width: 100%;
        height: 250px;
      }

      // 水平导航栏
      .collction-top-bottom {
        height: 100px;
        margin: 0 auto;
        background-color: #fff;
        border-bottom: 1px solid #efefef;

        .collction-top-bottom-nav {
          width: 1000px;
          margin: 0 auto;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .nav-left {
            display: flex;
            align-items: center;
            .logo {
              img {
                height: 80px;
              }
            }

            .title {
              margin-left: 10px;
              span {
                color: #d63926;
                font-size: 30px;
                font-family: douyu;
              }
            }
          }

          .nav-right {
            .login-title {
              width: 80px;
              height: 40px;

              border-radius: 20px;
              margin-right: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              background: linear-gradient(
                0deg,
                #f42323,
                #e84739,
                rgb(240, 100, 100)
              );
              box-shadow: 1px 1px 4px rgb(120, 118, 118);

              span {
                color: #fff;
              }
            }

            .login-title:hover {
              background: skyblue;
              box-shadow: 1px 1px 4px #000;
            }
          }
        }
      }
    }
  }

  .collction-bottom-box {
    min-height: 800px;

    .collction-bottom-in-box {
      width: 1000px;
      min-height: 800px;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      box-shadow: 1px 1px 5px #efefef;
      margin: 0 auto;
      background-color: #fff;
      display: flex;

      .collction-bottom-left {
        width: 150px;
        height: 100%;
        border-right: 1px solid #efefef;

        .main-create {
          padding: 20px 0;
          display: flex;
          justify-content: center;
          button {
            width: 100px;
            height: 40px;
            background-color: #f45555;
            color: #efefef;
            font-size: 18px;
            border-radius: 3px;
            cursor: pointer;
          }

          button:hover {
            background-color: #d63926;
          }
        }

        ul {
          display: flex;
          flex-direction: column;
          li {
            width: 100%;
            height: 60px;
            line-height: 60px;
            cursor: pointer;
            display: flex;
            align-items: center;

            span {
              display: inline-block;
              width: 100%;
              height: 100%;
              text-align: center;
              border-bottom: 1px solid #efefef;
              font-size: 16px;
              color: rgb(64, 64, 64);

              i {
                font-size: 18px;
              }
            }
          }

          li:hover span {
            background-color: #efefef;
            color: #f45555;
          }
        }
      }

      .collction-bottom-right {
        width: 850px;
        padding: 10px;
        background-color: #fafafa;
      }
    }
  }
}
</style>