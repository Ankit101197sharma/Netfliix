import React from 'react'
import classes from './LandingPage.module.css'
 function LandingPage() {
    return (
        <div>
           <div className={classes.mainLanding}>
            <div>
                <div className={classes.mainHeading}>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <form action="">
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className={classes.form}>
                            <input type="text" placeholder='Email Address' />
                            <button className={classes.startB}>Get Started  </button>
                        </div>
                    </form>
                </div>
            </div>
           </div>
        </div>
    )
}
export default LandingPage;