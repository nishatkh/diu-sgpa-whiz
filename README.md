# diu-sgpa-whiz

[![Build Status](https://img.shields.io/badge/build-stable-green?style=for-the-badge&logo=github)](https://github.com/nishatkh/diu-sgpa-whiz/actions)
[![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)](https://github.com/nishatkh/diu-sgpa-whiz/releases)
[![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)](LICENSE)
[![Contributors](https://img.shields.io/badge/contributors-1-brightgreen?style=for-the-badge&logo=github)](https://github.com/nishatkh/diu-sgpa-whiz/graphs/contributors)

[![Stars](https://img.shields.io/github/stars/nishatkh/diu-sgpa-whiz?style=flat&logo=github)](https://github.com/nishatkh/diu-sgpa-whiz/stargazers)
[![Forks](https://img.shields.io/github/forks/nishatkh/diu-sgpa-whiz?style=flat&logo=github)](https://github.com/nishatkh/diu-sgpa-whiz/network/members)
[![Issues](https://img.shields.io/github/issues/nishatkh/diu-sgpa-whiz?style=flat&logo=github)](https://github.com/nishatkh/diu-sgpa-whiz/issues)

---

## 🎯 Project Overview

**diu-sgpa-whiz** is a cutting-edge SGPA calculation tool designed specifically for DIU students. Built with modern TypeScript and web technologies, this application provides:

- 📊 **Accurate SGPA Calculation**: Precise calculation algorithms for DIU grading system
- 🚀 **Modern Interface**: Clean, responsive design with real-time updates
- 💡 **Smart Features**: Course management, semester tracking, and detailed analytics
- 📱 **Mobile-Friendly**: Works seamlessly across all devices
- 🔧 **Easy to Use**: Intuitive interface requiring minimal setup

**[Live Demo](https://nishatkh.github.io/diu-sgpa-whiz)** | **[Download](https://github.com/nishatkh/diu-sgpa-whiz/releases)** | **[Report Bug](https://github.com/nishatkh/diu-sgpa-whiz/issues/new)**

---

## ✨ Key Features

- **🎯 DIU-Specific**: Tailored specifically for Daffodil International University's grading system
- **📈 Real-time Calculations**: Instant SGPA updates as you input grades
- **📊 Visual Analytics**: Charts and graphs for better understanding of academic performance
- **💾 Local Storage**: Your data stays on your device, ensuring privacy and security
- **🎨 Modern Design**: Beautiful, intuitive interface built with TypeScript and modern CSS
- **🔄 Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Optimized codebase for lightning-fast calculations
- **🌐 Offline Support**: Access your data without internet connection

---

## 🚀 Quick Start

### Prerequisites

- Modern browser (Chrome 90+, Firefox 88+, Safari 14+)
- Node.js (optional, for development)

### Installation

**Option 1: Direct Download**
```bash
# Download the latest release
git clone https://github.com/nishatkh/diu-sgpa-whiz.git
cd diu-sgpa-whiz
```

**Option 2: Using npm (for development)**
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

**Option 3: Using bun (recommended)**
```bash
# Install with bun
bun install

# Run the application
bun run start
```

### Usage

1. Open `index.html` in your browser
2. Add your courses with credits and grades
3. Watch your SGPA calculate in real-time!
4. Export your data for backup or sharing

---

## 📊 Statistics & Metrics

| Metric | Value | Status |
|--------|-------|--------|
| **Repository Size** | ~500 KB | 📦 Lightweight |
| **Primary Language** | TypeScript (95.9%) | 🎯 Modern |
| **Supporting Languages** | CSS (2.4%), HTML (1.2%), JS (0.5%) | 🎨 Complete |
| **License** | Open Source | 🔓 Free to Use |
| **Last Update** | Just Now | 🔄 Fresh |

### Language Distribution

| Language | Percentage | Badge |
|----------|------------|-------|
| TypeScript | 95.9% | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white&labelColor=222) |
| CSS | 2.4% | ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white&labelColor=222) |
| HTML | 1.2% | ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white&labelColor=222) |
| JavaScript | 0.5% | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black&labelColor=222) |

---

## 🛠️ Tech Stack

### Core Technologies
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript development
- **[HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)** - Modern semantic markup
- **[CSS3](https://www.w3.org/Style/CSS/Overview.en.html)** - Responsive styling and animations
- **[Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)** - Local storage and modern browser features

### Development Tools
- **ESLint** - Code quality and consistency
- **Bun** - Fast runtime and package management
- **GitHub Actions** - Automated testing and deployment
- **Components.json** - Component management

### Architecture
```
diu-sgpa-whiz/
├── 📁 src/           # TypeScript source code
├── 📁 assets/        # Static resources
├── 📄 index.html     # Main HTML document
├── 📄 styles.css     # Global styles
└── 📄 scripts.ts     # Main application logic
```

---

## 📖 Detailed Documentation

### Installation Guide

#### For End Users
1. Download the latest release from [Releases](https://github.com/nishatkh/diu-sgpa-whiz/releases)
2. Extract the ZIP file
3. Open `index.html` in your favorite browser
4. Start calculating your SGPA!

#### For Developers
```bash
# Clone the repository
git clone https://github.com/nishatkh/diu-sgpa-whiz.git

# Navigate to project directory
cd diu-sgpa-whiz

# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Run tests
bun run test
```

### Configuration Options

The application is designed to work out-of-the-box with minimal configuration. However, advanced users can customize:

- **Theme Settings**: Light/Dark mode preferences
- **Calculation Methods**: Different SGPA calculation algorithms
- **Data Export Formats**: JSON, CSV, or plain text
- **Storage Options**: Local storage vs. file-based storage

### API Documentation

#### Core Classes

```typescript
class SGPAService {
  /**
   * Calculate SGPA for a given semester
   * @param courses Array of course objects with credits and grades
   * @returns Calculated SGPA value
   */
  calculateSGPA(courses: Course[]): number;

  /**
   * Add a new course to the semester
   * @param course Course object with credits and grade
   */
  addCourse(course: Course): void;

  /**
   * Remove a course from the semester
   * @param courseId ID of the course to remove
   */
  removeCourse(courseId: string): void;
}
```

#### Data Structures

```typescript
interface Course {
  id: string;
  name: string;
  credits: number;
  grade: string;
  gradePoint: number;
}

interface Semester {
  id: string;
  name: string;
  courses: Course[];
  sgpa: number;
  createdAt: Date;
}
```

### Usage Examples

#### Basic SGPA Calculation

```typescript
import { SGPAService } from './services/sgpa-service';

// Create service instance
const sgpaService = new SGPAService();

// Define courses
const courses = [
  { name: 'Calculus I', credits: 3, grade: 'A', gradePoint: 4.0 },
  { name: 'Physics I', credits: 4, grade: 'B+', gradePoint: 3.5 },
  { name: 'Chemistry', credits: 3, grade: 'A-', gradePoint: 3.67 }
];

// Calculate SGPA
const result = sgpaService.calculateSGPA(courses);
console.log(`Your SGPA is: ${result.toFixed(2)}`);
```

#### Advanced Features

```typescript
// Load saved data
const savedData = localStorage.getItem('sgpaData');
if (savedData) {
  sgpaService.loadFromJSON(JSON.parse(savedData));
}

// Export data
const exportData = sgpaService.exportToJSON();
localStorage.setItem('backup', JSON.stringify(exportData));

// Calculate CGPA across semesters
const cgpa = sgpaService.calculateCGPA();
console.log(`Your CGPA is: ${cgpa.toFixed(2)}`);
```

---

## 🤝 Contributing

We welcome contributions from the community! Please read our guidelines below:

### Getting Started

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/your-username/diu-sgpa-whiz.git`
3. **Create** a feature branch: `git checkout -b feature/amazing-feature`
4. **Commit** your changes: `git commit -m 'Add amazing feature'`
5. **Push** to the branch: `git push origin feature/amazing-feature`
6. **Open** a Pull Request

### Development Guidelines

- ✅ Write clean, readable TypeScript code
- ✅ Add appropriate comments and documentation
- ✅ Follow the existing code style and patterns
- ✅ Test your changes thoroughly
- ✅ Update README if needed

### Code Style

We use ESLint for code consistency. Before committing:

```bash
# Check code style
npm run lint

# Fix auto-fixable issues
npm run lint:fix
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- CourseService.test.ts
```

### Reporting Issues

When reporting bugs or requesting features:

1. **Search** existing issues first
2. **Provide** a clear, descriptive title
3. **Include** steps to reproduce the issue
4. **Add** screenshots if relevant
5. **Specify** your browser and OS version

---

## 📄 License & Credits

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 nishatkh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Credits

- **Built with ❤️ by** [nishatkh](https://github.com/nishatkh)
- **Inspired by** the need for better academic tools
- **Special thanks** to the open-source community for amazing tools and libraries

### Contact

For questions, suggestions, or collaboration opportunities:

- 📧 **Email**: [Your Email]
- 💼 **GitHub**: [@nishatkh](https://github.com/nishatkh)
- 🌐 **Website**: [Your Website]

---

## 🎉 Support

If you find this project useful:

- ⭐ **Star** it on GitHub
- 🔄 **Share** it with friends
- 🐛 **Report** issues or suggest features
- 🤝 **Contribute** to make it better

---

**[Back to Top](#diu-sgpa-whiz)** | **[View License](LICENSE)** | **[Report Issue](https://github.com/nishatkh/diu-sgpa-whiz/issues)**

---

*Made with 💻 and ☕ by [nishatkh](https://github.com/nishatkh) • Last updated: October 2025*
