# Test Setup Guide

## To run the tests, follow these steps:

### 1. Install Testing Dependencies
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest @babel/preset-env @babel/preset-react
```

### 2. Update package.json
Replace the test script in your package.json:
```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}
```

### 3. Create jest.config.js
Create a new file `jest.config.js` in your root directory:
```javascript
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
```

### 4. Create .babelrc
Create a new file `.babelrc` in your root directory:
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### 5. Run Tests
```bash
npm test
```

## Test Coverage Summary

The test file includes **4 test suites** with **15 test cases**:

1. **JSX Heading Variable Tests** (2 tests)
   - Verify correct text content
   - Verify it's an h1 element

2. **FunctionalComponentHeader Tests** (5 tests)
   - Render without crashing
   - Contains jsxHeading text
   - Contains 'Hello Sai Ganesh'
   - Has wrapper div
   - Renders two h1 elements

3. **HomeComponent Tests** (5 tests)
   - Renders without crashing
   - Contains 'Home Component' text
   - Contains jsxHeading
   - Renders FunctionalComponentHeader multiple times
   - Renders 'Hello Sai Ganesh' three times

4. **Component Composition Tests** (3 tests)
   - Nested components work correctly
   - All three invocation patterns work
   - Text preservation between JSX elements

## Refactoring Note

To fully use these tests, you should refactor `app.js` to export the components:

```javascript
export { jsxHeading, FunctionalComponentHeader, HomeComponent };
```

Then import them in the test file instead of redefining them.
