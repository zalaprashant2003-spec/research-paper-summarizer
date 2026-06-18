# Component API Reference

## 📋 Header Component

**File:** `src/components/Header.jsx`

### Props
```typescript
interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}
```

### Features
- Sticky positioning with backdrop blur
- Logo with icon
- Dark/Light mode toggle button
- Gradient background

### Usage
```jsx
<Header darkMode={darkMode} setDarkMode={setDarkMode} />
```

---

## 📤 UploadZone Component

**File:** `src/components/UploadZone.jsx`

### Props
```typescript
interface UploadZoneProps {
  file: File | null;
  setFile: (file: File | null) => void;
  onUpload: () => Promise<void>;
  loading: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  darkMode: boolean;
}
```

### Features
- Drag-and-drop upload zone
- File preview with size
- Remove file button
- Animated upload button
- Visual feedback for selected files

### Usage
```jsx
<UploadZone
  file={file}
  setFile={setFile}
  onUpload={uploadPDF}
  loading={loading}
  fileInputRef={fileInputRef}
  darkMode={darkMode}
/>
```

---

## ⏳ LoadingCard Component

**File:** `src/components/LoadingCard.jsx`

### Props
```typescript
interface LoadingCardProps {
  darkMode: boolean;
}
```

### Features
- Spinning animation icon
- Animated progress bar
- 3 skeleton loaders
- Helpful status text

### Usage
```jsx
{loading && <LoadingCard darkMode={darkMode} />}
```

---

## 📝 ResultCard Component

**File:** `src/components/ResultCard.jsx`

### Props
```typescript
interface ResultCardProps {
  title: string;
  content: string;
  icon?: React.ComponentType;
  darkMode: boolean;
  delay?: number;
}
```

### Features
- Reusable card for text content
- Icon support
- Hover animations
- Staggered entrance animation

### Usage
```jsx
<ResultCard
  title="Executive Summary"
  content={result.summary}
  icon={BookOpen}
  darkMode={darkMode}
  delay={0.2}
/>
```

---

## 📊 DifficultyCard Component

**File:** `src/components/DifficultyCard.jsx`

### Props
```typescript
interface DifficultyCardProps {
  score: number | string;
  reason: string;
  darkMode: boolean;
  delay?: number;
}
```

### Features
- SVG circular progress indicator
- Color-coded difficulty badge
  - Green (Easy): 0-3
  - Yellow (Medium): 4-6
  - Red (Hard): 7-10
- Animated transitions
- Reason explanation text

### Usage
```jsx
<DifficultyCard
  score={result.difficulty_score}
  reason={result.difficulty_reason}
  darkMode={darkMode}
  delay={0.5}
/>
```

---

## 🏷️ KeywordsCard Component

**File:** `src/components/KeywordsCard.jsx`

### Props
```typescript
interface KeywordsCardProps {
  keywords: string[];
  darkMode: boolean;
  delay?: number;
}
```

### Features
- Colorful chips with 5-color rotation
- Staggered animation on load
- Hover scaling effects
- Professional styling

### Color Rotation
1. Blue
2. Purple
3. Green
4. Pink
5. Cyan

### Usage
```jsx
<KeywordsCard
  keywords={result.keywords}
  darkMode={darkMode}
  delay={0.5}
/>
```

---

## ❓ QuestionsCard Component

**File:** `src/components/QuestionsCard.jsx`

### Props
```typescript
interface QuestionsCardProps {
  questions: string[];
  darkMode: boolean;
  delay?: number;
}
```

### Features
- Accordion expansion/collapse
- Copy-to-clipboard functionality
- Question numbering (Q1, Q2, etc.)
- Smooth height animations
- Feedback message when copied

### Usage
```jsx
<QuestionsCard
  questions={result.questions}
  darkMode={darkMode}
  delay={0.6}
/>
```

---

## 📄 PDFPreviewCard Component

**File:** `src/components/PDFPreviewCard.jsx`

### Props
```typescript
interface PDFPreviewCardProps {
  file: File;
  darkMode: boolean;
  delay?: number;
}
```

### Features
- Collapsible card design
- Zoom in/out buttons
- Percentage display
- First page preview
- PDF.js integration

### Zoom Range
- Minimum: 50%
- Maximum: 200%
- Step: 20%

### Usage
```jsx
<PDFPreviewCard 
  file={file} 
  darkMode={darkMode} 
  delay={0.3} 
/>
```

---

## 🎨 Tailwind Classes Reference

### Common Classes Used

**Gradients**
```
bg-gradient-to-br   # Bottom-right gradient
bg-gradient-to-r    # Right gradient
from-{color}        # Gradient start
to-{color}          # Gradient end
via-{color}         # Gradient middle
```

**Animations**
```
animate-spin        # Rotating animation
animate-pulse       # Pulsing animation
transition-all      # Smooth transition
duration-300        # 300ms duration
```

**Responsive**
```
md:                 # Medium screens (768px+)
lg:                 # Large screens (1024px+)
sm:px-6             # Responsive padding
```

**Dark Mode**
```
darkMode ? "dark" : "light"
darkMode ? "bg-slate-800" : "bg-white"
```

---

## 🔄 State Management

### App.jsx State
```typescript
const [darkMode, setDarkMode] = useState(false);
const [file, setFile] = useState(null);
const [result, setResult] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const fileInputRef = useRef(null);
```

### State Flow
1. User selects file → `setFile()`
2. User clicks analyze → `uploadPDF()` → `setLoading(true)`
3. API responds → `setResult()` & `setLoading(false)`
4. User toggles dark mode → `setDarkMode()`

---

## 🎬 Animation Patterns

### Entry Animation
```jsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2, duration: 0.5 }}
```

### Hover Animation
```jsx
whileHover={{ scale: 1.05, y: -4 }}
whileTap={{ scale: 0.95 }}
```

### Staggered List
```jsx
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: index * 0.05, duration: 0.3 }}
```

---

## 🚀 Performance Tips

1. **Use React.memo** for components that don't change often
2. **Debounce** file uploads if needed
3. **Lazy load** PDF preview initially
4. **Code split** large components
5. **Monitor** animation frame rates in DevTools

---

## 📱 Responsive Breakpoints

```
Mobile:  < 640px   (full width)
Tablet:  640-1024px (2 columns)
Desktop: > 1024px  (full layout)
```

---

## 🎯 Accessibility

- ✅ Semantic HTML structure
- ✅ Color contrast meets WCAG AA
- ✅ Keyboard navigation support
- ✅ ARIA labels where needed
- ✅ Focus states on interactive elements

---

## 📝 Notes

- All components are functional components with hooks
- No class components
- Framer Motion handles all animations
- Lucide React for consistent icons
- Tailwind CSS for styling
- No external CSS files needed
