var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as v from "../../styles/variables";
var defaultRectSizeStyle = {
    small: {
        height: "32px",
        minWidth: "64px",
        padding: "6px 10px",
    },
    medium: {
        height: "36px",
        minWidth: "80px",
        padding: "6px 12px",
    },
    large: {
        height: "48px",
        minWidth: "96px",
        padding: "12px 16px",
    },
};
var defaultFontSizeStyle = {
    small: {
        fontSize: "14px",
    },
    medium: {
        fontSize: "16px",
    },
    large: {
        fontSize: "16px",
    },
};
var defaultVariantStyle = {
    primary: {
        backgroundColor: v.primaryColors.blue,
        color: v.monoColors.ffffff,
        border: "none",
    },
    secondary: {
        backgroundColor: v.monoColors.ffffff,
        color: v.primaryColors.blue,
        border: "1px solid ".concat(v.primaryColors.blue),
    },
    tertiary: {
        background: "none",
        color: v.primaryColors.blue,
        border: "none",
        textUnderlineOffset: "4px",
    },
};
var hoverVariantStyle = {
    primary: {
        backgroundColor: v.primaryColors.blue120,
    },
    secondary: {
        backgroundColor: v.monoColors.eeeff0,
        borderColor: v.primaryColors.blue120,
    },
    tertiary: {
        background: "none",
        color: v.primaryColors.blue120,
        textDecoration: "underline",
    },
};
var activeVariantStyle = {
    primary: {
        backgroundColor: v.primaryColors.blue140,
    },
    secondary: {
        backgroundColor: v.monoColors.d6d8da,
        borderColor: v.primaryColors.blue140,
    },
    tertiary: {
        color: v.primaryColors.blue140,
        textDecoration: "underline",
    },
};
var disabledVariantStyle = {
    primary: {
        backgroundColor: v.monoColors.d6d8da,
    },
    secondary: {
        backgroundColor: v.monoColors.ffffff,
        color: v.monoColors.d6d8da,
        borderColor: v.monoColors.d6d8da,
    },
    tertiary: {
        color: v.monoColors.d6d8da,
        textDecoration: "none",
    },
};
var style = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "medium" : _b, _c = _a.variant, variant = _c === void 0 ? "primary" : _c;
    return __assign(__assign(__assign(__assign({ borderRadius: v.border.radius, letterSpacing: "0.1px", cursor: "pointer", display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "4px", "text-transform": "initial" }, defaultFontSizeStyle[size]), (variant === "tertiary" ? { padding: 0 } : defaultRectSizeStyle[size])), defaultVariantStyle[variant]), { "&:focus, &:focus-visible": {
            outline: "none",
        }, "&.disabled, &[disabled]": {
            cursor: "not-allowed",
            boxShadow: "none",
        }, "&:hover": __assign({}, hoverVariantStyle[variant]), "&:active": __assign({}, activeVariantStyle[variant]), "&[disabled]": __assign({}, disabledVariantStyle[variant]) });
};
export default style;
