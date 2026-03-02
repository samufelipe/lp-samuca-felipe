// Google Tag Manager - DataLayer Utility
// Advanced event tracking for GTM-PB5VGTCK

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

window.dataLayer = window.dataLayer || [];

/**
 * Push a custom event to the GTM dataLayer
 */
export const pushEvent = (event: string, params?: Record<string, unknown>) => {
  window.dataLayer.push({ event, ...params });
};

// ── Navigation Events ──
export const trackNavClick = (label: string) => {
  pushEvent('nav_click', { nav_item: label, event_category: 'navigation' });
};

export const trackCtaClick = (ctaName: string, location: string) => {
  pushEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
    event_category: 'engagement',
  });
};

// ── Section Visibility (for scroll tracking) ──
export const trackSectionView = (sectionName: string) => {
  pushEvent('section_view', {
    section_name: sectionName,
    event_category: 'scroll_depth',
  });
};

// ── Form Events ──
export const trackFormStart = (formName: string) => {
  pushEvent('form_start', {
    form_name: formName,
    event_category: 'form',
  });
};

export const trackFormSubmit = (formName: string, investmentRange?: string) => {
  pushEvent('form_submit', {
    form_name: formName,
    investment_range: investmentRange || 'not_selected',
    event_category: 'form',
  });
};

export const trackFormFieldInteraction = (formName: string, fieldName: string) => {
  pushEvent('form_field_focus', {
    form_name: formName,
    field_name: fieldName,
    event_category: 'form',
  });
};

// ── Outbound / Social Links ──
export const trackOutboundClick = (url: string, label: string, location: string) => {
  pushEvent('outbound_click', {
    outbound_url: url,
    link_label: label,
    click_location: location,
    event_category: 'outbound',
  });
};

export const trackWhatsAppClick = (location: string) => {
  pushEvent('whatsapp_click', {
    click_location: location,
    event_category: 'engagement',
  });
};

export const trackSocialClick = (platform: string) => {
  pushEvent('social_click', {
    social_platform: platform,
    event_category: 'social',
  });
};

// ── Client Case / Portfolio Events ──
export const trackCaseClick = (clientName: string, clientUrl: string) => {
  pushEvent('case_click', {
    client_name: clientName,
    client_url: clientUrl,
    event_category: 'portfolio',
  });
};

// ── Scroll Depth Tracking (percentage-based) ──
export const initScrollDepthTracking = () => {
  const thresholds = [25, 50, 75, 90, 100];
  const fired = new Set<number>();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = Math.round((scrollTop / docHeight) * 100);

    thresholds.forEach((t) => {
      if (percent >= t && !fired.has(t)) {
        fired.add(t);
        pushEvent('scroll_depth', {
          scroll_percentage: t,
          event_category: 'scroll_depth',
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
};

// ── Section Intersection Observer (auto-track visible sections) ──
export const initSectionTracking = () => {
  const fired = new Set<string>();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id && !fired.has(id)) {
            fired.add(id);
            trackSectionView(id);
          }
        }
      });
    },
    { threshold: 0.3 }
  );

  // Observe all sections with an id
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });

  return () => observer.disconnect();
};

// ── Page Load / Engagement Time ──
export const trackPageLoad = () => {
  pushEvent('page_loaded', {
    page_path: window.location.pathname,
    page_title: document.title,
    referrer: document.referrer || 'direct',
    event_category: 'pageview',
  });
};

// ── Time on Page Tracking ──
export const initTimeOnPageTracking = () => {
  const intervals = [30, 60, 120, 180, 300]; // seconds
  const fired = new Set<number>();
  const startTime = Date.now();

  const interval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    intervals.forEach((t) => {
      if (elapsed >= t && !fired.has(t)) {
        fired.add(t);
        pushEvent('time_on_page', {
          seconds: t,
          event_category: 'engagement',
        });
      }
    });

    if (fired.size === intervals.length) clearInterval(interval);
  }, 5000);

  return () => clearInterval(interval);
};
