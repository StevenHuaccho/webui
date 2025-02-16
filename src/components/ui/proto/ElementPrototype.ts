import { CSSProperties, JSX } from "react"
import { ColorsPrimitive } from "./utils/Colors"

export default interface ElementPrototype {
    getStyles(): CSSProperties
    backgroundStringValue: string
    background(value: string): this
    cornerRadiusIntValue: number
    cornerRadius(value: number): this
    borderWidthIntValue: number
    borderWidth(value: number): this
    borderColorStringValue: string
    borderColor(value: string): this
    paddingIntValue: number
    padding(value: number): this
    paddingTopIntValue: number
    paddingTop(value: number): this
    paddingBottomIntValue: number
    paddingBottom(value: number): this
    paddingLeadingIntValue: number
    paddingLeading(value: number): this
    paddingTrailingIntValue: number
    paddingTrailing(value: number): this
    offsetXIntValue: number
    offsetX(value: number): this
    offsetYIntValue: number
    offsetY(value: number): this
    widthIntValue: number
    width(value: number): this
    heightIntValue: number
    height(value: number): this
    textColorStringValue: string
    textColor(value: string): this
    textAlignmentValue: "left" | "center" | "right"
    textAlignment(value: "left" | "center" | "right"): this
    fontSizeIntValue: number
    fontSize(value: number): this
    fontWeightValue: "normal" | "bold" | "lighter" | "bolder"
    fontWeight(value: "normal" | "bold" | "lighter" | "bolder"): this
    fontFamilyStringValue: string
    fontFamily(value: string): this
    opacityFloatValue: number
    opacity(value: number): this
    displayValue: "block" | "inline" | "flex" | "grid" | "inline-block" | "inline-flex" | "inline-grid"
    display(value: "block" | "inline" | "flex" | "grid" | "inline-block" | "inline-flex" | "inline-grid"): this
    alignItemsValue: "flex-start" | "center" | "flex-end"
    alignItems(value: "flex-start" | "center" | "flex-end"): this
    justifyContentValue: "flex-start" | "center" | "flex-end" | "space-between" | "space-around"
    justifyContent(value: "flex-start" | "center" | "flex-end" | "space-between" | "space-around"): this
    flexGrowIntValue: number
    flexGrow(value: number): this
    flexShrinkIntValue: number
    flexShrink(value: number): this
    flexBasisStringValue: string
    flexBasis(value: string): this
    boxShadowValue: string
    shadow(offsetX: number, offsetY: number, blur: number, color: string): this
    cursorValue: "default" | "pointer" | "text" | "move" | "not-allowed" | "crosshair" | "zoom-in"
    cursor(value: "default" | "pointer" | "text" | "move" | "not-allowed" | "crosshair" | "zoom-in"): this
    transitionValue: string
    transition(property: string, duration: string, timingFunction?: string, delay?: string): this
    rotateValue: string
    rotate(deg: number): this
    scaleValue: number
    scale(value: number): this
    translateXValue: number
    translateX(value: number): this
    translateYValue: number
    translateY(value: number): this
    gridTemplateRowsValue: string
    gridTemplateRows(value: string): this
    gridTemplateColumnsValue: string
    gridTemplateColumns(value: string): this
    gridGapValue: string
    gridGap(value: string): this
    zIndexIntValue: number
    zIndex(value: number): this
    visibilityValue: "visible" | "hidden" | "collapse"
    visibility(value: "visible" | "hidden" | "collapse"): this
    clipPathValue: string
    clipPath(value: string): this
    marginIntValue: number
    margin(value: number): this
    marginTopIntValue: number
    marginTop(value: number): this
    marginBottomIntValue: number
    marginBottom(value: number): this
    marginLeftIntValue: number
    marginLeft(value: number): this
    marginRightIntValue: number
    marginRight(value: number): this
    add?(): JSX.Element
}
