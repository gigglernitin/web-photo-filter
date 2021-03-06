/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { WebPhotoFilterResult } from "./types/web-photo-filter/web-photo-filter-result";
export namespace Components {
    interface WebPhotoFilter {
        "alt": string;
        "filter": string;
        "keep": boolean;
        "level": number;
        "src": string;
    }
}
declare global {
    interface HTMLWebPhotoFilterElement extends Components.WebPhotoFilter, HTMLStencilElement {
    }
    var HTMLWebPhotoFilterElement: {
        prototype: HTMLWebPhotoFilterElement;
        new (): HTMLWebPhotoFilterElement;
    };
    interface HTMLElementTagNameMap {
        "web-photo-filter": HTMLWebPhotoFilterElement;
    }
}
declare namespace LocalJSX {
    interface WebPhotoFilter {
        "alt"?: string;
        "filter"?: string;
        "keep"?: boolean;
        "level"?: number;
        "onFilterLoad"?: (event: CustomEvent<WebPhotoFilterResult>) => void;
        "src"?: string;
    }
    interface IntrinsicElements {
        "web-photo-filter": WebPhotoFilter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "web-photo-filter": LocalJSX.WebPhotoFilter & JSXBase.HTMLAttributes<HTMLWebPhotoFilterElement>;
        }
    }
}
