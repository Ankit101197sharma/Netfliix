import React from 'react'
import classes from './EnjoyTV.module.css'


function EnjoyTV() {
    return (
        <div className={classes.storyCard} >
            <div className={classes.mainDiv}>

                <div className={classes.leftDiv}>
                    <h1 className={classes.headingCard}>Enjoy on your TV.</h1>
                    <h2 className={classes.headingCard1}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                </div>

                <div className={classes.rightDiv}>
                    <div style={{ position: 'relative', overflow: 'hidden', zIndex: '2' }}>
                        <img className={classes.storyImg} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                        <div className={classes.storyCardAnimation}>
                            <video autoPlay playsInline muted loop  >
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                            </video>


                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EnjoyTV;