import React, { useState, useEffect } from 'react';
import Modal from './dailyNormaModal';
import { getDailyNorma } from '../../redux/dailyNorma/dailyNormaThunk';
import { useDispatch, useSelector } from 'react-redux';
import {
  DailyNormaBox,
  DailyText,
  RequiredWaterHeader,
  BottomBox,
  EditWaterButton,
} from './dailyNorma.styled';
import { selectAuthUserData } from 'redux/auth/auth.selectors';

export const DailyNorma = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dailyNorma, setDailyNorma] = useState(2.0);
  const userId = useSelector(selectAuthUserData);

  useEffect(() => {
    dispatch(getDailyNorma(userId._id))
      .then((userData) => {
        console.log('UserData:', userData);
        const fetchedDailyNorma = userData && userData.dailyNorma;
        const formattedAmount = (parseFloat(fetchedDailyNorma) || 2.0).toFixed(1);

        setDailyNorma(formattedAmount);
        
      })
      .catch((error) => {
        console.error('Error getting dailyNorma:', error);
        setDailyNorma(2.0);
      });
  }, [dispatch, userId._id]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  let displayAmount = dailyNorma;
  if (dailyNorma >= 99) {
    displayAmount = "99+";
  }

  return (
    <DailyNormaBox className='dark-daily-norma-box'>
      <DailyText className="dark-daily-norma-text">My daily norma</DailyText>
      <BottomBox>
        <RequiredWaterHeader>{displayAmount} L</RequiredWaterHeader>
        <EditWaterButton onClick={handleModalOpen}>Edit</EditWaterButton>
      </BottomBox>

      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
    </DailyNormaBox>
  );
};

