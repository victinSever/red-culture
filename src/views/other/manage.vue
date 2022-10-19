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
            <div class="header-left-in-title"  @click="$router.push('/home')">
              <div class="header-left-log">
                <img src="@/assets/images/logo3.png" alt="" width="100px">
              </div>
              <div class="header-right-h1">
                <h1><span>重庆</span>数字化 <span>红色文化</span> <span>移动课堂</span></h1>
              </div>
            </div>
            
          </div>
          <div class="header-right-saying">
            <h2></h2>
            <div class="header-right-search">
              <i class="el-icon-search"></i>
              <input type="text" placeholder="搜索资源" />
            </div>
          </div>
        </div>
      </div>
      <div class="nav-box">
        <div class="inner-nav-box width" @click="gotoTab">
          <span><span class="redPerson">红色人物</span></span>
          <span><span class=redPoem>红色诗抄</span></span>
          <span><span class="redMusic">红色歌曲</span></span>
          <span><span class="redGoods">红色文物</span></span>

          <span class="header-right-saying">传承红色基因，赓续红色血脉</span>
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
  methods: {
    gotoTab(e){      
      var dom = e.target
      if (dom.tagName === "SPAN") {
          // 判断路由重复
          if(!this.$route.path.includes(dom.className))
            this.$router.push("/manage/" + dom.className)
      }
    }
  }
};
</script>

<style scoped lang='less'>
.root {
  background: linear-gradient(0deg, #fcf9f9, #eae5e5, rgb(211, 209, 209));
  background-size: 100% 100%;
  
}

.width {
  width: 1200px;
  margin: 0 auto;
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
    height: 120px;

    .header-left-title {

      .header-left-in-title {
        display: flex;
        align-items: center;
        cursor: pointer;


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
      
    }

    .header-right-saying {
      position: relative;
      h2 {
        position: absolute;
        top: -5px;
        left: 0;
        display: inline-block;
        font-size: 16px;
        letter-spacing: 4px;
        color: #fff;
        height: 10px;
        width: 310px;
        line-height: 10px;
        border-radius: 5px;
        text-indent: 5px;
        background: linear-gradient(
          90deg,
          rgb(237, 101, 101),
          rgb(233, 56, 56),
          rgb(236, 45, 45),
          rgb(243, 18, 18)
        );
      }

      .header-right-search {
        position: absolute;
        top: -20px;
        right: 0;

        width: 250px;
        height: 30px;
        display: flex;
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
          padding-left: 10px;
          border: none;
          outline: none;
          width: 200px;
        }
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

      &>span{          
          width: 100px;
          display: inline-block;
          text-align: center;          

          &>span{
              display: inline-block;
              height: 22px;
              margin: 4px 0;
              width: 100%;
              color: #fff;
              border-right: 1px solid #f9efef;
              cursor: pointer;
          }

          &>span:hover{
              color: yellow;
          }

          &>span:nth-child(1){
              border-left: 1px solid #f9efef;
          }         
      }

      .header-right-saying{
            width: 300px;
            float: right;
            color: rgb(249, 249, 153);
            letter-spacing: 2px;
            line-height: 30px;
          }
  }
}

.content {
  min-height: 100vh;
  // box-shadow: -1px 1px 5px rgb(98, 96, 96), 0px 0px 0px rgb(98, 96, 96),1px 1px 5px rgb(98, 96, 96), 0px 0px 0px #000;
}
</style>