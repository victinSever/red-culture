<template>
  <div>
      <h2>{{this.$route.query.time}}</h2>

      <div class="simple-box">
        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/person/邹容.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">邹容</span>
            <span class="rank">（清末民主革命人士）</span>
            </p>
            <p><span class="time">1885年～1905年4月3日</span></p>
            <p class="intro">百年之前的邹容，被人们称为“狂飚式的人物”。邹容自称“革命军中马前卒”，他写就的《革命军》，激励了无数革命党人在反帝、反封建的民主革命中英勇战斗，舍身不屈。邹容牺牲后，被追赠为“陆军大将军”。</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/person/杨沧白.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">杨沧白</span>
            <span class="rank">（中国近代民主革命家、辛亥革命元勋）</span>
            </p>
            <p><span class="time">1881年—1942年</span></p>
            <p class="intro">杨沧白是四川第一个资产阶级革命组织“公强会”的创立者，又是同盟会重庆支部的主盟，“蜀军政府”的奠基人。在他的组织带领下，重庆的辛亥革命“兵不血刃，垂手而克复名城”。现渝中区沧白路，就是以他的名字命名的。</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/person/赵世炎.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">赵世炎</span>
            <span class="rank">（中国共产党早期领导人）</span>
            </p>
            <p><span class="time">1901年4月13日 —1927年7月19日</span></p>
            <p class="intro">赵世炎是中国共产党早期杰出的无产阶级革命家、政治家，卓越的马克思主义理论传播者、工人运动的杰出领袖，参加领导了上海工人的三次武装起义。位于酉阳龙潭镇的赵世炎纪念馆，是全国100个红色经典景区之一。</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/person/邓蟾秋.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">邓蟾秋</span>
            <span class="rank">（民族资本家）</span>
            </p>
            <p><span class="time">1871—1953</span></p>
            <p class="intro">邓蟾秋是重庆江津著名的民族资本家。他热心公益事业，仗义疏财，为聚奎中学捐资助学，为抗战内迁的佛学支那内学院购买地皮，不遗余力照顾、自助抗战中入川避难的学者名流，被人誉为“江津的孟尝君”。</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/person/杨闇公.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">杨闇公</span>
            <span class="rank">（中国共产主义运动先驱者）</span>
            </p>
            <p><span class="time">1898—1927</span></p>
            <p class="intro">中国共产主义运动先驱者、四川党团组织主要创建人和大革命运动的主要领导人。因1927年重庆打枪坝“3.31”惨案被捕，后被害牲于浮图关。杨闇公烈士被评为100位为新中国成立作出突出贡献的英雄模范之一。</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/person/何其芳.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">何其芳</span>
            <span class="rank">（现代诗人、散文家、文学评论家）</span>
            </p>
            <p><span class="time">1912年2月5日—1977年7月24日</span></p>
            <p class="intro">何其芳，著名诗人、散文家、文学评论家和“红学”理论家。他的诗歌曾经在人民群众尤其是青年人中广为传播，同时，他还是一个马克思主义文艺理论家，是毛泽东《在延安文艺座谈会上的讲话》的践行者。</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/person/王朴.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">王朴</span>
            <span class="rank">（重庆江北籍革命烈士）</span>
            </p>
            <p><span class="time">1881年—1942年</span></p>
            <p class="intro">红岩英烈王朴牺牲于重庆解放前夕，时年仅28岁。王朴生前和母亲变卖家产为党提供活动经费，兴办学校掩护党的地下工作。王朴牺牲后，烈士母亲金永华的“三个应该不应该”，展示出共产党人的无私品格和崇高的家国情怀。</p>
          </div>
        </div>

        <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/person/杨沧白.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">杨若愚</span>
            <span class="rank">（河北省蔚县籍烈士）</span>
            </p>
            <p><span class="time">1881年—1942年</span></p>
            <p class="intro">“十年树木，百年树人”，历史悠久、蜚声中外的树人小学就是他——杨若愚，一个爱国实业家创办的。由于治学严谨，成绩斐然，树人成为当时著名学校。经过数代人薪火相传、心血浇铸，今天的树人将秉承遵循规律，精心树人的文化传统，树有德有才和可持续发展之人。</p>
          </div>
        </div>

         <div class="simple-card" @click="gotoDetail">
          <div class="card-left">
            <img src="@/assets/images/person/陶行知.jpg" alt="未找到">
          </div>
          <div class="card-right">
            <p>
              <span class="name">陶行知</span>
            <span class="rank">（中国近代民主革命家、辛亥革命元勋）</span>
            </p>
            <p><span class="time">1881年—1942年</span></p>
            <p class="intro">1939年，陶行知在重庆创办育才学校。创办这所实验学校，是想用生活教育的原理和方法，指导和培养难童中的优秀儿童，通过实验来发展生活教育的理论。</p>
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
          path: '/manage/redPerson/redPersonDetail',
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
        width: 70px;
        height: 100px;
        margin-right: 10px;

        img{
          height: 100px;
          width: 70px;
        }
      }

      .card-right{
        p{
          margin: 5px 0;
        }

        .time, .intro{
          font-size: 14px;
          color: rgb(96, 97, 99);
        }
      }
    }
  }
</style>