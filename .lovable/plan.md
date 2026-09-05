# Fixed Neon Wave Background

## Design
- Replace the off-white canvas with a near-black theme and luminous violet accents.
- Add a decorative, full-viewport inline SVG wave layer that remains fixed while the page scrolls.
- Use several softly blurred curves and restrained glow effects for depth without affecting readability.

## Content Layer
- Keep all portfolio sections, copy, links, filters, and grid structures unchanged.
- Place the portfolio above the background and convert cards, navigation, filters, and pipeline panels to translucent dark glass with subtle borders and blur.
- Update text, chips, and buttons to accessible light-on-dark semantic colors.

## Validation
- Verify the background remains stationary during scrolling.
- Check desktop and mobile layouts for contrast, clipping, overlap, and reduced-motion behavior.

## Technical Details
- Implement the scene as a reusable React component containing an accessible-hidden inline SVG.
- Define all dark surfaces, violet glow colors, borders, and shadows as semantic tokens in the global stylesheet.
- Use CSS fixed positioning and isolation so the background cannot intercept clicks or shift with page content.