import React from 'react';
import styled from 'styled-components';

const ProfileBox = ({ key, id, userName, background, imo }) => {
  return (
    <ProfileBoxWrapper key={key}>
      <ProfileImg key={key} id={id} background={background}>
        <Imo>{imo}</Imo>
      </ProfileImg>
      <Name>{userName}</Name>
    </ProfileBoxWrapper>
  );
};

const ProfileBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 100%;
`;
const Imo = styled.div``;
const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  background-color: ${({ background }) => background};
`;
const Name = styled.p`
  color: ${({ theme }) => theme.lightGray};
  font-size: ${({ theme }) => theme.medium};
  font-weight: ${({ theme }) => theme.normal};
  letter-spacing: 2px;
  text-align: center;
`;

export default ProfileBox;
