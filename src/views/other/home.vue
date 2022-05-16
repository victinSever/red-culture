<template>
  <div>
    <!-- 头部导航 -->
    <div class="header-box">
      <!-- title -->
      <div class="header-title-box">
        <div>
          <h1 class="header-title">重庆数字化红色文化<br />移动课堂</h1>
        </div>
      </div>

      <div class="header-box-left">
        <!-- nav -->
        <ul class="header-box-left-box" @click="gotoMagnage">
          <li class="red-resource-tag">
            <span>红色资源</span>

            <!-- hover树 -->
            <div class="header-nav-hover animate__animated">
              <ul>
                <li><span class="redPerson">红色人物</span></li>
                <li><span class="redPoem">红色诗抄</span></li>
                <li><span class="redMusic">红色歌曲</span></li>
                <li><span class="redGoods">红色文物</span></li>
              </ul>
            </div>
          </li>
          <li><span class="collection">创意征集</span></li>
          <li><span class="cultureProduction">文创产品</span></li>
          <li><span class="communication">互动留言</span></li>
        </ul>
      </div>
      <!-- right -->
      <div class="header-box-right">
        <router-link to="/login">登录</router-link>
        <a href="#">加入我们</a>
      </div>
    </div>

    <!-- 大图 -->
    <div class="banner-box"></div>

    <!-- 红色馆 -->
    <div class="recomment-box">
      <div class="recomment-top-box">
        <h2>红色馆</h2>
      </div>
      <div class="recomment-bottom-box">
        <div class="recomment-list">
          <div class="recomment-item">
            <span>
              <img
                src="https://cdn.tungee.com/official-website/pc/img/product/sales/icon-scene-2.svg"
                alt=""
              />
            </span>
            <h3>最近探访</h3>
            <p>最近时间的资源记录</p>
          </div>
          <div class="recomment-item">
            <span>
              <img
                src="https://cdn.tungee.com/official-website/pc/img/product/sales/icon-scene-1.svg"
                alt=""
              />
            </span>
            <h3>新闻资讯</h3>
            <p>以时间更新较近期红色新闻</p>
          </div>
          <div class="recomment-item">
            <span>
              <img
                src="https://cdn.tungee.com/official-website/pc/img/product/sales/icon-scene-3.svg"
                alt=""
              />
            </span>
            <h3>红色推荐</h3>
            <p>网站推荐的红色文化访问点</p>
          </div>
          <div class="recomment-item">
            <span>
              <img
                src="https://cdn.tungee.com/official-website/pc/img/product/sales/icon-scene-4.svg"
                alt=""
              />
            </span>
            <h3>红色旅游</h3>
            <p>重庆学行旅的优质推荐</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 红色足迹 -->
    <div class="track-box">
      <div class="track-top-box">
        <h2>团队足迹</h2>
      </div>
      <div class="track-bottom-box">
        <div class="track-left-box">
          <h3>时光轨道</h3>
          <ul>
            <li>2022年10月</li>
            <li>2022年8月</li>
            <li>2022年7月</li>
            <li>2022年5月</li>
          </ul>
        </div>
        <div class="track-right-box">
          <ul>
            <li>数据库新增8个红岩故事</li>
            <li>数据库进一步补充，本次加入了xxx烈士的xxx战役等245个</li>
            <li>网站开始落地，团队完成项目发布</li>
            <li>
              网站正式布局开发，初始数据库补充，此次补充近139名英雄人物，红色故事423个，通过具体时期分类存入数据库
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <div class="footer-box">
      <!-- 版权作者 -->
      <div class="copyright">
        <p>客服信箱：victinzhong@qq.com</p>
        <p>客服热线：17815333317（周一至周日：9:00-18:00）</p>
        <p>Copyright © 2022-2032 版权所有：重庆数字化红色文化移动资源馆团队</p>
      </div>

      <!-- 链接 -->
      <div class="links">
        <ul>
          <li><a href="" class="quick-link">联系我们</a> |</li>
          <li><a href="" class="quick-link">加入我们</a> |</li>
          <li><a href="" class="quick-link">合作伙伴</a> |</li>
          <li><a href="" class="quick-link">意见反馈</a> |</li>
          <li><a href="" class="quick-link">安全中心</a> |</li>
          <li><a href="" class="quick-link">网站地图</a> |</li>
          <li><a href="" class="quick-link">帮助中心</a> |</li>
          <li><a href="" class="quick-link">个人信息保护政策</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  mounted() {
    //添加菜单栏监听
    this.toggleMenu();
  },
  methods: {
    // 菜单栏出现动画
    toggleMenu() {
      let menu = document.querySelectorAll(".red-resource-tag")[0];
      let hover = document.querySelectorAll(".header-nav-hover")[0];
      menu.onmouseover = function () {
        hover.classList.remove("animate__fadeOut");
        hover.classList.add("animate__flipInY");
        hover.style.display = "block";
      };
      menu.onmouseout = function () {
        hover.classList.remove("animate__flipInY");
        hover.classList.add("animate__fadeOut");
        hover.style.display = "none";
      };
    },

    // 跳转到信息页面
    gotoMagnage(e) {
      var dom = e.target;
      if (dom.tagName === "SPAN") {
        if (dom.getAttribute("class") !== null)
          this.$router.push("/manage/" + dom.className);
      }
    },
  },
};
</script>

<style lang='less' scoped>
.header-box {
  height: 120px;
  width: 100vw;
  background: linear-gradient(-225deg, #e01616, #d63926, rgb(247, 109, 109));
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .header-title-box {
    height: 120px;
    flex: 2;
    background-image: -webkit-linear-gradient(
      left,
      yellow,
      pink
    ); //开始方向，渐变颜色
    -webkit-background-clip: text; //以盒子内的文字作为裁剪区域向外裁剪，文字之外的区域都将被裁剪掉。
    -webkit-text-fill-color: transparent; //把文字变透明
    cursor: pointer;
    margin-left: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      height: 80px;

      .header-title {
        font-family: zhulang;
        letter-spacing: 2px;
        text-align: center;
        height: 120px;
        background-clip: border-box;
      }
    }
  }

  .header-box-left {
    flex: 5;
    display: flex;
    justify-content: center;
    height: 70px;
    margin: 25px 0;

    .header-box-left-box {
      width: 80%;
      height: 70px;
      font-size: 16px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    ul > li {
      position: relative;
      height: 60px;
      width: 150px;
      box-sizing: border-box;
      border-radius: 20px;
      padding: 1px;
      background-image: linear-gradient(90deg, #fff, #efefef, rgb(18, 23, 3));

      & > span {
        display: block;
        height: 100%;
        line-height: 60px;
        width: 100%;
        text-align: center;
        color: #efefef;
        font-family: douyu;
        font-weight: bold;
        border-radius: 20px;
        background: linear-gradient(
          90deg,
          red,
          rgb(205, 24, 24),
          rgb(145, 54, 54)
        );
        transition: 0.4s;
        cursor: pointer;
      }

      & > span:hover {
        background: linear-gradient(
          90deg,
          red,
          rgb(246, 29, 29),
          rgb(177, 64, 64)
        );
        font-size: 20px;
      }

      .header-nav-hover {
        display: none;
        width: 100%;
        height: 380px;
        position: absolute;

        ul {
          margin-top: 30px;

          li {
            margin: 10px 0;
          }
        }
      }
    }
  }

  .header-box-right {
    flex: 2;
    a {
      float: right;
      margin: 20px 0;
      margin-right: 50px;
      font-size: 20px;
      height: 70px;
      line-height: 70px;
      font-family: zhulang;
      color: #efefef;
      transition: 0.4s;
    }

    a:hover {
      color: #000;
      transform: scale(110%);
    }
  }
}

.banner-box {
  height: 400px;
  width: 100%;
  background: url(@/assets/images/bgc1.jpg) no-repeat;
  background-size: 100% 100%;
}

.recomment-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
  background: linear-gradient(180deg, #be0a0d, #d63926, rgb(247, 109, 109));

  .recomment-top-box {
    margin-bottom: 30px;

    h2 {
      font-size: 40px;
      // font-weight: normal;
      color: #efefef;
      font-family: zhulang;
    }
  }

  .recomment-bottom-box {
    width: 100%;
    display: flex;
    justify-content: center;

    .recomment-list {
      width: 70%;
      display: flex;
      justify-content: space-around;

      .recomment-item {
        height: 250px;
        width: 250px;
        background-color: #ef1821;
        border-radius: 3px;
        box-shadow: 1px 1px 10px rgb(166, 166, 166);
        cursor: pointer;
        transition: 0.6s;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: aliceblue;

        h3 {
          margin: 20px 0;
          color: #efefef;
          font-family: douyu;
        }

        p {
          color: #efefef;
        }
      }

      .recomment-item:hover {
        transform: scale(110%, 110%);
      }
    }
  }
}

.track-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 800px;
  background: linear-gradient(180deg, rgb(247, 109, 109), #d63926, #be0a0d);

  .track-top-box {
    margin-bottom: 50px;
    color: #efefef;

    h2 {
      font-size: 40px;
      font-family: zhulang;
    }
  }

  .track-bottom-box {
    display: flex;
    justify-content: space-between;
    width: 70%;
    color: #efefef;

    .track-left-box {
      flex: 2;
      width: 100%;

      h3 {
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin-bottom: 40px;
        font-family: douyu;
      }

      ul {
        display: flex;
        flex-direction: column;

        li {
          height: 100px;
          font-size: 30px;
        }
      }
    }
    .track-right-box {
      margin-top: 80px;
      flex: 3;

      ul {
        display: flex;
        flex-direction: column;

        li {
          height: 100px;
          font-size: 20px;
          transition: 0.4s;
          cursor: pointer;
        }

        li:hover {
          color: antiquewhite;
          // transform: scale(110%);
          font-size: 22px;
          text-decoration: underline;
        }
      }
    }
  }
}

/* 页脚 */

.footer-box {
  padding-top: 10px;
  width: 100%;
  height: 160px;
  background-color: rgba(11, 11, 11, 0.8);

  .copyright {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    p {
      margin: 5px 0;
    }
  }

  .links {
    margin-top: 10px;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-family: douyu;

    ul {
      display: inline-block;

      a {
        color: rgb(128, 122, 115);
      }

      a:hover {
        color: rgb(196, 142, 142);
      }
    }
  }
}

// @media screen and (min-width: 95vw) {
//   .header-box-right {
//     display: none;
//   }
// }
</style>