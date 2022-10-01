import { createContext } from "react";
import { AnyObject } from "../typescript/models/common";

const contextData: AnyObject = {};

const SharedContext = createContext(contextData);
export default SharedContext;
