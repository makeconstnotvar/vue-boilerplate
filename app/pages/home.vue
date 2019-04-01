<template>
  <div>
    <div class="main-block">
      <div class="container">
        <div class="change-mode">
          <a class="dashed" @click="changeMode('seeker')">Соискатель</a> | <a class="dashed" @click="changeMode('employer')">Работодатель</a>
        </div>
        <div class="slogan">
          <h1>JOBRUM</h1>
          <h2>Интеллектуальный поиск работы и сотрудников</h2>
        </div>
      </div>
      <div class="promo-field d-flex">
        <Search @onSearch="toSearch"/>
      </div>
      <div class="container row center middle">
        <a class="btn btn-secondary mr-5" @click="showCreateResumeModal">Создать резюме</a>
        <a class="btn btn-primary" @click="showImportDrop">Загрузить резюме</a>
      </div>
    </div>
    <div class="container">
      <h2>Профобласти</h2>
      <router-link class="mr-5" :key="spec.id" v-for="spec in specs" :to="{name:routeName, params:{city:selectedCity.code},query:{spec:spec.value}}">{{spec.name}} ({{spec.count}})</router-link>
    </div>
    <div class="container">
      <h2>Импорт резюме</h2>
      <div>Это быстро и бесплатно. Не нужно устанавливать ПО.</div>
    </div>

    <div class="network-box">
      <div class="network-box-img img1"></div>
      <div class="network-box-wrap">
        <div class="network-box-text">
          <h2 class="network-box-title">Интеллектуальный автопоиск вакансий</h2>
          <div class="network-box-desc">Получайте на почту автоматически подобранные для Вас вакансии лучших компаний.</div>
        </div>
      </div>
    </div>
    <div class="network-box">
      <div class="network-box-img img2"></div>
      <div class="network-box-wrap">
        <div class="network-box-text">
          <h2 class="network-box-title">Поиск вакансий из соцсетей</h2>
          <div class="network-box-desc">Не нужно просматривать каждую соцсеть в отдельности. Ищите у нас в одном окне.</div>
        </div>
      </div>
    </div>

    <div class="network-box">
      <div class="network-box-img img1"></div>
      <div class="network-box-wrap">
        <div class="network-box-text">
          <h2 class="network-box-title">Узнайте все о будущем работодателе</h2>
          <div class="network-box-desc">Узнайте всю правду: владельцы, контракты, связи, инфоповоды, отзывы.</div>
        </div>
      </div>
    </div>
    <div class="network-box">
      <div class="network-box-img img2"></div>
      <div class="network-box-wrap">
        <div class="network-box-text">
          <h2 class="network-box-title">Ваши данные надежно защищены</h2>
          <div class="network-box-desc">Ваши данные защищены. Мы соответствуем требованиям 152-ФЗ «О персональных данных».</div>
        </div>
      </div>
    </div>

    <div class="network-box">
      <div class="network-box-img img1"></div>
      <div class="network-box-wrap">
        <div class="network-box-text">
          <h2 class="network-box-title">Советник по карьере</h2>
          <div class="network-box-desc">Разместите свое резюме и получите бесплатную консультацию.</div>
        </div>
      </div>
    </div>
    <div class="network-box">
      <div class="network-box-img img2"></div>
      <div class="network-box-wrap">
        <div class="network-box-text">
          <h2 class="network-box-title">Советник по навыкам</h2>
          <div class="network-box-desc">Советник анализирует вакансии и выдает автоматические рекомендации по карьерному росту пользователям. Учитываются нюансы русских написаний навыков и на
            иностранных
            языках. Пользователю
            рекомендуется изучить дополнительные навыки для
            продвижения по карьере. Анализируются как ключевые навыки, так и профессиональные области, сферы деятельности, город, опыт, тип занятости пользователя, и уровень предполагаемого дохода.
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <router-link to="/registration">Зарегистрироваться</router-link>
    </div>
    <div class="container">
      <h2>Присоединись к Jobrum сейчас!</h2>
      <div>Поиск самых лучших вакансий</div>
      <div>Отклики, переписка и нотификации</div>
      <div>Разграничение доступа к резюме и контактам</div>
      <div>Получи персональные рекомендации</div>
      <router-link to="/login">Логин</router-link>
      <router-link to="/registration">Регистрация</router-link>
    </div>
    <div class="container">
      <h2>950 418</h2>
      <div>ОТКРЫТЫХ ВАКАНСИЙ</div>
      <h2>1 573 922</h2>
      <div>КОМПАНИЙ</div>
      <h2>71 166</h2>
      <div>РЕЗЮМЕ</div>
    </div>
    <div class="container">
      <h2>Ищете работу?</h2>
      <div>Большое количество открытых вакансий в вашем распоряжении.</div>
      <router-link to="/login">Логин</router-link>
      <router-link to="/registration">Регистрация</router-link>
    </div>
    <div class="container">
      <h2>Профессии</h2>
      <router-link class="mr-5" :key="query.id" v-for="query in queries" :to="{name:routeName, params:{city:selectedCity.code},query:{searchText:query.name}}">{{query.name}}</router-link>
    </div>
    <div class="container">
      <h2>Регионы</h2>
      <router-link class="mr-5" :key="region.id" v-for="region in regions" :to="{name:routeName, params:{city:region.code}}">{{region.name}} ({{region.count}})</router-link>
    </div>
  </div>
</template>
<script>
  import Search from 'controls/search'
  import {mapState} from 'vuex';
  import CreateResumeModal from '../modals/create-resume';
  export default {
    name: 'PageHome',
    components: {Search},
    data: function () {
      return {
        showEnter: true,
        showLoad: false,
        email: '',
        password: '',
        mode: 'seeker',
      }
    },
    created() {
      //this.$store.dispatch('fetchSeekerSpecs');
      //this.$store.dispatch('fetchSeekerQueries');
      //this.$store.dispatch('fetchEmployerSpecs');
      //this.$store.dispatch('fetchEmployerQueries');
      // this.$store.dispatch('fetchStatistic');
    },
    methods: {
      changeMode(mode) {
        this.mode = mode;
      },
      toSeekerMode() {
        this.mode = 'vacancies';
      },
      toSearch() {

      },
      enter() {

      },
      load() {

      },
      showCreateResumeModal() {
        this.$showModal(CreateResumeModal);
      },
      toLoad(text) {
        this.showEnter = false;
        this.showLoad = true;
      }
    },
    computed: {
      ...mapState({
        statistic: state => state.home.statistic,
        seekerQueries: state => state.home.seekerQueries,
        seekerRegions: state => state.home.seekerRegions,
        employerQueries: state => state.home.employerQueries,
        employerRegions: state => state.home.employerRegions,
        specs: state => state.home.specs,
        selectedCity: state => state.filter.selectedCity,
      }),
      routeName: function () {
        return this.mode === 'seeker' ? 'vacancies' : 'resumes'
      },
      queries: function () {
        return this.mode === 'seeker' ? this.seekerQueries : this.employerQueries
      },
      regions: function () {
        return this.mode === 'seeker' ? this.seekerRegions : this.employerRegions
      }
    }
  };
</script>