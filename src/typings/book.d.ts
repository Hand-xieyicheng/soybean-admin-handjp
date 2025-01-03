/**
 * Namespace Book
 *
 * All backend api type
 */
declare namespace Book {
  namespace Common {
    interface Book {
      book_avartar: string;
      book_id: number;
      book_info: string;
      book_name: string;
      book_status: number;
      lesson_count: number | null;
    }
    interface Lesson {
      lesson_id: number;
      lesson_name: string;
      lesson_info: string;
      book_id: number;
      lesson_status: number;
      word_count: number;
      ques_count: number;
      article_id: number;
      conversation_image: string;
    }
  }
}
