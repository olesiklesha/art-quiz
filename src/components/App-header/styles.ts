import styled from 'styled-components';
import logo from '../../assets/icons/logo-header.svg';
import homeIcon from '../../assets/icons/home.svg';
import categoriesIcon from '../../assets/icons/category.svg';
import resultsIcon from '../../assets/icons/score.svg';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 6px 0 0;

  @media (min-width: 680px) {
    padding: 43px 30px 0 46px;
  }

  @media (min-width: 1024px) {
    max-width: 1440px;
    padding: 30px 0 0 0;
    margin: 0 auto;
  }
`;

export const AppNav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  height: 75px;
  background-color: #000;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 20px 20px 0 0;

  @media (min-width: 680px) {
    position: static;
    width: fit-content;
    border: none;
    margin-left: 20px;
  }

  @media (min-width: 1024px) {
    margin-left: 120px;
  }
`;

export const Logo = styled.div`
  width: 166px;
  height: 62px;
  background-image: url(${logo});
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: flex-end;
  height: 48px;
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  line-height: 18px;
  background-position: top center;
  background-repeat: no-repeat;
  cursor: pointer;

  &:active {
    color: #ffbca2;
  }

  &:first-of-type {
    background-image: url(${homeIcon});
  }

  &:nth-of-type(2) {
    background-image: url(${categoriesIcon});
  }

  &:last-of-type {
    background-image: url(${resultsIcon});
  }

  @media (min-width: 680px) {
    height: fit-content;
    font-size: 18px;

    &:first-of-type {
      background-image: none;
    }

    &:nth-of-type(2) {
      background-image: none;
    }

    &:last-of-type {
      background-image: none;
    }

    & + & {
      margin-left: 40px;
    }
  }
`;
