import React, {Component} from 'react';
import '../icomoon.css'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import { Theme } from "./Theme";

const NavLinkStyled = styled(NavLink)`
  font-family: Roboto;
  color: ${Theme.colors.black};
  font-size: ${Theme.sizes.font};
  padding: 12.5px 17.5px;
  background: ${Theme.colors.bg2};
  text-decoration: none;
  &.active,
  &:hover {
    background: ${Theme.colors.bg};
    color: ${Theme.sizes.font};
    text-decoration: none;
  }
`;

const Link = styled.a`
  font-family: Roboto;
  color: ${Theme.colors.black};
  font-size: ${Theme.sizes.font};
  padding: 12.5px 17.5px;
  background: ${Theme.colors.bg2};
  text-decoration: none;
  &:hover {
    background: ${Theme.colors.bg};
    color: ${Theme.sizes.font};
    text-decoration: none;
  }
`;
const IconStyled = styled.span`
  margin-right: 11px;
  font-size: ${Theme.sizes.icon};
`;

const IconMinStyled = styled.span`
  font-size: ${Theme.sizes.smallIcon};
  line-height: 14px;
  vertical-align: middle;
`;

const IconMaxStyled = styled.span`
    font-size: ${Theme.sizes.bigIcon};
`;

export class Icon extends React.Component {
    render () {
        let className = 'icon-' + this.props.icon.toString();
        let size = this.props.size;
        switch (size) {
            case 'small':
            case 'min':
                return (
                    <IconMinStyled className={className}></IconMinStyled>
                ); break;
            case 'big':
            case 'max':
                return (
                    <IconMaxStyled className={className}></IconMaxStyled>
                ); break;
            default:
                return (
                    <IconStyled className={className}></IconStyled>
                ); break;
        }
    }
}
export default Icon;

export class LinkIcon extends React.Component {
    render () {
        let icon = this.props.icon.toString();
        let title = this.props.title.toString();
        let href = this.props.url.toString();
        return (
            <Link href={href} className={icon}>
                <Icon icon={icon}></Icon>
                {title}
            </Link>
        )
    }
};
export class NavLinkIcon extends React.Component {
    render () {
        let icon = this.props.icon.toString();
        let title = this.props.title.toString();
        let href = this.props.url.toString();
        let main = this.props.main.toString();
        return (
            <NavLinkStyled className={({ isActive }) => isActive ? 'active' : undefined} to={href}>
                <Icon icon={icon}></Icon>
                {title}
            </NavLinkStyled>
        )
    }
};