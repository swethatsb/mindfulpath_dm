export type Article = {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  slug: string;
  thumbnail?: string;
  content?: string;
};

export const articles: Article[] = [
  {
    title: "5 Daily Habits to Improve Your Mental Health",
    excerpt:
      "Simple yet powerful practices you can incorporate into your daily routine to boost your mental wellness and resilience.",
    category: "Self-Care",
    author: "Dr. Sarah ",
    readTime: "5 min read",
    date: "Feb 5, 2026",
    slug: "daily-habits-mental-health",
    thumbnail: "/1.png",
    content:
      `
  <div style="font-family: 'Segoe UI', sans-serif; line-height: 1.8; color: #333;">

    <p style="text-align: justify; margin-bottom: 20px;">
      Mental health awareness is of great need in today’s fast-paced world. 
      As stress levels rise, anxiety and depression increase, and constant digital 
      distractions take over, caring for your mental health is no longer optional — it is essential.
    </p>

    <p style="text-align: justify; margin-bottom: 30px;">
      The good news? You don’t need drastic life changes or expensive solutions. 
      Small, consistent daily habits can significantly improve your emotional balance 
      and overall well-being.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2 style="margin-bottom: 10px;"><strong>1. Wake Up Without Checking Your Phone</strong></h2>

    <p style="text-align: justify;">
      Checking social media, emails, or news immediately exposes your brain 
      to comparison and pressure. This can increase anxiety before your day even begins.
    </p>

    <div style="background-color: #f5f9f7; padding: 15px 20px; border-radius: 8px; margin: 15px 0;">
      <strong>Instead:</strong>
      <ul style="margin-top: 10px;">
        <li>Sit quietly for 5 minutes</li>
        <li>Practice deep breathing</li>
        <li>Stretch your body</li>
        <li>Set one positive intention</li>
      </ul>
    </div>

    <p style="text-align: justify;">
      A calm morning routine enhances emotional stability and reduces unnecessary mental overload.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2><strong>2. Exercise to Reduce Anxiety and Depression</strong></h2>

    <p style="text-align: justify;">
      Physical activity is a natural mood enhancer. During exercise, your body releases:
    </p>

    <ul>
      <li><strong>Endorphins</strong> – Natural mood boosters</li>
      <li><strong>Serotonin</strong> – Improves emotional stability</li>
      <li><strong>Dopamine</strong> – Increases motivation</li>
    </ul>

    <p style="text-align: justify;">
      Even 20–30 minutes of walking, yoga, strength training, dancing, or light cardio 
      can significantly improve mental health, sleep quality, and confidence.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2><strong>3. Practice Daily Mindfulness</strong></h2>

    <p style="text-align: justify;">
      Mindfulness helps manage anxiety, reduce overthinking, and improve emotional control.
    </p>

    <div style="background-color: #f5f9f7; padding: 15px 20px; border-radius: 8px; margin: 15px 0;">
      <strong>Practice for 10 minutes daily:</strong>
      <ul style="margin-top: 10px;">
        <li>Deep breathing</li>
        <li>Guided meditation</li>
        <li>Body scan exercises</li>
        <li>Mindful eating</li>
      </ul>
    </div>

    <p style="text-align: justify;">
      Research shows mindfulness reduces anxiety and depression symptoms 
      while improving emotional regulation.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2><strong>4. Minimize Negative Digital Usage</strong></h2>

    <p style="text-align: justify;">
      Constant exposure to negative news, comparisons on social media, 
      and unrealistic lifestyles can lower self-esteem and increase anxiety.
    </p>

    <ul>
      <li>Set time limits on social media</li>
      <li>Turn off unnecessary notifications</li>
      <li>Avoid news before bedtime</li>
      <li>Read or journal instead of scrolling</li>
    </ul>

    <p style="text-align: justify;">
      Healthy digital boundaries are essential for modern mental wellness.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2><strong>5. Practice Gratitude Before Sleep</strong></h2>

    <p style="text-align: justify;">
      Reflecting on your day clears emotions and reduces overthinking.
    </p>

    <div style="background-color: #f5f9f7; padding: 15px 20px; border-radius: 8px; margin: 15px 0;">
      <strong>Ask yourself:</strong>
      <ul style="margin-top: 10px;">
        <li>What went well today?</li>
        <li>What did I learn?</li>
        <li>What am I grateful for?</li>
      </ul>
    </div>

    <p style="text-align: justify;">
      Gratitude journaling has been scientifically shown to improve long-term 
      emotional well-being and reduce depressive symptoms.
    </p>

  </div>
`,

  },
  {
    title: "Understanding Anxiety: Signs, Causes, and Coping Strategies",
    excerpt:
      "Learn to recognize anxiety symptoms and discover evidence-based techniques to manage them effectively.",
    category: "Anxiety",
    author: "Dr. Karan",
    readTime: "8 min read",
    date: "Feb 3, 2026",
    slug: "understanding-anxiety",
    thumbnail: "/2.png",
    content:
      `
  <div style="font-family: 'Segoe UI', sans-serif; line-height: 1.8; color: #333;">

    <p style="text-align: justify; margin-bottom: 20px;">
      Anxiety is one of the most widespread mental health challenges in today’s world. 
      While occasional worry is a normal part of life, persistent anxiety can disrupt 
      your relationships, work, concentration, and emotional stability.
    </p>

    <p style="text-align: justify; margin-bottom: 30px;">
      As mental health awareness increases, more people are recognizing the importance 
      of understanding anxiety rather than ignoring it. In this blog, we’ll explore what anxiety truly is, 
      its symptoms, causes, coping strategies, and when to seek professional help.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2><strong>What Is Anxiety?</strong></h2>

    <p style="text-align: justify;">
      Anxiety is your body’s natural response to stress or perceived danger. 
      It activates the fight-or-flight response, preparing you to respond quickly.
    </p>

    <p style="text-align: justify;">
      In small amounts, anxiety can be helpful — it keeps you alert before an exam, 
      presentation, or important event. However, it becomes a concern when:
    </p>

    <ul>
      <li>It feels constant</li>
      <li>It is intense and overwhelming</li>
      <li>It affects sleep or concentration</li>
      <li>It interferes with work or relationships</li>
    </ul>

    <p style="text-align: justify;">
      If left unmanaged, chronic anxiety may lead to depression and other mental health disorders.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2><strong>Common Signs and Symptoms</strong></h2>

    <p style="text-align: justify;">
      Anxiety affects both the mind and body.
    </p>

    <div style="background-color: #f5f9f7; padding: 15px 20px; border-radius: 8px; margin: 15px 0;">
      <strong>Emotional Symptoms:</strong>
      <ul style="margin-top: 10px;">
        <li>Excessive worry</li>
        <li>Irritability</li>
        <li>Feeling restless or on edge</li>
        <li>Difficulty concentrating</li>
        <li>Fear of worst-case scenarios</li>
      </ul>
    </div>

    <div style="background-color: #f5f9f7; padding: 15px 20px; border-radius: 8px; margin: 15px 0;">
      <strong>Physical Symptoms:</strong>
      <ul style="margin-top: 10px;">
        <li>Rapid heartbeat</li>
        <li>Sweating</li>
        <li>Shortness of breath</li>
        <li>Muscle tension</li>
        <li>Fatigue</li>
        <li>Sleep disturbances</li>
      </ul>
    </div>

    <p style="text-align: justify;">
      Some individuals may also experience panic attacks — sudden episodes of intense fear 
      accompanied by strong physical sensations.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2><strong>What Causes Anxiety?</strong></h2>

    <p style="text-align: justify;">
      Anxiety usually develops due to a combination of factors:
    </p>

    <h3><strong>Biological Factors</strong></h3>
    <ul>
      <li>Brain chemistry imbalance</li>
      <li>Genetics</li>
      <li>Hormonal changes</li>
    </ul>

    <h3><strong>Environmental Triggers</strong></h3>
    <ul>
      <li>Work pressure</li>
      <li>Financial stress</li>
      <li>Relationship challenges</li>
      <li>Academic pressure</li>
    </ul>

    <h3><strong>Psychological Factors</strong></h3>
    <ul>
      <li>Overthinking</li>
      <li>Perfectionism</li>
      <li>Low self-esteem</li>
      <li>Past trauma</li>
    </ul>

    <p style="text-align: justify;">
      Identifying the root cause is the first step toward choosing the right coping strategies.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2><strong>How to Cope Successfully with Anxiety</strong></h2>

    <h3><strong>Practice Mindfulness Daily</strong></h3>
    <p style="text-align: justify;">
      Mindfulness helps you focus on the present rather than worrying about the future.
    </p>

    <ul>
      <li>10 minutes of deep breathing</li>
      <li>Guided meditation</li>
      <li>Body scan exercises</li>
    </ul>

    <h3><strong>Move Your Body Regularly</strong></h3>
    <p style="text-align: justify;">
      Exercise is a natural anxiety reliever. Even 20–30 minutes of walking, yoga, 
      or strength training boosts serotonin and endorphins.
    </p>

    <h3><strong>Limit Stimulants</strong></h3>
    <ul>
      <li>Reduce excessive caffeine</li>
      <li>Limit screen time</li>
      <li>Avoid constant negative news consumption</li>
    </ul>

    <h3><strong>Challenge Negative Thoughts</strong></h3>
    <p style="text-align: justify;">
      When anxiety asks, “What if something goes wrong?”, respond with:
    </p>

    <ul>
      <li>Does this fear have real evidence?</li>
      <li>What is the most realistic outcome?</li>
    </ul>

    <h3><strong>Maintain a Healthy Routine</strong></h3>
    <p style="text-align: justify;">
      Consistent sleep, balanced nutrition, and structured daily habits help stabilize mood 
      and reduce anxiety triggers.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2><strong>When to Seek Professional Help</strong></h2>

    <p style="text-align: justify;">
      Consider seeking therapy if:
    </p>

    <ul>
      <li>Anxiety persists for weeks or months</li>
      <li>Panic attacks are frequent</li>
      <li>Daily functioning becomes difficult</li>
      <li>You notice signs of depression</li>
    </ul>

    <p style="text-align: justify;">
      Mental health care is now accessible online from the comfort of your home. 
      Therapy helps identify triggers, build coping mechanisms, and develop long-term emotional resilience.
    </p>

    <p style="text-align: justify; font-weight: 600; margin-top: 20px;">
      Asking for help is not a sign of weakness — it is an act of strength and self-care.
    </p>

  </div>
`,
  },
  {
    title: "The Power of Mindfulness in Managing Stress",
    excerpt:
      "Explore how mindfulness meditation can transform your relationship with stress and improve your overall well-being.",
    category: "Mindfulness",
    author: "Dr. Riya Sharma",
    readTime: "6 min read",
    date: "Feb 1, 2026",
    slug: "mindfulness-stress-management",
    thumbnail: "/3.png",
    content: `
  <div style="font-family: 'Segoe UI', sans-serif; line-height: 1.8; color: #333;">

    <p style="text-align: justify; margin-bottom: 20px;">
      Stress, anxiety, and burnout have become common in today’s fast-paced world. 
      As mental health awareness continues to grow, more people are searching for 
      simple and effective ways to protect their emotional well-being. 
      One of the most powerful and scientifically supported approaches is mindfulness.
    </p>

    <p style="text-align: justify; margin-bottom: 30px;">
      Mindfulness is not just a trend — it is a proven technique for managing stress, 
      reducing anxiety, and building emotional resilience.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2><strong>What Is Mindfulness?</strong></h2>

    <p style="text-align: justify;">
      Mindfulness is the practice of being fully present in the current moment 
      without judgment. Instead of worrying about the future or reliving the past, 
      you focus entirely on what is happening right now.
    </p>

    <p style="text-align: justify;">
      When practiced consistently, mindfulness can:
    </p>

    <ul>
      <li>Reduce stress levels</li>
      <li>Manage anxiety symptoms</li>
      <li>Improve emotional balance</li>
      <li>Prevent burnout</li>
      <li>Support overall mental health</li>
    </ul>

    <p style="text-align: justify;">
      It trains your brain to respond calmly rather than react impulsively.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2><strong>Beginner Meditation: Easy Steps to Get Started</strong></h2>

    <p style="text-align: justify;">
      You do not need to meditate for hours to experience benefits. 
      Start small and stay consistent.
    </p>

    <div style="background-color: #f5f9f7; padding: 15px 20px; border-radius: 8px; margin: 20px 0;">
      
      <h3 style="margin-top: 0;"><strong>Deep Breathing (5 Minutes)</strong></h3>
      <p style="text-align: justify;">
        Inhale for 4 seconds, hold for 4 seconds, and exhale for 4 seconds. 
        This simple rhythm helps regulate your nervous system and calm your mind.
      </p>

      <h3><strong>Mindful Walking</strong></h3>
      <p style="text-align: justify;">
        Pay attention to each step, your breathing, and the sounds around you. 
        Focus on movement rather than racing thoughts.
      </p>

      <h3><strong>Gratitude Journaling</strong></h3>
      <p style="text-align: justify;">
        Write down three things you are grateful for each day. 
        This shifts your focus away from negativity and toward appreciation.
      </p>

      <h3><strong>Digital Detox Moments</strong></h3>
      <p style="text-align: justify;">
        Reduce unnecessary social media usage to protect your mental clarity 
        and avoid digital overload.
      </p>

    </div>

    <p style="text-align: justify;">
      Even 10 minutes of mindfulness daily can significantly improve stress management 
      and emotional stability.
    </p>

    <hr style="margin: 30px 0; opacity: 0.2;" />

    <h2><strong>When to Seek Extra Support</strong></h2>

    <p style="text-align: justify;">
      While mindfulness is highly effective, it may not replace professional support 
      in cases of severe anxiety or depression.
    </p>

    <p style="text-align: justify;">
      If stress feels overwhelming or persistent, consider speaking to a therapist. 
      Online therapy platforms now make mental health support accessible and flexible.
    </p>

    <p style="text-align: justify; font-weight: 600; margin-top: 20px;">
      Combining mindfulness with professional guidance can create powerful, 
      long-term emotional resilience.
    </p>

  </div>
`,
  },
];

export function findArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
