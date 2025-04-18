/// <reference types="@rsbuild/core/types" />

import type { LynxView } from "@lynx-js/web-core";
import type React from "react";
import type { JSX } from "@lynx-js/types"

export declare global {
    namespace JSX {
        interface IntrinsicElements extends JSX.IntrinsicElements {
            'lynx-view': {
                url: string
                style: CSSProperties | undefined
            }
        }
    }
}