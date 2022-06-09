import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import { Theme } from "./Theme";

export const Wrapper = styled.div`
    background: ${Theme.colors.bg2};
`;

export const MainWrapper = styled.main`
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
`;

export const Col9 = styled.div`
`;

export const Col3 = styled.div`
`;

export const Dropdown = styled.div`
`;