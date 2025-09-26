import React from 'react';
import {
  Users,
  Star,
  Award,
  BookOpen,
  Heart,
  GraduationCap,
  Mail,
  Lightbulb
} from 'lucide-react';

const Staff = () => {
  const leadership = [
    {
      name: "Dr. Sarah Johnson",
      title: "Principal",
      image: "bg-primary-800",
      bio: "Leading TAG School with 15+ years of experience in gifted education and educational administration.",
      specialties: ["Educational Leadership", "Gifted Education", "Curriculum Development"]
    },
    {
      name: "Ms. Maria Rodriguez",
      title: "Assistant Principal",
      image: "bg-gold-600",
      bio: "Supporting academic excellence and student development with expertise in educational psychology.",
      specialties: ["Student Services", "Educational Psychology", "Professional Development"]
    }
  ];

  const faculty = [
    {
      name: "Mr. David Chen",
      title: "Mathematics Teacher",
      grade: "Grades 6-8",
      image: "bg-primary-600",
      specialties: ["Advanced Mathematics", "Problem Solving", "STEM Integration"]
    },
    {
      name: "Ms. Jennifer Williams",
      title: "English Language Arts",
      grade: "Grades 3-5",
      image: "bg-gold-500",
      specialties: ["Creative Writing", "Literature Analysis", "Reading Comprehension"]
    },
    {
      name: "Dr. Michael Thompson",
      title: "Science Teacher",
      grade: "Grades 6-8",
      image: "bg-primary-700",
      specialties: ["Scientific Method", "Laboratory Research", "Environmental Science"]
    },
    {
      name: "Ms. Lisa Park",
      title: "Art & Creative Expression",
      grade: "All Grades",
      image: "bg-gold-600",
      specialties: ["Visual Arts", "Creative Thinking", "Art History"]
    },
    {
      name: "Mr. Robert Garcia",
      title: "Social Studies Teacher",
      grade: "Grades 4-8",
      image: "bg-primary-500",
      specialties: ["World History", "Critical Thinking", "Cultural Studies"]
    },
    {
      name: "Ms. Amanda Lee",
      title: "Technology Integration",
      grade: "All Grades",
      image: "bg-gold-700",
      specialties: ["Digital Literacy", "Coding", "Educational Technology"]
    }
  ];

  const support = [
    {
      name: "Ms. Patricia Brown",
      title: "School Counselor",
      department: "Student Services",
      contact: "pbrown@tagscholars.edu"
    },
    {
      name: "Mr. James Wilson",
      title: "Librarian & Media Specialist",
      department: "Academic Resources",
      contact: "jwilson@tagscholars.edu"
    },
    {
      name: "Ms. Karen Davis",
      title: "Special Education Coordinator",
      department: "Student Services",
      contact: "kdavis@tagscholars.edu"
    },
    {
      name: "Mrs. Helen Martinez",
      title: "Administrative Assistant",
      department: "Main Office",
      contact: "hmartinez@tagscholars.edu"
    }
  ];

  return (
    <main className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient text-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide uppercase">Our Team</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              <span className="block font-extralight text-white/90">Meet Our</span>
              <span className="block font-medium">Dedicated Faculty</span>
            </h1>

            <p className="text-xl text-white/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              Our exceptional team of educators brings passion, expertise, and dedication to every classroom,
              ensuring each student receives the personalized attention they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">Leadership</span>
            </div>
            <h2 className="text-4xl font-light text-primary-900 mb-6">School Leadership</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto font-light">
              Our experienced leadership team guides TAG School with vision, integrity, and a deep commitment
              to educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 card-hover shadow-lg border border-neutral-200">
                <div className={`w-24 h-24 ${leader.image} rounded-xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg`}>
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-medium text-primary-900 mb-2">{leader.name}</h3>
                  <p className="text-gold-600 font-medium mb-4">{leader.title}</p>
                  <p className="text-primary-700 font-light mb-6 leading-relaxed">{leader.bio}</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {leader.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section-padding bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Faculty</span>
            </div>
            <h2 className="text-4xl font-light text-primary-900 mb-6">Our Teaching Team</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto font-light">
              Meet the passionate educators who inspire and challenge our students every day,
              bringing expertise and creativity to the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((teacher, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 card-hover shadow-lg border border-neutral-200">
                <div className={`w-20 h-20 ${teacher.image} rounded-xl flex items-center justify-center mx-auto mb-4 text-white text-lg font-bold shadow-lg`}>
                  {teacher.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-medium text-primary-900 mb-1">{teacher.name}</h3>
                  <p className="text-gold-600 font-medium text-sm mb-1">{teacher.title}</p>
                  <p className="text-primary-600 text-sm mb-4">{teacher.grade}</p>

                  <div className="flex flex-wrap justify-center gap-1">
                    {teacher.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="bg-neutral-100 text-primary-700 px-2 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Support Team</span>
            </div>
            <h2 className="text-4xl font-light text-primary-900 mb-6">Student Support Services</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto font-light">
              Our dedicated support team ensures every student has access to the resources and assistance
              they need to succeed academically and personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {support.map((staff, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-primary-900 mb-1">{staff.name}</h3>
                    <p className="text-gold-600 font-medium text-sm mb-1">{staff.title}</p>
                    <p className="text-primary-600 text-sm mb-3">{staff.department}</p>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary-500" />
                      <span className="text-primary-700 text-sm">{staff.contact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <Lightbulb className="h-16 w-16 mx-auto mb-6 text-gold-400" />
            <h2 className="text-4xl font-light mb-6">Join Our Team</h2>
            <p className="text-xl text-white/90 mb-8 font-light">
              Are you passionate about gifted education and making a difference in students' lives?
              We're always looking for exceptional educators to join our team.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-light mb-4">Why Teach at TAG?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <Award className="h-8 w-8 mb-3 text-gold-400" />
                  <h4 className="font-medium mb-2">Professional Growth</h4>
                  <p className="text-white/80 text-sm">Ongoing professional development and collaboration opportunities</p>
                </div>
                <div>
                  <Users className="h-8 w-8 mb-3 text-gold-400" />
                  <h4 className="font-medium mb-2">Supportive Community</h4>
                  <p className="text-white/80 text-sm">Work with passionate colleagues in a collaborative environment</p>
                </div>
                <div>
                  <GraduationCap className="h-8 w-8 mb-3 text-gold-400" />
                  <h4 className="font-medium mb-2">Gifted Focus</h4>
                  <p className="text-white/80 text-sm">Specialize in teaching talented and gifted students</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-primary-900 hover:bg-white/95 font-medium px-10 py-4 rounded-lg transition-all duration-300 shadow-lg">
                View Open Positions
              </button>
              <button className="btn-elegant">
                Submit Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Staff;