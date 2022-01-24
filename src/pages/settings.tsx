import React from "react";
import PopupMenu from "src/components/popupMenu";

function Settings(){
    return (
        <div>
            <h2>Settings</h2>
            <button type="button" className="btn btn-outline-primary">Primary</button>
            <PopupMenu open={true}/>
        </div>
        
    )
}

export default Settings;