<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Translate } from '@vicons/carbon';
import { Speaker228Regular, DocumentPdf32Regular } from '@vicons/fluent';
import { PictureTwotone } from '@vicons/antd';

import { useBookStore } from '@/store/modules/book';
const options = [
  {
    label: '修改背景色',
    key: 'jay gatsby',
    children: [
      {
        label: '绿色',
        key: 'chicken'
      },
      {
        label: '黄色',
        key: 'beef'
      }
    ]
  }]
// import { router } from '@/router';
const containerRef = ref<HTMLElement | undefined>(undefined)
// 获取当前路由对象
const route = useRoute();
const bookStore = useBookStore();
const translate = ref<boolean>(false);
const showDropdown = ref<boolean>(false)
const x = ref(0)
const y = ref(0)
// 访问路由参数
const routeParams = route.params;
const handleContextMenu = (e: MouseEvent) => {
  e.preventDefault()
  showDropdown.value = false
  nextTick().then(() => {
    showDropdown.value = true
    x.value = e.clientX
    y.value = e.clientY
  })
}
const onClickoutside = () => {
  showDropdown.value = false
}
const handleSelect = () => {
  showDropdown.value = false
};
onMounted(() => {
  bookStore.getArticleData(Number(routeParams.id));
});

</script>

<template>
  <div ref="containerRef" class="article-page" @contextmenu="handleContextMenu">
    <n-dropdown placement="bottom-start" trigger="manual" :x="x" :y="y" :options="options" :show="showDropdown"
      :on-clickoutside="onClickoutside" @select="handleSelect" />
    <n-float-button-group shape="square">
      <n-float-button @click="translate = !translate">
        <n-icon>
          <Translate />
        </n-icon>
      </n-float-button>
      <n-float-button>
        <n-icon>
          <Speaker228Regular />
        </n-icon>
      </n-float-button>
      <n-float-button>
        <n-icon>
          <PictureTwotone />
        </n-icon>
      </n-float-button>
      <n-float-button>
        <n-icon>
          <DocumentPdf32Regular />
        </n-icon>
      </n-float-button>
    </n-float-button-group>
    <h1 class="article-header">
      <!-- {{ bookStore.articleData?.lesson_name }} -->
      {{ bookStore.articleData?.lesson_info }}
    </h1>
    <block>
      <p class="article-title">
        <ruby>文<rp>(</rp>
          <rt>ぶん</rt>
          <rp>)</rp>
        </ruby>
        <ruby>型<rp>(</rp>
          <rt>けい</rt>
          <rp>)</rp>
        </ruby>
      </p>
      <div class="sentence-flex">
        <div v-for="sentence in bookStore.articleData?.sentence" :key="sentence.sentence">
          <block>
            <p v-html="sentence?.ruby"></p>
            <p class="translate-text" v-if="translate">{{ sentence.translate }}</p>
          </block>
        </div>
      </div>
    </block>
    <block>
      <p class="article-title">
        <ruby>例<rp>(</rp>
          <rt>れい</rt>
          <rp>)</rp>
        </ruby>
        <ruby>文<rp>(</rp>
          <rt>ぶん</rt>
          <rp>)</rp>
        </ruby>
      </p>
      <div class="sentence-flex">
        <div v-for="example in bookStore.articleData?.example">
          <block>
            <p v-html="example?.ruby"></p>
            <p class="translate-text" v-if="translate" v-html="example.translate"></p>
          </block>
        </div>
      </div>
    </block>
    <block>
      <p class="article-title">
        <ruby>会<rp>(</rp>
          <rt>かい</rt>
          <rp>)</rp>
        </ruby>
        <ruby>話<rp>(</rp>
          <rt>わ</rt>
          <rp>)</rp>
        </ruby>
      </p>
      <div class="sentence-flex">
        <table class="article-table">
          <template v-for="conversation in bookStore.articleData?.conversation">
            <tr>
              <td>
                <span>
                  <span v-html="conversation?.nameRuby"></span>
                  <span v-show="conversation?.nameRuby">：</span>
                </span>
              </td>
              <td>
                <span v-html="conversation?.ruby"></span>
              </td>
            </tr>

            <tr class="translate-text" v-if="translate">
              <td>
                <span>
                  <span v-html="conversation?.nameTranslate"></span>
                  <span v-show="conversation?.nameTranslate">：</span>
                </span>
              </td>
              <td>
                <span v-html="conversation?.translate"></span>
              </td>
            </tr>
          </template>
        </table>
      </div>
    </block>

  </div>

</template>
<style lang="scss">
.article-page {
  background-color: #ffffff00;
  color: #000;
}

.translate-text {
  color: rgb(153, 153, 153);
  font-size: 12px;
  margin: 4px 0;
}

.article-header {
  font-size: 16px;
  text-align: center;
  font-weight: bold;
}

.article-title {
  font-size: 14px;
  font-weight: bold;
  margin: 40px 0px 20px 0;
}

.conversation-item {
  display: flex;
}

.sentence-flex {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
  // >div{
  //   display: flex;
  //   flex-direction: column;
  //   gap: 12px;
  //   }
}

.article-table {
  border-collapse: collapse;
  table-layout: auto;

  /* 将表格布局模式设为自动 */
  tr td:first-child {
    width: max-content;
  }

  ;

  tr:first-child td {
    font-size: 14px;
  }
}
</style>
