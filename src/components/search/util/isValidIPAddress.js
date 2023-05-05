export const isValidIPAddress = (ipAddress) => {
  // Split the IP address into its components
  const components = ipAddress.split(".");

  // Make sure there are 4 components
  if (components.length !== 4) {
    return false;
  }

  // Check that each component is an integer between 0 and 255
  for (const component of components) {
    const value = parseInt(component);
    if (
      isNaN(value) ||
      value < 0 ||
      value > 255 ||
      value.toString() !== component
    ) {
      return false;
    }
  }

  return true;
};
