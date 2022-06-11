import React, {Component, useEffect, useState} from 'react';
import styled, { css } from 'styled-components';
import { Theme } from "./Theme";
import useCollapse from 'react-collapsed';
import {Icon, LinkIcon} from "./Generic";

export const Wrapper = styled.div`
  background: ${Theme.colors.bg2};
`;

export const MainWrapper = styled.div`
  padding: 32px 0;
  height: 100%;
  background: ${Theme.colors.bg};
`;

export const Container = styled.div`
  width: 1312px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  @media ${Theme.media.xxl} {
    width: 1072px;
  }
  @media ${Theme.media.xl} {
    width: 864px;
  }
  @media ${Theme.media.lg} {
    width: 640px;
  }
  @media ${Theme.media.md} {
    width: 447px;
  }
  @media ${Theme.media.sm} {
    width: 100%;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
  justify-items: stretch;
  align-items: start;
`;

export const Col12 = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
`;
export const Col9 = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;

export const Col3 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
`;

const TabWrapper = styled.section`
  width: 100%;
  margin-bottom: 32px;
  background: ${Theme.colors.white};
`;
const TabButton = styled.button`
  width: 100%;
  border: none;
  padding: 18px 32px;
  font-family: Roboto;
  background: ${Theme.colors.white};
`;
const TabButtonBordered = styled(TabButton)`
  padding: 8px 16px;
`;
const TabButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TabButtonText = styled.p`
  font-weight: 400;
  font-size: ${Theme.sizes.fontTab};
  color: ${Theme.colors.black};
  margin: 0;
`;
const TabButtonTextBold = styled(TabButtonText)`
    font-weight: 500;
`;
const TabButtonRight = styled.div`
  display: flex;
  align-items: center;
`;
const TabButtonTime = styled.div`
  display: flex;
  align-items: center;
  margin-right: 21px;
`;
const TabContent = styled.div`
  padding: 18px 32px 32px;
`;
const TabContentBordered = styled(TabContent)`
  padding: 8px 0 16px;
  border-top: 1px solid ${Theme.colors.grey};
`;

export default function Tab(props) {

    const [isExpanded, setExpanded] = useState(props.closed);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    let time_block;
    if (!props.time) {
        time_block = (<TabButtonRight>
                    {isExpanded ? <Icon icon="chevron_up" size="min"></Icon> : <Icon icon="chevron_down" size="min"></Icon>}
                    </TabButtonRight>
        );
    } else {
        time_block = (
            <TabButtonRight>
                <TabButtonTime>
                    <Icon icon="time"></Icon>
                <TabButtonText>{props.time}</TabButtonText>
                </TabButtonTime>{isExpanded ? <Icon icon="chevron_up" size="min"></Icon> : <Icon icon="chevron_down" size="min"></Icon>}
            </TabButtonRight>
        );
    }
    if (props.type == "bordered") {
        return (
            <TabWrapper>
                <TabButtonBordered
                    {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })}
                >
                    <TabButtonContent>
                        <TabButtonTextBold>{props.title}</TabButtonTextBold>
                        {time_block}
                    </TabButtonContent>
                </TabButtonBordered>
                <TabContentBordered {...getCollapseProps()}>
                    {props.text}
                </TabContentBordered>
            </TabWrapper>
        );
    } else {
        return (
            <TabWrapper>
                <TabButton
                    {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })}
                >
                    <TabButtonContent>
                        <TabButtonText>{props.title}</TabButtonText>
                        {time_block}
                    </TabButtonContent>
                </TabButton>
                <TabContent {...getCollapseProps()}>
                    {props.text}
                </TabContent>
            </TabWrapper>
        );
    }
}