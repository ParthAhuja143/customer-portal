import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchPhotos } from "../../redux/actions";
import { RootState } from "../../redux/store";
import { useDispatch } from "../../hooks/useDispatch";
import ImageLoader from "../common/ImageLoader/ImageLoader";
import Skeleton from "react-loading-skeleton";

const CustomerDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedCustomerId, selectedCustomer, customers } = useSelector((state: RootState) => state.customers);
  const { photos, loading: photosLoading, error: photosError } = useSelector((state: RootState) => state.photos);

  useEffect(() => {
    if (selectedCustomerId) {
      dispatch(fetchPhotos());
      const intervalId = setInterval(() => {
        dispatch(fetchPhotos());
      }, 10000);

      return () => clearInterval(intervalId);
    }
  }, [dispatch, selectedCustomerId]);

  if (!selectedCustomerId) {
    return <p className="error-box">Please select a customer to see the details</p>;
  }

  return (
    <div style={{
        padding: '10px',
        height:' calc(100vh - 20px)',
        backgroundColor: '#f9f9f9',
    }}>
      <h2>{selectedCustomer?.title}</h2>
      {customers && (
        <div>
          <p> {selectedCustomer?.description}</p>
          {/* Display other customer details as needed */}
        </div>
      )}
      {!photosLoading && !photosError && photos.length > 0 && <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {photos.map((photo) => (
            <ImageLoader key={photo.id} src={photo.urls.thumb} alt={photo.alt_description} className="image-class" height="100px" />
        ))}
      </div>}
      {
            photosError && <p className="error-box">Error loading photos: {photosError}</p>
        }
        {
            photosLoading && <Skeleton height={'100px'} width={'100%'} />
        }
    </div>
  );
};

export default CustomerDetails;
