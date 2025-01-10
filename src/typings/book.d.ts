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
    interface Article {
      article_id: number;
      book_id: number;
      conversation: Conversation[];
      conversation_audio: string;
      conversation_image: string;
      example: Example[];
      example_audio: string;
      lesson_id: number;
      lesson_info: string;
      lesson_name: string;
      lesson_status: number;
      conversques_countation_image: number;
      sentence: Sentence[];
      sentence_audio: string;
      word_count: number;
    }
    interface Sentence{
      ruby: string;
      sentence: string;
      translate: string;
    }
    interface Example{
      ruby: string;
      sentence: string;
      translate: string;
    }
    interface Conversation {
      name: string;
      nameRuby: string;
      nameTranslate: string;
      ruby: string;
      sentence: string;
      translate: string;
    }
  }
}
