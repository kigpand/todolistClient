import styled from 'styled-components';
import TodoListCalendar from './TodoListCalendar';
import TodoListLogOutBtn from './TodoListLogOutBtn';
import TodoListTime from './TodoListTime';

const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .btns{
        display: flex;
        flex-direction: column;
    }

    @media only screen and (max-width: 1000px) {
        justify-content: space-around;
        flex-direction: row;
        align-items: center;

        .btns{
            flex-direction: row;
        }
    }
`

interface Props {
    onLogOut: () => void;
}

const TodoListSub = ({ onLogOut }: Props) =>{


    return(
        <SubWrapper>
            <TodoListTime />
            <div className="btns">
                <TodoListLogOutBtn onLogOut={onLogOut} />
                <TodoListCalendar />
            </div>
        </SubWrapper>
    )
}

export default TodoListSub;