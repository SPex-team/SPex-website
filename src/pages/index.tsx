/** @format */

import "./style.scss";
import { linkList, solvTypes, worksList } from "../contants";
import { getSvg } from "../svgTypes";
import { JSXElementConstructor, ReactElement, useState } from "react";
import home_logo from "../assets/images/home.svg";
import work_logo from "../assets/images/work_logo.svg";
import girl from "../assets/images/girl.svg";
import boy from "../assets/images/boy.svg";

export default () => {
  const [pic, setPic] = useState("rewards_logo");
  const handleMove = (e: any, type: string) => {
    e.preventDefault();
    e.stopPropagation();
    setPic(`${type}_logo`);
  };
  return (
    <div className='spex'>
      <div className='spex-header'>
        <div className='header-logo'>
          <span className='logo_svg'>{getSvg("logo_svg")} </span>
          <div
            className='logo-btn'
            onClick={() => {
              window.open("https://app.spex.website");
            }}>
            APP
          </div>
        </div>

        <div className='spex-header-content'>
          <div className='text'>
            SPex is a decentralized storage provider exchange space on FVM
          </div>
          <img className='home_logo' src={home_logo} alt='' />
        </div>
      </div>
      <div className='spex-card'>
        <h3 className='title'>Problem it solves</h3>
        <div className='spex-card-content'>
          <ul className='content'>
            {solvTypes.map((item) => {
              return (
                <li
                  className='content-item'
                  onMouseMove={(e) => handleMove(e, item.key)}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPic("rewards_logo");
                  }}
                  key={item.key}>
                  <div className='icons '>
                    <span className={`${item.key}_svg`}>
                      {getSvg(item.key)}
                    </span>
                  </div>
                  <div className='item-wrap'>
                    <header className='title'>{item.title}</header>
                    <text className='item-text'>{item.text}</text>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className='pic'>
            <span className={`${pic}_svg`}>{getSvg(pic)}</span>
          </div>
        </div>
      </div>
      <div className='spex-card'>
        <h3 className='title'>How it Works</h3>
        <div className='work-content'>
          <img src={girl} className='work-pic-girl' alt='' />
          <div className='spex-card-content work-card'>
            <img src={work_logo} alt='' className='work_logo' />
            {worksList.map(
              (
                workItem: {
                  key: string;
                  text: ReactElement<any, string | JSXElementConstructor<any>>;
                },
                index: number
              ) => {
                return (
                  <div className={`work-item-content step ${workItem.key}`}>
                    <span className='icon'>
                      <span className='icon-main'>{index + 1}</span>
                    </span>
                    {workItem.text}
                  </div>
                );
              }
            )}
          </div>
          <img src={boy} className='work-pic-boy' alt='' />
        </div>
      </div>
      <div className='spex-footer'>
        <div className='spex-footer-top'>
          <span className='logo_svg'>{getSvg("logo_svg")} </span>
          <span className='footer-link'>
            {linkList.map((linkItem) => {
              return (
                <span
                  className={`${linkItem.key}_svg icons_svg`}
                  onClick={() => {
                    window?.open(linkItem.link);
                  }}>
                  {getSvg(linkItem.key)}
                </span>
              );
            })}
          </span>
        </div>
        <div className='text'>Copyright 2023 SPex All rights reserved.</div>
      </div>
    </div>
  );
};
