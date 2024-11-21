import React from 'react';
import NextUp from '../components/NextUp';
import { InsideTheClassroom } from './InsideTheClassroom';
import { OutsideTheClassroom } from './OutsideTheClassroom';
import { CollageLife } from './CollageLife';
import { EtonOutwards } from './EtonOutwards';
import Header from '../components/Header';
import { Admissions } from './Admissions';
import { SupportUs } from './SupportUs';
import { ContactUs } from './ContactUs';
import { NewsandDiary } from './NewsandDiary';
 export const HomePage = () => {
  return (
    <>
      <Header />
      <NextUp />
      <Admissions />
      <SupportUs />
      <ContactUs />
      <NewsandDiary />
       <InsideTheClassroom />
      <OutsideTheClassroom />
      <CollageLife />
      <EtonOutwards />
      <div>HomePage</div>
    </>
  );
};
