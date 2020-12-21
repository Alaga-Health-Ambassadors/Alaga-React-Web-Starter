import HTTPClient from './http';

export async function getData(endpoint){
    try {
        const response = await HTTPClient.get(endpoint, {
            headers:{
                // 'Authorization': 'Bearer '+ localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        
        return response;
    } catch (e) {
        
        return e.response.data;
    }
};

export async function postData(endpoint, requestBody){
    try {
        const response = await HTTPClient.post(endpoint, requestBody, {
            headers:{
                // 'Authorization': 'Bearer '+ localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        
        return response;
    } catch (e) {
        
        return e.response.data;
    }
};
