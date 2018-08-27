<template>
    <div>
        <div class="container">
            <a class="dashed" @click="changeMode('seeker')">Соискатель</a> \ <a class="dashed" @click="changeMode('employer')">Работодатель</a>
        </div>
        <Search @onSearch="toSearch"></Search>
        <div class="container">
            <a @click="toEnter">Создать резюме</a>
            <a @click="toLoad">Загрузить резюме</a>
            <div v-if="showEnter">
                <input class="w-50" v-model="email" type="text" placeholder="email">
                <input class="w-50" v-model="password" type="text" placeholder="password">
                <button @click="enter">Создать</button>
            </div>
            <div v-if="showLoad">
                <label for="resumeUrl">Ссылка на ваше резюме</label>
                <input id="resumeUrl" class="w-50" v-model="email" type="text" placeholder="url">
                <span class="dashed">Например: https://www.superjob.ru/resume/massazhistka-39163216.html</span>
                <input class="w-50" v-model="password" type="text" placeholder="email">
                <button @click="load">Загрузить</button>
            </div>
        </div>
        <div class="container">
            <h2>Профобласти</h2>
            <router-link class="rgap6" :key="spec.id" v-for="spec in specs" :to="{name:routeName, params:{city:selectedCity.code},query:{spec:spec.value}}">{{spec.name}} ({{spec.count}})</router-link>
        </div>
        <div class="container">
            <h2>Импорт резюме</h2>
            <div>Это быстро и бесплатно. Не нужно устанавливать ПО.</div>
        </div>
        <div class="container">
            <h2>Интеллектуальный автопоиск вакансий</h2>
            <div>Получайте на почту автоматически подобранные для Вас вакансии лучших компаний.</div>
        </div>
        <div class="container">
            <h2>Поиск вакансий из соцсетей</h2>
            <div>Не нужно просматривать каждую соцсеть в отдельности. Ищите у нас в одном окне.</div>
        </div>
        <div class="container">
            <h2>Узнайте все о будущем работодателе</h2>
            <div>Узнайте всю правду: владельцы, контракты, связи, инфоповоды, отзывы.</div>
        </div>
        <div class="container">
            <h2>Ваши данные надежно защищены</h2>
            <div>Ваши данные защищены. Мы соответствуем требованиям 152-ФЗ «О персональных данных».</div>
        </div>
        <div class="container">
            <h2>Советник по карьере</h2>
            <div>Разместите свое резюме и получите бесплатную консультацию.</div>
        </div>
        <div class="container">
            <h2>Советник по навыкам</h2>
            <div>Советник анализирует вакансии и выдает автоматические рекомендации по карьерному росту пользователям. Учитываются нюансы русских написаний навыков и на иностранных языках. Пользователю рекомендуется изучить дополнительные навыки для
                продвижения по карьере. Анализируются как ключевые навыки, так и профессиональные области, сферы деятельности, город, опыт, тип занятости пользователя, и уровень предполагаемого дохода.
            </div>
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
            <router-link class="rgap6" :key="query.id" v-for="query in queries" :to="{name:routeName, params:{city:selectedCity.code},query:{searchText:query.name}}">{{query.name}}</router-link>
        </div>
        <div class="container">
            <h2>Регионы</h2>
            <router-link class="rgap6" :key="region.id" v-for="region in regions" :to="{name:routeName, params:{city:region.code}}">{{region.name}} ({{region.count}})</router-link>
        </div>
    </div>
</template>
<script>
  import Search from 'controls/search'
  import {mapState} from 'vuex';

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
      this.$store.dispatch('fetchSeekerSpecs');
      this.$store.dispatch('fetchSeekerQueries');
      this.$store.dispatch('fetchEmployerSpecs');
      this.$store.dispatch('fetchEmployerQueries');
      this.$store.dispatch('fetchStatistic');
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
      toEnter(text) {
        this.showLoad = false;
        this.showEnter = true;
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