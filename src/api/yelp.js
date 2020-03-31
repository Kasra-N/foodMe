import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer v962ofd08FeORTcK1_Oir85tCLF-BcVw_wJ4qpu5wXRUTDZI3zXXfNS4p2fo-1R4meZtf6bRNosX7KRoSrAR4B-S2L_Tqk9Bzo0wzy3PzEjLGgqiyUYIW44p41BYXnYx'
    }
});

