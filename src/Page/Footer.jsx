import '../CSS/Footer.css'

function Footer(){
    return (
        <div className="container">
            <p>
                &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
            v.0.1.1
        </div>
    )
}

export default Footer;