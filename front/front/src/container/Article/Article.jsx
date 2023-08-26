import React from 'react'
import './Article.scss';

const Article = () => {
  return (
    <div className='app__article-content'>
      <div className='app__article-texte'>
      <p className='red-box'>What is Intermittent Fasting ?</p>
      <p className='po-text'>We've all heard it before, whether online, on TV, or in the gym. But what exactly is intermittent fasting? Currently one of the world's most popular health and fitness trends, intermittent fasting is a pattern that cycles you through periods of fasting and periods of eating.</p>

      <div className='big-red-box'>
      <p>Most people already "fast" every day during their sleep. Intermittent fasting can be as simple as extending that fast for a little longer by doing any of the following.</p>
            <ul className='list red'>
                  <li>skipping breakfast</li>
                  <li>waiting till noon to eat your first meal</li>
                  <li>finishing your last meal by eight at night</li>
            </ul>
      </div>

      <p className='po-text'>Intermittent fasting is actually fairly easy to do. Most people report the hardest part is the beginning phase. This is because your body adjusts to not eating for longer periods of time. However, after you get into the routine of it, most people report feeling better and having higher energy during a fast. </p>
      <p className='po-text'>You aren't allowed to eat food during a fast but liquids such as water, coffee, and tea are encouraged during a fast.
</p>

      <p className='red-box'>Why do it ?</p>
      <p className='po-text'>Humans have been fasting for thousands of years. Unfortunately, sometimes it was done out of necessity when there was not enough food.</p>
      
      <p className='po-text'>Many cultures, such as Christianity, Islam, and Buddhism, fast for religious purposes. Nowadays, many people fast for weight loss, improving their metabolic rates, or sometimes people just like the routine of intermittent fasting. 
</p>
      

      <p className='white-box'>Our Body Takes Notice When We Fast</p>
      <p className='po-text'>All sorts of processes begin to happen in our bodies when we don’t eat for an extended period of time. This is because our bodies adapt to function during a “period of famine.” Our hormones, genes, and cellular repair processes all start to take notice. </p>
      <ul className='list hey'>
        <li>Our hormones, such as Human Growth Hormone, change to make stored body fat more accessible for energy burning. HGH increases dramatically during a period of famine.</li>
        <li>Our cells go into hyper violent repair more, getting rid of waste from the body. </li>
        <li>Studies have shown our genes and molecules begging to change, adding resistance to age-related diseases.</li>
      </ul>

      <p className='red-box'>Two Types of Intermittent Fasting</p>
      <p className='po-text'>Intermittent fasting has become very popular nowadays, and many methods have emerged. Here are 2 of the most popular ones for reference. </p>
            <p className='go-text'>16/8 Method:</p> <br/> <p className='poo-text'>This method requires you to fast for 16 hours of the day. For example, you would choose an eight-hour window to eat during the day. This usually occurs between 10 AM and 6 PM or similar.</p>
            <p className='go-text'>5:2 Diet: </p> <br/> <p className='poo-text'>Eat only 500-600 calories two days out of the week. This is a calorie-cutting approach. That is less consistent than the 16/8.</p>
      

      <p className='red-box'>Benefits of Intermittent Fasting</p>
      <p className='po-text'>While some people like the convenience of fasting, intermittent fasting has many health benefits as well.</p>
      </div>
      <div className='app__article-table'>
      <div className='app__title'>
        <a className='hello'>1</a>
        <p className='plop'>Weight Loss
</p>
      </div>
      <p className='po-text-y'>Many people use intermittent fasting in order to lose weight. It's a great and effective way to burn fat and restrict fewer calories. Fasting can help create a calorie deficit by reducing the eating window. During the fasting periods, the body starts using stored fat as energy.</p>
      <div className='app__title'>
        <a className='hello'>2</a>
        <p className='plop'>Blood Sugar Regulation</p>
      </div>
      <p className='po-text-y'>Intermittent fasting may improve insulin sensitivity and help regulate blood sugar levels. With intermittent fasting, glucose is regulated in terms of how often and how much it's being released into the bloodstream. This has led to reducing the risk of Type 2 Diabetes and improving overall metabolic health.</p>
      <div className='app__title'>
        <a className='hello'>3</a>
        <p className='plop'>Live Longer </p>
      </div>
      <p className='po-text-y'>A study done with rodents showed that fasting can extend lifespan as effectively as calorie restriction. This is due to our genes changing, as mentioned above. Our biomarkers of disease indicate improvement. Many people who report fasting note that their mental clarity and brain-related activities are enhanced.</p>
      
      
      </div>
      <div className='app__article-texte'>
      <p className='red-box'>Adjusting Diet and Lifestyle</p>
      <p className='po-text'>Whenever considering making major adjustments to your lifestyle and diet, it's important to consult a primary care physician who has access to your medical history. This is true even for healthy lifestyle choices. Everyone has a different body and has different needs. If you are looking to get started with a diet such as this one, speak with your doctor or nutritionist.</p>
      </div>

  <div class="horizontal-line">
      <p className='source'>Source</p>
      </div>
      <div className='lolo'>
      Source : Kris Gunnars, BSc (Authority Nutrition): What Is Intermittent Fasting? Explained in Human Terms 
      <a href="https://www.healthline.com/nutrition/what-is-intermittent-fasting">
      https://www.healthline.com/nutrition/what-is-intermittent-fasting
</a>
      </div>
    </div>
  )
}

export default Article;