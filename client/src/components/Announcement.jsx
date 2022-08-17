import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: indigo;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Try the new Limited Edition flavour POSEIDON'S THUNDER now!!!</Container>;
};

export default Announcement;
