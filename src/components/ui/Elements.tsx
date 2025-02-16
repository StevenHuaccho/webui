import React, { JSX } from "react";
import ElementProperties from "./proto/ElementProperties";

export default function ContentView(Elements: JSX.Element[] | any): JSX.Element {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            { Elements }
        </div>
    );
}

export class Button extends ElementProperties {
    label: string;
    callback?: () => void;

    constructor(label: string, callback?: () => void) {
        super();
        this.callback = callback;
        this.label = label;
    }

    override add(): JSX.Element {
        return <button style={this.getStyles()} onClick={this.callback}>{this.label}</button>;
    }
}

export class Stack extends ElementProperties {
    content: JSX.Element[];

    constructor(content: JSX.Element[]) {
        super();
        this.content = content;
    }

    override add(): JSX.Element {
        return <div style={this.getStyles()}>{this.content}</div>;
    }
}

export class Text extends ElementProperties {
    content: string;

    constructor(content: string) {
        super();
        this.content = content;
    }

    override add(): JSX.Element {
        return <span style={this.getStyles()}>{this.content}</span>;
    }
}

export class TextField extends ElementProperties {
    placeholder: string;
    onChange?: (value: string) => void;

    constructor(placeholder: string, onChange?: (value: string) => void) {
        super();
        this.placeholder = placeholder;
        this.onChange = onChange;
    }

    override add(): JSX.Element {
        return (
            <input
                style={this.getStyles()}
                placeholder={this.placeholder}
                onChange={(e) => this.onChange?.(e.target.value)}
            />
        );
    }
}

export class Image extends ElementProperties {
    src: string;
    alt?: string;

    constructor(src: string, alt?: string) {
        super();
        this.src = src;
        this.alt = alt;
    }

    override add(): JSX.Element {
        return <img style={this.getStyles()} src={this.src} alt={this.alt} />;
    }
}

export class Title extends ElementProperties {
    text: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;

    constructor(text: string, level: 1 | 2 | 3 | 4 | 5 | 6) {
        super();
        this.text = text;
        this.level = level;
    }

    override add(): JSX.Element {
        const Tag = `h${this.level}` as keyof JSX.IntrinsicElements;
        return React.createElement(Tag, { style: this.getStyles() }, this.text);
    }
}

export class Url extends ElementProperties {
    href: string;
    text: string;

    constructor(href: string, text: string) {
        super();
        this.href = href;
        this.text = text;
    }

    override add(): JSX.Element {
        return <a style={this.getStyles()} href={this.href}>{this.text}</a>;
    }
}

export class List extends ElementProperties {
    items: string[];
    ordered: boolean;

    constructor(items: string[], ordered = false) {
        super();
        this.items = items;
        this.ordered = ordered;
    }

    override add(): JSX.Element {
        const Tag = this.ordered ? "ol" : "ul";
        return React.createElement(Tag, { style: this.getStyles() },
            this.items.map((item, index) => <li key={index}>{item}</li>)
        );
    }
}

export class Form extends ElementProperties {
    children: JSX.Element[];
    onSubmit: () => void;

    constructor(children: JSX.Element[], onSubmit: () => void) {
        super();
        this.children = children;
        this.onSubmit = onSubmit;
    }

    override add(): JSX.Element {
        return <form style={this.getStyles()} onSubmit={(e) => { e.preventDefault(); this.onSubmit(); }}>{this.children}</form>;
    }
}

