import React from "react";
import State from "./Components/State";
import ConditionalRendering from './Components/ConditionalRendering/index'
import EventHandler from "./EventHandler/EventHandler";
import HookUseState from "./HookUseState/HookUseState";

function App() {
    return (
        <div>
            {/* <State />
            <ConditionalRendering/>
            <EventHandler /> */}
            <HookUseState />

        </div>
    )
}

export default App