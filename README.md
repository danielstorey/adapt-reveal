# adapt-reveal

**Reveal** is a *presentation component* Created by Dan storey.
<img src="https://raw.githubusercontent.com/danielstorey/assets/master/reveal-demo.png" alt="Reveal in action">

The **Reveal** component displays panels of content hidden behind front covers. When clicked the cover animates to reveal the content below. A range of different animations are available as listed below. When clicked again the cover is restored.

[**Click here for an interactive demo**](https://danielstorey.github.io/adapt-demo-course/#/id/co-main)

##Installation

Simply copy this folder into src/components/ and run the `grunt build` command.

## Settings Overview

The attributes listed below are used in *components.json* to configure **Reveal**, and are properly formatted as JSON in [*example.json*](https://github.com/danielstorey/adapt-reveal/example.json).

### Attributes

For core model attributes see [**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes). The attributes listed below are specific to the `Reveal` component.

**_component** (string): This value must be: `reveal` (one word).

**_columns** (string): The number of reveal items on one line. Items display full width on smaller screen sizes.

**_animationType** (string): Possible built-in values are `shrink`, `flipUp`, `flipDown`, `slideUp`, `slideDown`, `slideLeft`, `slideRight`. You may also assign your own value and use css to create your own animation. Documentation for this coming soon.

**_items** (array): Each item represents a panel of content and its cover.

>**front** (string): The text for item's cover (default ?).

>**back** (object): An image to be used for the reveal item (optional).

>>**title** (string): The body text for the item (optional).

>>**body** (string): The body text for the item.

>>**graphic** (object): An image to be used for the reveal item (optional).

>>>**src** (string): path of the image relative to the src folder.

>>>**alt** (string): This text becomes the image’s `alt` attribute.


## Limitations

No known limitations

----------------------------
**Version number:**  1.0
**Framework versions:**  2.0
**Author / maintainer:** Dan Storey
