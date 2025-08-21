import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const experienceLogos = {
    "Associate AI Engineer": "data:image/png;base64,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",
    "Associate Software Engineer i2c inc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-H3F4-sr4OLTImFMtIE_zzsdvkAHXHTg6g&s",
    "Machine Learning Trainee Nexpred Solutions": "data:image/jpeg;base64,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",
};

const experiences = [
    {
        id: 1,
        title: "Associate AI Engineer",
        subtitle: "Intalytic Group LLC · AI/ML Startup · 50–100 employees",
        description:
            "Worked as a core AI/ML engineer on client-facing experiences involving intelligent automation, computer vision, and retrieval-based systems. Delivered scalable, production-ready solutions using modern ML techniques and cloud-native tools.",
        technologies: [
            "Python",
            "CUDA",
            "OCR",
            "YOLO",
            "LLMs",
            "OpenAI",
            "Langchain",
            "LangGraph",
            "Invoice Processing",
            "AWS S3",
            "AWS Lambda"
        ],
        
        results: [
            "Delivered 4+ AI/ML solutions including document processing, object detection, and RAG-based assistants.",
            "Collaborated with 5+ clients to gather requirements.",
            "Handled 5,000+ AWS logs using vector search and semantic retrieval in a serverless setup.",
            "Improved processing efficiency by 80% through automation of invoice and document workflows."
        ],
        Location: "US",
        Status: "Remote",
        year: "March 2025 , Present",
        duration: "4+ months"
    },

    {
        id: 2,
        title: "Associate Software Engineer i2c inc",
        subtitle: "Fintech • 500+ employees",
        description: "This picture shows an n8n workflow that auto-posts to 4 socials from one place. Simply add your content, captions, and connect accounts—no complex setup needed. With this free template + Google Sheets, you can grow your audience on autopilot.",
        technologies: ["Java"],
        
        results: ["Recently joined i2c Inc. as a Associate Software Engineer."],
        year: "2024",
        Location: "Lahore, Pakistan",
        Status: "July 2025",
        duration: "Present"
    },
    {
        id: 3,
        title: "Machine Learning Trainee Nexpred Solutions",
        subtitle: "Startup • 10-50 employees",
        description: "Completed a hands-on training program focused on core computer vision tasks and data annotation pipelines. Gained practical experience in building ML workflows from dataset creation to model evaluation.",
        technologies: ["Python", "Scikit-learn", "Machine Learning", "Data Annotation", "YOLO", "Deep Learning", "Object Classification", "Object Detection"],
        
        results: ["Labeled and processed 2,000+ images for object detection, segmentation, and classification tasks.", "Assisted in training and evaluating models using TensorFlow and PyTorch for real-world use cases.", "Applied augmentation and preprocessing techniques to boost model performance by 15%.", "Collaborated with senior ML engineers to improve annotation efficiency and maintain data quality."],
        year: "Dec 2024 - Feb 2025",
        Location: "Lahore",
        Status: "Remote",
        duration: "3 months"
    },
];

const accentRed = "#FF2D55";
const darkBg = "#18181b";
const cardBg = "#000000";
const transparentBg = "rgba(255,255,255,0.1)";




const ExperienceSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const canScrollLeft = currentIndex > 0;
    const canScrollRight = currentIndex < experiences.length - 1;

    const scrollLeft = () => {
        if (canScrollLeft) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const scrollRight = () => {
        if (canScrollRight) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const currentexperience = experiences[currentIndex];

    return (
        <div
            className="experience-section"
            style={{
                background: transparentBg,
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                border: `1px solid rgba(255,45,85,0.3)`,
                padding: '3rem 2rem',
                maxWidth: '1400px',
                margin: '2rem auto',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <h2
                className="section-title"
                style={{
                    fontWeight: 900,
                    fontSize: '2.5rem',
                    marginBottom: '2rem',
                    color: accentRed,
                    letterSpacing: '0.02em',
                    textAlign: 'center',
                    textShadow: `0 4px 20px ${accentRed}44`,
                    textTransform: 'uppercase',
                }}
            >
                Experiences
            </h2>
            
            <div
                className="carousel-container"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.5rem',
                }}
            >
                <button
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                    style={{
                        background: 'none',
                        border: `2px solid ${accentRed}`,
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: canScrollLeft ? 'pointer' : 'not-allowed',
                        opacity: canScrollLeft ? 1 : 0.5,
                        transition: 'all 0.3s ease',
                        boxShadow: canScrollLeft ? `0 2px 8px ${accentRed}33` : 'none',
                    }}
                >
                    <ChevronLeft size={24} color={canScrollLeft ? accentRed : "#fff"} />
                </button>

                <div
                    className="experience-container"
                    style={{
                        width: '100%',
                        maxWidth: '700px',
                        margin: '0 auto',
                    }}
                >
                    <div
                        className="experience-card"
                        style={{
                            background: cardBg,
                            borderRadius: '20px',
                            padding: '2rem',
                            border: `2px solid ${accentRed}`,
                            boxShadow: `0 12px 40px rgba(255,45,85,0.3)`,
                            position: 'relative',
                            minHeight: '500px',
                        }}
                    >
                        {/* Logo in top-left corner */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                left: '1.5rem',
                                width: '80px',
                                height: '80px',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: `0 6px 20px rgba(255,45,85,0.4)`,
                                zIndex: 1,
                                border: `3px solid ${accentRed}`,
                            }}
                        >
                            <img
                                src={experienceLogos[currentexperience.title]}
                                alt={`${currentexperience.title} logo`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    background: 'white',
                                }}
                            />
                        </div>

                        {/* Content with proper spacing */}
                        <div style={{ marginLeft: '100px', marginTop: '1rem' }}>
                            <h3
                                style={{
                                    color: accentRed,
                                    fontSize: '1.8rem',
                                    fontWeight: 800,
                                    marginBottom: '0.5rem',
                                    lineHeight: 1.2,
                                    textShadow: `0 2px 8px rgba(255,45,85,0.3)`,
                                }}
                            >
                                {currentexperience.title}
                            </h3>

                            <p
                                style={{
                                    color: '#cccccc',
                                    fontSize: '1.1rem',
                                    fontWeight: 500,
                                    marginBottom: '1.5rem',
                                    lineHeight: 1.4,
                                }}
                            >
                                {currentexperience.subtitle}
                            </p>
                        </div>

                        {/* Description */}
                        <div
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '12px',
                                padding: '1.2rem',
                                marginBottom: '2rem',
                                border: '1px solid rgba(255,45,85,0.2)',
                            }}
                        >
                            <p
                                style={{
                                    color: '#ffffff',
                                    fontSize: '1rem',
                                    lineHeight: 1.6,
                                    margin: 0,
                                }}
                            >
                                {currentexperience.description}
                            </p>
                        </div>

                        {/* experience Details in List Format */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1.5rem',
                                marginBottom: '2rem',
                            }}
                        >
                            {/* Left Column */}
                            <div>
                                <div style={{ marginBottom: '1.2rem' }}>
                                    <h4 style={{ 
                                        color: accentRed, 
                                        fontSize: '1.1rem', 
                                        fontWeight: 700, 
                                        marginBottom: '0.8rem',
                                        borderBottom: `2px solid ${accentRed}`,
                                        paddingBottom: '0.3rem'
                                    }}>
                                        Technologies
                                    </h4>
                                    <ul style={{ margin: 0, paddingLeft: '1rem', listStyleType: 'none' }}>
                                        {currentexperience.technologies.map((tech, idx) => (
                                            <li
                                                key={idx}
                                                style={{
                                                    color: '#ffffff',
                                                    fontSize: '0.95rem',
                                                    marginBottom: '0.4rem',
                                                    padding: '0.3rem 0',
                                                    position: 'relative',
                                                    paddingLeft: '1rem',
                                                }}
                                            >
                                                <span style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    color: accentRed,
                                                    fontSize: '1.2rem'
                                                }}>•</span>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 style={{ 
                                        color: accentRed, 
                                        fontSize: '1.1rem', 
                                        fontWeight: 700, 
                                        marginBottom: '0.8rem',
                                        borderBottom: `2px solid ${accentRed}`,
                                        paddingBottom: '0.3rem'
                                    }}>
                                        Experience Details
                                    </h4>
                                    <ul style={{ margin: 0, paddingLeft: '1rem', listStyleType: 'none' }}>
                                        
                                        <li style={{ color: '#ffffff', fontSize: '0.95rem', marginBottom: '0.5rem', paddingLeft: '1rem', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: accentRed, fontSize: '1.2rem' }}>•</span>
                                            <strong>Location:</strong> {currentexperience.Location}
                                        </li>
                                        <li style={{ color: '#ffffff', fontSize: '0.95rem', marginBottom: '0.5rem', paddingLeft: '1rem', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: accentRed, fontSize: '1.2rem' }}>•</span>
                                            <strong>Status:</strong> {currentexperience.Status}
                                        </li>
                                        
                                        <li style={{ color: '#ffffff', fontSize: '0.95rem', marginBottom: '0.5rem', paddingLeft: '1rem', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: accentRed, fontSize: '1.2rem' }}>•</span>
                                            <strong>Year:</strong> {currentexperience.year}
                                        </li>
                                        <li style={{ color: '#ffffff', fontSize: '0.95rem', paddingLeft: '1rem', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: accentRed, fontSize: '1.2rem' }}>•</span>
                                            <strong>Duration:</strong> {currentexperience.duration}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column - Key Results */}
                            <div>
                                <h4 style={{ 
                                    color: accentRed, 
                                    fontSize: '1.1rem', 
                                    fontWeight: 700, 
                                    marginBottom: '0.8rem',
                                    borderBottom: `2px solid ${accentRed}`,
                                    paddingBottom: '0.3rem'
                                }}>
                                    Key Achievements
                                </h4>
                                <ul style={{ margin: 0, paddingLeft: '1rem', listStyleType: 'none' }}>
                                    {currentexperience.results.map((result, idx) => (
                                        <li
                                            key={idx}
                                            style={{
                                                color: '#ffffff',
                                                fontSize: '0.95rem',
                                                marginBottom: '0.6rem',
                                                lineHeight: 1.4,
                                                padding: '0.3rem 0',
                                                position: 'relative',
                                                paddingLeft: '1rem',
                                            }}
                                        >
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                color: accentRed,
                                                fontSize: '1.2rem'
                                            }}>•</span>
                                            {result}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                    style={{
                        background: 'none',
                        border: `2px solid ${accentRed}`,
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: canScrollRight ? 'pointer' : 'not-allowed',
                        opacity: canScrollRight ? 1 : 0.5,
                        transition: 'all 0.3s ease',
                        boxShadow: canScrollRight ? `0 2px 8px ${accentRed}33` : 'none',
                    }}
                >
                    <ChevronRight size={24} color={canScrollRight ? accentRed : "#fff"} />
                </button>
            </div>

            {/* Pagination dots */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '2rem',
                }}
            >
                {experiences.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: currentIndex === idx ? accentRed : 'rgba(255,255,255,0.3)',
                            cursor: 'pointer',
                            transition: 'background 0.3s ease',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;