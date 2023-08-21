import React from 'react'
import './Article.scss';

const Article = () => {
  return (
    <div className='app__article-content'>
      <div className='app__article-texte'>
      <p className='white-box'>Have you been there yourself?</p>
      <p className='po-text'>Many of us have maladaptive sleep behaviors. And most of us wish we could
improve or minimize these subpar habits. That's why a recent podcast episode caught my attention. In an episode from
The Huberman Lab, guest Dr. Gina Poe breaks down these suboptimal behaviors
in relation to sleep.</p>

      <p className='red-box'>What is maladaptive sleep behavior?</p>
      <p className='g-text'>“Maladaptive behaviors are behavioral habits
or patterns that interrupt our daily life”</p>
      <p className='po-text'>Dr. Gina Poe talks about maladaptive sleep behaviors that may cause us to sleep
past our alarm clock from time to time. And because our body can't “oversleep”, if
we are waking up groggy and feeling unrested, chances are we can point to a
number of maladaptive sleep behaviors.</p>
      

      <p className='red-box'>Examples of maladaptive sleep behavior?</p>
      <ul className='list'>
        <li>Taking naps during the day</li>
        <li>Drinking caffeine for energy drinks</li>
        <li>Having inconsistent and irregular sleeping schedules</li>
        <li>Limiting physical activities due to fatigue</li>
        <li>Using alcohol or drugs to help with falling asleep
</li>
      </ul>

      <p className='white-box'>You're not alone!</p>
      <p className='po-text'>A national poll that surveyed more than 1000 adults found that more than 50%
felt tired at least three days a week and sometimes all seven.</p>
      <p className='po-text'>58% of the respondents agreed that their mood was evidently affected by feeling
tired during the day. When I think of statistics like this and reflect back on
college, this doesn't make working with teammates easier.
</p>

      <p className='red-box'>Tips for getting back to a more energetic yo</p>
      <p className='po-text'>So, what can we do to make this better? A few things according to Huberman
and Dr. Poe:
</p>
      </div>
      <div className='app__article-table'>
      <div className='app__title'>
        <a className='hello'>1</a>
        <p className='plop'>Set the right sleep schedule
</p>
      </div>
      <p className='po-text-y'>Something that Dr. Poe harps on is getting quality sleep by tapping
into our sleep cycles. For instance waking up in the middle of REM
sleep can cause someone to feel groggy because we still have high
levels of melatonin during this stage. By going to bed at the same time and waking up on the same
schedule, you reinforce your bodies circadian rhythm. This is our
natural body clock. But sleep schedules aren't the only positive
reinforcement. So is Vitamin D.</p>
      <div className='app__title'>
        <a className='hello'>2</a>
        <p className='plop'>Get in your sunlight</p>
      </div>
      <p className='po-text-y'>Huberman talks about getting sunlight within the first 30 to 60
minutes of waking up as well as right before sunset. Why? Because
seeing natural light helps us wake up our circadian rhythm. If sunlight
isn't available to you in the first hour, turn on artificial lights until you
can get outside.</p>
      <div className='app__title'>
        <a className='hello'>3</a>
        <p className='plop'>Avoid caffeine 8 - 12 hours within your bedtime</p>
      </div>
      <p className='po-text-y'>In Huberman's toolkit for sleep, one of the
big no-nos is having caffeine 8 - 12 hours
before bed. For many, this may feel like
overkill with caffeine boundaries. However,
Dr. Walker, a professor at the University of
Berkley California and guest of Huberman,
tells us that caffeine is a major disrupter. 
</p>
<p className='po-text-y'>He explains that caffeine latches on to our adenosine receptors.
Adenosine is a chemical that is responsible for our sleepiness.
Throughout the day, adenosine should build like a pressure chamber and
make us sleep more as we get closer to our bedtime. Caffeine prohibits
this process from happening. Because of this, it's recommended to get
your caffeine intake early on.</p>
      </div>
      
  <div class="horizontal-line">
      <p className='source'>Source</p>
      </div>
      <div className='lolo'>
      Source : Huberman Lab + Dr. Gina Poe: Use Sleep to Enhance Learning, Memory & Emotional State
      <a href="https://hubermanlab.com/dr-gina-poe-use-sleep-to-enhance-learning-memory-and-emotional-state">
https://hubermanlab.com/dr-gina-poe-use-sleep-to-enhance-learning-memory-and-emotional-state </a>
      </div>
    </div>
  )
}

export default Article;