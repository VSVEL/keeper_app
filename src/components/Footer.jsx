const date = new Date();
let currentYear = date.getFullYear();

function Footer() {

    return <footer><p>Copyright {currentYear}</p></footer>
}

export default Footer;