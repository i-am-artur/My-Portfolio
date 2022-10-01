import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

export type showModalType =
  | ""
  | 0
  | null
  | undefined
  | false
  | any
  | ((
      value:
        | ((
            prevState:
              | ReactElement<any, string | JSXElementConstructor<any>>
              | string
              | number
              | Iterable<ReactNode>
              | ReactPortal
              | boolean
              | null
              | undefined
          ) =>
            | ReactElement<any, string | JSXElementConstructor<any>>
            | string
            | number
            | Iterable<ReactNode>
            | ReactPortal
            | boolean
            | null
            | undefined)
        | ReactElement<any, string | JSXElementConstructor<any>>
        | string
        | number
        | Iterable<ReactNode>
        | ReactPortal
        | boolean
        | null
        | undefined
    ) => void);
