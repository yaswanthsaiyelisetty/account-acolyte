export function NeonWaveBackground() {
  return (
    <div className="neon-wave-background" aria-hidden="true">
      <svg
        className="neon-wave-background__art"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          <linearGradient id="violet-wave" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--wave-soft)" stopOpacity="0" />
            <stop offset="0.32" stopColor="var(--wave-bright)" stopOpacity="0.9" />
            <stop offset="0.7" stopColor="var(--wave-violet)" stopOpacity="0.76" />
            <stop offset="1" stopColor="var(--wave-soft)" stopOpacity="0" />
          </linearGradient>
          <filter id="wide-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="38" />
          </filter>
          <filter id="soft-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="13" />
          </filter>
        </defs>

        <g fill="none" strokeLinecap="round">
          <path
            className="neon-wave-background__halo"
            d="M-180 760 C 170 250, 460 230, 715 555 S 1180 1015, 1770 350"
            stroke="url(#violet-wave)"
            strokeWidth="150"
            filter="url(#wide-glow)"
          />
          <path
            className="neon-wave-background__glow"
            d="M-180 760 C 170 250, 460 230, 715 555 S 1180 1015, 1770 350"
            stroke="url(#violet-wave)"
            strokeWidth="34"
            filter="url(#soft-glow)"
          />
          <path
            d="M-180 760 C 170 250, 460 230, 715 555 S 1180 1015, 1770 350"
            stroke="url(#violet-wave)"
            strokeWidth="2.5"
          />
          <path
            className="neon-wave-background__secondary"
            d="M-230 895 C 205 455, 490 420, 780 675 S 1260 875, 1760 170"
            stroke="url(#violet-wave)"
            strokeWidth="1.5"
          />
          <path
            className="neon-wave-background__secondary"
            d="M-130 590 C 235 80, 560 145, 825 435 S 1250 800, 1690 540"
            stroke="url(#violet-wave)"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
}