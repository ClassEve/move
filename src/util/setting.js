/**
 * 设置title
 * @param title
 */
export function setTitle (title) {
  if (title === undefined || window.document.title === title) {
    return
  }
  document.title = title
}
