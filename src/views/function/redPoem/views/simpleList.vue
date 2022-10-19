<template>
  <div>
      <h2>{{this.$route.query.time}}</h2>

      <div class="simple-box">
        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/poem/囚歌.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">《囚歌》</span>
            <span class="rank">（叶挺）</span>
            </p>
            <p class="intro">《囚歌》是近代革命者叶挺于一九四二年创作的一首现代诗。此诗揭露了国民党反动派的丑恶行径、极端虚弱的本质，表现了革命者的伟大气节，抒发了为革命献身的壮志豪情。全诗明白晓畅，通俗易懂，如脱口而出，但感情炽烈，气势豪迈，意境表达清晰完整。</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/poem/《沁园春·雪》.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">《沁园春·雪》</span>
            <span class="rank">（毛泽东）</span>
            </p>
            <p class="intro">《沁园春·雪》是无产阶级革命家毛泽东创作的一首词。该词上片描写北国壮丽的雪景，纵横千万里，展示了大气磅礴、旷达豪迈的意境，抒发了词人对祖国壮丽河山的热爱。下片议论抒情，重点评论历史人物，歌颂当代英雄，抒发无产阶级要做世界的真正主人的豪情壮志。全词熔写景、议论和抒情于一炉，意境壮美，气势恢宏，感情奔放，胸襟豪迈，颇能代表毛泽东诗词的豪放风格。</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/role-bg.png" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">《重庆办事处五周年纪念》</span>
            <span class="rank">（董必武）</span>
            </p>
            <p class="intro">《重庆办事处五周年纪念》是近代杰出的无产阶级革命家董必武先生创作的一首七言律诗。诗中抒发了诗人乐观积极的战斗情怀，同时揭示了国民党顽固派的反动本质。</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/poem/《我的“自白”书》.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">《我的“自白”书》</span>
            <span class="rank">（陈然）</span>
            </p>
            <p class="intro">《我的“自白”书》写于1948年4月，作者陈然。处于地下状态的中共重庆市委机关报《挺进报》被国民党当局破获，中共地下党员、《挺进报》特支书记陈然被捕。在狱中，陈然受尽种种酷刑，始终只承认《挺进报》从编辑、印刷到发行，全部是他一人所为——他决心牺牲自己，保护组织和同志们，特务们用威胁利诱的办法要他写自白书，陈然拿起笔，写下了惊天动地的诗篇——《我的“自白”书》。</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/role-bg.png" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">除夕有感</span>
            <span class="rank"> （许晓轩诗作）</span>
            </p>
            <p class="intro">《除夕有感》是当代许晓轩创作的一首七言律诗，作者佳节倍思亡友，追怀往事，感慨万千，抒发了真挚的情感。介绍了除夕，按中华民族的传统习惯，是一家人团聚守岁之夜。</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/poem/《就义诗》.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">《就义诗》</span>
            <span class="rank">（夏明翰诗）</span>
            </p>
            <p class="intro">夏明翰，字桂根，祖籍湖南衡阳县，1900年农历八月生于湖北秭归。1917年春，夏明翰考入湖南省立第三甲种工业学校。在校期间，他追求进步，积极参加反对北洋军阀的斗争。1919年五四运动波及湖南，夏明翰和同学们走出校门，开展大规模的爱国宣传活动，声援北京学生的反帝反封建斗争。 1928年初，夏明翰被党调到湖北工作，任中共湖北省委常委。由于叛徒的出卖，同年3月18日他不幸在武汉被敌人逮捕。3月20日清晨 [3]  ，他被敌人押送到汉口余记里刑场。当敌执行官问夏明翰还有什么话要说时，他大声说：“有，给我拿纸笔来！”于是，夏明翰写下了上述那首大义凛然的《就义诗》。 为了中国人民的革命事业，夏明翰悲壮地牺牲了，时年仅28岁。</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'redPersonSimple',
    methods: {
      gotoDetail(e){
        console.log(e.target);
        this.$router.push({
          path: '/manage/redPoem/redPoemDetail',
          query: {
              time: e.target.tagName
          }
        })
      }
    }
}
</script>

<style scoped lang='less'>
  h2{
    margin-bottom: 20px;
  }
  .simple-box{
    .simple-card{
      margin: 20px 0;
      display: flex;
      border: 1px solid #ccc;
      margin-right: 10px;
      box-sizing: border-box;
      cursor: pointer;

      .card-left{
        width: 100px;
        height: 100px;
        margin-right: 10px;

        img{
          height: 100px;
          width: 100px;
        }
      }

      .card-right{
        p{
          margin: 5px 0;
        }

        .time, .intro{
          font-size: 14px;
          color: rgb(96, 97, 99);
          text-indent: 2em;
          line-height: 23px;
        }
      }
    }
  }
</style>