import React, {Component} from 'react';
import styled, { css } from 'styled-components'

export const Theme = {
    colors: {
        blue: '#5095EC',
        black: '#505050',
        second: '#8F8F8F',
        grey: '#D3D8DE',
        bg: '#F1F1F1',
        white: '#FFFFFF',
        b2: '#FAFAFA',
        b2: '#F7F7F7',
        red: '#E33939',
        green: '#47B091'
    },
    media: {
        xxl: '(max-width: 1400px)',
        xl: '(max-width: 1200px)',
        lg: '(max-width: 992px)',
        md: '(max-width: 768px)',
        sm: '(max-width: 576px)',
        xs: '(max-width: 460px)',
        xxs: '(max-width: 400px)'
    },
    sizes: {
        titleLink: '18px',
        navLink: '14px',
        icon: '15px',
        bigIcon: '18px',
        smallIcon: '8px',
        font: '14px',
        bigFont: '18px',
        smallFont: '12px',
        loader: '125px',
        photo: '132px'
    },
    mdSizes: {
        titleLink: '16px',
        navLink: '12px',
        icon: '12px',
        bigIcon: '15px',
        smallIcon: '6px',
        font: '12px',
        bigFont: '16px',
        smallFont: '10px',
        loader: '80px',
        photo: '100px'
    }
};