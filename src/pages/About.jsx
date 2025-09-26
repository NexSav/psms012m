import React from 'react';
import {
  Heart,
  Users,
  Star,
  Target,
  Award,
  BookOpen,
  Lightbulb,
  Globe,
  GraduationCap,
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const missionValues = [
    {
      icon: Heart,
      title: "Child-Centered Approach",
      description: "Every decision we make puts the well-being and growth of our students first, ensuring they feel valued and supported.",
      color: "primary"
    },
    {
      icon: Star,
      title: "Excellence in Education",
      description: "We maintain the highest academic standards while fostering creativity, critical thinking, and intellectual curiosity.",
      color: "gold"
    },
    {
      icon: Users,
      title: "Community Partnership",
      description: "Families, faculty, and students work together to create a collaborative learning environment.",
      color: "primary"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We prepare students to be thoughtful global citizens who can contribute positively to our interconnected world.",
      color: "gold"
    }
  ];

  const commitments = [
    "Develop each student's intellectual potential to the fullest",
    "Foster creativity, critical thinking, and problem-solving skills",
    "Build strong character and ethical decision-making abilities",
    "Cultivate social-emotional intelligence and empathy",
    "Prepare students for success in high school and beyond",
    "Create an inclusive environment where all students thrive"
  ];

  const achievements = [
    {
      icon: Award,
      stat: "100%",
      label: "High School Acceptance Rate",
      description: "All our graduates successfully transition to their high school of choice"
    },
    {
      icon: BookOpen,
      stat: "15:1",
      label: "Student-Teacher Ratio",
      description: "Small class sizes ensure personalized attention for every student"
    },
    {
      icon: Star,
      stat: "25+",
      label: "Years of Excellence",
      description: "Decades of proven success in educating talented and gifted students"
    },
    {
      icon: Users,
      stat: "95%",
      label: "Family Satisfaction",
      description: "Families consistently rate their TAG experience as exceptional"
    }
  ];

  return (
    <main className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient text-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide uppercase">Our Mission</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              <span className="block font-extralight text-white/90">Where Children</span>
              <span className="block font-medium">Come First</span>
            </h1>

            <p className="text-xl text-white/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              At the Talented and Gifted School for Young Scholars, faculties, parents and students work together
              to prepare all students to excel in life and develop to their full potential, both intellectually and socially.
            </p>

            <div className="flex justify-center">
              <button className="btn-elegant">
                Learn More About Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
                <Target className="h-4 w-4" />
                <span className="text-sm font-medium">Our Mission</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-light text-primary-900 mb-8 leading-tight">
                Nurturing
                <span className="font-medium block">Exceptional Minds</span>
              </h2>

              <p className="text-lg text-primary-700 leading-relaxed mb-8 font-light">
                TAG School for Young Scholars is dedicated to providing an exceptional educational experience
                that challenges and inspires our talented and gifted students. We believe that when children
                come first, extraordinary learning happens.
              </p>

              <p className="text-lg text-primary-700 leading-relaxed mb-12 font-light">
                Our collaborative approach brings together dedicated educators, supportive families, and
                motivated students to create an environment where academic excellence, creativity, and
                character development flourish.
              </p>

              <button className="btn-primary">
                Discover Our Programs
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6 h-[500px]">
                <div className="space-y-6">
                  <div className="bg-primary-800 rounded-xl h-48 flex items-center justify-center text-white font-light shadow-lg border border-primary-700">
                    <div className="text-center">
                      <GraduationCap className="h-12 w-12 mx-auto mb-3" />
                      <div>Academic Excellence</div>
                    </div>
                  </div>
                  <div className="bg-gold-600 rounded-xl h-48 flex items-center justify-center text-white font-light shadow-lg">
                    <div className="text-center">
                      <Lightbulb className="h-12 w-12 mx-auto mb-3" />
                      <div>Creative Innovation</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mt-8">
                  <div className="bg-primary-600 rounded-xl h-48 flex items-center justify-center text-white font-light shadow-lg">
                    <div className="text-center">
                      <Users className="h-12 w-12 mx-auto mb-3" />
                      <div>Community Spirit</div>
                    </div>
                  </div>
                  <div className="bg-neutral-700 rounded-xl h-48 flex items-center justify-center text-white font-light shadow-lg">
                    <div className="text-center">
                      <Star className="h-12 w-12 mx-auto mb-3" />
                      <div>Character Building</div>
                    </div>
                  </div>
                </div>
              </div>
              <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-gold-400 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">Core Values</span>
            </div>
            <h2 className="text-4xl font-light text-primary-900 mb-6">What Drives Us</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto font-light">
              Our core values guide everything we do, from curriculum design to daily interactions,
              ensuring every child receives an exceptional educational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 card-hover shadow-lg border border-neutral-200">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                  value.color === 'primary'
                    ? 'bg-primary-50 text-primary-700 border border-primary-100'
                    : 'bg-gold-50 text-gold-700 border border-gold-100'
                }`}>
                  <value.icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-medium text-primary-900 mb-4">{value.title}</h3>
                <p className="text-primary-700 font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Our Commitments</span>
              </div>

              <h2 className="text-4xl font-light text-primary-900 mb-8 leading-tight">
                What We
                <span className="font-medium block">Promise</span>
              </h2>

              <p className="text-lg text-primary-700 leading-relaxed mb-8 font-light">
                We are committed to providing every student with the tools, support, and opportunities
                they need to reach their full potential and become confident, capable, and caring individuals.
              </p>

              <div className="space-y-4">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-primary-700 font-light">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-light mb-6">Our Educational Philosophy</h3>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Individualized Learning</h4>
                  <p className="text-white/90 text-sm font-light">
                    Every student learns differently. Our approach adapts to each child's unique strengths and needs.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Collaborative Growth</h4>
                  <p className="text-white/90 text-sm font-light">
                    Learning happens best in community. We foster collaboration between students, families, and educators.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Holistic Development</h4>
                  <p className="text-white/90 text-sm font-light">
                    We nurture not just academic growth, but also social, emotional, and creative development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Our Impact</span>
            </div>
            <h2 className="text-4xl font-light text-primary-900 mb-6">Proven Excellence</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto font-light">
              Our commitment to excellence is reflected in the achievements of our students,
              the satisfaction of our families, and the success of our graduates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center card-hover shadow-lg border border-neutral-200">
                <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary-100">
                  <achievement.icon className="h-8 w-8 text-primary-700" />
                </div>
                <div className="text-4xl font-light text-primary-900 mb-2">{achievement.stat}</div>
                <div className="text-lg font-medium text-primary-800 mb-3">{achievement.label}</div>
                <p className="text-primary-700 text-sm font-light">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding hero-gradient text-white">
        <div className="container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 text-gold-400" />
            <h2 className="text-4xl font-light mb-6">Join Our Community</h2>
            <p className="text-xl text-white/90 mb-8 font-light">
              Experience firsthand how TAG School for Young Scholars puts children first
              and helps every student reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-primary-900 hover:bg-white/95 font-medium px-10 py-4 rounded-lg transition-all duration-300 shadow-lg">
                Schedule a Visit
              </button>
              <button className="btn-elegant">
                Apply for Admission
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;