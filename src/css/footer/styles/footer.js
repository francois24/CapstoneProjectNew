import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(circle, rgba(38,38,38) 0%, rgba(38,38,38,1) 100%);
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color:#c2c2c2;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
  font-family: 'Nunito Sans', sans-serif;

  &:hover {
      color: #bf0404;
      transition: 200ms ease-in;
      font-family: 'Nunito Sans', sans-serif;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  font-family: 'Nunito Sans', sans-serif;
`;