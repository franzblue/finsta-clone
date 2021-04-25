/* eslint-disable */
import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';

export default function useUser() {
    const [activeUser, setActiveUser] = useState({});
    const { user } = useContext(UserContext);

    useEffect(() => {
        async function getUserObjByUserId() {
            // we need a function that we can call (firebase service)
            // that gets the user data based on the id
            const [response] = await getUserByUserId(user.uid); // [response] is destructured so that it returns a single user object, rather than a length-1 array
            setActiveUser(response);
        }
        if (user.uid) {
            getUserObjByUserId();
        }
    }, [user]);

    return { user: activeUser };
}