import React from 'react';
import '../icomoon.css'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import { Theme } from "./Theme";

const NavLinkStyled = styled(NavLink)`
  font-family: Roboto;
  color: ${Theme.colors.black};
  font-size: ${Theme.sizes.font};
  padding: 12.5px 17.5px;
  background: ${Theme.colors.bg3};
  text-decoration: none;
  &.active,
  &:hover {
    background: ${Theme.colors.bg};
    color: ${Theme.sizes.font};
    text-decoration: none;
  }
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.font};
  }
`;

const Link = styled.a`
  font-family: Roboto;
  color: ${Theme.colors.black};
  font-size: ${Theme.sizes.font};
  padding: 12.5px 17.5px;
  background: ${Theme.colors.bg3};
  text-decoration: none;
  &:hover {
    background: ${Theme.colors.bg};
    color: ${Theme.sizes.font};
    text-decoration: none;
  }
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.font};
  }
`;
const IconStyled = styled.span`
  margin-right: 11px;
  font-size: ${Theme.sizes.icon};
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.icon};
  }
`;

const IconMinStyled = styled.span`
  font-size: ${Theme.sizes.smallIcon};
  line-height: 14px;
  vertical-align: middle;
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.smallIcon};
  }
`;

const IconMaxStyled = styled.span`
  font-size: ${Theme.sizes.bigIcon};
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.bigIcon};
  }
`;

const FormStyled = styled.form`
  padding: 0 16px;
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid ${Theme.colors.grey};
  font-size: ${Theme.sizes.font};
  margin-bottom: 8px;
  border-radius: 4px;
  line-height: 1.3;
  font-family: Roboto;
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.font};
  }
`;
const Submit = styled.input`
  width: 100%;
  background: ${Theme.colors.blue};
  padding: 4px 0;
  font-weight: 500;
  color: ${Theme.colors.white};
  font-size: ${Theme.sizes.font};
  line-height: 1.75;
  border-radius: 4px;
  text-align: center;
  border: none;
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.font};
  }
`;
const NavigationItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background: ${Theme.colors.white};
`;
const NavigationItem = styled.li`
  padding: 11px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Divider = styled.hr`
  width: 100%;
  background: ${Theme.colors.grey};
  border: none;
  height: 1px;
`;
const GreyText = styled.span`
  padding: 0;
  margin: 0;
  color: ${Theme.colors.grey};
  font-size: ${Theme.sizes.font};
  padding-right: 16px;
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.font};
  }
`;
const CircleText = styled.span`
  color: ${Theme.colors.white};
  font-size: ${Theme.sizes.smallFont};
  padding: 1px 5px;
  border-radius: 8px;
  margin-right: 16px;
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.smallFont};
  }
`;
const CircleTextGreen = styled(CircleText)`
  background: ${Theme.colors.green};
`;
const CircleTextRed = styled(CircleText)`
  background: ${Theme.colors.red};
`;
const CommentsWrapper = styled.section`
`;
const CommentsRow = styled.div`
  margin-bottom: 21px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const CommentsImg = styled.img`
  width: 100%;
`;
const CommentTitle = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;
const CommentText = styled.p`
  font-size: ${Theme.sizes.font};
  color: ${Theme.colors.black};
  margin: 0;
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.font};
  }
`;
const CommentLink = styled.a`
  color: ${Theme.colors.blue};
  font-size: ${Theme.sizes.font};
  &:hover {
    color: ${Theme.colors.red};
  }
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.font};
  }
`;
const Comment = styled.div`
  border-left: 2px solid ${Theme.colors.grey};
  padding-left: 8px;
`;
const CommentDesc = styled.p`
  color: ${Theme.colors.black};
  font-size: ${Theme.sizes.font};
  margin-bottom: 16px;
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.font};
  }
`;
const CommentUser = styled.p`
  font-size: ${Theme.sizes.font};
  color: ${Theme.colors.second};
  margin-bottom: 0;
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.font};
  }
`;
const CommentsIcons = styled.div`
  display: flex;
`;
const CommentsIcon = styled.div`
  margin-right: 40px;
  font-size: ${Theme.sizes.font};
  color: ${Theme.colors.black};
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.font};
  }
`;
const ProfileWrapper = styled.section`
  background: ${Theme.colors.white};
  padding: 32px 50px 35px;
  margin-bottom: ${Theme.sizes.baseSize};
  text-align: center;
  @media ${Theme.media.lg} {
    padding: 22px 30px 25px;
    margin-bottom: ${Theme.lgSizes.baseSize};
  }
`;
const ProfilePhoto = styled.img`
  width: ${Theme.sizes.photo};
  height: ${Theme.sizes.photo};
  border-radius: 100%;
  @media ${Theme.media.lg} {
    width: ${Theme.lgSizes.photo};
    height: ${Theme.lgSizes.photo};
  }
`;
const ProfileName = styled.p`
  font-size: ${Theme.sizes.bigFont};
  color: ${Theme.colors.black};
  margin-bottom: 8px;
  text-align: center;
  margin-top: 16px;
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.bigFont};
  }
`;
const ProfileDesc = styled.p`
  font-size: ${Theme.sizes.font};
  color: ${Theme.colors.second};
  margin-bottom: 20px;
  text-align: center;
  margin-top: 0;
  @media ${Theme.media.lg} {
    font-size: ${Theme.lgSizes.font};
  }
`;
const ProfileSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileSocial = styled.a`
    text-decoration: none;
`;
const LoaderStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${Theme.colors.white};
  z-index: 2;
`;
const LoaderWrapper = styled.div`
position: relative;
  width: 100%;
  height: 100%;
`;

const LoaderImg = styled.img`
  height: ${Theme.sizes.loader};
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @media ${Theme.media.lg} {
    height: ${Theme.lgSizes.loader};
  }
`;

export class Icon extends React.Component {
    render () {
        let icon = 'icon-' + this.props.icon.toString();
        let size = this.props.size;
        switch (size) {
            case 'small':
            case 'min':
                return (
                    <IconMinStyled className={[icon, this.props.className].join(' ')}></IconMinStyled>
                ); break;
            case 'big':
            case 'max':
                return (
                    <IconMaxStyled className={[icon, this.props.className].join(' ')}></IconMaxStyled>
                ); break;
            default:
                return (
                    <IconStyled className={[icon, this.props.className].join(' ')}></IconStyled>
                ); break;
        }
    }
}
export default Icon;
const ProfileSocialIcon = styled(Icon)`
    margin-right: 0;
`;

export class LinkIcon extends React.Component {
    render () {
        let icon = this.props.icon.toString();
        let title = this.props.title.toString();
        let href = this.props.url.toString();
        return (
            <Link href={href} className={[icon, this.props.className].join(' ')}>
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
        return (
            <NavLinkStyled className={({ isActive }) => isActive ? 'active' : undefined} to={href}>
                <Icon icon={icon}></Icon>
                {title}
            </NavLinkStyled>
        )
    }
};

const LinkIconStyled = styled(LinkIcon)`
  padding: 0 16px;
  background: ${Theme.colors.white};
  &:hover {
    background: ${Theme.colors.white};
    color: ${Theme.colors.blue};
  }
`;

export class Form extends React.Component {
    render () {
        return(
            <FormStyled>
                <Textarea rows="4" placeholder="Enter your message..."></Textarea>
                <Submit type="submti" value="Save" />
            </FormStyled>
        );
    }
}

export class Navigation extends React.Component {
    render () {
        return(
            <div>
                <nav>
                    <NavigationItems>
                        <NavigationItem>
                            <LinkIconStyled icon="profile" title="My Profile" url="#"></LinkIconStyled>
                        </NavigationItem>
                        <NavigationItem>
                            <LinkIconStyled icon="balance" title="Balance" url="#"></LinkIconStyled>
                            <GreyText>$ 1.430</GreyText>
                        </NavigationItem>
                        <NavigationItem>
                            <LinkIconStyled icon="connections" title="Connections" url="#"></LinkIconStyled>
                            <CircleTextRed>29</CircleTextRed>
                        </NavigationItem>
                        <NavigationItem>
                            <LinkIconStyled icon="friends" title="Friends" url="#"></LinkIconStyled>
                        </NavigationItem>
                    </NavigationItems>
                </nav>
                <Divider></Divider>
                <nav>
                    <NavigationItems>
                        <NavigationItem>
                            <LinkIconStyled icon="events" title="Events" url="#"></LinkIconStyled>
                            <CircleTextGreen>45</CircleTextGreen>
                        </NavigationItem>
                        <NavigationItem>
                            <LinkIconStyled icon="settings" title="Account settings" url="#"></LinkIconStyled>
                        </NavigationItem>
                    </NavigationItems>
                </nav>
            </div>
        )
    }
}

export class Comments extends React.Component {
    render() {
        return (
            <CommentsWrapper>
                <CommentsRow>
                    <CommentsImg src={require('../img/abstract.jpg')} alt=""/>
                </CommentsRow>
                <CommentsRow>
                    <CommentTitle>
                        <Icon icon="comments"></Icon>
                        <CommentText><CommentLink href="#">Jason Anderson</CommentLink> commented:</CommentText>
                    </CommentTitle>
                    <Comment>
                        <CommentDesc>Don???t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face. </CommentDesc>
                        <CommentUser>??? Jason, <i>10:30 am</i></CommentUser>
                    </Comment>
                </CommentsRow>
                <CommentsRow>
                    <CommentsIcons>
                        <CommentsIcon>
                            <Icon icon="watch"></Icon>
                            432
                        </CommentsIcon>
                        <CommentsIcon>
                            <Icon icon="comments"></Icon>
                            47
                        </CommentsIcon>
                    </CommentsIcons>
                </CommentsRow>
            </CommentsWrapper>
        )
    }
}

export class Skills extends React.Component {
    render() {
        return (
        <div>
            <b>Front-End</b>
            <ul>
                <li>html</li>
                <li>css, less</li>
                <li>js</li>
                <li>jQuery</li>
                <li>ajax</li>
                <li>flex</li>
                <li>Bootstrap 3+</li>
                <li>???????????????????? ??????????????, pixel perfect</li>
            </ul>
            <b>Back-End</b>
            <ul>
                <li>PHP</li>
                <li>Ruby</li>
            </ul>
            <b>CMS</b>
            <ul>
                <li>Abante</li>
                <li>Bitix</li>
                <li>Wordpress</li>
                <li>Tilda</li>
            </ul>
            <b>????????????</b>
            <ul>
                <li>SQL</li>
                <li>Bitrix API</li>
                <li>Yandex Maps API</li>
                <li>Google Recaptcha</li>
                <li>?????????????????? ???????????????? ????????????</li>
                <li>Photoshop, Figma</li>
                <li>Insomnia</li>
            </ul>
        </div>
        )
    }
}

export class Profile extends React.Component {
    render() {
        return (
            <ProfileWrapper>
                <ProfilePhoto src={require('../img/photo.jpg')} alt="" />
                <ProfileName>?????????????????? ????????????????</ProfileName>
                <ProfileDesc>??????-??????????????????????</ProfileDesc>
                <ProfileSocials>
                    <ProfileSocial href="//t.me/heyanniemoran">
                        <ProfileSocialIcon icon="telegram"></ProfileSocialIcon>
                    </ProfileSocial>
                </ProfileSocials>
            </ProfileWrapper>
        )
    }
}

export class Loader extends React.Component {
    render() {
        return(
            <LoaderStyled>
                <LoaderWrapper>
                    <LoaderImg src={require('../img/preloader.svg').default} alt=""/>
                </LoaderWrapper>
            </LoaderStyled>
        )
    }
}