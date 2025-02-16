# Welcome to WebUI!

WebUI is a declarative fork of React, we allow you to create your dreamed web with declarative statements as SwiftUI does! WebUI is mostly based on SwiftUI in its way to call UI components even with the styling, but we didn't remove the power of ReactJS! You still can use the native react hooks as 

- `useState`
- `useEffect`
- `useContext`

And every hook in React! or if you prefer, you could make your own hook, it's up to you ☺️!

This fork is still in development, i'm working to make it perfect for you, adding features to improve your coding time 👨🏻‍💻 so, be patient!

## UI Elements

For now, you have this primitive elements to use!:

- ##### `Text` 

  - Works as a `span` HTML element

- ##### `Button` 

  - Works as a `button` HTML element

- ##### `Stack`

  - Works as a `div` HTML element

- ##### `Image`

  - Works as a `image` HTML element

- ##### `TextField` 

  - Works as a `input` HTML element

- ##### `List` 

  - Works as a `list` HTML element

- ##### `Url` 

  - Works as a `a` HTML element

- ##### `Form` 

  - Works as a `form` HTML element

## Utils

I added some utils (i'll add more in the future) to make it even easier! 🥳

| Identificator  | What does this do?                                           |
| -------------- | ------------------------------------------------------------ |
| `Colors`       | gives you a more declarative way to set color values         |
| `useCondition` | is a hook which gives you the feature to render UI elements with conditions. This hook is required because WebUI use arrays to catch the elements you want to render so you can't use TypeScript statements inside an array declaration, it gives you that feature. |

## How does WebUI work?

Ok, it's easy. WebUI uses a main function (which works as the body of your page) called "ContentView", it's a custom function which accepts an array of JSX Elements (react elements) and returns a `div` element with each element of the array. Each element is just a class with the props of the HTML element and a method (`.add()`) which returns the JSX element with those props. Here you have an example of how a primitive element of UI is created:

#### Text UI Element

```tsx
export class Text extends ElementProperties {
    content: string;

    constructor(content: string) {
        super();
        this.content = content;
    }

    add(): JSX.Element {
        return <span style={this.getStyles()}>{this.content}</span>;
    }
}
```

### You are allowed to make your own components! 

```tsx
export class MyOwnComponent extends ElementProperties {
    override add(): JSX.Element {
        return new Text('My own component').add();
    }
}
```

You have to export a class which has to extend `ElementProperties` class (this class gives you the styling methods to your custom component) and put the UI elements you want in your component in the `add()` method (overriding it)



That's all! Easy, right? 🎉



## Usage Examples



```tsx
import { useState } from 'react';
import ContentView, { Stack, Text, Button, Image } from './components/ui/Elements.tsx';
import useCondition from './components/ui/proto/utils/conditional.ts';
import Colors from './components/ui/proto/utils/Colors.tsx';

export default function App() { 
  const [wasClicked, setWasClicked] = useState(false);

    return ContentView([
        new Stack([
            new Text('Hello from WebUI!')
            .textColor(Colors().white)
            .fontSize(24)
            .margin(10)
            .fontWeight('bold')
            .add(),

            new Button('Click here!', () => {
              setWasClicked(!wasClicked)
            })
            .background(Colors().white)
            .textColor(Colors().black)
            .padding(15)
            .cornerRadius(10)
            .margin(10)
            .cursor('pointer')
            .add(),


            new useCondition(wasClicked, () => {
              return new Image('https://picsum.photos/200/300')
              .margin(10)
              .add()
            }).set()
        ])
        .add()
    ])
};
```

