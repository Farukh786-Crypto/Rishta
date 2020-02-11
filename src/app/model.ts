
export class Registerprofile{
    username:string;
    email:string;
    password:string;
    mobile:number;
    create_profile_by:string;
    date:Date;
    gender:string;
}
export class Id{
    id: number;
}
export class IdName extends Id{
    name: string;     
}
export class CareerProfile{
    Country:string; 
    State:string;  
    City: string; 
    Pincode:number; 
    HighestDegree:string;  
    Emplyeed: string; 
    Occupation: string; 
    Income: number;
    Express:string; 
    
}
export class AstroandReligion{

    astroandreligionid?:number;
    maritalstatus:string;
    mothertongue:string;
    religion:string;
    caste:string;
    subcaste:string;
    devak:string;
    gotra:string;
    horoscope:string;
    nakshtra:string;
    manglik:string;
}
export class feedbackprofile{
    name:string;
    address:string;
    email:string;
    category:string;
    suggestion:string;
    // gender:string;
}