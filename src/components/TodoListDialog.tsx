import axios from 'axios';
import { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { url } from '../config/config';
import { listDate, todoListArray, userInfo } from '../recoil/recoil';

const DialogWrapper = styled.div`
    position : absolute;
    background-color : rgba(0,0,0,0.4);
    width : 100%;
    height : 100%;
    top: 0;
    left: 0;
    z-index : 100;
    display : flex;
    align-items: center;
    justify-content : center;

    .body{
        width: 300px;
        height : 200px;
        border-radius : 20px;
        background-color : white;

        .header{
            border-radius : 20px 20px 0 0;
            height: 50px;
            background-color : #EDFF75;
            display : flex;
            align-items : center;
            justify-content : center;
        }

        .main{
            height : 150px;
            display : flex;
            flex-direction : column;
            align-items: center;

            .inputer { 
                width : 80%;
                height : 30px;
                border : 3px solid lightgray;
                outline : none;
            }

            .btns{
                margin-top : 2rem;

                .successBtn,
                .cancleBtn{
                    border : none;
                    border-radius : 8px;
                    outline : none;
                    width : 60px;
                    height : 30px;
                    font-family: 'HSYuji-Regular';

                    &:hover{
                        cursor : pointer;
                    }
                }

                .successBtn{
                    background-color : #EDFF75;
                    margin-right : 1rem;

                    &:hover{
                        background-color : yellow;
                    }
                }

                .cancleBtn{
                    &:hover{
                        background-color : gray;
                    }
                }
            }
        }
    }
`;

interface Props{
    onCloseDialog: () => void;
}

const TodoListDialog = ({ onCloseDialog } : Props) =>{

    const [todoList, setTodoList] = useRecoilState(todoListArray);
    const userData = useRecoilValue(userInfo);
    const listDateValue = useRecoilValue(listDate);
    const textRef = useRef<HTMLInputElement>(null);

    const onSuccessBtn = () =>{
        const value: string = textRef.current!.value;
        const boardInfo = { userId: userData.id, date: listDateValue, content: value };
        axios.post(`${url}/board/addBoard`,{...boardInfo})
        .then((e)=>{
            if(e.data.result){
                setTodoList({ date : new Date(Date.parse(listDateValue)), item: [...todoList.item, { id : e.data.id, userId: userData.id, content : value}]});
            }
            else{
                alert("게시글 등록에 실패했습니다");
            }
        })
        onCloseDialog();
    }

    return(
        <DialogWrapper>
            <div className="body">
                <div className="header">추가 하실 내용을 입력해주세요!</div>
                <div className="main">
                    <input className="inputer" type = "text" ref={textRef}/>
                    <div className="btns">
                        <button className="successBtn" onClick={onSuccessBtn}>완료</button>
                        <button className="cancleBtn" onClick={onCloseDialog}>취소</button>
                    </div>
                </div>
            </div>
        </DialogWrapper>
    )
}

export default TodoListDialog;