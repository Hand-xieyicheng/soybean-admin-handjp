<script setup lang="ts">
// import { AccumulationPrecipitation } from "@vicons/carbon"
import { Delete16Filled, Edit32Filled } from '@vicons/fluent';
import { Eye, ImageOutline as ImageOutlineIcon } from '@vicons/ionicons5';
import { router } from '@/router';
import { useBookStore } from '@/store/modules/book';
const bookStore = useBookStore();
bookStore.init();
const handleGoLesson = (book_id: number) => {
  router.push({
    path: `/book-page/lesson/${book_id}`
  });
};
</script>

<template>
  <div class="book-page">
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

    <!-- <div class="common-box-wrap"> -->
    <NGrid :x-gap="16" :y-gap="16" cols="2 s:4 m:5 l:6 xl:7 2xl:8" responsive="screen">
      <NGridItem v-for="book in bookStore.bookList" :key="book.book_id">
        <NCard
          class="jp-card"
          :style="book.book_status === 0 ? 'filter: grayscale(100%);' : ''"
          :title="book.book_name"
        >
          <template #cover>
            <div class="jp-image-cover">
              <NImage style="aspect-ratio: 9 / 12" :src="book.book_avartar" object-fit="cover">
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
                </li>
                <li>
                  <NIcon size="20">
                    <Delete16Filled />
                  </NIcon>
                </li>
                <li>
                  <NIcon size="20">
                    <Eye />
                  </NIcon>
                </li>
                <li>
                  <NIcon size="20">
                    <Eye />
                  </NIcon>
                </li>
              </ul>
            </div>
          </template>
          <NEllipsis :line-clamp="1">
            {{ book.book_info }}
          </NEllipsis>

          <template #action>
            <NGrid :cols="3">
              <NGi>
                <NStatistic label="课程" value="22" @click="() => handleGoLesson(book.book_id)" />
              </NGi>
              <NGi>
                <NStatistic label="单词" value="12" />
              </NGi>
              <NGi>
                <NStatistic label="问题" value="346" />
              </NGi>
            </NGrid>
          </template>
        </NCard>
      </NGridItem>
    </NGrid>
    <!-- </div> -->
  </div>
</template>

<!--
 <style scoped lang="scss">

</style> 
-->
