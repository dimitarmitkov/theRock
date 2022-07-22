import { useEffect, useState } from 'react';
import currentUser from "../enumerators/user/currentUser"

const useCurrentLoggedUser = (newUser) => {

    console.log(newUser);

    const [user, setUser] = useState(currentUser);

    if(newUser){
        setUser(newUser)
    }

    return user;
}

export default useCurrentLoggedUser;
