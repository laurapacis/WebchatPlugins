import * as React from 'react';

//* Message Component
// In the first step, we will create a React Component that will be used to render a message. Via its props, it will get a message property representing the content of the message we want to render. Inside that message object, we have a text property containing the raw text of the message. We will return a <span> with red font color containing the text value of the message.
const RedText = (props) => {
    const text = props.message.text

    return (
        <span style={{ color: 'red' }}>
            {text}
        </span>
    )
};

//* Plugin Object definition
// Now that we have our Message Component, it's time to use it in a plugin definition. A Message Plugin definition is an object that must contain a match and a component value. The match value is used to decide for which messages this plugin should be used, and the component value tells the webchat what Message Component to use with this plugin.
const redTextPlugin = {
    match: 'red-text',
    component: RedText
};

//* Register the Plugin definition
// In order to cause the plugin to be recognized by the webchat, it needs to be put at a specific location in the window object. At that location, we have a list of webchat plugins where we want to append out plugin. Because our plugin might be registered first, it may be that the list does not exist yet, so we have to make sure to create it if it does not exist yet.

// create if it does not exist yet
if (!window.cognigyWebchatMessagePlugins) {
    window.cognigyWebchatMessagePlugins = []
}

window.cognigyWebchatMessagePlugins.push(redTextPlugin);