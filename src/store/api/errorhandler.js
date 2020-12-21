export function errorhandler(error){
    if(error){
        if(error === undefined){
            return { message: 'Network Error', data: null }
        } else {
            if(error.response){
                if(error.response && error.response.data){
                    return {
                        config: error.response.config,
                        data: error.response.data, 
                        message: error.response.data && error.response.data.message && error.response.data.message,
                        status: error.response.status, 
                    }
                }
            } else {
                return { message: 'Something went wrong', data: null }
            }
        }
    }
}