export const checkImageURL = (url: string) => {
  if (!url) return false;
  else {
    const pattern = new RegExp("^https?:\\/\\/.+", "i");
    return pattern.test(url);
  }
};
