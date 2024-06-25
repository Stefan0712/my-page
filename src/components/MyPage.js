import '../stylings/myPage.css'
import noIcon from '../icons/no-icon.svg'


const MyPage = () => {
    return ( 
        <div className="content" id="my-page">
            <div className='personal-name'>Stefan</div>
            <div className='spotify-container'><iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/44Xyja7xYPlVC6v2CeweSi?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
            <div className='section-title'>Personal Info</div>
            <div className='section-container'>
                <div className='item-body'>
                    <div className='icon'><img src={noIcon} alt=''></img></div>
                    <div className='name'><p>Whatsapp</p></div>
                </div>
                <div className='item-body'>
                    <div className='icon'><img src={noIcon} alt=''></img></div>``
                    <div className='name'><p>Location</p></div>
                </div>
                <div className='item-body'>
                    <div className='icon'><img src={noIcon} alt=''></img></div>
                    <div className='name'><p>Twitter</p></div>
                </div>
            </div>
            <div className='section-title'>Socials</div>
            <div className='section-container'>
                <div className='item-body'>
                    <div className='icon'><img src={noIcon} alt=''></img></div>
                    <div className='name'><p>Facebook</p></div>
                </div>
                <div className='item-body'>
                    <div className='icon'><img src={noIcon} alt=''></img></div>
                    <div className='name'><p>Instagram</p></div>
                </div>
                <div className='item-body'>
                    <div className='icon'><img src={noIcon} alt=''></img></div>
                    <div className='name'><p>Twitter</p></div>
                </div>
            </div>
            <div className='section-title'>Send me a message</div>
            <div className='section-container'>
                <form>
                    <fieldset>
                        <label>Name (optional)</label>
                        <input type='text' name='name'></input>
                    </fieldset>
                    <fieldset>
                        <label>Message</label>
                        <input type='text' name='name'></input>
                    </fieldset>
                    <button>Send</button>
                </form>
            </div>
            <div className='bottom-container'>
                <h2>Want to see hidden items?</h2>
                <h2>Request access</h2>
                <div className='buttons-container'>
                    <button>Login</button>
                    <p>or</p>
                    <button>Register</button>
                </div>
            </div>
        </div>
    );
}
 
export default MyPage;