import React, { useState } from 'react';

const Tab = (props) => {
    const [tabInfo, setTabInfo] = useState([
        { tab1: "Tab One is Showing" },
        { tab2: "Tab Two is Showing" },
        { tab3: "Tab Three is Showing" },
    ])

    const [currnetInfo, setCurrentInfo] = useState("")

    const handleClick = (e) => {

        if (e.target.name === "tab1") {

            console.log(tabInfo[0].tab1);
            setCurrentInfo(tabInfo[0].tab1);
        } else if (e.target.name === "tab2") {
            console.log(tabInfo[1].tab2);
            setCurrentInfo(tabInfo[1].tab2);
        } else {
            console.log(tabInfo[2].tab3);
            setCurrentInfo(tabInfo[2].tab3);
        }

    }

    return (
        <div>
            {/* {JSON.stringify(tabInfo)} */}
            <div className='d-flex'>
                {
                    tabInfo.map((tab, i) => {
                        return (
                            <button
                                name={Object.keys(tab)}
                                className='btn btn-success m-5'
                                onClick={handleClick}
                            >
                                {Object.keys(tab)}
                            </button>
                        )
                    })
                }
            </div>
            <fieldset className='border'>
                <p>{currnetInfo}</p>

            </fieldset>
        </div>
    )
}

export default Tab;