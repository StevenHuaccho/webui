import { JSX } from "react";

interface ConditionalPrototype {
    useInstead(derCondition: boolean, elseCallback: () => JSX.Element): any;
    default(defCallback: () => JSX.Element): any;
    set(): any;
}

export default class useCondition implements ConditionalPrototype {
    public condition: boolean;
    public action: () => JSX.Element;

    constructor(condition: boolean, action: () => JSX.Element) {
        this.condition = condition;
        this.action = action;
    }

    public set(): any {
        return this.condition && this.action()
    }

    public default(defCallback: () => JSX.Element): any {
        return !this.condition && defCallback()
    }

    public useInstead(derCondition: boolean, elseCallback: () => JSX.Element): any   {
        return derCondition && elseCallback()
    }
}
