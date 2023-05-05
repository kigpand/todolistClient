import { Route } from "react-router";
import styled from "styled-components";
import Home from "./pages/Home";
import Main from "./pages/Main";
import BACKGROUND from "./images/background.jpg";
import "./styles/global.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const AppWrapper = styled.div`
  position: relative;

  .background {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Poke />
    </QueryClientProvider>
  );
}

function Poke() {
  const { isLoading, error, data } = useQuery("poke", () =>
    fetch("https://pokeapi.co/api/v2/ability/1").then((res) => res.json())
  );

  if (isLoading) return "loading...";
  if (error) return "An error";

  return <div>{data}</div>;
}

export default App;
