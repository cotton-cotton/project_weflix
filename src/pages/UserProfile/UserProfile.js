import React from 'react';
import * as S from './UserProfile.style';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { profileActions } from '../App/profileSlice';

import ProfileBox from '../../components/ProfileBox/ProfileBox';

import { IoMdAddCircle } from 'react-icons/io';

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileList = useSelector(state => state.profile.profileList);

  const preventProfile = event => {
    if (profileList.length < 3) {
      navigate('/profile/add');
    } else if (profileList.length >= 3) {
      alert('프로필은 최대 3개까지 생성 가능합니다.');
      event.preventDefault();
    }
  };

  const onRemove = userName => {
    alert('삭제되었습니다.');
    const removedList = profileList.filter(list => list.userName !== userName);
    dispatch(profileActions.deleteProfile({ data: removedList }));
  };

  return (
    <S.SelectWrapper>
      <S.ProfileContainer>
        <S.Title>프로필 관리</S.Title>
        <S.ImageContainer>
          {profileList.map((list, index) => {
            return (
              <ProfileBox
                key={index}
                id={list.id}
                userName={list.userName}
                background={list.background}
                onClick={() => onRemove(list.userName)}
                imo={list.imo}
                del={list.del}
              />
            );
          })}
          <S.ProfileAdd onClick={event => preventProfile(event)}>
            <S.Add>
              <IoMdAddCircle size="70" color="#7f7b7b" />
            </S.Add>
            <S.Name>프로필 추가</S.Name>
          </S.ProfileAdd>
        </S.ImageContainer>
        <Link to="/profile/select">
          <S.RegisterButton>완료</S.RegisterButton>
        </Link>
      </S.ProfileContainer>
    </S.SelectWrapper>
  );
};

export default UserProfile;
