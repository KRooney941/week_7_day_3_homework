import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList'
import './SongsBox.css';
const SongsBox = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function() {

        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json').then(result => result.json()).then(songs => setSongs(songs.feed.entry))
    }

    return (
        <div className="main-container">
            <SongList songs={songs}/>
        </div>
    )
}

export default SongsBox