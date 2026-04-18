import styles from './HomeSections.module.css';

export default function GlobalMap() {
  return (
    <div className={styles.mapContainer}>
      <svg 
        className={styles.mapSvgCore} 
        viewBox="0 0 1000 500" 
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
             <rect width="40" height="40" fill="none" stroke="rgba(127, 119, 221, 0.05)" strokeWidth="1" />
          </pattern>
          <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="rgba(59, 139, 212, 0.1)" />
             <stop offset="100%" stopColor="rgba(37, 211, 102, 0.8)" />
          </linearGradient>
          <filter id="glow">
             <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
             <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
             </feMerge>
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#gridPattern)" />

        {/* Abstract geographical/network polygons or lines representing global data arrays */}
        <polyline points="300,350 450,180 600,250 720,330 850,400" fill="none" stroke="rgba(127, 119, 221, 0.15)" strokeWidth="2" strokeDasharray="5,5" />
        <polyline points="500,150 600,250 780,200" fill="none" stroke="rgba(127, 119, 221, 0.15)" strokeWidth="2" strokeDasharray="5,5" />

        {/* Network Active connections between hubs */}
        {/* Dubai to Saudi Arabia */}
        <path d="M 600 250 Q 585 260 570 270" className={styles.networkLine} />
        {/* Dubai to Mangalore */}
        <path d="M 600 250 Q 660 280 720 330" className={styles.networkLine} />
        {/* Saudi Arabia to Mangalore secondary pipeline */}
        <path d="M 570 270 Q 645 310 720 330" className={styles.networkLine} opacity="0.3" />

        {/* Dubai HQ - Main Hub */}
        <g transform="translate(600, 250)" className={styles.svgNodeHub}>
           <circle r="8" className={styles.innerDot} style={{fill: '#25D366'}} />
           <circle r="25" className={styles.outerPulse} style={{stroke: '#25D366', animationDuration: '1.5s'}} />
           <text x="0" y="-30" textAnchor="middle" className={styles.nodeText} style={{fill: '#fff', fontWeight: '800'}}>Dubai HQ</text>
        </g>

        {/* Saudi Arabia Hub */}
        <g transform="translate(570, 270)" className={styles.svgNodeHub}>
           <circle r="6" className={styles.innerDot} />
           <circle r="18" className={styles.outerPulse} />
           <text x="-15" y="28" textAnchor="end" className={styles.nodeText}>Saudi Arabia Matrix</text>
        </g>

        {/* Mangalore Hub */}
        <g transform="translate(720, 330)" className={styles.svgNodeHub}>
           <circle r="6" className={styles.innerDot} />
           <circle r="18" className={styles.outerPulse} />
           <text x="0" y="28" textAnchor="start" className={styles.nodeText}>Mangalore Array</text>
        </g>
      </svg>
    </div>
  );
}
