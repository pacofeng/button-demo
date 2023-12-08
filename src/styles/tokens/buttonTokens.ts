import primitiveTokens from "./primitiveTokens";

const buttonTokens = {
  // Primary Button
  colorButtonPrimaryText: primitiveTokens.colorWhite,
  colorButtonPrimaryBG: primitiveTokens.colorBlue,
  colorButtonPrimaryBGHover: primitiveTokens.colorBlue120,
  colorButtonPrimaryBGActive: primitiveTokens.colorBlue140,
  colorButtonPrimaryBGDisabled: primitiveTokens.colorIron,
  // Secondary Button
  colorButtonSecondaryText: primitiveTokens.colorBlue,
  colorButtonSecondaryTextHover: primitiveTokens.colorBlue120,
  colorButtonSecondaryTextActive: primitiveTokens.colorBlue140,
  colorButtonSecondaryTextDisabled: primitiveTokens.colorIron,
  colorButtonSecondaryBG: primitiveTokens.colorWhite,
  colorButtonSecondaryBGHover: primitiveTokens.colorPorcelain,
  colorButtonSecondaryBGActive: primitiveTokens.colorIron,
  colorButtonSecondaryBGDisabled: primitiveTokens.colorWhite,
  colorButtonSecondaryBorder: primitiveTokens.colorBlue,
  colorButtonSecondaryBorderHover: primitiveTokens.colorBlue120,
  colorButtonSecondaryBorderActive: primitiveTokens.colorBlue140,
  shapeButtonWidthSecondaryBorder: primitiveTokens.width1,
  // Tertiary Button
  colorButtonTertiaryText: primitiveTokens.colorBlue,
  colorButtonTertiaryTextHover: primitiveTokens.colorBlue120,
  colorButtonTertiaryTextActive: primitiveTokens.colorBlue140,
  colorButtonTertiaryTextDisabled: primitiveTokens.colorIron,
  // Border Radius
  shapeButtonBorderRadiusXXSmall: primitiveTokens.borderRadius4,
  shapeButtonBorderRadiusXSmall: primitiveTokens.borderRadius6,
  shapeButtonBorderRadiusSmall: primitiveTokens.borderRadius8,
  shapeButtonBorderRadiusMedium: primitiveTokens.borderRadius8,
  shapeButtonBorderRadiusLarge: primitiveTokens.borderRadius8,
  // Font Size
  fontButtonSizeXXSmall: primitiveTokens.fontSize10,
  fontButtonSizeXSmall: primitiveTokens.fontSize12,
  fontButtonSizeSmall: primitiveTokens.fontSize14,
  fontButtonSizeMedium: primitiveTokens.fontSize16,
  fontButtonSizeLarge: primitiveTokens.fontSize16,
  // Line Height
  fontButtonLineHeightXXSmall: primitiveTokens.lineHeight14,
  fontButtonLineHeightXSmall: primitiveTokens.lineHeight16,
  fontButtonLineHeightSmall: primitiveTokens.lineHeight20,
  fontButtonLineHeightMedium: primitiveTokens.lineHeight24,
  fontButtonLineHeightLarge: primitiveTokens.lineHeight24,
  // Height
  shapeButtonHeightXXSmall: primitiveTokens.width22,
  shapeButtonHeightXSmall: primitiveTokens.width28,
  shapeButtonHeightSmall: primitiveTokens.width32,
  shapeButtonHeightMedium: primitiveTokens.width36,
  shapeButtonHeightLarge: primitiveTokens.width48,
  // Min Width
  shapeButtonMinWidthXXSmall: primitiveTokens.width64,
  shapeButtonMinWidthXSmall: primitiveTokens.width64,
  shapeButtonMinWidthSmall: primitiveTokens.width64,
  shapeButtonMinWidthMedium: primitiveTokens.width80,
  shapeButtonMinWidthLarge: primitiveTokens.width96,
  // Padding
  shapeButtonPaddingXXSmall: `${primitiveTokens.width4} ${primitiveTokens.width8}`,
  shapeButtonPaddingXSmall: `${primitiveTokens.width6} ${primitiveTokens.width10}`,
  shapeButtonPaddingSmall: `${primitiveTokens.width6} ${primitiveTokens.width10}`,
  shapeButtonPaddingMedium: `${primitiveTokens.width6} ${primitiveTokens.width12}`,
  shapeButtonPaddingLarge: `${primitiveTokens.width12} ${primitiveTokens.width16}`,
};

export default buttonTokens;
