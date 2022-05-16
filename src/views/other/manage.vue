<template>
  <div class="root">
    <div class="center-box">
      <!-- 头部 -->
      <div class="header width">
        <div class="header-top-box">
          <span><a href="">登陆</a></span>
        </div>
        <div class="header-bottom-box">
          <div class="header-left-title">
            <div class="header-left-in-title">
              <h1><span>重庆</span> <span>红色</span> <span>资源库</span></h1>
            </div>
            <div class="header-right-search">
              <i class="el-icon-search"></i>
              <input type="text" placeholder="搜索资源" />
            </div>
          </div>
          <div class="header-right-saying">
            <h2>巴渝山水楚天阔，红色能量传四方</h2>
          </div>
        </div>
      </div>
      <div class="nav-box">
        <div class="inner-nav-box width">
          <span><a href="">红色人物</a></span>
          <span><a href="">红色诗抄</a></span>
          <span><a href="">红色歌曲</a></span>
          <span><a href="">红色文物</a></span>
          <span><a href="">红色推荐</a></span>
          <span><a href="">红色旅游</a></span>
        </div>
      </div>
      <div class="content width">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "managePage",
};
</script>

<style scoped lang='less'>
.root {
  background: linear-gradient(0deg, #fcf9f9, #eae5e5, rgb(211, 209, 209));
  // background: url(@/assets/images/chongqing-bg.jpeg) no-repeat;
  background-size: 100% 100%;
  height: 100vh;

  
}

.center-box{
    // background-color: #f9efef;
}

.width {
  width: 1000px;
  margin: 0 auto;
//   background-color: #f9efef;
}

.header {
  .header-top-box {
    padding-top: 10px;
    height: 30px;
    width: 100%;

    span {
      float: right;
      margin-right: 10px;
      a {
        color: red;
      }

      a:hover{
          color: skyblue;
      }
    }
  }

  .header-bottom-box {
    height: 100px;

    .header-left-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-left-in-title {
        h1 {
          span:nth-child(1) {
            font-family: jianhao;
            font-size: 55px;
          }

          span:nth-child(2),
          span:nth-child(3) {
            font-family: douyu;
            font-size: 25px;
            margin-left: -5px;
            color: red;
          }
        }
      }
      .header-right-search {
        width: 200px;
        height: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid #938a8a;
        border-radius: 15px;
        background: #fff;

        i {
          font-size: 16px;
          padding-left: 10px;
          cursor: pointer;
          transition: 0.4s;
        }

        i:hover {
          color: skyblue;
        }

        input {
          border: none;
          outline: none;
          width: 150px;
        }

        input::placeholder {
        }
      }
    }

    .header-right-saying {
      h2 {
        font-size: 16px;
        letter-spacing: 4px;
        color: #fff;
        height: 25px;
        width: 310px;
        line-height: 25px;
        border-radius: 12px;
        text-indent: 5px;
        background: linear-gradient(
          90deg,
          rgb(237, 101, 101),
          rgb(233, 56, 56),
          rgb(236, 45, 45),
          rgb(243, 18, 18)
        );
      }
    }
  }
}

.nav-box {
  background: linear-gradient(rgb(235, 75, 75),rgb(230, 24, 24),rgb(234, 11, 11),rgb(252, 141, 141));
  height: 30px;
  margin-bottom: 25px;

  .inner-nav-box{
      background: linear-gradient(rgb(235, 75, 75),rgb(230, 24, 24),rgb(234, 11, 11),rgb(252, 141, 141));

      span{          
          width: 100px;
          display: inline-block;
          text-align: center;          

          a{
              display: inline-block;
              height: 22px;
              margin: 4px 0;
              width: 100%;
              color: #fff;
              border-right: 1px solid #f9efef;
          }

          a:hover{
              color: yellow;
          }

          a:nth-child(1){
              border-left: 1px solid #f9efef;
          }
      }
  }
}

.content {
  height: 80vh;
}
</style>