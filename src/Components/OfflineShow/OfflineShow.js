import React from 'react'
import classes from './OfflineShow.module.css'

 function OfflineShow() {
    return (
        <div className={classes.storyCard} >
        <div className={classes.mainDiv}>
            
                
            
            <div className={classes.leftDiv}>
                <div style={{position: 'relative',overflow: 'hidden'}}>
                    <img className={classes.storyImg} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                <div  className={classes.ourAnimationCard}>
                    <div  >
                        <img className={classes.img1} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                        </div>
                        <div className={classes.ourAnimationCardText}>
                            <div id className={classes.text0}>
                                Stringer Things
                            </div>
                            <div id className={classes.text1} data-uia>
                                Downloading...
                                
                            </div>
                            
                        </div>
                </div>
                </div>
            </div>
            <div className={classes.rightDiv}>
                <h1 className={classes.headingCard}>Download your shows to watch offline.</h1>
                <h2 className={classes.headingCard1}>Save your favourites easily and always have something to watch.</h2>
                </div>
        </div>
    </div>
    )
}
export default OfflineShow;