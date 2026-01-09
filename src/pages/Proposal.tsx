import React, { useState, useRef, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

// Error boundary component for the form
class FormErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // In a real app, you might want to log this to an error reporting service
    console.error('Form Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-border bg-background">
          <p className="text-foreground">Something went wrong. Please refresh the page and try again.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const relevantAreas = [
  "Brand Strategy & Positioning",
  "Visual Identity System",
  "Website Design & Development",
  "Digital Creatives & Content",
  "SEO Foundations",
];

const budgetRanges = [
  "Mid five figures",
  "High five figures",
  "Six figures",
  "Not defined yet",
];

const Proposal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    challenge: "",
    areas: [] as string[],
    budget: "",
    decisionMakers: "",
    successDefinition: "",
    // Honeypot field - should be empty when submitted by humans
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleAreaToggle = (area: string) => {
    setFormData((prev) => ({
      ...prev,
      areas: prev.areas.includes(area)
        ? prev.areas.filter((a) => a !== area)
        : [...prev.areas, area],
    }));
  };

  // Client-side validation
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.company.trim()) errors.company = 'Company is required';
    if (!formData.challenge.trim()) errors.challenge = 'Please describe your challenge';
    if (formData.areas.length === 0) errors.areas = 'Please select at least one area';
    if (!formData.budget) errors.budget = 'Please select a budget range';
    if (!formData.decisionMakers.trim()) errors.decisionMakers = 'Please specify decision makers';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if the honeypot field is filled, it's likely a bot
    if (formData.website) {
      // Log the attempt (in production, you might want to log this to a security service)
      console.log('Bot detected via honeypot');
      // Show success UI without processing
      setIsSubmitted(true);
      return;
    }
    
    // Client-side validation
    if (!validateForm()) {
      // Scroll to first error
      const firstError = Object.keys(formErrors)[0];
      if (firstError) {
        document.querySelector(`[name="${firstError}"]`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual backend call
      // In a real implementation, ensure you're not sending sensitive data
      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        challenge: formData.challenge,
        areas: formData.areas,
        budget: formData.budget,
        decisionMakers: formData.decisionMakers,
        successDefinition: formData.successDefinition,
        // Add a timestamp to help with rate limiting on the server side
        timestamp: new Date().toISOString()
      };

      // In a real implementation, this would be an API call to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        challenge: "",
        areas: [],
        budget: "",
        decisionMakers: "",
        successDefinition: "",
        website: "",
      });
      
      setIsSubmitted(true);
    } catch (error) {
      // Generic error message to avoid leaking implementation details
      console.error('Form submission error:', error);
      // In a real app, you might want to show a user-friendly error message
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding bg-section-primary min-h-[70vh] flex items-center">
          <div className="container-editorial">
            <div className="max-w-2xl">
              <span className="caption text-muted-foreground opacity-0 animate-fade-up">
                Inquiry Received
              </span>
              <h1 className="headline-hero mt-6 opacity-0 animate-fade-up animate-delay-100">
                Thank you.
              </h1>
              <p className="body-large text-muted-foreground mt-8 opacity-0 animate-fade-up animate-delay-200">
                We've received your inquiry and will review it carefully. If there's alignment, we'll be in touch within 3–5 business days.
              </p>
              <p className="body-base text-muted-foreground mt-6 opacity-0 animate-fade-up animate-delay-300">
                We respond to every submission personally.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-section-primary">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <span className="caption text-muted-foreground opacity-0 animate-fade-up">
              Inquiry
            </span>
            <h1 className="headline-hero mt-6 opacity-0 animate-fade-up animate-delay-100">
              Start a conversation.
            </h1>
            <p className="body-large text-muted-foreground mt-8 opacity-0 animate-fade-up animate-delay-200">
              We take on a limited number of engagements each quarter. This form helps us understand whether there's potential alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-section-secondary border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <FormErrorBoundary>
              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="space-y-12"
                noValidate // Let our custom validation handle it
              >
                {/* Honeypot field - hidden from humans but visible to bots */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    ref={honeypotRef}
                  />
                </div>
              
              {/* Name */}
              <div>
                <label className="block caption text-muted-foreground mb-3">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (formErrors.name) {
                      setFormErrors(prev => ({ ...prev, name: '' }));
                    }
                  }}
                  className={`w-full bg-transparent border-b px-0 py-3 body-base focus:outline-none transition-colors ${
                    formErrors.name ? 'border-error' : 'border-border focus:border-foreground'
                  }`}
                  aria-invalid={!!formErrors.name}
                  aria-describedby={formErrors.name ? 'name-error' : undefined}
                />
                {formErrors.name && (
                  <p id="name-error" className="mt-2 text-sm text-error">
                    {formErrors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block caption text-muted-foreground mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (formErrors.email) {
                      setFormErrors(prev => ({ ...prev, email: '' }));
                    }
                  }}
                  className={`w-full bg-transparent border-b px-0 py-3 body-base focus:outline-none transition-colors ${
                    formErrors.email ? 'border-error' : 'border-border focus:border-foreground'
                  }`}
                  aria-invalid={!!formErrors.email}
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                />
                {formErrors.email && (
                  <p id="email-error" className="mt-2 text-sm text-error">
                    {formErrors.email}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="block caption text-muted-foreground mb-3">
                  Company or Brand *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={(e) => {
                    setFormData({ ...formData, company: e.target.value });
                    if (formErrors.company) {
                      setFormErrors(prev => ({ ...prev, company: '' }));
                    }
                  }}
                  className={`w-full bg-transparent border-b px-0 py-3 body-base focus:outline-none transition-colors ${
                    formErrors.company ? 'border-error' : 'border-border focus:border-foreground'
                  }`}
                  aria-invalid={!!formErrors.company}
                  aria-describedby={formErrors.company ? 'company-error' : undefined}
                />
                {formErrors.company && (
                  <p id="company-error" className="mt-2 text-sm text-error">
                    {formErrors.company}
                  </p>
                )}
              </div>

              {/* Challenge */}
              <div>
                <label className="block caption text-muted-foreground mb-3">
                  Describe the challenge you're facing *
                </label>
                <textarea
                  name="challenge"
                  required
                  value={formData.challenge}
                  onChange={(e) => {
                    setFormData({ ...formData, challenge: e.target.value });
                    if (formErrors.challenge) {
                      setFormErrors(prev => ({ ...prev, challenge: '' }));
                    }
                  }}
                  rows={5}
                  className={`w-full bg-transparent border px-4 py-4 body-base focus:outline-none transition-colors resize-none ${
                    formErrors.challenge ? 'border-error' : 'border-border focus:border-foreground'
                  }`}
                  placeholder="What problem are you trying to solve? What's at stake?"
                  aria-invalid={!!formErrors.challenge}
                  aria-describedby={formErrors.challenge ? 'challenge-error' : undefined}
                />
                {formErrors.challenge && (
                  <p id="challenge-error" className="mt-2 text-sm text-error">
                    {formErrors.challenge}
                  </p>
                )}
              </div>

              {/* Relevant Areas */}
              <div>
                <label className="block caption text-muted-foreground mb-3">
                  Relevant areas *
                </label>
                <p className="body-small text-muted-foreground mb-6">
                  Select all that apply.
                </p>
                <div className="space-y-3">
                  {relevantAreas.map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => {
                        handleAreaToggle(area);
                        if (formErrors.areas) {
                          setFormErrors(prev => {
                            const newErrors = { ...prev };
                            delete newErrors.areas;
                            return newErrors;
                          });
                        }
                      }}
                      className={`w-full text-left px-5 py-4 border transition-all duration-300 ${
                        formData.areas.includes(area)
                          ? "border-foreground bg-foreground text-background"
                          : formErrors.areas 
                            ? "border-error" 
                            : "border-border hover:border-foreground"
                      }`}
                      aria-pressed={formData.areas.includes(area)}
                    >
                      <span className="body-base">{area}</span>
                    </button>
                  ))}
                  {formErrors.areas && (
                    <p className="mt-2 text-sm text-error">
                      {formErrors.areas}
                    </p>
                  )}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block caption text-muted-foreground mb-3">
                  Budget range *
                </label>
                <div className="space-y-3">
                  {budgetRanges.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, budget });
                        if (formErrors.budget) {
                          setFormErrors(prev => ({
                            ...prev,
                            budget: ''
                          }));
                        }
                      }}
                      className={`w-full text-left px-5 py-4 border transition-all duration-300 ${
                        formData.budget === budget
                          ? "border-foreground bg-foreground text-background"
                          : formErrors.budget
                            ? "border-error"
                            : "border-border hover:border-foreground"
                      }`}
                      aria-pressed={formData.budget === budget}
                    >
                      <span className="body-base">{budget}</span>
                    </button>
                  ))}
                  {formErrors.budget && (
                    <p className="mt-2 text-sm text-error">
                      {formErrors.budget}
                    </p>
                  )}
                </div>
              </div>

              {/* Decision Makers */}
              <div>
                <label className="block caption text-muted-foreground mb-3">
                  Who will be involved in decision-making? *
                </label>
                <input
                  type="text"
                  name="decisionMakers"
                  required
                  value={formData.decisionMakers}
                  onChange={(e) => {
                    setFormData({ ...formData, decisionMakers: e.target.value });
                    if (formErrors.decisionMakers) {
                      setFormErrors(prev => ({ ...prev, decisionMakers: '' }));
                    }
                  }}
                  className={`w-full bg-transparent border-b px-0 py-3 body-base focus:outline-none transition-colors ${
                    formErrors.decisionMakers ? 'border-error' : 'border-border focus:border-foreground'
                  }`}
                  placeholder="e.g., Founder, Marketing Director, Board"
                  aria-invalid={!!formErrors.decisionMakers}
                  aria-describedby={formErrors.decisionMakers ? 'decisionMakers-error' : undefined}
                />
                {formErrors.decisionMakers && (
                  <p id="decisionMakers-error" className="mt-2 text-sm text-error">
                    {formErrors.decisionMakers}
                  </p>
                )}
              </div>

              {/* Success Definition (Optional) */}
              <div>
                <label className="block caption text-muted-foreground mb-3">
                  How would you define success for this engagement?
                </label>
                <p className="body-small text-muted-foreground mb-4">
                  Optional, but helpful.
                </p>
                <textarea
                  value={formData.successDefinition}
                  onChange={(e) => setFormData({ ...formData, successDefinition: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border border-border px-4 py-4 body-base focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-8 border-t border-border">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="body-small border border-foreground px-12 py-4 hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit inquiry"}
                </button>
                <p className="body-small text-muted-foreground mt-4 max-w-md">
                  We review every submission carefully. Not all inquiries lead to engagements, and that's intentional.
                </p>
                
                {/* Security notice - hidden but accessible to screen readers */}
                <div className="sr-only" aria-live="polite">
                  {isSubmitting ? 'Submitting your inquiry...' : ''}
                  {isSubmitted ? 'Thank you for your submission.' : ''}
                </div>
                
                {/* Add a CSRF token in a real implementation */}
                <input type="hidden" name="_token" value={''} />
              </div>
              </form>
            </FormErrorBoundary>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Proposal;
