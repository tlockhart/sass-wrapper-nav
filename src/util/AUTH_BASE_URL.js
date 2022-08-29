let AUTH_BASE_URL;
if (process.env.REACT_APP_NODE_ENV === 'local') {
    AUTH_BASE_URL = '/api/'
} else {
    AUTH_BASE_URL = '/server/api/'
}
export default AUTH_BASE_URL
