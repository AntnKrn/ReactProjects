import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 
         'Client-ID ag8YB3uTOXhbphK_V_s5qCMHGYdk6ByHyFr-rWfiYto'
   }
})