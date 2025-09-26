import React from 'react';
import {
  BookOpen,
  Users,
  Calendar,
  FileText,
  ExternalLink,
  MessageSquare,
  Heart,
  Globe,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

const Resources = () => {
  const parentResources = [
    {
      title: "Parent's Corner",
      description: "Access recordings, presentations, and important updates for TAG families",
      icon: Users,
      link: "https://sites.google.com/schools.nyc.gov/parentscorner/HOME",
      type: "external"
    },
    {
      title: "NYC Schools Account",
      description: "Student grades, attendance, and school information portal",
      icon: Globe,
      link: "https://mystudent.nyc/",
      type: "external"
    },
    {
      title: "Monthly Newsletters",
      description: "Stay updated with school news, events, and important announcements",
      icon: FileText,
      link: "/resources/newsletters",
      type: "internal"
    },
    {
      title: "School Calendar",
      description: "Important dates, events, and school schedule information",
      icon: Calendar,
      link: "https://www.schools.nyc.gov/calendar",
      type: "external"
    }
  ];

  const counselorResources = [
    {
      title: "Academic Support",
      description: "Individual counseling and academic planning for student success"
    },
    {
      title: "Social-Emotional Learning",
      description: "Programs to support student well-being and emotional development"
    },
    {
      title: "College & Career Guidance",
      description: "High school preparation and future planning resources"
    },
    {
      title: "Crisis Support",
      description: "Immediate support and intervention services when needed"
    }
  ];

  const doeLinks = [
    {
      title: "DOE Homepage",
      description: "Official NYC Department of Education website",
      link: "http://schools.nyc.gov/"
    },
    {
      title: "Office of Pupil Transportation",
      description: "School bus routes and transportation information",
      link: "http://www.optnyc.org/parents/information.htm"
    },
    {
      title: "SchoolFood",
      description: "Free and reduced lunch program information",
      link: "http://www.schoolfoodnyc.org/freelunch/freelunch.htm"
    }
  ];

  const announcements = [
    {
      date: "August 28, 2025",
      title: "School Opening Town Hall",
      time: "5:45 PM",
      description: "Join us for our School Opening Town Hall. ZOOM information available. Recording will be posted to Parent's Corner."
    },
    {
      date: "September 17, 2025",
      title: "Curriculum Conferences",
      time: "4:45 PM - 7:45 PM",
      description: "Virtual Meet the Teachers event with three cycles. Recordings available on Parent's Corner."
    },
    {
      date: "September 30, 2025",
      title: "8th Grade Family Town Hall",
      time: "5:45 PM",
      description: "Important information about graduation requirements, SHSAT, high school applications, and more."
    }
  ];

  return (
    <main className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient text-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide uppercase">Resources & Support</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              <span className="block font-extralight text-white/90">Family</span>
              <span className="block font-medium">Resources</span>
            </h1>

            <p className="text-xl text-white/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              Access important information, forms, and support services to help your child
              succeed at TAG School for Young Scholars.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access Resources */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Parent Resources</span>
            </div>
            <h2 className="text-4xl font-light text-primary-900 mb-6">Essential Links</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto font-light">
              Quick access to the most important resources and platforms for TAG families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parentResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 card-hover shadow-lg border border-neutral-200 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                    <resource.icon className="h-6 w-6 text-primary-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-primary-900">{resource.title}</h3>
                      {resource.type === 'external' && (
                        <ExternalLink className="h-4 w-4 text-primary-500" />
                      )}
                    </div>
                    <p className="text-primary-700 font-light mb-4">{resource.description}</p>
                    <a
                      href={resource.link}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                      target={resource.type === 'external' ? '_blank' : '_self'}
                      rel={resource.type === 'external' ? 'noopener noreferrer' : ''}
                    >
                      Access Resource
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counselor's Corner */}
      <section className="section-padding bg-neutral-50">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">Counselor's Corner</span>
              </div>

              <h2 className="text-4xl font-light text-primary-900 mb-8 leading-tight">
                Student
                <span className="font-medium block">Support Services</span>
              </h2>

              <p className="text-lg text-primary-700 leading-relaxed mb-8 font-light">
                Our school counselor provides comprehensive support to help students navigate
                academic, social, and emotional challenges while developing the skills they
                need for future success.
              </p>

              <div className="bg-primary-500 rounded-xl p-6 text-white mb-8">
                <h3 className="font-medium mb-2">Contact Our Counselor</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>counselor@tagscholars.edu</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>(555) 123-4567 ext. 205</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {counselorResources.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200">
                  <h3 className="text-lg font-medium text-primary-900 mb-3">{service.title}</h3>
                  <p className="text-primary-700 font-light">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">Current Announcements</span>
            </div>
            <h2 className="text-4xl font-light text-primary-900 mb-6">Important Updates</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto font-light">
              Stay informed about upcoming events, meetings, and important school announcements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-4 w-4 text-gold-500" />
                  <span className="text-sm font-medium text-primary-600">{announcement.date}</span>
                </div>
                <h3 className="text-lg font-medium text-primary-900 mb-2">{announcement.title}</h3>
                <p className="text-gold-600 font-medium text-sm mb-3">{announcement.time}</p>
                <p className="text-primary-700 font-light text-sm">{announcement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOE Resources */}
      <section className="section-padding bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">DOE Resources</span>
            </div>
            <h2 className="text-4xl font-light text-primary-900 mb-6">NYC Department of Education</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto font-light">
              Access important NYC DOE resources and services for students and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doeLinks.map((link, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-hover shadow-lg border border-neutral-200">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <ExternalLink className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="text-lg font-medium text-primary-900 mb-3">{link.title}</h3>
                <p className="text-primary-700 font-light mb-4">{link.description}</p>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                >
                  Visit Site
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <MessageSquare className="h-16 w-16 mx-auto mb-6 text-gold-400" />
            <h2 className="text-4xl font-light mb-6">Need Additional Support?</h2>
            <p className="text-xl text-white/90 mb-8 font-light">
              Our staff is here to help you navigate resources and find the support your family needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-primary-900 hover:bg-white/95 font-medium px-10 py-4 rounded-lg transition-all duration-300 shadow-lg">
                Contact Main Office
              </button>
              <button className="btn-elegant">
                Email Questions
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;