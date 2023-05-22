const date = new Date();
let currentYear = date.getFullYear();

function Footer() {

    return <footer><p>{currentYear}</p></footer>
}

export default Footer;