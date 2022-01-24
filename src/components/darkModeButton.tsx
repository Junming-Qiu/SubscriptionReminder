interface props {
    darkMode : boolean
}

function DarkModeButton(props : props){

    if (props.darkMode){
        return (
            <button className="tw-w-full tw-h-full tw-rounded-3xl tw-bg-slate-400  hover:tw-bg-slate-500 active:tw-bg-slate-600">
                <div className="tw-mx-2 tw-mt-1">
                    <h6>Light/Dark</h6>
                </div>    
            </button>
        )
    }
    else{
        return (

            <button className='tw-w-full tw-h-full tw-rounded-3xl tw-bg-orange-400  hover:tw-bg-orange-500 active:tw-bg-orange-600'>
                <div className="tw-mx-2 mt-1">
                    <h6>Light/Dark</h6>
                </div>    
            </button>

        )
    }

}

export default DarkModeButton;