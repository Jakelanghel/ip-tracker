export const isValidDomain = (domain) => {
  const domainRegex =
    /^(?=.{1,253}$)[a-zA-Z0-9_](?:(?:[a-zA-Z0-9\-_]{0,61}[a-zA-Z0-9_])?\.)+[a-zA-Z]{2,}$/;

  return domainRegex.test(domain);
};
