import Head from 'next/head'
import styles from '../../../styles/container/home-page-css/home.module.css'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Proposal from './components/Proposal'
import Pagenavigate from './components/Pagenavigate'
import { useState, createContext, useEffect } from 'react'
const Filter_api = createContext()
const Page_navigation = createContext()
const proposal_api = [
  {
    basic_profile: {
      gender: 'man', proposal_visibilty: 'hide', proposal_id: '1', proposal_verified: 'verify', name: 'James', country: 'germany', created_by: '11/8/2020', profession: 'baber',
      proposal_src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      age: '24', height: '5.4 inc', religion: 'Atheism', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'man', proposal_visibilty: 'show', proposal_id: '2', proposal_verified: 'verify', name: 'Robert', country: 'france', created_by: '11/5/2021', profession: 'butcher',
      proposal_src: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      age: '29', height: '5.4 inc', religion: 'Buddhism', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'man', proposal_visibilty: 'show', proposal_id: '3', proposal_verified: 'verify', name: 'John', country: 'canada', created_by: '10/1/2021', profession: 'carpenter',
      proposal_src: 'https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      age: '21', height: '5.4 inc', religion: 'Confucianism', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'man', proposal_visibilty: 'show', proposal_id: '4', proposal_verified: 'verify', name: 'Michael', country: 'india', created_by: '3/7/2021', profession: 'cook',
      proposal_src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      age: '25', height: '5.4 inc', religion: 'Druze', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' }
  }, {
    basic_profile: {
      proposal_visibilty: 'show', proposal_id: '5', proposal_verified: 'unverify', name: 'David', country: 'china', created_by: '3/1/2021', profession: 'farmer',
      proposal_src: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      gender: 'man', age: '27', height: '5.4 inc', religion: 'christan', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'islam', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'man', proposal_visibilty: 'show', proposal_id: '6', proposal_verified: 'unverify', name: 'William', country: 'japan', created_by: '6/7/2021', profession: 'fisherman',
      proposal_src: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80',
      age: '22', height: '5.4 inc', religion: 'christan', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'Gnosticism', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'man', proposal_visibilty: 'show', proposal_id: '7', proposal_verified: 'verify', name: 'Richard', country: 'spain', created_by: '22/1/2022', profession: 'gardener',
      proposal_src: 'https://images.unsplash.com/photo-1592961495487-805c73c22198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      age: '28', height: '5.4 inc', religion: 'christan', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'man', proposal_visibilty: 'show', proposal_id: '8', proposal_verified: 'unverify', name: 'Joseph', country: 'australia', created_by: '14/3/2022', profession: 'hairdresser',
      proposal_src: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1449&q=80',
      age: '30', height: '5.4 inc', religion: 'Hinduism', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1624140716840-5d89f311f500?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'man', proposal_visibilty: 'show', proposal_id: '9', proposal_verified: 'unverify', name: 'Thomas', country: 'mongolia', created_by: '2/9/2020', profession: 'journalist',
      proposal_src: 'https://images.unsplash.com/photo-1577744168855-0391d2ed2b3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      age: '26', height: '5.4 inc', religion: 'Jainism', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'man', proposal_visibilty: 'show', proposal_id: '10', proposal_verified: 'unverify', name: 'Charles', country: 'indonesia', created_by: '5/8/2020', profession: 'judge',
      proposal_src: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      age: '20', height: '5.4 inc', religion: 'Judaism', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1585807515950-bc46d934c28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'Rastafarianism', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'women', proposal_visibilty: 'show', proposal_id: '11', proposal_verified: 'verify', name: 'Mary', country: 'brazil', created_by: '12/4/2022', profession: 'none',
      proposal_src: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      age: '19', height: '5.4 inc', religion: 'islam', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1657664066042-c59e5f84b7a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'women', proposal_visibilty: 'show', proposal_id: '12', proposal_verified: 'unverify', name: 'Patricia', country: 'malasia', created_by: '6/8/2020', profession: 'baker',
      proposal_src: 'https://images.unsplash.com/photo-1485290334039-a3c69043e517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      age: '22', height: '5.4 inc', religion: 'christan', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1485290334039-a3c69043e517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'women', proposal_visibilty: 'show', proposal_id: '13', proposal_verified: 'unverify', name: 'Jennifer', country: 'china', created_by: '3/5/2020', profession: 'none',
      proposal_src: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      age: '34', height: '5.4 inc', religion: 'Rastafarianism', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'women', proposal_visibilty: 'show', proposal_id: '14', proposal_verified: 'unverify', name: 'Linda', country: 'UK', created_by: '16/8/2021', profession: ' journalist',
      proposal_src: 'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80',
      age: '23', height: '5.4 inc', religion: 'Shinto', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1506956191951-7a88da4435e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' }
  }, {
    basic_profile: {
      gender: 'women', proposal_visibilty: 'show', proposal_id: '15', proposal_verified: 'unverify', name: 'Elizabeth', country: 'USA', created_by: '4/7/2021', profession: 'lawyer',
      proposal_src: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      age: '24', height: '5.4 inc', religion: 'Sikhism', civil_status: 'single', update_by: '12/4/2022',
    },
    about: { about_text: 'Buddhist son is sought by B/​G parents from Colombo. The proposed daughter is 25 years old,​5’3” in height,​pretty,​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered' },
    proposal_media: {
      image: { image_src1: 'https://images.unsplash.com/photo-1657664066011-ed54a1be81d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'this is my introduction video', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'this my paper work pdf', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    },
    person_info: {
      education: { university: 'university of alberta', degree: 'mechanical Engineering', graduation: 'progress', },
      residency: { country: 'canada', state: 'alberta', city: 'camrose', zip_code: 'T1G1E7' },
      habits: { Drinking: 'monthly', smoking: 'no', food_preservence: 'vegetarian' },
    },
    family_info: { join_family: 'separate', grand_father: 'alive', grand_mother: 'passed', father: 'alive', mother: 'alive', siblings: '5', sister: 'all married', },
    father_info: { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' },
    mother_info: { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' }
  },
]

export default function Home() {
  const [Search, setSearch] = useState('');
  const [Currentpage, setCurrentpage] = useState(1);
  const [Quentity, setQuentity] = useState(10);
  const [Gender, setGender] = useState('')
  const [Max_age, setMax_age] = useState(99)
  const [Min_age, setMin_age] = useState(15)
  const [Religion, setReligion] = useState('')
  const [Country, setCountry] = useState('')
  const [Profession, setProfession] = useState('')
  const [Sorting, setSorting] = useState('')
  const [Result_not_found, setResult_not_found] = useState('none')
  let pages = [];
  let religion = [];
  let country = [];
  let profession = [];
  const sorting = ['neweest', 'oldest', 'verifyed']

  if (Min_age > Max_age) {
    alert('Min age can not be grether than Max age other wise age will be defualt ')
    setMax_age(99)
    setMin_age(15)
  }

  const search = proposal_api.filter((e) => {
    return e.basic_profile.proposal_visibilty == 'show'
  })
  const filter_search = search.filter((e) => {
    return e.basic_profile.name.includes(Search) &&
      e.basic_profile.gender.includes(Gender) &&
      e.basic_profile.religion.toLowerCase().includes(Religion) &&
      e.basic_profile.country.toLowerCase().includes(Country) &&
      e.basic_profile.profession.toLowerCase().includes(Profession) &&
      e.basic_profile.age > Min_age &&
      e.basic_profile.age < Max_age
  })

  useEffect(() => {
    if (filter_search.length == 0) {
      setResult_not_found('flex')
    } else {
      setResult_not_found('none')
    }
  }, [filter_search])

  search.map((e) => {
    religion.push(e.basic_profile.religion.toLowerCase())
  });

  search.map((e) => {
    country.push(e.basic_profile.country.toLowerCase())
  });

  search.map((e) => {
    profession.push(e.basic_profile.profession.toLowerCase())
  });


  const proposal_in_page = Currentpage * Quentity;
  const proposals = proposal_in_page - Quentity;
  const proposal = filter_search.slice(proposals, proposal_in_page)
  for (let i = 1; i <= Math.ceil(search.length / Quentity); i++) {
    pages.push(i);
  }



  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="developer" content="Aizazulah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ceylon Proposals | Home</title>
      </Head>
      <Navbar />
      <Filter_api.Provider value={[
        { set: setReligion, api: religion, title: 'religion' },
        { set: setCountry, api: country, title: 'country' },
        { set: setProfession, api: profession, title: 'profession' },
        { set: setSorting, api: sorting, title: 'sorting' }
      ]}>
        <Filter setGender={setGender} setMax_age={setMax_age} setMin_age={setMin_age} />
      </Filter_api.Provider>
      <main className={styles.home_main}>
        <div className={styles.porposals_section}>
          {proposal.map((api) => {
            return (
              <Proposal key={api.basic_profile.proposal_id} image={api.proposal_media.image} about={api.about} basic_profile={api.basic_profile} />
            )
          })}
          <div className={styles.result_not_found} style={{ display: Result_not_found }}>
            <figure></figure>
            <h5>Result Not Found!</h5>
          </div>
        </div>
        <div className={styles.advertisement_section}>
        </div>
      </main>
      <div className={styles.page_moving}>
        <Page_navigation.Provider value={{pages, setCurrentpage}}>
          <Pagenavigate pages={pages} setCurrentpage={setCurrentpage} />
        </Page_navigation.Provider>
      </div>
      <Footer setSearch={setSearch} />
    </>
  )
};
export { Filter_api, Page_navigation };