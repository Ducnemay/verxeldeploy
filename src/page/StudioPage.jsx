import React, { useState,useCallback,useEffect } from "react";
import "./StudioPage.css";
import { toast, ToastContainer } from 'react-toastify';
import api from '../components/utils/requestAPI';
import { CiDollar } from "react-icons/ci";
import { useParams,useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
const StudioPage = () => {
  const [selectedImage, setSelectedImage] = useState(null); 
  const [isGroupOpened, setIsGroupOpened] = useState(false); 
  const [studio, setstudio] = useState([]);
  const [stardate, setstardate] = useState('');
  const [checkin, setcheckin] = useState('');
  const [checkout, setcheckout] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchStudio = useCallback(async () => {
    try {
      const response = await api.get(
        `https://localhost:7199/api/Studio/Get-Studio-By-Id?id=${id}`
      );
      console.log('API response:', response.data);
      setstudio(response.data);
    } catch (error) {
      toast.error("Error fetching studio!");
    }
  }, [id]);

  useEffect(() => {
    fetchStudio();
  }, [fetchStudio]);

  const images = [
    { src: "/ee53ddddc8801eaa90470f5c25934df9.jpg", name: "Hình 1" },
    { src: "/ee53ddddc8801eaa90470f5c25934df9.jpg", name: "Hình 2" },
    { src: "/ee53ddddc8801eaa90470f5c25934df9.jpg", name: "Hình 3" },
    { src: "/ee53ddddc8801eaa90470f5c25934df9.jpg", name: "Hình 4" },
    { src: "/ee53ddddc8801eaa90470f5c25934df9.jpg", name: "Hình 5" },
    { src: "/ee53ddddc8801eaa90470f5c25934df9.jpg", name: "Hình 5" },
    { src: "/ee53ddddc8801eaa90470f5c25934df9.jpg", name: "Hình 5" },
    { src: "/ee53ddddc8801eaa90470f5c25934df9.jpg", name: "Hình 5" },
  ];
  const dancerMasters = [
    { img: "/ec46334718d4ee1a37ca49cd652a194d.jpg",name: "Alice Johnson", specialty: "Hip Hop" },
    {img: "/0f84d7257569027cfba8ab80b5f2af88.jpg", name: "Bob Smith", specialty: "Ballet" },
    { img: "/92075231ccb6efb21748b2e7f2d9cdbd.jpg",name: "Charlie Brown", specialty: "Contemporary" },
    { img: "/7ba53e7463b4afd2c728f9beb59b65ac.jpg",name: "Diana Prince", specialty: "Jazz" },
  ];
  const Reviewer = [

{ img: "/ec46334718d4ee1a37ca49cd652a194d.jpg", date:"12/10/2024", name:"Mr Vinh", cmt:"Great studio with amazing amenities!"    },
{ img: "/0f84d7257569027cfba8ab80b5f2af88.jpg", date:"13/10/2024", name:"Meo Meo", cmt:"Excellent location and service."    },
{ img: "/92075231ccb6efb21748b2e7f2d9cdbd.jpg", date:"14/10/2024", name:"Trịnh Trần Phương Tuấn", cmt:"Wonderful experience. Highly recommend!"    },





  ];
  const closeModal = () => {
    setSelectedImage(null);
  };
 
  
  const handleBooking = async (e) => { 
    e.preventDefault();
    const url = 'https://localhost:7199/Add-New-Booking';
    const data = {
      accountId:"AC3ba67",
      studioId:"stu1",
      bookingDate:stardate,
      checkIn:checkin,
      checkOut:checkout,
      



    };
    try {
      const response = await api.post(url, data);
      console.log(response.data);
      alert('Create Booking Success!');
      navigate(`/order/${response.data.bookingId}`);
    } catch (error) {
      console.error(error);
      
    }
  };


  return (
    <div className="studio-page">
    
      <div className="image-gallery">
        <div className="image-main">
          <img
            src={images[0].src}
            alt={images[0].name}
            className="main-img"
            onClick={() => setSelectedImage(images[0].src)}
          />
         
        </div>

  
        <div className="image-thumbnails">
          {images.slice(1, -2).map((img, index) => (
            <div key={index} className="image-item">
              <img
                src={img.src}
                alt={img.name}
                className="gallery-img"
                onClick={() => setSelectedImage(img.src)}
              />
              
            </div>
          ))}

      
<div className="grouped-images" onClick={() => setIsGroupOpened(!isGroupOpened)}>
  {!isGroupOpened ? (
    <div className="grouped-images-placeholder">
      {/* Hiển thị hình số 5 */}
      <div className="image-with-overlay">
        <img
          src={images[6].src} // Hình số 5 (index 4)
          alt={images[6].name}
          className="gallery-img"
        />
        {/* Chữ +2 more nằm trên hình */}
        <div className="overlay-text">
          +{images.length - 6} more
        </div>
      </div>
    </div>
  ) : (
    <div className="grouped-images-expanded">
      {images.slice(-2).map((img, index) => (
        <div key={index} className="image-item">
          <img
            src={img.src}
            alt={img.name}
            className="gallery-img"
            onClick={() => setSelectedImage(img.src)}
          />
        </div>
      ))}
    </div>
  )}
</div>

        </div>
      </div>

     
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        </div>
      )}

     
      <div className="studio-info">
        <div className="info-title">

        <h1 className="studio-name">F-Stop Photography Studio Rentals
        Photography/Video Rental Space For Professional Centrally Located In Tampa</h1>
        <h1 className="studio-adress">Readville,
        Boston, MA</h1>

        <h2 className="studio-title">Dancing Master</h2>
          <div className="dance-master-chua">

          <ul className="dancer-masters-list">
          {dancerMasters.map((dancer, index) => (
            <li key={index} className="dancer-master-item">
              <img src={dancer.img} alt="" className="hinh-dancer" />
              <p className="info-dancer">
                <strong>{dancer.name}</strong> - {dancer.specialty}
              </p>
            </li>
          ))}
        </ul>

          </div>

        </div>
       
        <div className="booking-section">
         
             
        <h3 className="price-title">
  <CiDollar className="dollar" />
  <span className="price-text">Price</span>
</h3>
         
       
          <div className="price-details">
            <span className="price">$50/hour</span>
            <span className="discount">10% off</span>
          </div>
          <form className="booking-form" onSubmit={handleBooking}>
            <div>

<h3 className="dateandtime">Date and Time</h3>

            </div>
            <div className="start-Date">
              
            <input type="date" id="date" value={stardate} onChange={(e)=>setstardate(e.target.value)} />
            </div>
           
<div className="timechua">  
            <input type="time" id="time" className="starttime" value={checkin} onChange={(e)=> setcheckin(e.target.value)} />
            <input type="time" id="time" className="endtime" value={checkout} onChange={(e)=> setcheckout(e.target.value)} />
  </div>
           <div className="btn-booking">
             <button type="submit" className="booking-button" >
              Book Now
            </button>
           </div>
           
          </form>
        </div>
      
      </div>

      {/* Danh sách tiện ích */}
      <div className="amenities-section">
        <h2 className="amen-title">Offered Amenities</h2>
        <ul className="amenities-list">
          <li className="type-amen">Type 01</li>
          <li className="type-amen">Type 02</li>
          <li className="type-amen">Type 03</li>
          <li className="type-amen">Type 04</li>
        </ul>
      </div>

     <div className="review-chua">
      <div className="review-vui">
       
        <h2 className="review-title">Reviews</h2>
        <h2 className="rate-review">5</h2>
     <FaStar className="star-review" />
      </div>
     
      <div className="reviews-section">
      {Reviewer.map((review,index)=>(
            
         
        <div className="review">
         <img src={review.img} alt="" className="hinh-reviewer" />
          <p>
            <strong>{review.name}</strong> ({review.date})
          </p>
          <p>{review.cmt}</p>
        </div>
         ))}
      
        
      </div></div>
    </div>
  );
};

export default StudioPage;
    