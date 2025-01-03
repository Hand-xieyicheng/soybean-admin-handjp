import { defineStore } from 'pinia';
import { ref } from 'vue';
import { SetupStoreId } from '@/enum';
import { fetchGetBookList, fetchGetLessonListByBookId } from '@/service/api/book';

export const useBookStore = defineStore(SetupStoreId.Book, () => {
  const bookList = ref<Book.Common.Book[]>([]);
  const lessonList = ref<Book.Common.Lesson[]>([]);

  function init() {
    getBookList();
  }

  async function getBookList() {
    // 调用接口获取数据
    const res = await fetchGetBookList();
    if (res) {
      bookList.value = res;
    }
    console.log('bookList.value', res);
  }

  async function getLessonList(id: number) {
    // 调用接口获取数据
    const res = await fetchGetLessonListByBookId(id);
    if (res) {
      lessonList.value = res;
    }
    console.log('lessonList.value', res);
  }

  return {
    getBookList,
    bookList,
    init,
    getLessonList,
    lessonList
  };
});
