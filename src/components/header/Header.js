import Navbar from "./Navbar";
import {Icon, LinkIcon} from "../Generic";
import styled from "styled-components";
import { Theme } from "../Theme";
import { Container } from "../Wrappers";

const StyledIcon = styled(Icon)`
  // для работы вложенности
`;
const Header = styled.header`
    background: ${Theme.colors.bg3};
`;
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row;
`;
const NavListLi = styled.li`
  padding: 12.5px 0;
`;
const TopHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${Theme.colors.white};
`;
const TopHeaderTextStyled = styled.span`
    color: ${Theme.colors.black};
    font-size: ${Theme.sizes.font};
  cursor: pointer;
  margin-top: 11px
`;
const TopHeaderLinkStyled = styled.a`
    display: flex;
    flex-flow: column;
    align-items: center;
    text-decoration: none;
    margin-left: 32px;
    &:hover {
        text-decoration: none;
    }
    ${StyledIcon} {
      cursor: pointer;
    }
  &:hover ${TopHeaderTextStyled} {
    color: ${Theme.colors.blue};
  }
  &:first-child {
    margin-left: 0;
  }
`;
const BottomHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${Theme.colors.bg3};
`;
const TopHeaderIcons = styled.div`
  display: flex;
  align-items: baseline;
`;
const TopHeaderWrapper = styled.div`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 8px 0 11px;
  background: ${Theme.colors.white};
  z-index: 1;
  position: relative;
`;
const BottomHeaderWrapper = styled.div`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: relative;
`;
const GoToUserPages = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${Theme.colors.blue};
  }
  ${StyledIcon} {
    margin-right: 11px;
  }
`;
const GoToUserPagesLink = styled.p`
  color: ${Theme.colors.black};
  margin: 0;
`;

export default function HeaderContainer() {
    return(
        <Header>
            <TopHeaderWrapper>
                <Container>
                    <TopHeader>
                        <GoToUserPages href="#">
                            <StyledIcon icon="link_arrow"></StyledIcon>
                            <GoToUserPagesLink><b>User-Pages</b> - Profile</GoToUserPagesLink>
                        </GoToUserPages>
                        <TopHeaderIcons>
                            <TopHeaderLinkStyled href="#">
                                <StyledIcon size="big" icon="statistics"></StyledIcon>
                                <TopHeaderTextStyled>Statistics</TopHeaderTextStyled>
                            </TopHeaderLinkStyled>
                            <TopHeaderLinkStyled href="#">
                                <StyledIcon size="big" icon="invoices"></StyledIcon>
                                <TopHeaderTextStyled>Invoices</TopHeaderTextStyled>
                            </TopHeaderLinkStyled>
                            <TopHeaderLinkStyled href="#">
                                <StyledIcon size="big" icon="schedule"></StyledIcon>
                                <TopHeaderTextStyled>Schedule</TopHeaderTextStyled>
                            </TopHeaderLinkStyled>
                        </TopHeaderIcons>
                    </TopHeader>
                </Container>
            </TopHeaderWrapper>
            <BottomHeaderWrapper>
                <Container>
                    <BottomHeader>
                        <Navbar/>
                        <nav>
                            <NavList>
                                <NavListLi>
                                    <LinkIcon icon="notes" title="Notes" url="#"></LinkIcon>
                                </NavListLi>
                                <NavListLi>
                                    <LinkIcon icon="friends" title="Friends" url="#"></LinkIcon>
                                </NavListLi>
                                <NavListLi>
                                    <LinkIcon icon="photos" title="Photos" url="#"></LinkIcon>
                                </NavListLi>
                                <NavListLi>
                                    <LinkIcon icon="settings" title="" url="#"></LinkIcon>
                                </NavListLi>
                                <NavListLi>
                                    <Icon size="small" icon="chevron_down"></Icon>
                                </NavListLi>
                            </NavList>
                        </nav>
                    </BottomHeader>
                </Container>
            </BottomHeaderWrapper>
        </Header>
    )
}