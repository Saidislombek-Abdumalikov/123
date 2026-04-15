import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Presentation, Info } from 'lucide-react';

interface SlideData {
  id: number;
  title: string;
  uzbekTitle: string;
  content: string[];
  vocabulary: { eng: string; uzb: string }[];
  image: string;
  scenario: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Jobs: Past, Present, and Future!",
    uzbekTitle: "Kasblar: O'tmish, Bugun va Kelajak!",
    content: [
      "Welcome to our English lesson!",
      "Today we will learn about different jobs.",
      "A job is work people do to help others and earn money.",
      "Some jobs are very old, and some are very new.",
      "Let's explore jobs from the past, present, and future!"
    ],
    vocabulary: [
      { eng: "Job", uzb: "Kasb / Ish" },
      { eng: "Learn", uzb: "O'rganmoq" },
      { eng: "Ready", uzb: "Tayyor" }
    ],
    image: "https://image.pollinations.ai/prompt/cartoon-kids-learning-about-jobs?width=800&height=600&nologo=true",
    scenario: "Teacher: 'Hello class! Good morning. Today we are going to talk about Jobs. A job is what you do to help people and earn money. Are you ready? Let's go!'"
  },
  {
    id: 2,
    title: "Important Jobs Today",
    uzbekTitle: "Bugungi Kundagi Muhim Kasblar",
    content: [
      "Doctors help sick people get better in hospitals.",
      "Teachers help us learn new and exciting things at school.",
      "Builders make our houses, schools, and tall buildings.",
      "Police officers and firefighters keep us safe.",
      "These jobs keep our cities running every day!"
    ],
    vocabulary: [
      { eng: "Doctor", uzb: "Shifokor" },
      { eng: "Teacher", uzb: "O'qituvchi" },
      { eng: "Help", uzb: "Yordam bermoq" }
    ],
    image: "https://media.bizj.us/view/img/3990391/workers*900xx4800-2700-0-30.jpg",
    scenario: "Teacher: 'Look at this picture. What is this? Yes, a doctor! Doctors help sick people. And what is my job? I am a teacher. Teachers help you learn. These jobs are very important today.'"
  },
  {
    id: 3,
    title: "Jobs in the Past",
    uzbekTitle: "O'tmishdagi Kasblar",
    content: [
      "Long ago, many people were farmers.",
      "They worked hard in the fields with horses and cows.",
      "They grew all the food for their families and villages.",
      "Blacksmiths made tools from hot metal.",
      "Life was different, but their work was very important."
    ],
    vocabulary: [
      { eng: "Past", uzb: "O'tmish" },
      { eng: "Farmer", uzb: "Fermer / Dehqon" },
      { eng: "Food", uzb: "Oziq-ovqat" }
    ],
    image: "https://media.wbur.org/wp/2015/06/0629_workers-1931-1000x639.jpg",
    scenario: "Teacher: 'Now, let's look at the past. A long, long time ago. Many people were farmers. They grew apples, carrots, and wheat. Without farmers, we have no food!'"
  },
  {
    id: 4,
    title: "Jobs in the Future",
    uzbekTitle: "Kelajakdagi Kasblar",
    content: [
      "In the future, we will have amazing new jobs.",
      "Robot engineers will build smart robots to help us.",
      "Astronauts will fly spaceships to Mars and other planets!",
      "Computer programmers will create new games and apps.",
      "Technology will change how we work and live."
    ],
    vocabulary: [
      { eng: "Future", uzb: "Kelajak" },
      { eng: "Robot", uzb: "Robot" },
      { eng: "Space", uzb: "Koinot" }
    ],
    image: "https://cdn.prod.website-files.com/62196607bf1b46c300301846/62196607bf1b46c995301fb5_5cd9e1b4b48aab4a8e170907_5bb3bce13a022142920ec683_futureofwork.jpeg",
    scenario: "Teacher: 'What about the future? When you grow up! Maybe you will build robots. Or maybe you will fly in a spaceship! Space explorers and robot engineers are jobs of the future.'"
  },
  {
    id: 5,
    title: "Fun and Creative Jobs",
    uzbekTitle: "Qiziqarli va Ijodiy Kasblar",
    content: [
      "Some jobs are very creative and fun.",
      "Chefs cook yummy food in big restaurants.",
      "Artists draw beautiful pictures and paint colorful walls.",
      "Musicians play instruments and sing wonderful songs.",
      "They make our world colorful, musical, and delicious!"
    ],
    vocabulary: [
      { eng: "Chef", uzb: "Oshpaz" },
      { eng: "Artist", uzb: "Rassom" },
      { eng: "Draw", uzb: "Chizmoq" }
    ],
    image: "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/177828270Clown.jpg=ws1280x960",
    scenario: "Teacher: 'Some jobs are very fun and creative. A chef cooks delicious food. Yummy! An artist draws beautiful pictures. Who likes to draw?'"
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(true);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="h-screen bg-[#FFF9E6] text-[#2D3436] font-sans p-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5 overflow-hidden box-border">
      {/* Sidebar */}
      <div className="flex flex-col gap-3 pr-2.5 overflow-y-auto pb-4">
        <div className="bg-[#FF6B6B] text-white p-5 rounded-[20px] mb-2.5 text-center">
          <h1 className="text-[1.2rem] uppercase tracking-[1px] font-bold flex items-center justify-center gap-2">
            <Presentation size={20} />
            Classroom Hub
          </h1>
          <div className="text-[0.8rem] opacity-90 mt-1">Jobs of the World</div>
        </div>

        {slides.map((s, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`bg-white border-[3px] rounded-[16px] p-3 cursor-pointer flex items-center gap-2.5 transition-transform ${
              currentSlide === idx 
                ? 'border-[#FF6B6B] shadow-[0_4px_15px_rgba(255,107,107,0.2)]' 
                : 'border-transparent hover:border-gray-200'
            }`}
          >
            <div className="bg-[#FFE66D] w-[30px] h-[30px] rounded-full flex items-center justify-center font-bold text-[0.8rem] shrink-0 text-[#2D3436]">
              {s.id}
            </div>
            <div className="text-[0.9rem] font-semibold truncate">{s.title}</div>
          </div>
        ))}

        <div className="mt-auto pt-4 text-[0.7rem] text-center text-[#999]">
          Primary ESL Module &bull; v1.2
        </div>
      </div>

      {/* Main Canvas */}
      <div className="bg-white rounded-[32px] flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden h-full">
        {/* Presentation Header */}
        <div className="p-[20px_40px] bg-[#4ECDC4] text-white flex flex-wrap gap-4 justify-between items-center shrink-0">
          <div className="text-lg">
            <span className="font-light">Lesson:</span> <strong>Jobs (Past & Future)</strong>
          </div>
          <div className="flex gap-[10px]">
            <button 
              onClick={() => setShowNotes(!showNotes)}
              className="px-[20px] py-[10px] rounded-[10px] border-none font-bold cursor-pointer bg-white/20 hover:bg-white/30 text-white transition-colors flex items-center gap-2"
            >
              <Info size={18} />
              {showNotes ? 'Hide Notes' : 'Show Notes'}
            </button>
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="px-[20px] py-[10px] rounded-[10px] border-none font-bold cursor-pointer bg-[#EEE] text-[#2D3436] disabled:opacity-50 hover:bg-[#E0E0E0] transition-colors flex items-center gap-1"
            >
              <ChevronLeft size={18} />
              Back
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="px-[20px] py-[10px] rounded-[10px] border-none font-bold cursor-pointer bg-[#FFE66D] text-[#2D3436] disabled:opacity-50 hover:bg-[#F4D03F] transition-colors flex items-center gap-1"
            >
              Next Slide
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slide Viewport */}
        <div className="flex-grow p-[40px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center overflow-y-auto">
          {/* Image Section */}
          <div className="bg-[#FFF9E6] h-[350px] rounded-[24px] flex flex-col items-center justify-center border-[4px] border-dashed border-[#D1CCC0] text-center p-2 relative">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover rounded-[16px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-[2.5rem] text-[#FF6B6B] mb-[20px] font-bold leading-tight">
              {slide.title}
            </h2>
            <h3 className="text-[1.2rem] font-medium text-[#4ECDC4] mb-[20px]">
              {slide.uzbekTitle}
            </h3>

            <div className="mb-[20px]">
              {slide.content.map((sentence, idx) => (
                <p key={idx} className="text-[1.2rem] leading-[1.6] mb-[10px] text-[#2D3436]">
                  {sentence}
                </p>
              ))}
            </div>

            {/* Vocabulary Box */}
            <div className="bg-[#E8F8F7] p-[15px] rounded-[12px] border-l-[5px] border-[#4ECDC4]">
              <strong className="text-[#4ECDC4] block mb-[10px] flex items-center gap-2 text-[1.1rem]">
                <BookOpen size={20} />
                Vocabulary Focus:
              </strong>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {slide.vocabulary.map((word, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[1rem]">
                    <span className="font-bold text-[#2D3436]">{word.eng}</span>
                    <span className="text-gray-400">-</span>
                    <span className="text-[#4ECDC4] font-medium">{word.uzb}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Teacher Notes (Scenario) */}
        {showNotes && (
          <div className="bg-[#F7F1E3] p-[20px_40px] border-t-[2px] border-[#EEE] shrink-0">
            <div className="text-[0.75rem] uppercase tracking-[1px] font-bold text-[#888] mb-[8px] flex items-center gap-2">
              <Info size={16} />
              Teacher's Scenario / Script
            </div>
            <div className="text-[0.95rem] italic text-[#555] leading-[1.4]">
              "{slide.scenario}"
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
