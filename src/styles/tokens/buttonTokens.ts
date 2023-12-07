import primitiveTokens from "./primitiveTokens";

const buttonTokens = {
  // Primary Button
  colorPrimaryText: primitiveTokens.colorWhite,
  colorPrimaryBG: primitiveTokens.colorBlue,
  colorPrimaryBGHover: primitiveTokens.colorBlue120,
  colorPrimaryBGActive: primitiveTokens.colorBlue140,
  colorPrimaryBGDisabled: primitiveTokens.colorIron,
  // Secondary Button
  colorSecondaryText: primitiveTokens.colorBlue,
  colorSecondaryTextHover: primitiveTokens.colorBlue120,
  colorSecondaryTextActive: primitiveTokens.colorBlue140,
  colorSecondaryTextDisabled: primitiveTokens.colorIron,
  colorSecondaryBG: primitiveTokens.colorWhite,
  colorSecondaryBGHover: primitiveTokens.colorPorcelain,
  colorSecondaryBGActive: primitiveTokens.colorIron,
  colorSecondaryBGDisabled: primitiveTokens.colorWhite,
  colorSecondaryBorder: primitiveTokens.colorBlue,
  colorSecondaryBorderHover: primitiveTokens.colorBlue120,
  colorSecondaryBorderActive: primitiveTokens.colorBlue140,
  widthSecondaryBorder: primitiveTokens.width1,
  // Tertiary Button
  colorTertiaryText: primitiveTokens.colorBlue,
  colorTertiaryTextHover: primitiveTokens.colorBlue120,
  colorTertiaryTextActive: primitiveTokens.colorBlue140,
  colorTertiaryTextDisabled: primitiveTokens.colorIron,
  // Border Radius
  borderRadiusXXSmall: primitiveTokens.borderRadius4,
  borderRadiusXSmall: primitiveTokens.borderRadius6,
  borderRadiusSmall: primitiveTokens.borderRadius8,
  borderRadiusMedium: primitiveTokens.borderRadius8,
  borderRadiusLarge: primitiveTokens.borderRadius8,
  // Font Size
  fontSizeXXSmall: primitiveTokens.fontSize10,
  fontSizeXSmall: primitiveTokens.fontSize12,
  fontSizeSmall: primitiveTokens.fontSize14,
  fontSizeMedium: primitiveTokens.fontSize16,
  fontSizeLarge: primitiveTokens.fontSize16,
  // Line Height
  lineHeightXXSmall: primitiveTokens.lineHeight14,
  lineHeightXSmall: primitiveTokens.lineHeight16,
  lineHeightSmall: primitiveTokens.lineHeight20,
  lineHeightMedium: primitiveTokens.lineHeight24,
  lineHeightLarge: primitiveTokens.lineHeight24,
  // Height
  heightXXSmall: primitiveTokens.width22,
  heightXSmall: primitiveTokens.width28,
  heightSmall: primitiveTokens.width32,
  heightMedium: primitiveTokens.width36,
  heightLarge: primitiveTokens.width48,
  // Min Width
  minWidthXXSmall: primitiveTokens.width64,
  minWidthXSmall: primitiveTokens.width64,
  minWidthSmall: primitiveTokens.width64,
  minWidthMedium: primitiveTokens.width80,
  minWidthLarge: primitiveTokens.width96,
  // Padding Left
  paddingXXSmall: `${primitiveTokens.width4} ${primitiveTokens.width8}`,
  paddingXSmall: `${primitiveTokens.width6} ${primitiveTokens.width10}`,
  paddingSmall: `${primitiveTokens.width6} ${primitiveTokens.width10}`,
  paddingMedium: `${primitiveTokens.width6} ${primitiveTokens.width12}`,
  paddingLarge: `${primitiveTokens.width12} ${primitiveTokens.width16}`,
};

export default buttonTokens;
