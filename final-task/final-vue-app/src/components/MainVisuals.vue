<template>
    <div>
        <div class="navbar">
            <h1>Yoga Studio</h1>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#ourClasses">Classes</a></li>
                <li><a href="#participants">Participants</a></li>
            </ul>
        </div>

        <div id="hero">
            <video src="../assets/background-vid.mp4" autoplay muted loop alt="woman doing yoga"></video>
        </div>

        <div class="main">

            <!-- ABOUT -->
            <div id="about">
                <div class="aboutContainer">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu
                        fugiat nulla pariatur.
                        <br>
                        <br>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                    <img class="aboutImage" src="https://images.pexels.com/photos/7565619/pexels-photo-7565619.jpeg"
                        alt="A woman doing yoga" />
                </div>
            </div>

            <!-- TEAM -->
            <div id="team">
                <h2>Our Team</h2>
                <div class="sideBySide">
                    <div class="ImgWithText">
                        <img class="teamImage"
                            src="https://images.pexels.com/photos/9775825/pexels-photo-9775825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="A yoga teacher" />
                        <h3 class="teamName">Mark</h3>
                        <p class="teamDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div class="ImgWithText">
                        <img class="teamImage" src="https://images.pexels.com/photos/6975237/pexels-photo-6975237.jpeg"
                            alt="A yoga teacher" />
                        <h3 class="teamName">Lucy</h3>
                        <p class="teamDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div class="ImgWithText">
                        <img class="teamImage"
                            src="https://images.pexels.com/photos/8788808/pexels-photo-8788808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="A yoga teacher" />
                        <h3 class="teamName">Anna</h3>
                        <p class="teamDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>


                    <div class="ImgWithText">
                        <img class="teamImage"
                            src="https://images.pexels.com/photos/4445624/pexels-photo-4445624.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="A dog" />
                        <h3 class="teamName">Bobo</h3>
                        <p class="teamDescription">In charge of team spirit, cuddles and naps</p>
                    </div>
                </div>
            </div>

        

            <!-- CLASSES -->
            <div id="ourClasses">
                <h2>Our Classes</h2>
                <div class="classContainer">
                    <div class="classTextContainer">
                        <div class="classText">
                            <h3>Beginners</h3>
                            <p>17:00. Open for all.</p>
                        </div>
                        <div class="classText">
                            <h3>Intermediate</h3>
                            <p>18:00. Experience needed.</p>

                        </div>
                        <div class="classText">
                            <h3>Advanced</h3>
                            <p>19:00. A challenge. </p>
                        </div>

                    </div>
                    <video class="classVideo" src="../assets/classes-vid.mp4" autoplay muted loop
                        alt="woman doing yoga"></video>
                </div>
            </div>
            <div id="participants">
            </div>
        </div> <!-- end of main -->
    </div>
</template>
<script>

</script>
<style>
* {
    margin: 0px;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
}

/* NAVBAR STYLING */
.navbar {
    padding: 24px;
    text-align: center;
}

.navbar a {
    color: black;
    padding: 14px 16px;
    text-decoration: none;
    border-radius: 4px;
}

.navbar a:hover {
    text-decoration: underline;
}

.navbar ul {
    padding: 0px;
}

.navbar ul li {
    padding: 10px;
    display: inline-block;
    margin: auto;
    list-style: none;
    font-weight: 700;
}

.navbar h1 {
    padding: 10px;
}

#hero video {
    height: 90vh;
    width: 100% !important;
    object-fit: cover;
    /* overflow: none; */
    overflow: hidden;
    padding: 0px;
    margin: 0px;
    top: 0px;
    right: 0px;
    bottom: 0;
    left: 0px;
}

.main {
    max-width: 70vw;
    margin: auto;
}

.aboutContainer,
#team,
#ourClasses {
    height: 90vh;
    /* display: flex;
    align-items: center; */
}

.main h2 {
    margin-bottom: 15px;
    margin-top: 15px;
}

/* ABOUT */
.aboutContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
}

.aboutImage {
    width: 50%;
    overflow: hidden;
}

#about p {
    font-size: large;
    width: 40%;
}

/* TEAM */
#team h3,
p {
    margin-top: 10px;
}

.sideBySide {
    display: flex;
    max-width: 100%;
    margin-bottom: 0px;
    padding-bottom: 0px;
}

.ImgWithText {
    float: left;
    width: 25%;
    padding: 5px;
    text-align: center;
    margin-bottom: 0;
    padding-bottom: 0;
}

.teamImage {
    width: 100%;
}

/* CLASSES */
.classContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.classTextContainer {
    text-align: right;
}

.classText {
    margin-top: 15px;
}

.classVideo {
    width: 70%;
    height: auto;
    margin-left: 25px;
}

#participants {
    padding-top: 50px;
}
</style>