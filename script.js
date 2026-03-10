/* ============================================================================
   FLUI.SPACE v1.0.0 — Interactive Behaviors
   Author: Jonas Brosch
   ============================================================================ */

/**
 * Main Application Module
 * Handles initialization and coordination of all interactive features
 */
const FluiSpace = (() => {
    'use strict';

    /* ========================================================================
       CONFIGURATION
       ======================================================================== */
    
    const CONFIG = {
        gridOverlayToggleKey: 'g', // Press 'g' to toggle grid overlay
        observerThreshold: 0.1,     // Intersection observer threshold
        observerRootMargin: '0px'   // Intersection observer margin
    };

    /* ========================================================================
       STATE MANAGEMENT
       ======================================================================== */
    
    let state = {
        gridVisible: false,
        isInitialized: false
    };

    /* ========================================================================
       DOM REFERENCES
       ======================================================================== */
    
    const elements = {
        gridOverlay: null,
        sections: null
    };

    /* ========================================================================
       GRID OVERLAY MODULE
       Toggles development grid overlay with keyboard shortcut
       ======================================================================== */
    
    const GridOverlay = {
        /**
         * Initialize grid overlay functionality
         */
        init() {
            elements.gridOverlay = document.querySelector('.grid-overlay');
            
            if (!elements.gridOverlay) {
                console.warn('Grid overlay element not found');
                return;
            }

            this.attachKeyboardListener();
        },

        /**
         * Toggle grid visibility
         */
        toggle() {
            state.gridVisible = !state.gridVisible;
            elements.gridOverlay.style.opacity = state.gridVisible ? '1' : '0';
            
            console.log(`Grid overlay: ${state.gridVisible ? 'ON' : 'OFF'}`);
        },

        /**
         * Attach keyboard event listener
         */
        attachKeyboardListener() {
            document.addEventListener('keydown', (e) => {
                if (e.key.toLowerCase() === CONFIG.gridOverlayToggleKey) {
                    this.toggle();
                }
            });
        }
    };

    /* ========================================================================
       SCROLL ANIMATIONS MODULE
       Handles fade-in animations using Intersection Observer API
       ======================================================================== */
    
    const ScrollAnimations = {
        observer: null,

        /**
         * Initialize scroll-based animations
         */
        init() {
            elements.sections = document.querySelectorAll('section, header, footer');
            
            if (!elements.sections.length) {
                console.warn('No sections found for animation');
                return;
            }

            this.createObserver();
            this.observeElements();
        },

        /**
         * Create Intersection Observer instance
         */
        createObserver() {
            const options = {
                root: null,
                rootMargin: CONFIG.observerRootMargin,
                threshold: CONFIG.observerThreshold
            };

            this.observer = new IntersectionObserver(
                this.handleIntersection.bind(this),
                options
            );
        },

        /**
         * Handle intersection events
         * @param {IntersectionObserverEntry[]} entries
         */
        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Optional: Unobserve after animation completes
                    // this.observer.unobserve(entry.target);
                }
            });
        },

        /**
         * Start observing all sections
         */
        observeElements() {
            elements.sections.forEach(section => {
                // Set initial state for non-header elements
                if (!section.classList.contains('header')) {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(20px)';
                    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                }
                
                this.observer.observe(section);
            });
        }
    };

    /* ========================================================================
       PERFORMANCE MONITORING
       Optional performance logging for development
       ======================================================================== */
    
    const Performance = {
        /**
         * Log performance metrics
         */
        logMetrics() {
            if (window.performance && window.performance.timing) {
                const timing = window.performance.timing;
                const loadTime = timing.loadEventEnd - timing.navigationStart;
                const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;
                
                console.log(`%c FLUI.SPACE Performance Metrics`, 'background: #FFFF00; color: #050505; padding: 4px 8px; font-weight: bold;');
                console.log(`DOM Ready: ${domReady}ms`);
                console.log(`Full Load: ${loadTime}ms`);
            }
        }
    };

    /* ========================================================================
       ACCESSIBILITY MODULE
       Ensures keyboard navigation and screen reader support
       ======================================================================== */
    
    const Accessibility = {
        /**
         * Initialize accessibility features
         */
        init() {
            this.enhanceLinks();
            this.addSkipLink();
        },

        /**
         * Enhance external links with proper attributes
         */
        enhanceLinks() {
            const externalLinks = document.querySelectorAll('a[target="_blank"]');
            
            externalLinks.forEach(link => {
                // Ensure security attributes are present
                if (!link.hasAttribute('rel')) {
                    link.setAttribute('rel', 'noopener noreferrer');
                }
                
                // Add screen reader notification for external links
                const currentLabel = link.getAttribute('aria-label') || link.textContent;
                if (!currentLabel.includes('opens in new tab')) {
                    link.setAttribute('aria-label', `${currentLabel} (opens in new tab)`);
                }
            });
        },

        /**
         * Add skip-to-content link for keyboard users
         */
        addSkipLink() {
            const skipLink = document.createElement('a');
            skipLink.href = '#main-content';
            skipLink.className = 'skip-link';
            skipLink.textContent = 'Skip to main content';
            skipLink.style.cssText = `
                position: absolute;
                top: -40px;
                left: 0;
                background: #FFFF00;
                color: #050505;
                padding: 8px;
                text-decoration: none;
                z-index: 10000;
                font-weight: bold;
            `;
            
            skipLink.addEventListener('focus', () => {
                skipLink.style.top = '0';
            });
            
            skipLink.addEventListener('blur', () => {
                skipLink.style.top = '-40px';
            });
            
            document.body.insertBefore(skipLink, document.body.firstChild);
        }
    };

    /* ========================================================================
       INITIALIZATION
       ======================================================================== */
    
    /**
     * Initialize all modules
     */
    function init() {
        if (state.isInitialized) {
            console.warn('FluiSpace already initialized');
            return;
        }

        console.log('%c FLUI.SPACE v1.0.0 ', 'background: #FFFF00; color: #050505; padding: 4px 8px; font-weight: bold;');
        console.log('Circular Ecosystems Architect — Jonas Brosch');
        console.log('Press "g" to toggle grid overlay');

        // Initialize modules
        GridOverlay.init();
        ScrollAnimations.init();
        Accessibility.init();

        // Log performance (optional, can be removed in production)
        if (window.performance) {
            window.addEventListener('load', () => {
                Performance.logMetrics();
            });
        }

        state.isInitialized = true;
    }

    /* ========================================================================
       PUBLIC API
       ======================================================================== */
    
    return {
        init,
        toggleGrid: () => GridOverlay.toggle(),
        version: '1.0.0'
    };

})();

/* ============================================================================
   AUTO-INITIALIZATION
   Initialize when DOM is ready
   ============================================================================ */

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', FluiSpace.init);
} else {
    // DOM is already loaded
    FluiSpace.init();
}

/* ============================================================================
   EXPOSE TO WINDOW (for debugging in console)
   Remove in production if not needed
   ============================================================================ */

window.FluiSpace = FluiSpace;
