import styled from 'styled-components';

import mobile from '../img/home-background-mobile.svg';
import tablet from '../img/home-background-tablet.svg';
import desktop from '../img/home-background-desktop.svg';
import bottle from '../img/bottle.svg';

export const HomePageSection = styled.section`
  @media screen and (max-width: 767px) {
    padding: 0 20px;
    position: fixed;
    height: 100%;
    overflow: scroll;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: -9;
      background-image: url(${mobile});
      background-repeat: no-repeat;

      background-size: cover;
    }
  }

  @media screen and (min-width: 768px) {
    overflow: scroll;
    padding: 0 32px 44px 32px;
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: -10;
      background-image: url(${tablet});
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    justify-content: space-between;
    padding: 0 112px 40px 112px;
    max-height: 100%;
    &::before {
      content: '';
      position: absolute;
      top: -170px;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: -11;
      background-image: url(${desktop});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

export const ContentWrapper = styled.div`
  @media screen and (max-width: 767px) {
    position: relative;
    min-height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.right-panel {
      padding: 24px 8px;
      background-color: var(--bg-color-light-blue);
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    position: relative;
    min-height: 498px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.right-panel {
      padding: 32px 24px;
      background-color: var(--bg-color-light-blue);
      border-radius: 10px;
    }
  }
  @media screen and (min-width: 1200px) {
    position: relative;
    width: 592px;
    max-height: 680px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.right-panel {
      background-color: var(--bg-color-light-blue);
      border-radius: 10px;
    }
  }
`;

export const BottleImg = styled.div`
  @media screen and (max-width: 767px) {
    width: 218px;
    height: 190px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -65%);
    z-index: -5;
    background-repeat: no-repeat;
    background-image: url(${bottle});
    background-position: center;
    background-size: contain;
  }
  @media screen and (min-width: 768px) {
    width: 402px;
    height: 352px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -65%);
    z-index: -5;
    background-repeat: no-repeat;
    background-image: url(${bottle});
    background-position: center;
    background-size: contain;
  }
  @media screen and (min-width: 1200px) {
    width: 570px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -65%);
    z-index: -5;
    background-repeat: no-repeat;
    background-image: url(${bottle});
    background-position: center;
    background-size: contain;
  }
`;