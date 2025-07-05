# Own SVG Icons: A Headless SVG Icon System for React & Next.js

![GitHub stars](https://img.shields.io/github/stars/ahmd786/own-svg-icons?style=social) ![GitHub forks](https://img.shields.io/github/forks/ahmd786/own-svg-icons?style=social) ![GitHub issues](https://img.shields.io/github/issues/ahmd786/own-svg-icons) ![GitHub license](https://img.shields.io/github/license/ahmd786/own-svg-icons)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Releases](#releases)

## Overview

Own SVG Icons is a flexible, headless SVG icon system designed for React and Next.js applications. It seamlessly integrates with Tailwind CSS, allowing developers to easily customize and manage icons within their projects. The library provides a collection of scalable vector graphics (SVG) icons that are both lightweight and easy to use.

## Features

- **Flexible**: Tailor icons to fit your design needs.
- **Headless**: Use the icons without any predefined styles.
- **React & Next.js Support**: Easily integrate into your React and Next.js projects.
- **Tailwind CSS Compatibility**: Style icons with Tailwind CSS classes.
- **TypeScript Support**: Fully typed for better development experience.
- **Lightweight**: Minimal footprint for faster loading times.

## Installation

To install Own SVG Icons, use npm or yarn:

```bash
npm install own-svg-icons
```

or

```bash
yarn add own-svg-icons
```

## Usage

To use an icon, simply import it into your component:

```javascript
import { IconName } from 'own-svg-icons';

const MyComponent = () => {
    return (
        <div className="flex items-center">
            <IconName className="h-6 w-6 text-blue-500" />
            <span className="ml-2">Your text here</span>
        </div>
    );
};
```

You can customize the icon's size and color using Tailwind CSS classes.

## Examples

Here are some examples of how to use Own SVG Icons in your projects:

### Example 1: Basic Icon Usage

```javascript
import { HomeIcon } from 'own-svg-icons';

const Home = () => {
    return (
        <button className="p-2">
            <HomeIcon className="h-5 w-5 text-green-600" />
            Home
        </button>
    );
};
```

### Example 2: Icon with Tooltip

```javascript
import { InfoIcon } from 'own-svg-icons';

const InfoButton = () => {
    return (
        <div className="relative group">
            <InfoIcon className="h-6 w-6 text-gray-400" />
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs p-1 rounded">
                More Info
            </span>
        </div>
    );
};
```

### Example 3: Icon in a Navigation Bar

```javascript
import { SettingsIcon, ProfileIcon } from 'own-svg-icons';

const Navbar = () => {
    return (
        <nav className="flex space-x-4">
            <a href="/settings" className="flex items-center">
                <SettingsIcon className="h-6 w-6 text-blue-500" />
                Settings
            </a>
            <a href="/profile" className="flex items-center">
                <ProfileIcon className="h-6 w-6 text-blue-500" />
                Profile
            </a>
        </nav>
    );
};
```

## Contributing

We welcome contributions to Own SVG Icons. To get started:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Submit a pull request.

Please ensure that your code adheres to the existing style and includes tests where applicable.

## License

Own SVG Icons is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Releases

To view the latest releases, visit the [Releases section](https://github.com/ahmd786/own-svg-icons/releases). Here, you can find downloadable files and details about each release.