import React, { CSSProperties, JSX } from "react";
import ElementPrototype from "./ElementPrototype";

export default class ElementProperties implements ElementPrototype {
    cornerRadiusIntValue: number = 0;
    backgroundStringValue: string = "";
    borderWidthIntValue: number = 0;
    borderColorStringValue: string = "";
    paddingIntValue: number = 0;
    paddingTopIntValue: number = 0;
    paddingBottomIntValue: number = 0;
    paddingLeadingIntValue: number = 0;
    paddingTrailingIntValue: number = 0;
    offsetXIntValue: number = 0;
    offsetYIntValue: number = 0;
    widthIntValue: number = 0;
    heightIntValue: number = 0;
    textColorStringValue: string = "";
    textAlignmentValue: "left" | "center" | "right" = "left";
    fontSizeIntValue: number = 16;
    fontWeightValue: "normal" | "bold" | "lighter" | "bolder" = "normal";
    fontFamilyStringValue: string = "";
    opacityFloatValue: number = 1;
    displayValue: "block" | "inline" | "flex" | "grid" | "inline-block" | "inline-flex" | "inline-grid" = "block";
    alignItemsValue: "flex-start" | "center" | "flex-end" = "flex-start";
    justifyContentValue: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" = "flex-start";
    flexGrowIntValue: number = 0;
    flexShrinkIntValue: number = 1;
    flexBasisStringValue: string = "auto";
    boxShadowValue: string = "";
    cursorValue: "default" | "pointer" | "text" | "move" | "not-allowed" | "crosshair" | "zoom-in" = "default";
    transitionValue: string = "";
    rotateValue: string = "0deg";
    scaleValue: number = 1;
    translateXValue: number = 0;
    translateYValue: number = 0;
    gridTemplateRowsValue: string = "";
    gridTemplateColumnsValue: string = "";
    gridGapValue: string = "";
    zIndexIntValue: number = 0;
    visibilityValue: "visible" | "hidden" | "collapse" = "visible";
    clipPathValue: string = "";
    marginIntValue: number = 0;
    marginBottomIntValue: number = 0;
    marginLeftIntValue: number = 0;
    marginRightIntValue: number = 0;
    marginTopIntValue: number = 0;

    cornerRadius(value: number): this {
        this.cornerRadiusIntValue = value;
        return this;
    }

    background(value: string): this {
        this.backgroundStringValue = value;
        return this;
    }

    borderWidth(value: number): this {
        this.borderWidthIntValue = value;
        return this;
    }

    borderColor(value: string): this {
        this.borderColorStringValue = value;
        return this;
    }

    padding(value: number): this {
        this.paddingIntValue = value;
        return this;
    }

    paddingTop(value: number): this {
        this.paddingTopIntValue = value;
        return this;
    }

    paddingBottom(value: number): this {
        this.paddingBottomIntValue = value;
        return this;
    }

    paddingLeading(value: number): this {
        this.paddingLeadingIntValue = value;
        return this;
    }

    paddingTrailing(value: number): this {
        this.paddingTrailingIntValue = value;
        return this;
    }

    offsetX(value: number): this {
        this.offsetXIntValue = value;
        return this;
    }

    offsetY(value: number): this {
        this.offsetYIntValue = value;
        return this;
    }

    width(value: number): this {
        this.widthIntValue = value;
        return this;
    }

    height(value: number): this {
        this.heightIntValue = value;
        return this;
    }

    textColor(value: string): this {
        this.textColorStringValue = value;
        return this;
    }

    textAlignment(value: "left" | "center" | "right"): this {
        this.textAlignmentValue = value;
        return this;
    }

    fontSize(value: number): this {
        this.fontSizeIntValue = value;
        return this;
    }

    fontWeight(value: "normal" | "bold" | "lighter" | "bolder"): this {
        this.fontWeightValue = value;
        return this;
    }

    fontFamily(value: string): this {
        this.fontFamilyStringValue = value;
        return this;
    }

    opacity(value: number): this {
        this.opacityFloatValue = value;
        return this;
    }

    display(value: "block" | "inline" | "flex" | "grid" | "inline-block" | "inline-flex" | "inline-grid"): this {
        this.displayValue = value;
        return this;
    }

    alignItems(value: "flex-start" | "center" | "flex-end"): this {
        this.alignItemsValue = value;
        return this;
    }

    justifyContent(value: "flex-start" | "center" | "flex-end" | "space-between" | "space-around"): this {
        this.justifyContentValue = value;
        return this;
    }

    flexGrow(value: number): this {
        this.flexGrowIntValue = value;
        return this;
    }

    flexShrink(value: number): this {
        this.flexShrinkIntValue = value;
        return this;
    }

    flexBasis(value: string): this {
        this.flexBasisStringValue = value;
        return this;
    }

    shadow(offsetX: number, offsetY: number, blur: number, color: string): this {
        this.boxShadowValue = `${offsetX}px ${offsetY}px ${blur}px ${color}`;
        return this;
    }

    cursor(value: "default" | "pointer" | "text" | "move" | "not-allowed" | "crosshair" | "zoom-in"): this {
        this.cursorValue = value;
        return this;
    }

    transition(property: string, duration: string, timingFunction: string = "ease", delay: string = "0s"): this {
        this.transitionValue = `${property} ${duration} ${timingFunction} ${delay}`;
        return this;
    }

    rotate(deg: number): this {
        this.rotateValue = `rotate(${deg}deg)`;
        return this;
    }

    scale(value: number): this {
        this.scaleValue = value;
        return this;
    }

    translateX(value: number): this {
        this.translateXValue = value;
        return this;
    }

    translateY(value: number): this {
        this.translateYValue = value;
        return this;
    }

    gridTemplateRows(value: string): this {
        this.gridTemplateRowsValue = value;
        return this;
    }

    gridTemplateColumns(value: string): this {
        this.gridTemplateColumnsValue = value;
        return this;
    }

    gridGap(value: string): this {
        this.gridGapValue = value;
        return this;
    }

    zIndex(value: number): this {
        this.zIndexIntValue = value;
        return this;
    }

    visibility(value: "visible" | "hidden" | "collapse"): this {
        this.visibilityValue = value;
        return this;
    }

    clipPath(value: string): this {
        this.clipPathValue = value;
        return this;
    }

    margin(value: number): this {
        this.marginIntValue = value;
        return this;
    }

    marginBottom(value: number): this {
        this.marginBottomIntValue = value;
        return this;
    }

    marginLeft(value: number): this {
        this.marginLeftIntValue = value;
        return this;
    }

    marginRight(value: number): this {
        this.marginRightIntValue = value;
        return this;
    }

    marginTop(value: number): this {
        this.marginTopIntValue = value;
        return this;
    }

    getStyles(): CSSProperties {
        return {
            borderRadius: `${this.cornerRadiusIntValue}px`,
            backgroundColor: this.backgroundStringValue,
            borderWidth: `${this.borderWidthIntValue}px`,
            borderColor: this.borderColorStringValue,
            padding: `${this.paddingIntValue}px`,
            paddingTop: `${this.paddingTopIntValue}px`,
            paddingBottom: `${this.paddingBottomIntValue}px`,
            paddingLeft: `${this.paddingLeadingIntValue}px`,
            paddingRight: `${this.paddingTrailingIntValue}px`,
            left: `${this.offsetXIntValue}px`,
            top: `${this.offsetYIntValue}px`,
            width: `${this.widthIntValue}px`,
            height: `${this.heightIntValue}px`,
            color: this.textColorStringValue,
            textAlign: this.textAlignmentValue,
            fontSize: `${this.fontSizeIntValue}px`,
            fontWeight: this.fontWeightValue,
            fontFamily: this.fontFamilyStringValue,
            opacity: this.opacityFloatValue,
            display: this.displayValue,
            alignItems: this.alignItemsValue,
            justifyContent: this.justifyContentValue,
            flexGrow: this.flexGrowIntValue,
            flexShrink: this.flexShrinkIntValue,
            flexBasis: this.flexBasisStringValue,
            boxShadow: this.boxShadowValue,
            cursor: this.cursorValue,
            transition: this.transitionValue,
            transform: `${this.rotateValue} scale(${this.scaleValue}) translate(${this.translateXValue}px, ${this.translateYValue}px)`,
            gridTemplateRows: this.gridTemplateRowsValue,
            gridTemplateColumns: this.gridTemplateColumnsValue,
            gap: this.gridGapValue,
            zIndex: this.zIndexIntValue,
            visibility: this.visibilityValue,
            clipPath: this.clipPathValue,
            margin: `${this.marginIntValue}px`,
            marginBottom: `${this.marginBottomIntValue}px`,
            marginLeft: `${this.marginLeftIntValue}px`,
            marginRight: `${this.marginRightIntValue}px`,
            marginTop: `${this.marginTopIntValue}px`,
        };
    }

    add(): JSX.Element {
        return <div>
            Hello! You have unlinked some classes, don't forget to override 'body' method! :)
        </div>;
    }
}