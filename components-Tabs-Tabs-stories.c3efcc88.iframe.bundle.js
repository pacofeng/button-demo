"use strict";(self.webpackChunkbutton_demo_dls=self.webpackChunkbutton_demo_dls||[]).push([[620],{"./src/components/Tabs/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultLarge:()=>DefaultLarge,DefaultMedium:()=>DefaultMedium,DefaultSmall:()=>DefaultSmall,LargeWithDisabled:()=>LargeWithDisabled,LargeWithIcon:()=>LargeWithIcon,MediumWithDisabled:()=>MediumWithDisabled,MediumWithIcon:()=>MediumWithIcon,SmallWithDisabled:()=>SmallWithDisabled,SmallWithIcon:()=>SmallWithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Tabs=__webpack_require__("./node_modules/@mui/material/Tabs/Tabs.js");const Tabs_Tabs=(0,styled.ZP)(Tabs.Z)((props=>({fontFamily:"'FS Elliot Pro', Arial",minHeight:"auto",".MuiTabs-indicator":{backgroundColor:"#13426B",height:3},".MuiTab-root":{..."small"===props.size&&{fontSize:10,height:28,lineHeight:"14px",".MuiSvgIcon-root":{fontSize:12}},...("medium"===props.size||!props.size)&&{fontSize:12,height:32,lineHeight:"16px",".MuiSvgIcon-root":{fontSize:16}},..."large"===props.size&&{fontSize:14,height:36,lineHeight:"20px",".MuiSvgIcon-root":{fontSize:16}}}}))),components_Tabs_Tabs=Tabs_Tabs;try{Tabs_Tabs.displayName="Tabs",Tabs_Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},action:{defaultValue:null,description:"Callback fired when the component mounts.\nThis is useful when you want to trigger an action programmatically.\nIt supports two actions: `updateIndicator()` and `updateScrollButtons()`\n@param actions This object contains all possible actions\nthat can be triggered programmatically.",name:"action",required:!1,type:{name:"Ref<TabsActions>"}},allowScrollButtonsMobile:{defaultValue:{value:"false"},description:"If `true`, the scroll buttons aren't forced hidden on mobile.\nBy default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.",name:"allowScrollButtonsMobile",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"The label for the Tabs as a string.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"An id or list of ids separated by a space that label the Tabs.",name:"aria-labelledby",required:!1,type:{name:"string"}},centered:{defaultValue:{value:"false"},description:"If `true`, the tabs are centered.\nThis prop is intended for large views.",name:"centered",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TabsClasses> & Partial<ClassNameMap<never>>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"{ StartScrollButtonIcon?: ElementType<any>; EndScrollButtonIcon?: ElementType<any>; }"}},slotProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.",name:"slotProps",required:!1,type:{name:'{ startScrollButtonIcon?: SlotComponentProps<OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }, TabsStartScrollButtonIconSlotPropsOverrides, TabsOwnerState>; endScrollButtonIcon?: SlotComponentProps<...>; }'}},indicatorColor:{defaultValue:{value:"'primary'"},description:"Determines the color of the indicator.",name:"indicatorColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},onChange:{defaultValue:null,description:"Callback fired when the value changes.\n@param event The event source of the callback. **Warning**: This is a generic event not a change event.\n@param value We default to the index of the child (number)",name:"onChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, value: any) => void"}},orientation:{defaultValue:{value:"'horizontal'"},description:"The component orientation (layout flow direction).",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},ScrollButtonComponent:{defaultValue:{value:"TabScrollButton"},description:"The component used to render the scroll buttons.",name:"ScrollButtonComponent",required:!1,type:{name:"ElementType<any>"}},scrollButtons:{defaultValue:{value:"'auto'"},description:"Determine behavior of scroll buttons when tabs are set to scroll:\n\n- `auto` will only present them when not all the items are visible.\n- `true` will always present them.\n- `false` will never present them.\n\nBy default the scroll buttons are hidden on mobile.\nThis behavior can be disabled with `allowScrollButtonsMobile`.",name:"scrollButtons",required:!1,type:{name:'boolean | "auto"'}},selectionFollowsFocus:{defaultValue:null,description:"If `true` the selected tab changes on focus. Otherwise it only\nchanges on activation.",name:"selectionFollowsFocus",required:!1,type:{name:"boolean"}},TabIndicatorProps:{defaultValue:{value:"{}"},description:"Props applied to the tab indicator element.",name:"TabIndicatorProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> & { sx?: SxProps<Theme>; }"}},TabScrollButtonProps:{defaultValue:{value:"{}"},description:"Props applied to the [`TabScrollButton`](/material-ui/api/tab-scroll-button/) element.",name:"TabScrollButtonProps",required:!1,type:{name:"Partial<TabScrollButtonProps>"}},textColor:{defaultValue:{value:"'primary'"},description:"Determines the color of the `Tab`.",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'}]}},value:{defaultValue:null,description:"The value of the currently selected `Tab`.\nIf you don't want any selected `Tab`, you can set this prop to `false`.",name:"value",required:!1,type:{name:"any"}},variant:{defaultValue:{value:"'standard'"},description:"Determines additional display behavior of the tabs:\n\n- `scrollable` will invoke scrolling properties and allow for horizontally\nscrolling (or swiping) of the tab bar.\n- `fullWidth` will make the tabs grow to use all the available space,\nwhich should be used for small views, like on mobile.\n- `standard` will render the default state.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"fullWidth"'},{value:'"scrollable"'}]}},visibleScrollbar:{defaultValue:{value:"false"},description:"If `true`, the scrollbar is visible. It can be useful when displaying\na long vertical list of tabs.",name:"visibleScrollbar",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs_Tabs.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}var Tab=__webpack_require__("./node_modules/@mui/material/Tab/Tab.js");const Tab_Tab=(0,styled.ZP)(Tab.Z)((props=>({fontFamily:"'FS Elliot Pro', Arial",width:props.width||"auto",minHeight:"auto",letterSpacing:.1,paddingLeft:16,paddingRight:16,color:"#333D47",textTransform:"initial",borderBottom:"1px solid #D6D8DA",borderTop:"1px solid transparent","&:hover:not(.Mui-disabled)":{backgroundColor:"#F7F7F8"},"&.Mui-selected:not(.Mui-disabled)":{color:"#333D47"},"&.Mui-disabled":{color:"#868B8C"},".MuiTouchRipple-root":{display:"none"}}))),components_Tab_Tab=Tab_Tab;try{Tab_Tab.displayName="Tab",Tab_Tab.__docgenInfo={description:"",displayName:"Tab",props:{children:{defaultValue:null,description:"This prop isn't supported.\nUse the `component` prop if you need to change the children structure.\nThe content of the component.",name:"children",required:!1,type:{name:"null"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TabClasses> & Partial<ClassNameMap<never>>"}},disabled:{defaultValue:{value:"false\nfalse"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableFocusRipple:{defaultValue:{value:"false"},description:"If `true`, the  keyboard focus ripple is disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"The icon to display.",name:"icon",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},iconPosition:{defaultValue:{value:"'top'"},description:"The position of the icon relative to the label.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"end"'},{value:'"start"'}]}},label:{defaultValue:null,description:"The label element.",name:"label",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:"You can provide your own value. Otherwise, we fallback to the child position index.",name:"value",required:!1,type:{name:"any"}},wrapped:{defaultValue:{value:"false"},description:"Tab labels appear in a single row.\nThey can use a second line if needed.",name:"wrapped",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tab/Tab.tsx#Tab"]={docgenInfo:Tab_Tab.__docgenInfo,name:"Tab",path:"src/components/Tab/Tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}var FileDownloadOutlined=__webpack_require__("./node_modules/@mui/icons-material/FileDownloadOutlined.js"),Favorite=__webpack_require__("./node_modules/@mui/icons-material/Favorite.js"),PersonPin=__webpack_require__("./node_modules/@mui/icons-material/PersonPin.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tabs_stories={title:"Components/Tabs DLS",component:components_Tabs_Tabs,tags:["autodocs"]},DefaultSmall={render:args=>{const[value,setValue]=react.useState(0);return(0,jsx_runtime.jsxs)(components_Tabs_Tabs,{...args,value,onChange:(event,newValue)=>{setValue(newValue)},size:"small",children:[(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab1"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab2"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab3"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab4"})]})}},DefaultMedium={render:args=>{const[value,setValue]=react.useState(0);return(0,jsx_runtime.jsxs)(components_Tabs_Tabs,{...args,value,onChange:(event,newValue)=>{setValue(newValue)},size:"medium",children:[(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab1"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab2"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab3"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab4"})]})}},DefaultLarge={render:args=>{const[value,setValue]=react.useState(0);return(0,jsx_runtime.jsxs)(components_Tabs_Tabs,{...args,value,onChange:(event,newValue)=>{setValue(newValue)},size:"large",children:[(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab1"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab2"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab3"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab4"})]})}},SmallWithDisabled={render:args=>{const[value,setValue]=react.useState(0);return(0,jsx_runtime.jsxs)(components_Tabs_Tabs,{...args,value,onChange:(event,newValue)=>{setValue(newValue)},size:"small",children:[(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab1",disabled:!0}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab2"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab3",disabled:!0}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab4"})]})}},MediumWithDisabled={render:args=>{const[value,setValue]=react.useState(0);return(0,jsx_runtime.jsxs)(components_Tabs_Tabs,{...args,value,onChange:(event,newValue)=>{setValue(newValue)},children:[(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab1",disabled:!0}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab2"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab3",disabled:!0}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab4"})]})}},LargeWithDisabled={render:args=>{const[value,setValue]=react.useState(0);return(0,jsx_runtime.jsxs)(components_Tabs_Tabs,{...args,value,onChange:(event,newValue)=>{setValue(newValue)},size:"large",children:[(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab1",disabled:!0}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab2"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab3",disabled:!0}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab4"})]})}},SmallWithIcon={render:args=>{const[value,setValue]=react.useState(0);return(0,jsx_runtime.jsxs)(components_Tabs_Tabs,{...args,value,onChange:(event,newValue)=>{setValue(newValue)},size:"small",children:[(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab1",icon:(0,jsx_runtime.jsx)(FileDownloadOutlined.Z,{}),iconPosition:"start"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab2",icon:(0,jsx_runtime.jsx)(Favorite.Z,{}),iconPosition:"end"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{icon:(0,jsx_runtime.jsx)(PersonPin.Z,{})}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab4"})]})}},MediumWithIcon={render:args=>{const[value,setValue]=react.useState(0);return(0,jsx_runtime.jsxs)(components_Tabs_Tabs,{...args,value,onChange:(event,newValue)=>{setValue(newValue)},children:[(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab1",icon:(0,jsx_runtime.jsx)(FileDownloadOutlined.Z,{}),iconPosition:"start"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab2",icon:(0,jsx_runtime.jsx)(Favorite.Z,{}),iconPosition:"end"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{icon:(0,jsx_runtime.jsx)(PersonPin.Z,{})}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab4"})]})}},LargeWithIcon={render:args=>{const[value,setValue]=react.useState(0);return(0,jsx_runtime.jsxs)(components_Tabs_Tabs,{...args,value,onChange:(event,newValue)=>{setValue(newValue)},size:"large",children:[(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab1",icon:(0,jsx_runtime.jsx)(FileDownloadOutlined.Z,{}),iconPosition:"start"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab2",icon:(0,jsx_runtime.jsx)(Favorite.Z,{}),iconPosition:"end"}),(0,jsx_runtime.jsx)(components_Tab_Tab,{icon:(0,jsx_runtime.jsx)(PersonPin.Z,{})}),(0,jsx_runtime.jsx)(components_Tab_Tab,{label:"Tab4"})]})}};DefaultSmall.parameters={...DefaultSmall.parameters,docs:{...DefaultSmall.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const [value, setValue] = React.useState(0);\n    const handleChange = (event: React.SyntheticEvent, newValue: number) => {\n      setValue(newValue);\n    };\n    return <Tabs {...args} value={value} onChange={handleChange} size="small">\n        <Tab label="Tab1" />\n        <Tab label="Tab2" />\n        <Tab label="Tab3" />\n        <Tab label="Tab4" />\n      </Tabs>;\n  }\n}',...DefaultSmall.parameters?.docs?.source}}},DefaultMedium.parameters={...DefaultMedium.parameters,docs:{...DefaultMedium.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const [value, setValue] = React.useState(0);\n    const handleChange = (event: React.SyntheticEvent, newValue: number) => {\n      setValue(newValue);\n    };\n    return <Tabs {...args} value={value} onChange={handleChange} size="medium">\n        <Tab label="Tab1" />\n        <Tab label="Tab2" />\n        <Tab label="Tab3" />\n        <Tab label="Tab4" />\n      </Tabs>;\n  }\n}',...DefaultMedium.parameters?.docs?.source}}},DefaultLarge.parameters={...DefaultLarge.parameters,docs:{...DefaultLarge.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const [value, setValue] = React.useState(0);\n    const handleChange = (event: React.SyntheticEvent, newValue: number) => {\n      setValue(newValue);\n    };\n    return <Tabs {...args} value={value} onChange={handleChange} size="large">\n        <Tab label="Tab1" />\n        <Tab label="Tab2" />\n        <Tab label="Tab3" />\n        <Tab label="Tab4" />\n      </Tabs>;\n  }\n}',...DefaultLarge.parameters?.docs?.source}}},SmallWithDisabled.parameters={...SmallWithDisabled.parameters,docs:{...SmallWithDisabled.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const [value, setValue] = React.useState(0);\n    const handleChange = (event: React.SyntheticEvent, newValue: number) => {\n      setValue(newValue);\n    };\n    return <Tabs {...args} value={value} onChange={handleChange} size="small">\n        <Tab label="Tab1" disabled />\n        <Tab label="Tab2" />\n        <Tab label="Tab3" disabled />\n        <Tab label="Tab4" />\n      </Tabs>;\n  }\n}',...SmallWithDisabled.parameters?.docs?.source}}},MediumWithDisabled.parameters={...MediumWithDisabled.parameters,docs:{...MediumWithDisabled.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const [value, setValue] = React.useState(0);\n    const handleChange = (event: React.SyntheticEvent, newValue: number) => {\n      setValue(newValue);\n    };\n    return <Tabs {...args} value={value} onChange={handleChange}>\n        <Tab label="Tab1" disabled />\n        <Tab label="Tab2" />\n        <Tab label="Tab3" disabled />\n        <Tab label="Tab4" />\n      </Tabs>;\n  }\n}',...MediumWithDisabled.parameters?.docs?.source}}},LargeWithDisabled.parameters={...LargeWithDisabled.parameters,docs:{...LargeWithDisabled.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const [value, setValue] = React.useState(0);\n    const handleChange = (event: React.SyntheticEvent, newValue: number) => {\n      setValue(newValue);\n    };\n    return <Tabs {...args} value={value} onChange={handleChange} size="large">\n        <Tab label="Tab1" disabled />\n        <Tab label="Tab2" />\n        <Tab label="Tab3" disabled />\n        <Tab label="Tab4" />\n      </Tabs>;\n  }\n}',...LargeWithDisabled.parameters?.docs?.source}}},SmallWithIcon.parameters={...SmallWithIcon.parameters,docs:{...SmallWithIcon.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const [value, setValue] = React.useState(0);\n    const handleChange = (event: React.SyntheticEvent, newValue: number) => {\n      setValue(newValue);\n    };\n    return <Tabs {...args} value={value} onChange={handleChange} size="small">\n        <Tab label="Tab1" icon={<FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>} iconPosition="start" />\n        <Tab label="Tab2" icon={<FavoriteIcon></FavoriteIcon>} iconPosition="end" />\n        <Tab icon={<PersonPinIcon></PersonPinIcon>} />\n        <Tab label="Tab4" />\n      </Tabs>;\n  }\n}',...SmallWithIcon.parameters?.docs?.source}}},MediumWithIcon.parameters={...MediumWithIcon.parameters,docs:{...MediumWithIcon.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const [value, setValue] = React.useState(0);\n    const handleChange = (event: React.SyntheticEvent, newValue: number) => {\n      setValue(newValue);\n    };\n    return <Tabs {...args} value={value} onChange={handleChange}>\n        <Tab label="Tab1" icon={<FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>} iconPosition="start" />\n        <Tab label="Tab2" icon={<FavoriteIcon></FavoriteIcon>} iconPosition="end" />\n        <Tab icon={<PersonPinIcon></PersonPinIcon>} />\n        <Tab label="Tab4" />\n      </Tabs>;\n  }\n}',...MediumWithIcon.parameters?.docs?.source}}},LargeWithIcon.parameters={...LargeWithIcon.parameters,docs:{...LargeWithIcon.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const [value, setValue] = React.useState(0);\n    const handleChange = (event: React.SyntheticEvent, newValue: number) => {\n      setValue(newValue);\n    };\n    return <Tabs {...args} value={value} onChange={handleChange} size="large">\n        <Tab label="Tab1" icon={<FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>} iconPosition="start" />\n        <Tab label="Tab2" icon={<FavoriteIcon></FavoriteIcon>} iconPosition="end" />\n        <Tab icon={<PersonPinIcon></PersonPinIcon>} />\n        <Tab label="Tab4" />\n      </Tabs>;\n  }\n}',...LargeWithIcon.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultSmall","DefaultMedium","DefaultLarge","SmallWithDisabled","MediumWithDisabled","LargeWithDisabled","SmallWithIcon","MediumWithIcon","LargeWithIcon"]}}]);