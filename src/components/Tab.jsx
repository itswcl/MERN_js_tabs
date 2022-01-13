import React, { useState } from 'react';

const Tab = (props) => {
    const [tabInfo, setTabInfo] = useState([
        { tab1: "Tab One is Showing" },
        { tab2: "Tab Two is Showing" },
        { tab3: "Tab Three is Showing" },
    ])

    const [currentInfo, setCurrentInfo] = useState("")

    const handleClick = (idx) => {
        // in order to pass in idx we'll use onClick={ () => handleClick(idx) }
        if (idx === 0) {
            setCurrentInfo(tabInfo[0].tab1);
        } else if (idx === 1) {
            setCurrentInfo(tabInfo[1].tab2);
        } else {
            setCurrentInfo(tabInfo[2].tab3);
        }

        // if (e.target.key === "tab1") {
        //     setCurrentInfo(tabInfo[0].tab1);
        // } else if (e.target.name === "tab2") {
        //     setCurrentInfo(tabInfo[1].tab2);
        // } else {
        //     setCurrentInfo(tabInfo[2].tab3);
        // }
    }

    return (
        <div>
            {/* {JSON.stringify(tabInfo)} */}
            <div className='d-flex'>
                {
                    tabInfo.map((tab, idx) => {
                        return (
                            <button
                                // wont show on html
                                // this for react to track tag
                                key={idx}
                                // this will return [element]
                                name={Object.keys(tab)}
                                className='btn btn-success m-5 col'
                                onClick={() => handleClick(idx)}
                            >
                                {Object.keys(tab)}
                            </button>
                        )
                    })
                }
            </div>
            <fieldset className='border'>
                <p>{currentInfo}</p>

            </fieldset>
        </div>
    )
}

export default Tab;