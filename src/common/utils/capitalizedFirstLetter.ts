/**
 * @param title
 * @return title with capitalized first letter
 */
export const capitalizedFirstLetter = (title: string) => {
  return title[0].toUpperCase() + title.slice(1)
}
