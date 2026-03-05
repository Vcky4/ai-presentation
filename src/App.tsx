import React, { useState, useEffect, useCallback } from 'react';
import { slides } from './components/Slides';

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState<'next' | 'prev' | null>(null);

    const nextSlide = useCallback(() => {
        if (currentSlide < slides.length - 1) {
            setDirection('next');
            setCurrentSlide(s => s + 1);
        }
    }, [currentSlide]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            setDirection('prev');
            setCurrentSlide(s => s - 1);
        }
    }, [currentSlide]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    // Handle slide transitions visually using active class based on index
    return (
        <div className="presentation-container">
            {/* Progress Bar */}
            <div
                className="progress-indicator"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />

            <div className="slide-content-wrapper">
                {slides.map((SlideComponent, index) => {
                    let className = "slide-glass-panel";
                    if (index === currentSlide) {
                        className += " active";
                    } else if (index < currentSlide) {
                        className += " exiting-prev";
                    } else {
                        className += " exiting-next";
                    }

                    return (
                        <div key={index} className={className}>
                            {index === currentSlide && <SlideComponent />}
                        </div>
                    );
                })}
            </div>

            <div className="controls">
                <button
                    className="control-btn"
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    aria-label="Previous Slide"
                >
                    ←
                </button>
                <span className="slide-counter">
                    {currentSlide + 1} / {slides.length}
                </span>
                <button
                    className="control-btn"
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    aria-label="Next Slide"
                >
                    →
                </button>
            </div>
        </div>
    );
}

export default App;
