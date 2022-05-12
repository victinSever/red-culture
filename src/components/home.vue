<template>
  <div>
    <!-- 头部导航 -->
    <div class="header-box">
      <div class="header-box-left">
        <ul class="header-box-left-box">
          <li class="red-resource-tag">
            <a href="" class="collapsed red-resource-tag">红色资源</a>

            <!-- hover树 -->
            <div class="header-nav-hover animate__animated">
              <ul>
                <li><a href="">红色人物</a></li>
                <li><a href="">红色诗抄</a></li>
                <li><a href="">红色歌曲</a></li>
                <li><a href="">红色故事</a></li>
              </ul>
            </div>
          </li>
          <li><a href="" class="collapsed">创意征集</a></li>
          <li><a href="" class="collapsed">文创产品</a></li>
          <li><a href="" class="collapsed">互动留言</a></li>
        </ul>
      </div>
      <div class="header-box-right">
        <a href="#">关注我们</a>
      </div>
    </div>

    <div class="banner-box"></div>
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
    toggleMenu() {
      let menu = document.querySelectorAll(".header-box-left-box");
      let hover = document.querySelectorAll(".header-nav-hover")[0];
      menu[0].onmouseover = function (e) {
        if (e.target.className.includes("red-resource-tag")) {
          hover.classList.remove('animate__bounceOutLeft')
          hover.classList.add('animate__flipInY')
          hover.style.display = "block";          
        } else if(e.target.className.includes("collapsed")){
          hover.classList.remove('animate__flipInY')
          hover.classList.add('animate__bounceOutLeft')
          hover.style.display = "none";
        }
      };
    },
  },
};
</script>

<style lang='less' scoped>
.header-box {
  height: 120px;
  width: 100vw;
  background: #ef1821;
  z-index: 2;

  .header-box-left {
    float: left;
    width: 70%;
    display: flex;
    justify-content: center;
    height: 70px;
    margin: 25px 0;

    .header-box-left-box {
      width: 80%;
      height: 70px;
      font-size: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    ul > li {
      height: 70px;
      width: 150px;
      box-sizing: border-box;
      border-radius: 20px;
      padding: 1px;
      background-image: linear-gradient(
        90deg,
        rgb(255, 255, 0),
        rgb(234, 234, 31),
        rgb(18, 23, 3)
      );

      & > a {
        display: block;
        height: 100%;
        line-height: 70px;
        width: 100%;
        text-align: center;
        color: rgb(246, 221, 58);
        font-family: "kaiti";
        font-weight: bold;
        border-radius: 20px;
        background: linear-gradient(
          90deg,
          red,
          rgb(205, 24, 24),
          rgb(145, 54, 54)
        );
        transition: 0.4s;
      }

      & > a:hover {
        background: linear-gradient(
          90deg,
          red,
          rgb(246, 29, 29),
          rgb(177, 64, 64)
        );
        font-size: 22px;
      }

      .header-nav-hover {
        display: none;

        ul {
          margin-top: 30px;

          li {
            margin: 10px 0;
          }
        }
      }
    }

    // ul > li:hover {
    //   .header-nav-hover {
    //     display: block;
    //   }
    // }
  }

  .header-box-right {
    float: right;
    width: 30%;

    a {
      float: right;
      margin: 20px 0;
      margin-right: 50px;
      font-size: 20px;
      height: 70px;
      line-height: 70px;
    }

    a:hover {
      color: aliceblue;
    }
  }
}

.banner-box {
  height: 45vh;
  width: 100%;
  background: url(../assets/images/bgc1.jpg);
}
</style>