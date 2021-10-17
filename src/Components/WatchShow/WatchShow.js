import React from 'react'
import classes from './WatchShow.module.css'


 function WatchShow() {
    return (
        <div className={classes.storyCard} >
            <div className={classes.mainDiv}>

                <div className={classes.leftDiv}>
                    <h1 className={classes.headingCard}>Watch everywhere.</h1>
                    <h2 className={classes.headingCard1}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                </div>

                <div className={classes.rightDiv}>
                    <div style={{ position: 'relative', overflow: 'hidden', zIndex: '2' }}>
                        <img className={classes.storyImg} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
                        <div className={classes.storyCardAnimation}>
                            <video autoPlay playsInline muted loop  >
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                            </video>


                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WatchShow;