<template>
  <div class="root">
    <div class="chhome-top-box">
      <ul>
        <li><span>视频投稿</span></li>
        <li><span>音频投稿</span></li>
        <li><span>专栏投稿</span></li>
        <li><span>视频素材投稿</span></li>
      </ul>
    </div>
    <div class="chhome-bottom-box">
      <div class="content-box">
        <i class="el-icon-upload"></i>
        <button>上传视频</button>
      </div>
      <div class="content-info">
        <p>
          <span>禁止发布的视频</span><span>内容视频大小</span>
          <span>视频格式视频码率</span>
        </p>
        <p>
          上传视频，即表示您已同意<span class="link"
            >重庆数字化红色文化移动课堂团队使用协议</span
          >与<span class="link">创作公约</span> ，请勿上传色情，反动等违法视频。
        </p>
        <p>第三方工具</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coHome",
};
</script>

<style scoped lang='less'>
.root {
  width: 720px;
      height: 100%;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #fff;
  .chhome-top-box {
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid #e5e1e1;

    ul {
      padding-left: 10px;
      height: 100%;
      li {
        padding: 0 20px;
        height: 100%;
        cursor: pointer;

        span {
          display: inline-block;
          width: 100%;
          height: 100%;
          color: rgb(64, 64, 64);
        }
      }

      li:nth-child(1) span {
        border-bottom: 3px solid #f45555;
      }
    }
  }

  .chhome-bottom-box {
    margin-top: 30px;


    .content-box {
      width: 500px;
      height: 300px;
      margin: 0 auto;
      border: 2px dotted #b8b5b5;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;

      i {
        font-size: 50px;
        margin: 10px 0;
        color: #c6c5c5;
      }

      button {
        margin: 10px 0;
        width: 150px;
        height: 50px;
        background-color: #f45555;
        border-radius: 10px;
        color: #efefef;
        font-size: 16px;
        cursor: pointer;
      }
    }

    .content-info {
      p {
        line-height: 40px;
        margin: 10px 0;
        font-size: 13px;
        color: #b8b5b5;
        text-align: center;

        span {
          margin: 0 10px;
          cursor: pointer;
        }

        .link {
          color: rgb(65, 188, 237);
          margin: 0 3px;
        }

        .link:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>