import React from "react"

const Song= ({song, index}) => {
    return (
        <>
        <li> <h3>Chart Position: {index + 1} :{song["im:name"].label} by {song["im:artist"].label}</h3></li>
        </>
    )
}

export default Song