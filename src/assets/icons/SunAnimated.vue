<template>
  <svg id="sunmoon" width="200" height="200">
    <defs>
      <mask id="hole">
        <rect width="100%" height="100%" fill="white" />
        <circle id="overlay" r="80" cx="230" cy="-30" fill="black" />
      </mask>

      <filter id="blur">
        <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="gold" />
      </filter>
    </defs>

    <g filter="url(#blur)">
      <circle
        fill="gold"
        id="donut"
        r="80"
        cx="100"
        cy="100"
        mask="url(#hole)"
      />
    </g>
  </svg>
</template>