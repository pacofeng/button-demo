"use strict";(self.webpackChunkbutton_demo_dls=self.webpackChunkbutton_demo_dls||[]).push([[7170],{"./node_modules/@mui/material/Switch/Switch.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Switch_Switch});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),SwitchBase=__webpack_require__("./node_modules/@mui/material/internal/SwitchBase.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSwitchUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSwitch",slot)}const Switch_switchClasses=(0,generateUtilityClasses.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","color","edge","size","sx"],SwitchRoot=(0,styled.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.edge&&styles[`edge${(0,capitalize.Z)(ownerState.edge)}`],styles[`size${(0,capitalize.Z)(ownerState.size)}`]]}})((({ownerState})=>(0,esm_extends.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===ownerState.edge&&{marginLeft:-8},"end"===ownerState.edge&&{marginRight:-8},"small"===ownerState.size&&{width:40,height:24,padding:7,[`& .${Switch_switchClasses.thumb}`]:{width:16,height:16},[`& .${Switch_switchClasses.switchBase}`]:{padding:4,[`&.${Switch_switchClasses.checked}`]:{transform:"translateX(16px)"}}}))),SwitchSwitchBase=(0,styled.ZP)(SwitchBase.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.switchBase,{[`& .${Switch_switchClasses.input}`]:styles.input},"default"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`]]}})((({theme})=>({position:"absolute",top:0,left:0,zIndex:1,color:theme.vars?theme.vars.palette.Switch.defaultColor:`${"light"===theme.palette.mode?theme.palette.common.white:theme.palette.grey[300]}`,transition:theme.transitions.create(["left","transform"],{duration:theme.transitions.duration.shortest}),[`&.${Switch_switchClasses.checked}`]:{transform:"translateX(20px)"},[`&.${Switch_switchClasses.disabled}`]:{color:theme.vars?theme.vars.palette.Switch.defaultDisabledColor:`${"light"===theme.palette.mode?theme.palette.grey[100]:theme.palette.grey[600]}`},[`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]:{opacity:.5},[`&.${Switch_switchClasses.disabled} + .${Switch_switchClasses.track}`]:{opacity:theme.vars?theme.vars.opacity.switchTrackDisabled:""+("light"===theme.palette.mode?.12:.2)},[`& .${Switch_switchClasses.input}`]:{left:"-100%",width:"300%"}})),(({theme,ownerState})=>(0,esm_extends.Z)({"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette.action.active,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==ownerState.color&&{[`&.${Switch_switchClasses.checked}`]:{color:(theme.vars||theme).palette[ownerState.color].main,"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Switch_switchClasses.disabled}`]:{color:theme.vars?theme.vars.palette.Switch[`${ownerState.color}DisabledColor`]:`${"light"===theme.palette.mode?(0,colorManipulator.$n)(theme.palette[ownerState.color].main,.62):(0,colorManipulator._j)(theme.palette[ownerState.color].main,.55)}`}},[`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]:{backgroundColor:(theme.vars||theme).palette[ownerState.color].main}}))),SwitchTrack=(0,styled.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(props,styles)=>styles.track})((({theme})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:theme.transitions.create(["opacity","background-color"],{duration:theme.transitions.duration.shortest}),backgroundColor:theme.vars?theme.vars.palette.common.onBackground:`${"light"===theme.palette.mode?theme.palette.common.black:theme.palette.common.white}`,opacity:theme.vars?theme.vars.opacity.switchTrack:""+("light"===theme.palette.mode?.38:.3)}))),SwitchThumb=(0,styled.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(props,styles)=>styles.thumb})((({theme})=>({boxShadow:(theme.vars||theme).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),Switch_Switch=react.forwardRef((function Switch(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSwitch"}),{className,color="primary",edge=!1,size="medium",sx}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{color,edge,size}),classes=(ownerState=>{const{classes,edge,size,color,checked,disabled}=ownerState,slots={root:["root",edge&&`edge${(0,capitalize.Z)(edge)}`,`size${(0,capitalize.Z)(size)}`],switchBase:["switchBase",`color${(0,capitalize.Z)(color)}`,checked&&"checked",disabled&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},composedClasses=(0,composeClasses.Z)(slots,getSwitchUtilityClass,classes);return(0,esm_extends.Z)({},classes,composedClasses)})(ownerState),icon=(0,jsx_runtime.jsx)(SwitchThumb,{className:classes.thumb,ownerState});return(0,jsx_runtime.jsxs)(SwitchRoot,{className:(0,clsx.Z)(classes.root,className),sx,ownerState,children:[(0,jsx_runtime.jsx)(SwitchSwitchBase,(0,esm_extends.Z)({type:"checkbox",icon,checkedIcon:icon,ref,ownerState},other,{classes:(0,esm_extends.Z)({},classes,{root:classes.switchBase})})),(0,jsx_runtime.jsx)(SwitchTrack,{className:classes.track,ownerState})]})}))},"./src/components/Switch-GUI/Switch-GUI.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultChecked:()=>DefaultChecked,DefaultDisabledChecked:()=>DefaultDisabledChecked,DefaultDisabledUnchecked:()=>DefaultDisabledUnchecked,DefaultUnchecked:()=>DefaultUnchecked,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Switch_GUI_stories});var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Switch=__webpack_require__("./node_modules/@mui/material/Switch/Switch.js");const Switch_Switch=(0,styled.ZP)(Switch.Z)((()=>({height:24,width:48,padding:1,marginRight:14,"& .MuiSwitch-track":{backgroundColor:"#868b8c",opacity:1,borderRadius:100,"&.Mui-disabled":{backgroundColor:"#d6d8da !important"}},"& .MuiSwitch-switchBase":{margin:-7},"& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track":{backgroundColor:"#13426B",opacity:1,"&:hover":{backgroundColor:"#0f3556"},"&:disabled":{backgroundColor:"#d6d8da"}},"& .MuiSwitch-switchBase.Mui-checked":{marginLeft:-4,color:"#ffffff"},"&:hover.MuiSwitch-track":{backgroundColor:"#444444"}}))),Switch_GUI_Switch=Switch_Switch;try{Switch_Switch.displayName="Switch",Switch_Switch.__docgenInfo={description:"",displayName:"Switch",props:{checkedIcon:{defaultValue:null,description:"The icon to display when the component is checked.",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SwitchClasses>"}},color:{defaultValue:{value:"'primary'"},description:"The color of the component.\nIt supports both default and custom theme colors, which can be added as shown in the\n[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).",name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"default"'}]}},disabled:{defaultValue:null,description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"The icon to display when the component is unchecked.",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense switch styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:'The value of the component. The DOM API casts this to a string.\nThe browser uses "on" as the default value.',name:"value",required:!1,type:{name:"unknown"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:null,description:"The default checked state. Use when the component is not controlled.",name:"defaultChecked",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},required:{defaultValue:{value:"false"},description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},disableFocusRipple:{defaultValue:{value:"false"},description:"If `true`, the  keyboard focus ripple is disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},edge:{defaultValue:{value:"false"},description:"If given, uses a negative margin to counteract the padding on one\nside (this is often helpful for aligning the left or right\nside of the icon with content above or below, without ruining the border\nsize and shape).",name:"edge",required:!1,type:{name:'false | "end" | "start"'}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch-GUI/Switch.tsx#Switch"]={docgenInfo:Switch_Switch.__docgenInfo,name:"Switch",path:"src/components/Switch-GUI/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}var FormControl=__webpack_require__("./src/components/FormControl/FormControl.tsx"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Switch_GUI_stories={title:"Components/Switch GUI",component:FormControlLabel.Z,tags:["autodocs"]},DefaultUnchecked={render:()=>(0,jsx_runtime.jsx)(FormControl.Z,{children:(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(Switch_GUI_Switch,{color:"secondary"}),label:"Switch"})})},DefaultChecked={render:()=>(0,jsx_runtime.jsx)(FormControl.Z,{children:(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(Switch_GUI_Switch,{defaultChecked:!0,color:"secondary"}),label:"Switch"})})},DefaultDisabledUnchecked={render:()=>(0,jsx_runtime.jsx)(FormControl.Z,{children:(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(Switch_GUI_Switch,{disabled:!0,color:"secondary"}),label:"Switch"})})},DefaultDisabledChecked={render:()=>(0,jsx_runtime.jsx)(FormControl.Z,{children:(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(Switch_GUI_Switch,{disabled:!0,defaultChecked:!0,color:"secondary"}),label:"Switch"})})};DefaultUnchecked.parameters={...DefaultUnchecked.parameters,docs:{...DefaultUnchecked.parameters?.docs,source:{originalSource:'{\n  render: () => <FormControl>\n      <FormControlLabel control={<Switch color="secondary" />} label="Switch" />\n    </FormControl>\n}',...DefaultUnchecked.parameters?.docs?.source}}},DefaultChecked.parameters={...DefaultChecked.parameters,docs:{...DefaultChecked.parameters?.docs,source:{originalSource:'{\n  render: () => <FormControl>\n      <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Switch" />\n    </FormControl>\n}',...DefaultChecked.parameters?.docs?.source}}},DefaultDisabledUnchecked.parameters={...DefaultDisabledUnchecked.parameters,docs:{...DefaultDisabledUnchecked.parameters?.docs,source:{originalSource:'{\n  render: () => <FormControl>\n      <FormControlLabel control={<Switch disabled color="secondary" />} label="Switch" />\n    </FormControl>\n}',...DefaultDisabledUnchecked.parameters?.docs?.source}}},DefaultDisabledChecked.parameters={...DefaultDisabledChecked.parameters,docs:{...DefaultDisabledChecked.parameters?.docs,source:{originalSource:'{\n  render: () => <FormControl>\n      <FormControlLabel control={<Switch disabled defaultChecked color="secondary" />} label="Switch" />\n    </FormControl>\n}',...DefaultDisabledChecked.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultUnchecked","DefaultChecked","DefaultDisabledUnchecked","DefaultDisabledChecked"]},"./src/components/FormControl/FormControl.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/FormControl/FormControl.js");const FormControl=(0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Z)((props=>({display:!0===props.hidden?"none":"","& .MuiOutlinedInput-root":{"&fieldset":{borderColor:"#868b8c",color:"#5b636b"},"&:hover fieldset":{borderColor:"#444444"},"&.Mui-focused fieldset":{borderColor:"#13426b",color:"#333d47"},"&.Mui-error fieldset":{borderColor:"#cf1f38"},"&.Mui-disabled fieldset":{borderColor:"#868b8c",backgroundColor:"#f7f7f8"}}}))),__WEBPACK_DEFAULT_EXPORT__=FormControl;try{FormControl.displayName="FormControl",FormControl.__docgenInfo={description:"",displayName:"FormControl",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormControlClasses> & Partial<ClassNameMap<never>>"}},color:{defaultValue:{value:"'primary'"},description:"The color of the component.\nIt supports both default and custom theme colors, which can be added as shown in the\n[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).",name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},disabled:{defaultValue:{value:"false"},description:"If `true`, the label, input and helper text should be displayed in a disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"If `true`, the label is displayed in an error state.",name:"error",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the component will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},focused:{defaultValue:null,description:"If `true`, the component is displayed in focused state.",name:"focused",required:!1,type:{name:"boolean"}},hiddenLabel:{defaultValue:{value:"false"},description:"If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.",name:"hiddenLabel",required:!1,type:{name:"boolean"}},margin:{defaultValue:{value:"'none'"},description:"If `dense` or `normal`, will adjust vertical spacing of this and contained components.",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"dense"'},{value:'"normal"'}]}},required:{defaultValue:{value:"false"},description:"If `true`, the label will indicate that the `input` is required.",name:"required",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'outlined'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'},{value:'"standard"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormControl/FormControl.tsx#FormControl"]={docgenInfo:FormControl.__docgenInfo,name:"FormControl",path:"src/components/FormControl/FormControl.tsx#FormControl"})}catch(__react_docgen_typescript_loader_error){}}}]);