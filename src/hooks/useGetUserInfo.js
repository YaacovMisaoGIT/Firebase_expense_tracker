//  This hook is created separately to get userID separately
// parse: To tranform stringify objects back into an object


// export const useGetUserInfo = () => {
//     const {name,profilePhoto, userID, isAuth} = JSON.parse(localStorage.getItem("auth"))

//     return{ name,profilePhoto, userID, isAuth }
// }

export const useGetUserInfo = () => {
    const { name, profilePhoto, userID, isAuth } =
      JSON.parse(localStorage.getItem("auth")) || {};
  
    return { name, profilePhoto, userID, isAuth };
  };