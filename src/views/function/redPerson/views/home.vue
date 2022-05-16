<template>
  <div>
    <div class="content-intro">
      <h3><span>什么是红色人物？</span></h3>
      <p>
        被称为”红色“的人物都是参与共产主义运动的人员，因为共产主义运动的旗帜是红色，所以从事共产主义运动的人物被代称为”红色“人物。
      </p>
    </div>

    <div class="content-time">
      <h3><span>红色人物时期&nbsp;&nbsp;</span></h3>
      <ul>
        <li v-for="item in 10" :key="item">
          <span class="content-time-span" @click="gotoSimple"> xxxx~xxxx时期 </span>
          <span class="content-time-inf"> xxxx~xxxx时期的简介 </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "redPersonHome",
  methods: {
      gotoSimple(e){
          this.$router.push({
              path: '/manage/redPerson/redPersonSimple',
              query: {
                  time: e.target.innerText
              }
          })
      }
  }
};
</script>

<style coped lang='less'>
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

      .content-time-span {
        margin-right: 20px;
        width: 200px;
        display: inline-block;
        cursor: pointer;
      }

      .content-time-span:hover {
        color: #d63926;
        text-decoration: underline;
      }

      .content-time-inf{
          font-size: 14px;
          color: rgb(111, 107, 107);
      }
    }
  }
}
</style>