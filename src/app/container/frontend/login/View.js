import React, {useEffect} from 'react'
import { getUsers } from 'store/actions';
import { useSelector, useDispatch } from "react-redux";

const View = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);

    useEffect(() => {
        dispatch(getUsers());
    }, []);
    return (
        <div className="App">
            <h1>Welcome to React Redux Saga Crash Course</h1>
            {loading && <h2>Loading...</h2>}
            {error && !loading && <h2>{error}</h2>}
            {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
        </div>
    )
}

export default View
