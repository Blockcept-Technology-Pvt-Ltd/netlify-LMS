// pages/home.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from '../utils/cookie';
import Image from 'next/image';
const Home = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [userPicture, setUserPicture] = useState(null);

  useEffect(() => {
    // Fetch user data from cookies
    const userId = getCookie('userId');
    const userEmail = getCookie('userEmail');
    const userFirstName = getCookie('userFirstName');
    const userLastName = getCookie('userLastName');
    const userPicture = getCookie('userPicture');

    if (userId && userEmail && userFirstName && userLastName) {
      setUserData({ id: userId, email: userEmail, firstName: userFirstName, lastName: userLastName });
      setUserPicture(userPicture);
    } else {
      // Redirect to login page if user data is not available
      router.push('/login');
    }
  }, []);

  return (
    <div>
    
  
      <h1>Welcome to the Home Page</h1>
      {userData ? (
        <div>
          <h3>User Details:</h3>
          {userPicture && (
            <div>
              <Image
                src={userPicture}
                alt={`${userData.firstName} ${userData.lastName}'s picture`}
                width={150} // Set appropriate width
                height={150} // Set appropriate height
                className="user-picture" // Optional: Add a CSS class for styling
              />
            </div>
          )}
          <p>User ID: {userData.id}</p>
          <p>Email: {userData.email}</p>
          <p>Name: {userData.firstName} {userData.lastName}</p>
          {/* Additional details from userData */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
           
  );
};

export default Home;
