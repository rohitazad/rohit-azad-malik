import React from "react";
import HomeComponent from "../../Components/Home";
import { useSelector } from "react-redux";
const HomePage = () => {
  const myCvData = useSelector((state) => state.userData.data);
  //console.log('myCvData',myCvData)
  return (
    <>
      <HomeComponent data={myCvData} />
    </>
  );
};

export default HomePage;
