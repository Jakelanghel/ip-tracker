export const isValidDomain = (domain) => {
  // Check if the domain contains only valid characters
  if (!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,}$/i.test(domain)) {
    return false;
  }

  // Check if the domain has a valid format
  let parts = domain.split(".");
  if (parts.length < 2) {
    return false;
  }

  // Check if the last part of the domain has a valid length
  let tld = parts[parts.length - 1];
  if (tld.length < 2 || tld.length > 6) {
    return false;
  }

  return true;
};
