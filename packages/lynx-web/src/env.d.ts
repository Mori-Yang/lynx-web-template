/// <reference types="@rsbuild/core/types" />

import type { LynxView } from "@lynx-js/web-core";
import type React from "react";


declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lynx-view': {
                url: string
                style: CSSProperties | undefined
            }
        }
    }
}