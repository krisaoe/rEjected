import React from 'react'

export default function SVGAutobot({ size=40, fill='#00beff', viewSize=360 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}px`} height={`${size}px`} viewBox={`0 0 ${viewSize} ${viewSize}`} fill={fill}>
      {/* <g fill={props.fill || "red"}> */}
      <g>
        <path d="M0 28l22 105 55 40 67 11-9-69-70-45-5-35zm30 37l75 50 5 15-75-50zm10 30l75 50 5 15-75-50zM360 28.043l-22 105-55 40-67 11 9-69L295 70l5-35zm-30 37l-75 50-5 15 75-50zm-10 30l-75 50-5 15 75-50zM95 326l-60-60-9-117 41 31v16l28 20zM145 195l-39 21v121l18 18 21-50h70l21 50 18-18V216l-39-21v87h-70z" />
        <path d="M205 271v-85l10-66-35 25-35-25 10 66v85h25" />
        <path d="M180 8c-15 0-35 2-65 8S70 30 70 30l5 30 105 70 105-70 5-30s-15-8-45-14-50-8-65-8zm-61 42h122l-61 40zM150 315h60l15 45h-90zM265 326l60-60 9-117-41 31v16l-28 20z" />
      </g>
    </svg>
  )
}
