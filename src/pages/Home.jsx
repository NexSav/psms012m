import React, { useEffect, useState } from 'react';
import {
  BookOpen,
  Users,
  Calendar,
  MessageSquare,
  FileText,
  Play,
  MapPin,
  Phone,
  Mail,
  Award,
  Lightbulb,
  Heart,
  Star,
  ArrowRight,
  Globe
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Young Scholars",
      subtitle: "Where Children Come First",
      description: "At the Talented and Gifted School for Young Scholars, faculties, parents and students work together to prepare all students to excel in life and develop to their full potential, both intellectually and socially.",
      cta: "Apply for Admission"
    },
    {
      title: "Academic Excellence",
      subtitle: "Nurturing Gifted Minds",
      description: "Our dedicated faculty creates an environment where talented and gifted students thrive through challenging curriculum, innovative teaching methods, and personalized attention.",
      cta: "View Our Programs"
    },
    {
      title: "Community Partnership",
      subtitle: "Building Tomorrow Together",
      description: "Join our vibrant community where parents, teachers, and students collaborate to create an exceptional educational experience that prepares scholars for future success.",
      cta: "Join Our Community"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const quickAccessItems = [
    { icon: BookOpen, title: "Admissions", href: "/admissions", color: "primary" },
    { icon: Users, title: "Parent's Corner", href: "/resources/parents", color: "gold" },
    { icon: MessageSquare, title: "Counselor's Corner", href: "/resources/counselor", color: "primary" },
    { icon: Calendar, title: "Monthly Newsletters", href: "/resources/newsletters", color: "gold" },
    { icon: FileText, title: "TAG PTA", href: "/community/pta", color: "primary" },
  ];

  const achievements = [
    { number: "95%", label: "Student Success Rate", icon: Award },
    { number: "15:1", label: "Student-Teacher Ratio", icon: Users },
    { number: "25+", label: "Years of Excellence", icon: Star },
    { number: "100%", label: "College Acceptance", icon: Lightbulb },
  ];

  const programs = [
    {
      title: "STEM Innovation",
      description: "Cutting-edge science, technology, engineering, and mathematics programs.",
      image: "bg-primary-800",
      features: ["Robotics Lab", "Coding Classes", "Science Research"]
    },
    {
      title: "Arts & Creativity",
      description: "Comprehensive arts education fostering creative expression and cultural appreciation.",
      image: "bg-gold-600",
      features: ["Visual Arts", "Music Program", "Theater Arts"]
    },
    {
      title: "Global Citizenship",
      description: "Preparing students for an interconnected world through language and cultural studies.",
      image: "bg-primary-600",
      features: ["Language Immersion", "Cultural Exchange", "Global Projects"]
    }
  ];

  const news = [
    {
      date: "August 28, 2025",
      title: "School Opening Town Hall",
      excerpt: "Join us for our School Opening Town Hall on Thursday, August 28 at 5:45pm. Recording and presentation available on Parent's Corner.",
      category: "Announcements"
    },
    {
      date: "September 17, 2025",
      title: "2025 Curriculum Conference Schedule",
      excerpt: "Virtual Curriculum Conferences (Meet the Teachers) from 4:45 pm - 7:45 pm on Zoom. Three cycles available.",
      category: "Academics"
    },
    {
      date: "September 30, 2025",
      title: "8th Grade Family Town Hall",
      excerpt: "Virtual town hall covering 8th Grade Expectations, Graduation Requirements, SHSAT, High School Applications, and more.",
      category: "8th Grade"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/home/TAG Young Scholars.mp4" type="video/mp4" />
          </video>
          {/* Elegant dark overlay for sophisticated look */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        </div>

        <div className="relative z-10 h-screen flex items-center">
          <div className="container-padding w-full">
            <div className="max-w-5xl text-white">
              {/* Slide Content */}
              <div className="space-y-12 animate-fade-in" key={currentSlide}>
                {/* Elegant badge */}
                <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-sm font-medium tracking-wide uppercase">Talented and Gifted Education</span>
                </div>

                {/* Main heading with sophisticated typography */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                    <span className="block font-extralight text-white/90">Nurturing</span>
                    <span className="block font-medium text-white">{heroSlides[currentSlide].title}</span>
                  </h1>

                  <div className="w-20 h-px bg-gold-400 ml-1"></div>

                  <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white/85 max-w-3xl leading-relaxed">
                    {heroSlides[currentSlide].subtitle}
                  </h2>
                </div>

                {/* Description with elegant spacing */}
                <p className="text-base md:text-lg text-white/75 max-w-2xl leading-relaxed font-light">
                  {heroSlides[currentSlide].description}
                </p>

                {/* Refined call-to-action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <button className="bg-white text-primary-900 hover:bg-white/95 font-medium px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    {heroSlides[currentSlide].cta}
                  </button>
                  <button className="btn-elegant flex items-center justify-center space-x-3">
                    <Play className="h-5 w-5" />
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>

              {/* Minimalist slide indicators */}
              <div className="flex space-x-3 mt-20">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-8 h-px transition-all duration-500 ${
                      currentSlide === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-secondary-900 mb-6">Quick Access</h2>
            <div className="w-16 h-px bg-primary-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {quickAccessItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group bg-white rounded-xl p-8 text-center card-hover shadow-sm border border-neutral-200 hover:border-primary-300"
              >
                <div className={`w-14 h-14 mx-auto mb-6 rounded-lg flex items-center justify-center ${
                  item.color === 'primary'
                    ? 'bg-primary-50 text-primary-700 group-hover:bg-primary-600 group-hover:text-white'
                    : 'bg-accent-50 text-accent-700 group-hover:bg-accent-500 group-hover:text-white'
                } transition-all duration-300`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-sm font-medium text-secondary-800 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-3 bg-primary-50 text-primary-700 px-6 py-3 rounded-full mb-8">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium tracking-wide uppercase">Our Mission</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-light text-secondary-900 mb-8 leading-tight">
                Nurturing Tomorrow's
                <span className="font-medium block text-primary-700">Innovators</span>
              </h2>

              <p className="text-lg text-secondary-700 leading-relaxed mb-12 font-light">
                At TAG School for Young Scholars, we believe every talented and gifted student has unlimited potential. Our dedicated educators create an environment where intellectual curiosity thrives, creativity flourishes, and academic excellence is achieved through challenging, personalized learning experiences.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-primary-50 rounded-lg mb-4 mx-auto border border-primary-100">
                      <achievement.icon className="h-6 w-6 text-primary-700" />
                    </div>
                    <div className="text-3xl font-light text-primary-900 mb-1">{achievement.number}</div>
                    <div className="text-sm text-primary-600 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-6">
                <button className="btn-primary">Learn More</button>
                <button className="btn-secondary">Contact Us</button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6 h-[500px]">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl h-48 flex items-center justify-center text-white font-light shadow-lg">
                    Excellence in Learning
                  </div>
                  <div className="bg-gradient-to-br from-accent-500 to-gold-500 rounded-xl h-48 flex items-center justify-center text-white font-light shadow-lg">
                    Creative Expression
                  </div>
                </div>
                <div className="space-y-6 mt-8">
                  <div className="bg-gradient-to-br from-cool-500 to-cool-600 rounded-xl h-48 flex items-center justify-center text-white font-light shadow-lg">
                    Global Perspective
                  </div>
                  <div className="bg-gradient-to-br from-secondary-700 to-secondary-800 rounded-xl h-48 flex items-center justify-center text-white font-light shadow-lg">
                    Future Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
              <Lightbulb className="h-4 w-4" />
              <span className="text-sm font-medium">Our Programs</span>
            </div>
            <h2 className="text-4xl font-light text-primary-900 mb-6">Exceptional Learning Opportunities</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto font-light">
              Discover our comprehensive programs designed to inspire, challenge, and prepare students for success in an ever-evolving world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden card-hover shadow-lg">
                <div className={`h-48 ${program.image} flex items-center justify-center text-white text-xl font-bold`}>
                  {program.title}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-primary-900 mb-3">{program.title}</h3>
                  <p className="text-primary-700 mb-4 font-light">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-primary-600">
                        <Star className="h-4 w-4 text-gold-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* News */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-8">
                <FileText className="h-6 w-6 text-primary-600 mr-3" />
                <h2 className="text-3xl font-light text-primary-900">Latest News</h2>
              </div>

              <div className="space-y-6">
                {news.map((article, index) => (
                  <article key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary-500">{article.date}</span>
                      <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium text-primary-900 mb-2">{article.title}</h3>
                    <p className="text-primary-700 mb-4 font-light">{article.excerpt}</p>
                    <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Calendar Widget */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Events
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-sm font-medium">Spring Concert</div>
                    <div className="text-xs opacity-90">March 25, 2024</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-sm font-medium">Science Fair</div>
                    <div className="text-xs opacity-90">April 2, 2024</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-sm font-medium">Open House</div>
                    <div className="text-xs opacity-90">April 10, 2024</div>
                  </div>
                </div>
                <button className="w-full mt-4 bg-white text-primary-600 font-medium py-3 rounded-lg hover:bg-slate-50 transition-colors">
                  View Full Calendar
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-xl font-medium text-primary-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gold-500 mr-3" />
                    <span className="text-primary-700">123 Education Ave, City, State 12345</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gold-500 mr-3" />
                    <span className="text-primary-700">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gold-500 mr-3" />
                    <span className="text-primary-700">info@schoolname.edu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-white via-neutral-100 to-secondary-900 text-secondary-900">
        <div className="container-padding text-center">
          <div className="max-w-3xl mx-auto">
            <Globe className="h-16 w-16 mx-auto mb-6 text-primary-600" />
            <h2 className="text-4xl font-light mb-6 text-secondary-800">Ready to Join Our Community?</h2>
            <p className="text-xl text-secondary-700 mb-8 font-light">
              Discover how TAG School for Young Scholars can provide your child with an exceptional educational experience that prepares them for a bright future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary">
                Schedule a Visit
              </button>
              <button className="bg-transparent border-2 border-secondary-400 hover:border-secondary-600 text-secondary-700 hover:text-secondary-900 font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:bg-secondary-50">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;