import { Icon } from "@chakra-ui/react";

function Cards() {
  return (
    <Icon
      width='201'
      height='162'
      viewBox='0 0 201 162'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_dd_657_6838)'>
        <rect
          x='8'
          y='4'
          width='185'
          height='146'
          rx='16'
          fill='url(#pattern0)'
        />
      </g>
      <defs>
        <filter
          id='filter0_dd_657_6838'
          x='0'
          y='0'
          width='201'
          height='162'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='4' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_657_6838'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='2' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_dropShadow_657_6838'
            result='effect2_dropShadow_657_6838'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect2_dropShadow_657_6838'
            result='shape'
          />
        </filter>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'>
          <use transform='matrix(0.0027638 -0.000958065 0.000740558 0.00357555 -0.397901 -0.142381)' />
        </pattern>
        <image id='image0_657_6838' width='500' height='500' />
      </defs>
    </Icon>
  );
}

export default Cards;
