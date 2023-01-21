/** @format */

import "./style.scss";
import { linkList, solvTypes, worksList } from "../contants";
import { getSvg } from "../svgTypes";
import { JSXElementConstructor, ReactElement, useState } from "react";
import logo from "../assets/images/home.svg";
import home_logo from "../assets/images/home.webp";
import work_logo from "../assets/images/work_logo.webp";
import girl from "../assets/images/girl.webp";
import boy from "../assets/images/boy.webp";

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
        <span>{getSvg("logo_svg")} </span>
        <div className='spex-header-content'>
          <div className='text'>
            SPex is a decentralized storage provider exchange space on FVM
          </div>
          <img className='home_logo' src={home_logo} alt='' />
        </div>
      </div>
      <div className='spex-card'>
        <h3 className='title'>What Problem will it Solv</h3>
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
                  <div className='icons'>{getSvg(item.key)}</div>
                  <div className='item-wrap'>
                    <header className='title'>{item.title}</header>
                    <text className='item-text'>{item.text}</text>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className='pic'>{getSvg(pic)}</div>
        </div>
      </div>
      <div className='spex-card'>
        <h3 className='title'>How it Works</h3>
        <div className='work-content'>
          <img src={girl} className='work-pic' alt='' />
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
          <img src={boy} className='work-pic' alt='' />
        </div>

        {/* <ul className='spex-card-content work-card'>
          {worksList.map((item, index) => {
            return (
              <li key={item.key} className='work-item'>
                <div className='icon'>{getSvg(item.key)}</div>
                <text>{item.text}</text>
              </li>
            );
          })}
        </ul> */}
      </div>
      <div className='spex-footer'>
        <div className='spex-footer-top'>
          <span>{getSvg("logo_svg")} </span>
          <span className='footer-link'>
            {linkList.map((linkItem) => {
              return <span>{getSvg(linkItem.key)}</span>;
            })}
          </span>
        </div>
        <div className='text'>
          Copyright &#169 2023 SPex All rights reserved.
        </div>
      </div>
    </div>
  );
};
