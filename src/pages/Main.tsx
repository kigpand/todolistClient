import { useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userInfo } from '../recoil/recoil';
import Login from './Login';
import TodoList from './TodoList';

const Main = () =>{

    const [userData, setUserData] = useRecoilState(userInfo);

    useLayoutEffect(()=>{
        const id: string = sessionStorage.getItem('user_id') ? sessionStorage.getItem('user_id') as string : "";
        const nick: string = sessionStorage.getItem("user_nick") ? sessionStorage.getItem("user_nick") as string : "";
        setUserData({ id: id, nick: nick});
    },[setUserData])

    return(
        <div>
            {userData.id !== "" && userData.nick !== ""
            ? <TodoList />
            : <Login />
            }
        </div>
    )
}

export default Main;