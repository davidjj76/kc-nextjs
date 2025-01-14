export const getPageTitle = ({
  parentTitle,
  title,
}: {
  parentTitle?: string;
  title?: string;
}) => {
  if (!parentTitle) {
    return title;
  }
  if (!title) {
    return parentTitle;
  }

  return title ? `${parentTitle} | ${title}` : parentTitle;
};
