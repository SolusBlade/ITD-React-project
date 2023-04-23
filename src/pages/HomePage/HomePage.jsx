import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import HomePageElt from 'components/HomePageElt/HomePageElt';

const HomePage = () => {

  return (
    <>
      <HomePageElt/>
      {/* <ModalHooray/> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomePage;
