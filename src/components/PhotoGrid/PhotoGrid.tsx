import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchPhotos } from "../../redux/actions";
import { useDispatch } from "../../hooks/useDispatch";
import { RootState } from "../../redux/store";
import useInterval from "../../hooks/useInterval";

const PhotoGrid: React.FC = () => {
  const dispatch = useDispatch();
  const { photos, loading } = useSelector((state: RootState) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  useInterval(() => {
    dispatch(fetchPhotos());
  }, 10000); // 10 seconds

  if (loading) return (<div>Loading...</div>);

  return (
    <div className="grid grid-cols-3 gap-2">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.thumb}
          alt={photo.alt_description}
          className="w-full h-24 object-cover"
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
