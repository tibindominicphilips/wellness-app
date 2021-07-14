<style lang="scss" >
@import "../../assets/scss/variables.scss";
@import "./Result.scss";
</style>
<template>
  <v-container fluid class="result-contianer">
    <v-col class="text-center py-0">
      <h1 class="display-1 header-color">Let's Analyze Together!</h1>
    </v-col>
    <v-col class="text-center">
      <Chart @setChartData="setChartData" />
    </v-col>
    <v-row class="text-center mt-5 mx-0">
      <v-col cols="12">
        <span class="goodResultSection result-message-div"></span> Outstanding!
        Your answers show that you are aware of the importance of this area to
        your overall wellbeing. More importantly, you are putting your knowledge
        to work for you by practicing good wellbeing habits
      </v-col>
      <v-col cols="12">
        <span class="averageResultSection result-message-div"></span> Your
        wellbeing practices in this area are good, but there is room for
        improvement. What changes could you make to improve your score? Even a
        small change in behaviour can often help you achieve greater wellbeing.
      </v-col>
      <v-col cols="12">
        <span class="poorResultSection result-message-div"></span> You may be
        taking serious and unnecessary risks with your health. Perhaps you are
        not aware of the risks and what to do about them
      </v-col>
    </v-row>
    <v-col
      class="text-center mt-5 result-section"
      v-if="
        strengthAndWeakness &&
        strengthAndWeakness.strengths &&
        strengthAndWeakness.strengths.length
      "
    >
      <h1 class="display-1 header-color pt-5 pb-3">
        Celebrate Your Strengths!
      </h1>
      <br />
      <h3 class="py-3 title">
        An important part of the wellbeing journey is recognizing the positive
        aspects you already have going for you.
      </h3>
      <v-row class="justify-center">
        <v-col
          class="col-md-4 d-flex"
          v-for="(strength, strengthIndex) in strengthAndWeakness.strengths"
          :key="strengthIndex"
        >
          <v-card class="mx-auto my-5">
            <v-img
              height="250"
              :src="getCategoryImage(strength.category)"
            ></v-img>
            <v-card-title class="justify-center">{{
              strength.category
            }}</v-card-title>
            <v-card-text class="text-align-justify">
              <ul
                v-for="(strength, strengthIndex) in strength.description"
                :key="strengthIndex"
              >
                <li class="subtitle-1">{{ strength }}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col
      class="result-section"
      v-if="
        strengthAndWeakness &&
        strengthAndWeakness.weakness &&
        strengthAndWeakness.weakness.length
      "
    >
      <h1 class="text-center display-1 header-color pt-5 pb-3">
        Get To Work On Changes
      </h1>
      <p class="text-center py-3 title">Let's see what you can improve!</p>
      <v-row class="justify-center">
        <v-col
          class="col-md-4 d-flex"
          v-for="(weakness, weaknessIndex) in strengthAndWeakness.weakness"
          :key="weaknessIndex"
        >
          <v-card class="mx-auto my-5">
            <v-img
              height="250"
              :src="getCategoryImage(weakness.category)"
            ></v-img>
            <v-card-title class="justify-center">{{
              weakness.category
            }}</v-card-title>
            <v-card-text class="text-align-justify">
              <ul
                v-for="(strength, strengthIndex) in weakness.description"
                :key="strengthIndex"
              >
                <li class="subtitle-1">{{ strength }}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-row class="mx-0">
      <v-col cols="12">
        <h1 class="display-1 header-color pt-5 pb-3">Quick Links</h1>
      </v-col>
      <ul>
        <li class="pb-4">
          <a @click="showLessStressDialog = true"> Less Stress in 60 Seconds</a>
        </li>
        <li class="pb-4">
          <a @click="showBetterMentalHealthDialog = true">
            Five Ways To Better Mental Health</a
          >
        </li>
        <li class="pb-4">
          <a @click="showNatureDialog = true">
            Learn how nature imapcts wellbeing</a
          >
        </li>
      </ul>
    </v-row>
    <v-col class="text-center mb-5">
      <v-btn color="primary" to="/home">Take assessment again</v-btn>
    </v-col>
    <v-col class="text-center mb-5">
      <h1>Need more help?</h1>
      <p class="text-subtitle-1">
        You can talk to our wellness expert anytime !
      </p>
      <v-btn color="success" large>Talk now</v-btn>
    </v-col>

    <v-dialog v-model="showLessStressDialog" width="1200" scrollable>
      <v-card>
        <v-card-title class="text-h5"> Less Stress in 60 Seconds </v-card-title>

        <v-card-text>
          <div>
            <h3 class="title py-2">1. Breathe</h3>
            <p class="subtitle-1">
              Take a long, deep breath in, feel your lungs expand like a
              balloon, hold for a moment, and then release slowly out through
              your mouth.
            </p>
          </div>
          <div>
            <h3 class="title py-2">2. Laugh</h3>
            <p class="subtitle-1">
              Laughing increases your blood flow, boosts your ability to fight
              illness, and it feels really good.
            </p>
          </div>
          <div>
            <h3 class="title py-2">3. Move</h3>
            <p class="subtitle-1">
              Jumping jacks, squats and burpees can all be done quickly. Moving
              relaxes the muscles, uses up adrenaline and releases chemicals
              that help depression.
            </p>
          </div>
          <div>
            <h3 class="title py-2">4. Smile</h3>
            <p class="subtitle-1">
              Smiling releases chemicals that lower your blood pressure and
              increase relaxation.
            </p>
          </div>
          <div>
            <h3 class="title py-2">5. Music</h3>
            <p class="subtitle-1">
              Listening to music can improve mood, reduce depression and
              anxiety, and boost self esteem. And singing has been found to
              reduce levels of stress hormones.
            </p>
          </div>
          <div>
            <h3 class="title py-2">6. Stretch</h3>
            <p class="subtitle-1">
              Stress can make us tense. When we stretch our muscles relax, blood
              flow increases and endorphins are released.
            </p>
          </div>
          <div>
            <h3 class="title py-2">7. Declutter</h3>
            <p class="subtitle-1">
              Feeling like we have too much can increase stress hormones and
              overload our sense. Try donating things you don’t need to charity.
            </p>
          </div>
          <div>
            <h3 class="title py-2">8. Thankful</h3>
            <p class="subtitle-1">
              Reflect on the things you’re grateful for – people who do this
              regularly are less anxious, more engaged and have more fulfilling
              relationships.
            </p>
          </div>
          <div>
            <h3 class="title py-2">9. Sigh</h3>
            <p class="subtitle-1">
              Relaxing your mouth and shrugging your shoulders sends a message
              to your brain to turn off stress hormones.
            </p>
          </div>
          <div>
            <h3 class="title py-2">10. Nature</h3>
            <p class="subtitle-1">
              Even if you’re not close to nature, just looking at photos of
              nature can reduce stress levels and improve self-esteem.
            </p>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showLessStressDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showBetterMentalHealthDialog" width="1200" scrollable>
      <v-card>
        <v-card-title class="text-h5">
          Five Ways To Better Mental Health
        </v-card-title>

        <v-card-text>
          <div class="pb-2">
            <h3 class="title py-2">Connect</h3>
            <p class="subtitle-1">
              Staying in touch with loved ones can make us feel happier and more
              secure; and often just having a chat can help to lift our mood.
            </p>
            <ul>
              <li class="subtitle-2">
                Put five minutes aside to ask someone how they are
              </li>
              <li class="subtitle-2">
                Arrange to meet up with friends that you haven’t seen in a while
              </li>
              <li class="subtitle-2">
                Join a local group or club and meet new people in your community
              </li>
            </ul>
          </div>
          <div class="pb-2">
            <h3 class="title py-2">Be Active</h3>
            <p class="subtitle-1">
              Being active isn’t just good for our physical health; it’s also
              proven to have a positive effect on our mental health and
              wellbeing.
            </p>
            <ul>
              <li class="subtitle-2">Go for a short walk at lunchtime</li>
              <li class="subtitle-2">
                Discover a physical activity you enjoy and one that suits you
              </li>
            </ul>
          </div>
          <div>
            <h3 class="title py-2">Take Notice</h3>
            <p class="subtitle-1">
              Whether you’re spending time with friends or taking a moment for
              yourself, try to stop to take notice and be aware of the present.
            </p>
            <ul>
              <li class="subtitle-2">
                Set aside time to practise mindfulness or take up yoga
              </li>
              <li class="subtitle-2">
                Take notice of how your friends or colleagues are feeling
              </li>
              <li class="subtitle-2">
                Spend time outdoors, enjoy the fresh air and notice what’s
                around you
              </li>
            </ul>
          </div>
          <div class="pb-2">
            <h3 class="title py-2">Learn</h3>
            <p class="subtitle-1">
              Learning enhances your self-esteem and confidence, and can be a
              great way to meet new people.
            </p>
            <ul>
              <li class="subtitle-2">
                Sign up for a class and learn something new
              </li>
              <li class="subtitle-2">
                Rediscover an old interest, such as cooking or gardening
              </li>
              <li class="subtitle-2">
                Take on a new challenge to make or fix something
              </li>
            </ul>
          </div>
          <div class="pb-2">
            <h3 class="title py-2">Give</h3>
            <p class="subtitle-1">
              Giving can be very rewarding – in fact those who report a greater
              interest in helping others are more likely to rate themselves as
              happy.
            </p>
            <ul>
              <li class="subtitle-2">
                Volunteer your time for a cause you are passionate about
              </li>
              <li class="subtitle-2">
                Spend time with someone who you know has been having a difficult
                time
              </li>
            </ul>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="showBetterMentalHealthDialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showNatureDialog" width="1200" scrollable>
      <v-card>
        <v-card-title class="text-h5">
          How Does Nature Impact Our Wellbeing?
        </v-card-title>

        <v-card-text>
          <div class="pb-2">
            <p class="subtitle-1">
              Research reveals that environments can increase or reduce our
              stress, which in turn impacts our bodies. What you are seeing,
              hearing, experiencing at any moment is changing not only your
              mood, but how your nervous, endocrine, and immune systems are
              working.
            </p>
          </div>
          <div class="pb-2">
            <p class="subtitle-1">
              The stress of an unpleasant environment can cause you to feel
              anxious, or sad, or helpless. This in turn elevates your blood
              pressure, heart rate, and muscle tension and suppresses your
              immune system. A pleasing environment reverses that.And regardless
              of age or culture, humans find nature pleasing.
            </p>
          </div>
          <div class="pb-2">
            <h3 class="title py-2">Nature Heals</h3>
            <p class="subtitle-1">
              Being in nature, or even viewing scenes of nature, reduces anger,
              fear, and stress and increases pleasant feelings. Exposure to
              nature not only makes you feel better emotionally, it contributes
              to your physical wellbeing, reducing blood pressure, heart rate,
              muscle tension, and the production of stress hormones.
            </p>
            <p class="subtitle-1">
              Research done in hospitals, offices, and schools has found that
              even a simple plant in a room can have a significant impact on
              stress and anxiety.
            </p>
          </div>
          <div>
            <h3 class="title py-2">Nature Soothes</h3>
            <p class="subtitle-1">
              In addition, nature helps us cope with pain. Because we are
              genetically programmed to find trees, plants, water, and other
              nature elements engrossing, we are absorbed by nature scenes and
              distracted from our pain and discomfort.
            </p>
          </div>
          <div class="pb-2">
            <h3 class="title py-2">Nature Restores</h3>
            <p class="subtitle-1">
              One of the most intriguing areas of current research is the impact
              of nature on general wellbeing. In one study in Mind, 95% of those
              interviewed said their mood improved after spending time outside,
              changing from depressed, stressed, and anxious to more calm and
              balanced. Other studies show that time in nature or scenes of
              nature are associated with a positive mood, and psychological
              wellbeing, meaningfulness, and vitality.
            </p>
            <p class="subtitle-1">
              Furthermore, time in nature or viewing nature scenes increases our
              ability to pay attention. Because humans find nature inherently
              interesting, we can naturally focus on what we are experiencing
              out in nature. This also provides a respite for our overactive
              minds, refreshing us for new tasks.
            </p>
          </div>
          <div class="pb-2">
            <h3 class="title py-2">Nature Connects</h3>
            <p class="subtitle-1">
              According to a series of field studies time spent in nature
              connects us to each other and the larger world. Another study who
              had trees and green space around their building reported knowing
              more people, having stronger feelings of unity with neighbors,
              being more concerned with helping and supporting each other, and
              having stronger feelings of belonging than tenants in buildings
              without trees. In addition to this greater sense of community,
              they had a reduced risk of street crime, lower levels of violence
              and aggression between domestic partners, and a better capacity to
              cope with life’s demands, especially the stresses of living in
              poverty.
            </p>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showNatureDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script src="./ResultComponent.js">
</script>
