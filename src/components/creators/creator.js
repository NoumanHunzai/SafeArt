import React,{useEffect,useState} from 'react'
import HeroImage from '../../Api/SafeArt'
import '../../style/creator.css'

const Creator = () => {
    const [photo,setPhoto]= useState([]);
    //Fetch SafeArt Data
    useEffect(() => {
       const  fetch= async()=>{
        try{
            const response = await HeroImage.get('/api/homepage/featured_art.php');
            setPhoto(response.data.featuredCreators);
        }catch(err){
            console.log(err);
        }
       }
       fetch();
    }, [])
   
    const card = photo.map((pic)=>{
           return (
               <div className="cardWrapper" key={pic.id}>
                 <img className="main" src={pic.creator_cover} alt='images'/>
                 <br/>
                 <div className="box">
                <img className="creator" src={pic.creator_img} alt="hero img"/>
                <p>{pic.owner_name}</p>
                </div>
                <div className="Black">
                    <h4>{pic.username}</h4>
                </div>
               </div>
           );     
    });
    return (
        <div className="creatorsMain">
            <h1>Creators</h1>
            <div className="Grid">
                {card}
            </div>
        </div>
    )
}

export default Creator
