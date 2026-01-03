import { defineStore } from 'pinia';

import { fetchWrapper, router } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {

        async login(username, password) {
            
            
            const user = await fetchWrapper.post(`${baseUrl}/authenticate-spa`, { username, password });
            
            // Update pinia state with user object + base-64 encoded basic auth data
            // Note: Credentials will be encoded in base-64 by the statement below and sent in the Autorization header to the API
            user.authdata = window.btoa(username + ':' + password);
            
            this.user = user;
            
            const u = JSON.parse(JSON.stringify(user))
            const uname = u.username[0];
            
            console.log('Username: ' + uname);
            
            // 03-01-2026 - Set the username of the User to the extracted username to get rid of the internal array with the username
            // The correct result is now: {"username":"testuser","authdata":"dGVzdHVzZXI6YWRtaW4="}
            // instead of the received: {"username":["testuser"],"authdata":"dGVzdHVzZXI6YWRtaW4="} returned from the FastAPI route /authenticate-spa
            user.username = uname;

            // store user details and basic auth data in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});
