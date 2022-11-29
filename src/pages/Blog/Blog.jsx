import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 min-h-[70vh]">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Favorite Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer ">How does prototypical inheritance work?</summary>
                        <div className="px-4 pb-4">
                            <p>Every object has an internal and hidden property called [[Prototype]] that is present in all of its methods and properties. </p>
                            <p>Prototypal Inheritance is a javascript feature that allows you to add methods and properties to objects. It's an object for an object to take on the characteristics and methods of another. We use Object.getPrototypeOf and Object.setPrototypeOf to get and set the [[Prototype]] of an object, respectively. It is now set using __proto__ in current programming languages. </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer ">What are the different ways to manage a state in a React application?</summary>
                        <div className="px-4 pb-4">
                            <p>React state can be some types:</p>
                            <p>Local state , Global State. We can manage local state by using useState Ohterwise there is call contextAPI, with that we can handle state globally in our app and access within the context wrapper.</p>
                            <p>There is another option is using third party state management tool like redux , Mobx etc.</p>

                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer ">How will you improve the performance of a React Application? </summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>When it's necessary, keep component state local.</p>
                            <p>React components should be remembered to avoid unwanted re-renders.</p>
                            <p>Code-splitting in React using dynamic import()</p>
                            <p>Windowing or list virtualization in React</p>
                            <p >Lazy loading images in React</p>

                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer ">React vs. Angular vs. Vue?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p><span className='text-xl font-bold'>React: </span>React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.</p>
                            <p><span className='text-xl font-bold'>Vue: </span>Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.</p>
                            <p><span className='text-xl font-bold'>Angular: </span>Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.</p>

                        </div>
                    </details>
                    
                </div>

            </div>
        </section>
    );
};

export default Blog;