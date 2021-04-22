/**
 * Following fonts will be loaded and cached in async while <AppLoading/>
 * Detail please check src/root.js
 */
const customFonts = {
  'Montserrat-Regular': require('Assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Black': require('Assets/fonts/Montserrat-Black.ttf'),
  'Montserrat-Medium': require('Assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-SemiBold': require('Assets/fonts/Montserrat-SemiBold.ttf'),
  'Montserrat-Bold': require('Assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Italic': require('Assets/fonts/Montserrat-Italic.ttf'),
  'OpenSans-Regular': require('Assets/fonts/OpenSans-Regular.ttf'),
  'Montserrat-Italic': require('Assets/fonts/Montserrat-Italic.ttf'),
  'GreatVibes-Regular': require('Assets/fonts/GreatVibes-Regular.ttf'),
};
const type = {
  primary: 'Montserrat-Regular',
  secondary: 'OpenSans-Regular',
  black: 'Montserrat-Black',
  medium: 'Montserrat-Medium',
  bold: 'Montserrat-Bold',
  semi: 'Montserrat-SemiBold',
  extra: 'Montserrat-ExtraBold',
  stylish: 'GreatVibes-Regular',
  italic: 'Montserrat-Italic',
};

const Fonts = { customFonts, type };

export default Fonts;
