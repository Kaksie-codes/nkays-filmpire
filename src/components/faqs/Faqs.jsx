import React from 'react'
import FAQ from '../FAQ'

const Faqs = () => {
  return (
    <div className="faqs container__tiny">
        <h2>Frequently Asked Questions</h2>
        <div className="faqs__wrapper">
            <FAQ
                question="What is Netflix?"
                answer_top="
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and
                more on thousands of internet-connected devices."
                answer_bottom="
                    You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price.
                There's always something new to discover and new TV shows and movies are added every week!"
            />
            <FAQ
                question="How much does Netflix cost?"
                answer_top="
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans
                range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts."
                answer_bottom=""
            />
            <FAQ
                question="Where can i Watch?"
                answer_top="
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your
                personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones,
                tablets, streaming media players and game consoles."
                answer_bottom="
                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're
                on the go and without an internet connection. Take Netflix with you anywhere."
            />
            <FAQ
                question="How do i cancel?"
                answer_top="
                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your account anytime."
                answer_bottom=""
            />
            <FAQ
                question="What can i watch on Netflix?"
                answer_top="
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and
                more. Watch as much as you want, anytime you want"
                answer_bottom=""
            />
            <FAQ
                question="Is Netflix good for kids?"
                answer_top="
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV
                shows and movies in their own space."
                answer_bottom="
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can
                watch and block specific titles you don’t want kids to see"
            />
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form>
              <div>
                <input type="email" autoComplete="email" maxLength="50" minLength="5"/>
                <span>Email address</span>
              </div>               
              <button className="btn btn-large">
                Get Started 
                {/* <ArrowForwardIosIcon/> */}
              </button>                               
            </form>
        </div>
    </div>
  )
}

export default Faqs