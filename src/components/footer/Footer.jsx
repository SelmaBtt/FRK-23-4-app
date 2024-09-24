import styles from './Footer.module.css';

const Footer = () => {
    return(
        <div className={styles.contentWrapper}>
            <div className={styles.mainInfoWrapper}>
                <div>
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro iste, aliquam voluptatibus dignissimos unde magnam adipisci asperiores. Quam pariatur deserunt velit laborum, sapiente praesentium quo assumenda delectus saepe non?</p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>Placeholder</p>
                </div>
                <div>
                    <h1>Socials</h1>
                    <p>Placeholder</p>
                </div>
            </div>
            <div className={styles.extraInfoWrapper}>
                <p>Placeholder</p>
                <p>Placeholder</p>
            </div>
        </div>
    )
}

export default Footer;