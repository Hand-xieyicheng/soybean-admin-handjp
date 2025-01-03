import { demoRequest, request } from '../request';

/**
 * BookList
 *
 * @param admin admin
 */
export function fetchGetBookList() {
  return demoRequest({ url: '/book/getBookList', params: { admin: true } });
}
/**
 * LessonList
 *
 * @param admin admin
 * @param id id
 */
export function fetchGetLessonListByBookId(id: number) {
  return demoRequest({ url: '/lesson/getLessonListByBookId', params: { admin: true, id } });
}

/** Get user info */
export function fetchGetUserInfo() {
  return request<Api.Auth.UserInfo>({ url: '/auth/getUserInfo' });
}

/**
 * Refresh token
 *
 * @param refreshToken Refresh token
 */
export function fetchRefreshToken(refreshToken: string) {
  return request<Api.Auth.LoginToken>({
    url: '/auth/refreshToken',
    method: 'post',
    data: {
      refreshToken
    }
  });
}

/**
 * return custom backend error
 *
 * @param code error code
 * @param msg error message
 */
export function fetchCustomBackendError(code: string, msg: string) {
  return request({ url: '/auth/error', params: { code, msg } });
}
