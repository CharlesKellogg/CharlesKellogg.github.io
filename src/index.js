/**
 * @file index.js
 * @author Charles Kellogg
 * 
 * Index for this site
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Projects from './projects';
import Social from './social';
import './index.css';

/**
 * Class for the page
 */
class Page extends React.Component {
  /**
   * Render function for this component
   * 
   * @returns The complete page component
   */
  render() {
    return(
      <div className='page'>
        <Header />
        <Social />
        <Projects />
        <div id='endSpacer' />
      </div>
    );
  }
}

// ==============================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);
