<template>
    <div class="pager" v-if="showPager">
        <ul>
            <li :class="{disabled:isPrev}"><a @click="prev" :disabled="isPrev" class="fas fa-arrow-left">&#8592;</a></li>
            <li :class="{active:(page===current) }" v-for="page in pages"><a @click="navigate(page)" v-text="page"></a></li>
            <li :class="{disabled:isNext}"><a @click="next" :disabled="isNext" class="fas fa-arrow-right"></a></li>
        </ul>
        <div class="page-size">
            На странице <a v-text="pageSize"></a><i class="fas fa-angle-up"></i>
            <ul class="page-dropdown">
                <li v-for="size in sizes"><a @click="changeSize(size)" v-text="size"></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Pager",
    props: ['total', 'current', 'one'],
    data: function () {
      return {
        sizes: [10, 20, 50, 100],
        pageSize: 10,
        visiblePagesCount: 10,
        showOnePage: this.one || false
      };
    },
    computed: {
      pagesCount() {
        let count = Math.ceil(this.total / this.pageSize);
        return count || 1;
      },
      showPager() {
        return this.showOnePage ? this.total > 0 : this.total > 10;
      },
      pages() {
        let start = (this.current > this.offset) ? (this.current - this.offset) : 1;
        let count = this.visiblePagesCount;
        let pages = [];

        if (start + count > this.pagesCount) {
          count = Math.abs(this.pagesCount - start) + 1;
        }

        for (let i = 0; i < count; ++i) {
          pages.push(i + start);
        }
//console.log(`start:${start} count:${count} pages ${pages.length}`)
        return pages;
      },
      isNext() {
        return _.last(this.pages) < this.pagesCount;
      },
      isPrev() {
        return _.first(this.pages) > 1;
      },

      offset() {
        return this.visiblePagesCount / 2
      }
    },
    methods: {
      prev() {
        if (this.isPrev) {
          let page = -this.visiblePagesCount;
          this.updateCurrentPage(page, false);
        }
      },
      next() {
        if (this.isNext) {
          let page = this.visiblePagesCount;
          this.updateCurrentPage(page, false);
        }
      },
      navigate(page) {
        this.updateCurrentPage(page, true);
      },
      changeSize(size) {
        this.pageSize = +size;

        this.$emit('changeSize', {
          page: 1,
          size: this.pageSize
        });
      },
      updateCurrentPage: function (page, replace) {
        let p = this.current;
        if (replace) {
          p = +page;
        } else {
          p += +page;
          if (p >= this.pagesCount) {
            p = this.pagesCount;
          } else if (p < 1) {
            p = 1;
          }
        }
        this.$emit('changePage', {
          page: p,
          size: this.pageSize
        });
      },
    }
  }
</script>

<style lang="scss">

</style>


<div class="i-pagination" v-if="showPager">
    <ul>
        <li v-bind:class="[isPrev ? '' : 'disabled']"><a @click="prev" v-bind:disabled="isPrev" class="arrow-link">&#8592;</a>
        </li>
        <li v-bind:class="[page==current ? 'active' : '']" v-for="page in pages"><a @click="navigate(page)"
                                                                                    v-text="page"></a></li>
        <li v-bind:class="[isNext ? '' : 'disabled']"><a @click="next" v-bind:disabled="isNext" class="arrow-link">&#8594;</a>
        </li>
    </ul>
    <div class="i-pagination-size dropup">
        На странице <a href="#" data-toggle="dropdown" v-text="pageSize"></a><span class="caret"
                                                                                   data-toggle="dropdown"></span>
        <ul class="dropdown-menu i-list i-list_blue js-page-size-list">
            <li v-for="size in sizes"><a @click="changeSize(size)" v-text="size"></a></li>
        </ul>
    </div>
</div>
