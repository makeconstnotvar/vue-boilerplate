<template>
  <div class="pager d-flex" v-if="showPager">
    <div class="pages d-flex align-items-strech">
      <a class="fas fa-arrow-left page d-flex align-items-center" :class="{disabled:!isPrev}" @click="prev" :disabled="isPrev"></a>
      <a v-for="page in pages" class="page d-flex align-items-center" :class="{active:(page===currentPage) }" @click="navigate(page)" v-text="page"></a>
      <a class="fas fa-arrow-right page d-flex align-items-center" :class="{disabled:!isNext}" @click="next" :disabled="isNext"></a>
    </div>
    <div class="page-size ml-auto">
      <a class="page size-select d-flex"
         @click="open">На странице <i class="align-self-center page-chevron fas"
                                      :class="[isOpen?'fa-angle-down':'fa-angle-up']"></i> <span class="flex-grow-1 text-right"
                                                                                                 v-text="pageSize"></span></a>
      <div class="page-dropdown" :class="{opened:isOpen}" @mouseleave="close" @click.self="close">
        <div class="page-dropdown-list">
          <a v-for="size in sizes" @click="changeSize(size)" v-text="size"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash'

  export default {
    name: "Pager",
    props: ['total', 'current', 'one', 'size'],
    data() {
      return {
        currentPage: this.current || 1,
        sizes: [10, 20, 50, 100],
        pageSize: this.size || 10,
        visiblePagesCount: 10,
        showOnePage: this.one || false,
        isOpen: false
      };
    },
    watch: {
      current(val) {
        this.currentPage = val;
      }
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
        let start = (this.currentPage > this.offset) ? (this.currentPage - this.offset) : 1;
        let count = this.visiblePagesCount;
        let pages = [];

        if (start + count > this.pagesCount) {
          count = Math.abs(this.pagesCount - start) + 1;
        }

        for (let i = 0; i < count; ++i) {
          pages.push(i + start);
        }
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
        this.isOpen = false;
        this.$emit('changeSize', this.pageSize);
      },
      updateCurrentPage: function (page, replace) {
        let p = this.currentPage;
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
        this.$emit('changePage', p);
      },
      open() {
        this.isOpen = true;
      },
      close() {
        this.isOpen = false;
      }
    }
  }
</script>
