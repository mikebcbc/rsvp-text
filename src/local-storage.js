export const loadAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const saveAuthToken = authToken => {
  try {
    localStorage.setItem("authToken", authToken);
  } catch (e) {}
};

export const clearAuthToken = authToken => {
  return localStorage.removeItem("authToken");
};
