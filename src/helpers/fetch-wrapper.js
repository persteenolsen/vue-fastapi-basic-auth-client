import { useAuthStore } from '@/stores';

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return (url, body) => {
        const requestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            
            requestOptions.body = JSON.stringify(body);
            
        }

        
        return fetch(url, requestOptions).then(handleResponse);
    }
}

// helper functions

function authHeader(url) {
    // return auth header with basic auth credentials if user is logged in and request is to the api url
    const { user } = useAuthStore();

    const isLoggedIn = !!user?.authdata;
    const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Basic ${user.authdata}` };
    } else {
        return {};
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
         // 03-01-2026 - Log status code for debugging
        console.log('1) Status code by response.status: ' + response.status);
        
        if (!response.ok) {
            const { user, logout } = useAuthStore();
            if ([401, 403].includes(response.status) && user) {
                
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                // Logout message for debugging
                console.log('Auto logout due to 401/403 response');

                logout();
            }
            
            // 03-01-2026 - Modified error handling to show status code if User Credentials are wrong
            //const error = (data && data.message) || response.statusText;
            //const error = (data && data.message) || response.statusText || response.status;
            
            let error = "";
            // 03-01-2026 - Modified error handling to validate status code if User Credentials are wrong
            if( response.status.equals('')) 
                error = (data && data.message) || response.statusText;
            else
                error = (data && data.message) || response.statusText || response.status;
            
            // Debugging logs for error status
            // console.log('2) Status code by response.statusText: ' + response.statusText);
           
            return Promise.reject(error);
        }

        return data;
    });
}    
