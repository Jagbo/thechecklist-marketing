# Open Graph Image Guide for theChecklist

## 📐 Required Image Specifications

### Primary OG Image (`/images/theChecklist.png`)

**Dimensions:**
- **Width**: 1200px
- **Height**: 630px
- **Aspect Ratio**: 1.91:1
- **Format**: PNG or JPG
- **File Size**: < 8MB (ideally < 300KB for fast loading)
- **Color Space**: RGB

---

## 🎨 Design Recommendations

### Content Safe Zones
Some platforms crop images differently. Keep important content within these zones:

```
┌─────────────────────────────────────────────┐
│  ← 150px →                      ← 150px →  │
│  ┌──────────────────────────────────────┐  │
│  │                                       │  │ ↑
│  │                                       │  │ 100px
│  │         SAFE ZONE                    │  │ ↓
│  │      (Important Content Here)        │  │
│  │                                       │  │ ↑
│  │        1200x630px Total             │  │ 100px
│  │                                       │  │ ↓
│  └──────────────────────────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```

**Safe Zone**: 900px × 430px (centered)

---

## ✨ Design Elements to Include

### 1. **Brand Identity**
- ✅ theChecklist logo (high quality)
- ✅ Consistent brand colors
- ✅ Clean, modern aesthetic

### 2. **Value Proposition**
- ✅ Headline: "Swipe Together, Decide Together"
- ✅ Sub-headline or key benefit
- ✅ Brief description (optional)

### 3. **Visual Elements**
- ✅ App screenshot or mockup
- ✅ Iconography (swipe gesture, groups, locations)
- ✅ Background gradient or pattern

### 4. **Call to Action (Optional)**
- "Available on iOS & Android"
- App Store badges (small, in corner)

---

## 🎯 Design Best Practices

### Typography
- **Headline Font Size**: 48-72px
- **Body Font Size**: 24-36px
- **Font Weight**: Bold or Semi-bold for headlines
- **Readability**: High contrast text on background
- **Font**: Use Clash Grotesk (brand font) if possible

### Color Palette
Based on your brand:
- **Background**: Clean gradient or solid color
- **Text**: High contrast (dark on light or vice versa)
- **Accents**: Brand colors for emphasis

### Imagery
- **Quality**: High-resolution, crisp images
- **Context**: Show the app in use (friends deciding together)
- **Emotion**: Convey joy, ease, connection

---

## 📱 Platform-Specific Previews

### Facebook
- Displays full 1200x630 image
- Shows title above image
- Shows description below image

### Twitter
- Displays 2:1 ratio (crops to 1200x600)
- May lose 15px from top/bottom
- Title overlays on some clients

### LinkedIn
- Similar to Facebook
- Crops to 1.91:1 ratio
- Professional context matters

### WhatsApp/Telegram
- Shows smaller thumbnail
- Title appears prominently
- Keep text readable at small sizes

---

## 🖼️ Current Image Analysis

**Current File**: `/images/theChecklist.png`

### Checklist:
- [ ] Verify file exists at correct path
- [ ] Check dimensions (1200x630px)
- [ ] Confirm file size < 300KB
- [ ] Test contrast/readability
- [ ] Preview on multiple platforms
- [ ] Check safe zones are respected
- [ ] Verify brand colors match
- [ ] Test mobile rendering

---

## 🛠️ Tools for Creating OG Images

### Design Tools
1. **Canva** (easiest): https://www.canva.com/
   - Template size: 1200x630px
   - Free templates available
   
2. **Figma** (professional): https://www.figma.com/
   - Collaborative design
   - Precise control
   
3. **Adobe Photoshop** (advanced)
   - Full design control
   
4. **Sketch** (Mac only)
   - Great for UI designers

### Automated OG Image Generation
1. **Cloudinary**: Dynamic OG images
2. **Vercel OG**: Next.js integration
3. **Bannerbear**: API-based generation

---

## 📋 Template Suggestion

### Layout 1: App Showcase
```
┌─────────────────────────────────────────────┐
│                                             │
│         [theChecklist Logo]                 │
│                                             │
│   Swipe Together, Decide Together          │
│                                             │
│   [Phone Mockup with App Screenshot]       │
│                                             │
│   Find places everyone actually wants       │
│                                             │
└─────────────────────────────────────────────┘
```

### Layout 2: Feature Highlight
```
┌─────────────────────────────────────────────┐
│  [Logo]                                     │
│                                             │
│           ✨ Stop Debating                  │
│           ✨ Start Going                    │
│                                             │
│  [Split screen: Swiping + Matching]        │
│                                             │
│  Available on iOS & Android                 │
└─────────────────────────────────────────────┘
```

### Layout 3: Social Proof
```
┌─────────────────────────────────────────────┐
│                                             │
│     "Finally, no more group chats          │
│      debating where to eat!"               │
│                                             │
│          ⭐⭐⭐⭐⭐ 4.8/5                    │
│                                             │
│      [theChecklist Logo]                    │
│   Swipe Together, Decide Together          │
└─────────────────────────────────────────────┘
```

---

## 🎨 Color Suggestions

Based on lifestyle/social apps:

### Option 1: Vibrant & Friendly
- Primary: `#FF6B6B` (Coral Red)
- Secondary: `#4ECDC4` (Turquoise)
- Background: `#F7F7F7` (Light Gray)
- Text: `#2C3E50` (Dark Blue-Gray)

### Option 2: Modern & Clean
- Primary: `#667EEA` (Blue-Purple)
- Secondary: `#764BA2` (Deep Purple)
- Background: `#FFFFFF` (White)
- Text: `#1A202C` (Almost Black)

### Option 3: Warm & Inviting
- Primary: `#FFA07A` (Light Salmon)
- Secondary: `#FF6347` (Tomato)
- Background: `#FFF8DC` (Cornsilk)
- Text: `#333333` (Dark Gray)

---

## ✅ Pre-Launch Checklist

Before making your OG image live:

1. **Test on Platforms**
   - [ ] Facebook Debugger
   - [ ] Twitter Card Validator
   - [ ] LinkedIn Post Inspector
   - [ ] WhatsApp preview (send to yourself)

2. **Visual Quality**
   - [ ] No pixelation when enlarged
   - [ ] Text is readable at thumbnail size
   - [ ] Colors render correctly
   - [ ] Logo is clear and visible

3. **Content Accuracy**
   - [ ] Headline matches site copy
   - [ ] No typos or errors
   - [ ] Brand name spelled correctly
   - [ ] Screenshots are up-to-date

4. **Technical**
   - [ ] File size optimized
   - [ ] Correct file path in metadata
   - [ ] Image loads quickly
   - [ ] Cache cleared after updates

---

## 🔄 When to Update Your OG Image

- **Major redesign**: Update within 1 week
- **New features**: Consider highlighting in new version
- **Seasonal campaigns**: Create special versions
- **A/B testing**: Test different versions for CTR
- **Rebranding**: Update immediately

---

## 💡 Pro Tips

1. **Keep it simple**: Less is more. One clear message.
2. **High contrast**: Ensure readability on all backgrounds
3. **Test at size**: View at actual thumbnail size during design
4. **Brand consistency**: Match website colors and style
5. **Mobile-first**: Most shares happen on mobile
6. **Clear hierarchy**: Most important info should be largest
7. **Avoid clutter**: Don't cram too much information
8. **Use real screenshots**: Show actual app, not mockups
9. **Update regularly**: Keep fresh and current
10. **Track performance**: Monitor social media engagement

---

## 📊 Success Metrics

Track these to measure OG image effectiveness:

- **Click-through rate** (CTR) from social media
- **Share rate** (how often people share your links)
- **Engagement rate** (likes, comments on shared posts)
- **Link preview load time**
- **Visual appeal feedback** (surveys, user testing)

---

**Remember**: Your OG image is often the first impression people get of your app. Make it count! 🚀

---

**Last Updated**: October 19, 2025
**Status**: ✅ Guide complete, ready for design implementation

