class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!--Header Section-->
        <header>
            <a href="index.html"><img class="logo" src="assests/images/logo.png" alt="logo"></a>
            <a class="login" href="#" target="_self"><button type="button" class="btn btn-light btn-sm" data-toggle="modal" data-target="#log-modal">LOGIN</button></a>
        </header>
        `
    }
}

customElements.define('my-header', MyHeader);


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!--Footer Section-->
        <footer>
            <div class="footer-wrap">
                <div class="contact"><a href="#" target="_self"><button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#contact-modal">Contact Us</button></a></div>  

                <p class="copyright">&copy; 2020 ROOM SEARCH PVT. LTD.</p>

                <div class="social-links">
                    <a href="https://www.facebook.com/" target="_blank"><img class="social-logo" src="assests/images/facebook.png" alt="facebook" srcset=""></a>
                    <a href="https://www.instagram.com/" target="_blank"><img class="social-logo" src="assests/images/instagram.png" alt="instagram" srcset=""></a>
                    <a href="https://twitter.com/" target="_blank"><img class="social-logo" src="assests/images/twitter.png" alt="twitter" srcset=""></a> 
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('my-footer', MyFooter);