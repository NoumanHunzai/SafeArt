import React,{useState,useEffect} from 'react'
import HeroImage from '../../Api/SafeArt';
import '../../style/hero.css';


const Hero = () => {
    const [photo,setPhoto]= useState('');
    //Fetch SafeArt Data
    useEffect(() => {
       const  fetch= async()=>{
        try{
            const response = await HeroImage.get('/api/homepage/homepage.php');
            setPhoto(response.data);
        }catch(err){
            console.log(err);
        }
       }
       fetch();
    }, [])

    const image = ()=> {
        if(!photo){
            return <div>Loading...</div>
        }
        return(
        <div className="main">
            <div className="lImage">
               <img src={photo.mainAuctionArt.creator_img} alt="hero img"/>
            </div>

            <div className="rImage">
                <div className="box">
                <img className="creator" src={photo.mainAuctionArt.creator_img} alt="hero img"/>
                <p>{photo.mainAuctionArt.owner_name}</p>
                </div>
                <h1>{photo.mainAuctionArt.art_name}</h1><br/>

                <div className="priceContainer">
                    <div className="price">
                        <h2>Reserved Price</h2>
                        <h3>0.333Eth</h3>
                    </div>
                    <hr/>
                    <div className="owned">
                        <h2>Owned By</h2>
                        <h3>{photo.mainAuctionArt.owner_name}</h3>
                    </div>
                </div>


            </div>

        </div>
        );
    }
    return (
        <div className="home">
            {image()}
        </div>
    )
}

export default Hero;
