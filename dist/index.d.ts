import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import React from 'react';
declare type ShellProps = {
    component: PolymerReact;
};
declare class Shell extends React.PureComponent {
    private props?;
    state: any;
    ismounted: boolean;
    constructor(props: ShellProps);
    componentDidMount(): void;
    render(): any;
}
export declare class PolymerReact extends PolymerElement {
    _react?: Shell;
    props: any;
    static readonly template: HTMLTemplateElement;
    static readonly observers: string[];
    connectedCallback(): void;
    render(any: any): any;
    update(): void;
}
export {};
