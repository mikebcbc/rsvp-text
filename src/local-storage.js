export const loadAuthToken = () => {
	return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
	return localStorage.setItem('authToken', authToken);
};

export const clearAuthToken = authToken => {
	return localStorage.removeItem('authToken');
};