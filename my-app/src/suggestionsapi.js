import  settings  from './config/config.js';

const headerOptions = {
    headers:{  
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
      }
  }
export default{

    async searchTag(param){

        let url = new URL(settings.API+ settings.ROUTES.search),    

        params  = {_searchQuery:param}    
        
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        
        let data;

        try{
        data= await fetch(url,
                {
                method:'get',
                headerOptions
                }
            )
       }
       catch(error){
           console.log('error')
       }
        return data.json();
    },


}