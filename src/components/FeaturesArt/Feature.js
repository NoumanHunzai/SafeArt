import React,{useEffect,useState} from 'react'
import HeroImage from '../../Api/SafeArt'
import './features.css'

const Feature = () => {
    const [photo,setPhoto]= useState([]);
    //Fetch SafeArt Data
    useEffect(() => {
       const  fetch= async()=>{
        try{
            const response = await HeroImage.get('/api/homepage/featured_art.php');
            setPhoto(response.data.featuredArts);
        }catch(err){
            console.log(err);
        }
       }
       fetch();
    }, [])
   
    const card = photo.map((pic)=>{
           return (
               <div className="cardWrapper" key={pic.id}>
                 <img className="main" src={pic.creator_img} alt='images'/>
                 <br/>
                 <div className="box">
                <img className="creator" src={pic.creator_img} alt="hero img"/>
                <p>{pic.owner_name}</p>
                </div>
                <div className="Black">
                    <div className="boz">
                    <h5>Reserved Price</h5>
                    <p>1.000Eth</p>
                    </div>
                    <p>Auction Has Ended</p>
                </div>
               </div>
           );     
    });
    


    return (
        <div className="trending">
            <h2> Trending </h2>
            <div className="Grid">
                {card}
            </div>
        </div>
    )

    }
export default Feature;
