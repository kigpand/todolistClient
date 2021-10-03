import { Route } from 'react-router';
import styled from 'styled-components';
import Home from './pages/Home';
import Main from './pages/Main';
import BACKGROUND from './images/background.jpg';
import './styles/global.css';

const AppWrapper = styled.div`
    position : relative;

    .background{
        z-index : -1;
        position: absolute;
        top: 0;
        left : 0;
        width : 100%;
        height : 100%;
        opacity : 0.7;        

        img{
          width: 100%;
          height : 100%;
          object-fit : cover;
        }
    }
`;
function App() {
  return (
    <AppWrapper>
      <div className="background">
            <img src={BACKGROUND} alt = "배경"/>
        </div>
      <Route path="/" exact component={Home} />
      <Route path="/Main" component={Main} /> 
    </AppWrapper>
  );
}

export default App;
