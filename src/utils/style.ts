type Variables = {
  [key: string]: string | number
}

export const color: Variables = {
  base: '#323232',
  theme: '#2ba7d2',
  secondary: '#10a87b',
  border: '#d0d0d0',
  notice: '#ababab',
  bg: '#f9f9f9',
  caution: '#c50c0c'
}

export const font: Variables = {
  familyJa:
    "'Open Sans', '游ゴシック Medium', 'Yu Gothic Medium', '游ゴシック体', YuGothic, 'ヒラギノ角ゴ ProN W3', Hiragino Kaku Gothic ProN, Arial, 'メイリオ', Meiryo, sans-serif",
  sizePc: '1.6rem',
  sizeSp: '1.5rem',
  lineHeightPc: '1.9',
  lineHeightSp: '1.7'
}

export const animation: Variables = {
  easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)'
}

export const width: Variables = {
  maxWidth: '1024px'
}

export const breakPoint: Variables = {
  sp: 767,
  pc: 884
}

export const mediaQuery: Variables = {
  pc: `@media screen and (min-width: ${Number(breakPoint.sp) + 1}px)`,
  sp: `@media screen and (max-width: ${breakPoint.sp}px)`
}
