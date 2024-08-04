import './ContactButton.css'
import contactImg from '../assets/contact.png'

function ContactButton({targetRef}) {

  // Function to scroll to the target element
  const scrollToSection = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div onClick={scrollToSection} className='contact-button fixed w-[80px] z-[20] right-[50px] bottom-[50px]'>
      <img className='w-full' src={contactImg} alt="Contact me icon" />
    </div>
  )
}

export default ContactButton