import { Outlet } from 'react-router-dom';
// import UserForm from 'components/UserForm/UserForm';
// import ModalRegister from 'components/ModalRegister/ModalRegister';
import { Suspense } from 'react';
import HomePageElt from 'components/HomePageElt/HomePageElt';

const HomePage = () => {

  return (
    <>
      <HomePageElt/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomePage;
