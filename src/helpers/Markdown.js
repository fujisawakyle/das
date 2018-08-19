
import React from "react";
import ReactMarkdown from "react-markdown";
import { P, Ol, Ul, Li, Strong } from "../styledComponents/elements";

const OlorUl = props => (props.ordered ? (
    <Ol>
        {props.children}
    </Ol>
) : (
        <Ul>
            {props.children}
        </Ul>
    ));

const defaultRenderers = {
    paragraph: P,
    list: OlorUl,
    listItem: Li,
    strong: Strong,
};

export default ({ source, renderers }) => (
    <ReactMarkdown
        source={source}
        renderers={Object.assign({}, defaultRenderers, renderers)}
    />
);
