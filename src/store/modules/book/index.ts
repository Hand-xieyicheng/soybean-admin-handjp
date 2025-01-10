import { defineStore } from 'pinia';
import { ref } from 'vue';
import { SetupStoreId } from '@/enum';
import { fetchGetBookList, fetchGetLessonListByBookId, fetchGetArticleDataByLessonId } from '@/service/api/book';

export const useBookStore = defineStore(SetupStoreId.Book, () => {
  const bookList = ref<Book.Common.Book[]>([]);
  const lessonList = ref<Book.Common.Lesson[]>([]);
  const articleData = ref<Book.Common.Article>();

  function init() {
    getBookList();
  }

  async function getBookList() {
    // 调用接口获取数据
    const res = await fetchGetBookList();
    if (res) {
      bookList.value = res;
    }
  }

  async function getLessonList(id: number) {
    // 调用接口获取数据
    const res = await fetchGetLessonListByBookId(id);
    if (res) {
      lessonList.value = res;
    }
  }
  /**
   * 获取文章数据
   * @param id 课程id
   */
  async function getArticleData(id: number) {
    // 调用接口获取数据
    const res = await fetchGetArticleDataByLessonId(id);
    if (res) {
      try {
        if(res.sentence){
          res.sentence = JSON.parse(res.sentence as string);
        }
        if(res.example){
          res.example = JSON.parse(res.example as string);
        }
        if(res.conversation){
          res.conversation = JSON.parse(res.conversation as string);
        }
        articleData.value = res;
      } catch {

      }
    }
  }
  return {
    getBookList,
    bookList,
    init,
    getLessonList,
    lessonList,
    getArticleData,
    articleData
  };
});
