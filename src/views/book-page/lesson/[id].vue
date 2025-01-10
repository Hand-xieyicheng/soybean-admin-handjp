<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ImageOutline as ImageOutlineIcon } from '@vicons/ionicons5';
import { Whiteboard20Filled, Edit32Filled } from '@vicons/fluent';
import { ArticleFilled } from '@vicons/material';
import { useBookStore } from '@/store/modules/book';
import { router } from '@/router';
// 获取当前路由对象
const route = useRoute();
const bookStore = useBookStore();

// 访问路由参数
const routeParams = route.params;
onMounted(() => {
  bookStore.getLessonList(Number(routeParams.id));
});
const showArticle = (book_id: number) => {
  router.push({
    path: `/book-page/article/${book_id}`
  });
}
</script>

<template>
  <div class="lesson-page">
    <div class="common-box-wrap">
      <NPageHeader subtitle="让你的听觉更懂视觉">
        <NGrid :cols="4">
          <NGi>
            <NStatistic label="书籍" value="12312">
              <!--
 <template #prefix>
                <n-icon>
                  <AccumulationPrecipitation />
                </n-icon>
              </template>
-->
              <template #suffix>/ 100</template>
            </NStatistic>
          </NGi>
          <NGi>
            <NStatistic label="课程" value="1" />
          </NGi>
          <NGi>
            <NStatistic label="单词" value="26" />
          </NGi>
          <NGi>
            <NStatistic label="问题" value="230" />
          </NGi>
        </NGrid>
        <template #title>
          <a href="https://anyway.fm/" style="text-decoration: none; color: inherit">
            <NGradientText type="info">Live Forever</NGradientText>
          </a>
        </template>
        <!--
 <template #header>
      <n-breadcrumb>
        <n-breadcrumb-item>播客</n-breadcrumb-item>
        <n-breadcrumb-item>精选</n-breadcrumb-item>
        <n-breadcrumb-item>超级精选</n-breadcrumb-item>
        <n-breadcrumb-item>Anyway.FM</n-breadcrumb-item>
      </n-breadcrumb>
    </template>
-->
        <template #avatar>
          <NAvatar src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg" />
        </template>
        <template #extra>
          <NSpace>
            <NButton type="primary">新 增</NButton>
          </NSpace>
        </template>
        <!--
 <template #footer>
      截止到 2021 年 4 月 3 日
    </template>
-->
      </NPageHeader>
    </div>

    <NGrid :x-gap="16" :y-gap="16" cols="2 s:4 m:5 l:6 xl:7 2xl:8" responsive="screen">
      <NGridItem v-for="lesson in bookStore.lessonList" :key="lesson.lesson_id">
        <NCard
          class="jp-card"
          :style="lesson.lesson_status === 0 ? 'filter: grayscale(100%);' : ''"
          :title="lesson.lesson_info"
        >
          <template #cover>
            <div class="jp-image-cover">
              <NImage
                style="aspect-ratio: 12 / 9; width: 100%"
                :src="lesson.conversation_image ? lesson.conversation_image : 'xxx'"
                object-fit="cover"
              >
                <template #error>
                  <div class="jp-flex-center">
                    <NIcon :size="100" color="lightGrey">
                      <ImageOutlineIcon />
                    </NIcon>
                  </div>
                </template>
              </NImage>
              <ul class="jp-image-cover-opration">
                <li>
                  <NIcon size="20">
                    <Edit32Filled />
                  </NIcon>
                    <span>编辑</span>
                  </li>
                <li  @click="()=>showArticle(lesson.lesson_id)">
                  <NIcon size="20">
                    <ArticleFilled />
                  </NIcon>
                    <span>文章</span>
                  </li>
                <li>
                  <NIcon size="20">
                    <Whiteboard20Filled />
                  </NIcon>
                    <span>听写</span>
                  </li>
                <li>
                  <NIcon size="20">
                    <Eye />
                  </NIcon>
                    <span>xx</span>
                  </li>
              </ul>
            </div>
          </template>
          <NEllipsis :line-clamp="1">
            {{ lesson.lesson_name }}
          </NEllipsis>

          <template #action>
            <NGrid :cols="3">
              <!--
 <n-gi>
                <n-statistic @click="()=>handleGoLesson(book.book_id)" label="课程" value="22" />
              </n-gi>
-->
              <NGi>
                <NStatistic label="单词" :value="lesson.word_count" />
              </NGi>
              <NGi>
                <NStatistic label="问题" :value="lesson.ques_count" />
              </NGi>
              <NGi>
                <NStatistic label="文章" @click="()=>showArticle(lesson.lesson_id)">
                  查看
                </NStatistic>
              </NGi>
            </NGrid>
          </template>
        </NCard>
      </NGridItem>
    </NGrid>
  </div>
</template>
