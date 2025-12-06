import React from "react";

const Footer2 = () => (
  <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200/50 dark:border-gray-800/50">
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-5 xl:gap-8">
        <div className="col-span-2 md:col-span-3 xl:col-span-1">
          <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">Content Forge</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Supercharge your content creation.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Company</h3>
          <ul className="mt-4 space-y-2" role="list">
            <li><a className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">About</a></li>
            <li><a className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">Careers</a></li>
            <li><a className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Services</h3>
          <ul className="mt-4 space-y-2" role="list">
            <li><a className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">Short-Form Content</a></li>
            <li><a className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">Creator Coaching</a></li>
            <li><a className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">Strategy</a></li>
            <li><a className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">Podcast Editing</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Resources</h3>
          <ul className="mt-4 space-y-2" role="list">
            <li><a className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">Blog</a></li>
            <li><a className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">Case Studies</a></li>
            <li><a className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">Creator Resources</a></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-3 xl:col-span-5 border-t border-gray-200/50 dark:border-gray-800/50 pt-8 mt-8 xl:border-none xl:pt-0 xl:mt-0">
          <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Subscribe to our newsletter</h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <form className="mt-6 sm:flex sm:max-w-md">
            <label className="sr-only" htmlFor="email-address">Email address</label>
            <input autoComplete="email" className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:w-64 sm:text-sm sm:leading-6" id="email-address" name="email-address" placeholder="Enter your email" required type="email" />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button className="flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200/50 dark:border-gray-800/50 pt-8 sm:flex sm:items-center sm:justify-between">
        <div className="flex space-x-6 sm:order-2">
          <a className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300" href="#">Twitter</a>
          <a className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300" href="#">Instagram</a>
          <a className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300" href="#">LinkedIn</a>
        </div>
        <p className="mt-8 text-xs leading-5 text-gray-500 dark:text-gray-400 sm:order-1 sm:mt-0">© 2024 Content Forge. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer2;
