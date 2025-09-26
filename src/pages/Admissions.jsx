import React from 'react';
import {
  GraduationCap,
  Calendar,
  FileText,
  Users,
  Clock,
  CheckCircle,
  Star,
  Heart,
  BookOpen,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Admissions = () => {
  const admissionSteps = [
    {
      step: "1",
      title: "Application Submission",
      description: "Complete and submit your application with all required documents",
      icon: FileText,
      color: "primary"
    },
    {
      step: "2",
      title: "Review Process",
      description: "Our admissions committee carefully reviews all applications",
      icon: Users,
      color: "gold"
    },
    {
      step: "3",
      title: "Interview & Assessment",
      description: "Selected candidates participate in interviews and assessments",
      icon: BookOpen,
      color: "primary"
    },
    {
      step: "4",
      title: "Admission Decision",
      description: "Families receive notification of admission decisions",
      icon: Award,
      color: "gold"
    }
  ];

  const requirements = [
    "Completed application form",
    "Academic transcripts from previous school",
    "Student portfolio or work samples",
    "Teacher recommendations",
    "Birth certificate and immunization records",
    "Proof of residence"
  ];

  const importantDates = [
    { date: "January 15, 2026", event: "Application Period Opens" },
    { date: "March 31, 2026", event: "Application Deadline" },
    { date: "April 1-30, 2026", event: "Review Period" },
    { date: "May 15, 2026", event: "Admission Decisions Sent" },
    { date: "June 1, 2026", event: "Enrollment Confirmation Deadline" }
  ];

  return (
    <main className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient text-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide uppercase">Join Our Community</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              <span className="block font-extralight text-white/90">Welcome to</span>
              <span className="block font-medium">TAG Scholars</span>
            </h1>

            <p className="text-xl text-white/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              Join our community of talented and gifted young scholars where every child's potential is nurtured
              and excellence is cultivated through innovative education and caring support.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-primary-900 hover:bg-white/95 font-medium px-10 py-4 rounded-lg transition-all duration-300 shadow-lg">
                Start Application
              </button>
              <button className="btn-elegant">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TAG Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Why Choose TAG</span>
            </div>
            <h2 className="text-4xl font-light text-primary-900 mb-6">Where Children Come First</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto font-light">
              At TAG School for Young Scholars, our dedicated faculty, supportive parents, and motivated students
              work together to create an environment where every child excels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-6 border border-primary-100">
                <Star className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-medium text-primary-900 mb-4">Gifted Education</h3>
              <p className="text-primary-700 font-light">
                Specialized curriculum designed specifically for talented and gifted students to reach their full potential.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold-50 rounded-lg flex items-center justify-center mx-auto mb-6 border border-gold-100">
                <Users className="h-8 w-8 text-gold-700" />
              </div>
              <h3 className="text-xl font-medium text-primary-900 mb-4">Community Partnership</h3>
              <p className="text-primary-700 font-light">
                Strong collaboration between families, teachers, and students creates a supportive learning environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-6 border border-primary-100">
                <Award className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-medium text-primary-900 mb-4">Academic Excellence</h3>
              <p className="text-primary-700 font-light">
                Proven track record of preparing students for success in high school and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Admission Process</span>
            </div>
            <h2 className="text-4xl font-light text-primary-900 mb-6">Your Path to TAG</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto font-light">
              Our straightforward admission process is designed to identify students who will thrive in our
              challenging and supportive academic environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 card-hover border border-neutral-200 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center ${
                    step.color === 'primary'
                      ? 'bg-primary-50 text-primary-700 border border-primary-100'
                      : 'bg-gold-50 text-gold-700 border border-gold-100'
                  }`}>
                    <step.icon className="h-8 w-8" />
                  </div>

                  <div className={`w-8 h-8 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-sm ${
                    step.color === 'primary' ? 'bg-primary-600' : 'bg-gold-600'
                  }`}>
                    {step.step}
                  </div>

                  <h3 className="text-lg font-medium text-primary-900 mb-3">{step.title}</h3>
                  <p className="text-primary-700 text-sm font-light">{step.description}</p>
                </div>

                {/* Connector Arrow */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-px bg-primary-300"></div>
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary-300 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Timeline */}
      <section className="section-padding bg-neutral-50">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Application Requirements</span>
              </div>

              <h3 className="text-3xl font-light text-primary-900 mb-6">What You'll Need</h3>
              <p className="text-primary-700 mb-8 font-light">
                Ensure you have all required documents ready before starting your application.
              </p>

              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-primary-700">{requirement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
                <h4 className="font-medium text-primary-900 mb-2">Need Help?</h4>
                <p className="text-primary-700 text-sm font-light">
                  Our admissions team is here to assist you throughout the process. Contact us with any questions.
                </p>
              </div>
            </div>

            {/* Important Dates */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-medium">Important Dates</span>
              </div>

              <h3 className="text-3xl font-light text-primary-900 mb-6">Timeline</h3>
              <p className="text-primary-700 mb-8 font-light">
                Mark these important dates on your calendar to stay on track with the admission process.
              </p>

              <div className="space-y-6">
                {importantDates.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-24 text-sm font-medium text-primary-600">
                      {item.date}
                    </div>
                    <div className="flex-1">
                      <div className="h-px bg-primary-200 mt-3"></div>
                    </div>
                    <div className="flex-shrink-0 max-w-xs">
                      <div className="text-primary-900 font-medium">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gold-50 rounded-xl border border-gold-100">
                <h4 className="font-medium text-primary-900 mb-2">Stay Informed</h4>
                <p className="text-primary-700 text-sm font-light">
                  Subscribe to our newsletter for updates on admission deadlines and school events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="bg-primary-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Apply?</h2>
            <p className="text-xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
              Take the first step in providing your child with an exceptional educational experience at TAG School for Young Scholars.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <button className="bg-white text-primary-900 hover:bg-white/95 font-medium px-10 py-4 rounded-lg transition-all duration-300 shadow-lg">
                Start Your Application
              </button>
              <button className="btn-elegant">
                Download Information Packet
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 text-gold-400" />
                <span className="text-white/90">(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 text-gold-400" />
                <span className="text-white/90">admissions@tagscholars.edu</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-5 w-5 text-gold-400" />
                <span className="text-white/90">Visit Our Campus</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admissions;