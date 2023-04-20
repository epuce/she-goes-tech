
<template lang="">
    <div>
        <footer>
        <div>
            <a href="http://www.facebook.com" target=”_blank”> <img  class="icon" src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png?20200312232327"/> </a>
            <a href="https://www.instagram.com/" target=”_blank”><img class="icon"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CIS-A2K_Instagram_Icon_%28Black%29.svg/640px-CIS-A2K_Instagram_Icon_%28Black%29.svg.png"/> </a>
            <a href="https://www.youtube.com/"><img class="icon"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/CIS-A2K_Youtube_Icon_%28Black%29.svg/640px-CIS-A2K_Youtube_Icon_%28Black%29.svg.png"/> </a>
    
            <!-- <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a> -->
        </div>


    
        <div >
            <a href="https://www.google.com/maps/place/Vilnius">Vilnius, Lithuania</a>
                <a href="email@email.com">email@email.com</a>
        </div>

        <div >
            <p>2023 Website by Agne Buraityte. Images from Pexels</p>
        </div>

    </footer>
    </div>
</template>
<script>

export default {

}
</script>
<style>

footer {
    width: 80vw;
    padding: 10px;
    margin: auto;
    text-align: center;
}

footer div {
    width: 100%;
    margin: 1% 0%;
    padding: 0.6% 0%;
    color: gray;
}

footer a {
    display: inline-block;
    text-decoration: none;
    color: gray;
    padding: 0px 20px;
}

/* footer a i {
        font-size: 20px;
        margin: 0% 1%;
        padding: 0px -10px;
        color:red;
    } */

.icon {
    height: 25px;
    opacity: 0.5;
}

.icon:hover {
    opacity: 0.8;

}
footer a:hover {
    color: #444442;
}

footer p {
    font-size: small;
}
</style>