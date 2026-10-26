import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Quotes, Plus, Sparkle, X } from '@phosphor-icons/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Style, Avatar } from '@dicebear/core';
import definition from '@dicebear/styles/notionists.json' with { type: 'json' };

gsap.registerPlugin(ScrollTrigger);

const achievementsAndVision = [
  {
    quote: "Engineered a Python data studio at PHFI to automate the intake, validation, and statistical cleaning of large medical research cohorts, standardizing research datasets and cutting manual review time by 85%.",
    author: "PHFI Research Studio",
    role: "Healthcare Data Automation & Quality",
    tag: "Research & Innovation",
  },
  {
    quote: "Built an open-access environmental intelligence platform integrating live OpenAQ REST endpoints across 15 Indian cities with machine learning regressors to forecast multi-pollutant AQI values and broadcast public health warnings.",
    author: "Environmental AI Engine",
    role: "Machine Learning & Public Health",
    tag: "Real-Time AI",
  },
  {
    quote: "Developed a lightweight MobileNetV2 computer vision model trained to classify ground terrain types (Desert, Forest, Mountain, Plains) in real time with high accuracy, optimized for low-power unmanned aerial vehicles and autonomous rovers.",
    author: "Terrain Classifier AI",
    role: "Computer Vision & Edge Deep Learning",
    tag: "Deep Learning",
  },
  {
    quote: "Formulating rigorous QA protocols and stress-testing Arabic & multilingual conversational AI features at Ejadah AI Labs (Sanad AI), surfacing edge cases in prompt handling and user interface workflows.",
    author: "Sanad AI Evaluation",
    role: "AI Feature Testing & LLM Evaluation",
    tag: "GenAI Quality",
  },
  {
    quote: "Architected an end-to-end customer analytics suite combining RFM behavioral segmentation and predictive churn classification to uncover high-value cohorts and guide actionable retention strategies.",
    author: "Customer AI Studio",
    role: "Predictive Modeling & Business Analytics",
    tag: "Predictive AI",
  },
  {
    quote: "Our vision at Alif Growth Media is empowering local businesses with enterprise-grade digital systems—unifying automated communication funnels, instant digital invoicing, and client management workflows without technical complexity.",
    author: "Alif Growth Media",
    role: "Founder Vision & Automation Strategy",
    tag: "Strategic Vision",
  }
];

const placeholderReviews = achievementsAndVision;

const avatarStyle = new Style(definition);
const MIN_REVIEW_CARD_COUNT = achievementsAndVision.length;
const REVIEW_MIN_LENGTH = 30;
const REVIEW_MAX_LENGTH = 300;

function createAvatarSvg(seed) {
  const avatar = new Avatar(avatarStyle, { seed });
  return avatar.toString();
}

function normalizeReview(review) {
  return {
    quote: review.quote ?? review.review ?? '',
    author: review.author ?? review.username ?? 'Anonymous',
    role: review.role ?? review.occupation ?? '',
    tag: review.tag ?? 'Achievement',
  };
}

export default function TestimonialSection() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const progressBarRef = useRef(null);
  const [realReviews, setRealReviews] = useState([]);
  const [hasBackendReviews, setHasBackendReviews] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAssisting, setIsAssisting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    occupation: '',
    review: '',
  });

  const readJsonResponse = async (response) => {
    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      return response.json();
    }

    const text = await response.text();

    try {
      return JSON.parse(text);
    } catch {
      return { error: text || 'Unexpected server response' };
    }
  };

  useEffect(() => {
    let cancelled = false;

    const loadReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) return;

        const data = await readJsonResponse(response);
        if (cancelled || !Array.isArray(data.reviews)) return;

        if (data.reviews.length > 0) {
          setRealReviews(data.reviews);
          setHasBackendReviews(true);
        }
      } catch {
        // Fall back to predefined achievements
      }
    };

    loadReviews();

    return () => {
      cancelled = true;
    };
  }, []);

  const renderedReviews = useMemo(() => {
    const combinedReviews = hasBackendReviews
      ? [...realReviews.map(normalizeReview), ...placeholderReviews.map(normalizeReview)]
      : placeholderReviews.map(normalizeReview);

    return combinedReviews.map((review, index) => {
      const avatarSeed = review.author || `review-${index}`;
      const avatarSvg = createAvatarSvg(avatarSeed);

      return {
        ...review,
        avatarSeed,
        avatarSvg,
      };
    });
  }, [hasBackendReviews, realReviews]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setFormError('');
    setFormData({ username: '', occupation: '', review: '' });
  }, []);

  const handleReviewAssist = async () => {
    if (!formData.review.trim()) {
      setFormError('Please enter some notes first.');
      return;
    }
    setIsAssisting(true);
    setFormError('');
    try {
      const res = await fetch('/api/review-assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review: formData.review })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.assistedReview) {
          setFormData(prev => ({ ...prev, review: data.assistedReview }));
        }
      }
    } catch {
      // Ignore assist error
    } finally {
      setIsAssisting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username.trim() || !formData.review.trim()) {
      setFormError('Please fill in your name and message.');
      return;
    }
    setIsSubmitting(true);
    setFormError('');
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        closeModal();
      } else {
        setFormError('Submission failed. Please try again.');
      }
    } catch {
      setFormError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative z-30 bg-white text-black min-h-[90svh] py-12 md:py-20 flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full px-4 sm:px-8 md:px-12 pb-8 overflow-hidden max-w-[1600px] mx-auto">
        <div 
          ref={wrapperRef}
          className="flex gap-4 sm:gap-6 flex-nowrap overflow-x-auto hide-scrollbar snap-x snap-mandatory w-full justify-start py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {renderedReviews.map((testimonial, i) => (
            <div 
              key={i} 
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[420px] w-[calc(100vw-56px)] sm:w-[360px] md:w-[440px] max-w-[440px] h-auto min-h-[380px] md:min-h-[420px] flex-shrink-0 flex flex-col justify-between bg-gradient-to-b from-gray-50 to-white border border-gray-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 snap-center hover:shadow-xl transition-all duration-300 hover:border-purple-300/60 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
                    <Quotes size={22} weight="fill" />
                  </div>
                  {testimonial.tag && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200/60">
                      {testimonial.tag}
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-normal">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shrink-0 border border-gray-200 shadow-sm">
                  <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(testimonial.avatarSvg || createAvatarSvg(testimonial.author))}`}
                    alt={`${testimonial.author} avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-black text-sm sm:text-base leading-tight truncate">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 truncate mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress & Add Review Controls */}
        <div className="flex items-center justify-between pt-6 mt-4">
          <div className="flex-1 max-w-[200px] h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div ref={progressBarRef} className="h-full w-1/3 bg-purple-600 rounded-full transition-all duration-300" />
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 rounded-full border border-gray-300 bg-white text-xs font-semibold hover:border-black flex items-center gap-2 shadow-sm transition-all"
            aria-label="Add achievement or note"
          >
            <Plus size={16} weight="bold" />
            <span>Add Note</span>
          </button>
        </div>
      </div>

      {isModalOpen && typeof document !== 'undefined' ? createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white text-black shadow-2xl border border-black/10">
            <div className="flex items-center justify-between px-6 pt-6 pb-3">
              <div>
                <h3 className="text-xl font-bold tracking-tight">Add an Insight or Note</h3>
                <p className="text-xs text-gray-500 mt-0.5">Share an achievement, research thought, or recommendation.</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-gray-100 text-black flex items-center justify-center hover:bg-gray-200"
                aria-label="Close"
              >
                <X size={16} weight="bold" />
              </button>
            </div>
            <form className="space-y-4 px-6 pt-3 pb-6" onSubmit={handleSubmit}>
              <div>
                <input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-black"
                  placeholder="Your Name or Initiative"
                />
              </div>
              <div>
                <input
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-black"
                  placeholder="e.g. Research Lead, Engineering Manager"
                />
              </div>
              <div>
                <textarea
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  rows="4"
                  className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-black resize-none"
                  placeholder="Describe the research, breakthrough, or recommendation..."
                />
              </div>
              {formError && <p className="text-xs font-semibold text-red-600">{formError}</p>}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-black px-6 py-2.5 text-xs font-bold text-white disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>, document.body
      ) : null}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
