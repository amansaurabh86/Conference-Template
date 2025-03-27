import React from "react";

const Info = () => {
    return (
        <section className="container mx-auto py-8 px-8">
            <h2 className="text-2xl font-bold text-gray-900">
                <span className="text-3xl font-extrabold">4<sup>th</sup></span> PhD Research Symposium
            </h2>
            <p className="mt-4 text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ullam voluptate laborum, quod consectetur reiciendis enim consequuntur esse nulla omnis rem molestias facere quo repellendus rerum. Numquam explicabo amet et provident, repudiandae necessitatibus tempore, doloribus deserunt exercitationem officia at asperiores! Porro blanditiis amet maiores minima ipsa? Ut assumenda doloremque architecto expedita vel tenetur voluptatem adipisci, quidem reprehenderit. Numquam, dicta repudiandae aperiam sed provident animi quam, iure quis amet aspernatur optio incidunt quaerat debitis sunt asperiores nihil vitae corrupti similique. Sequi ex amet incidunt praesentium libero quidem minus architecto rerum, quisquam recusandae unde molestias perferendis obcaecati vel facilis laborum deserunt sapiente?
            </p>

            <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique dolorem beatae veniam aliquid culpa autem delectus dignissimos dolorum fuga, eveniet doloribus quaerat voluptas perferendis amet nesciunt quibusdam necessitatibus repellendus.
            </p>

            <h3 className="mt-6 font-bold text-gray-900">
                PhD Research Symposium solicits original chapters in any area of Computer Science and Engineering not limited to the topics listed below:
            </h3>

            <div className="grid grid-cols-3 gap-6 mt-4 text-gray-700">
                <ul className="list-disc pl-5">
                    <li>Machine Learning and Artificial Intelligence</li>
                    <li>Big Data Analysis</li>
                    <li>Speech Processing</li>
                    <li>Natural Language Processing</li>
                </ul>
                <ul className="list-disc pl-5">
                    <li>Wireless Sensor Network</li>
                    <li>Security and Cryptography</li>
                    <li>Internet of Things</li>
                    <li>Deep Learning</li>
                    <li>Cloud Computing</li>
                </ul>
                <ul className="list-disc pl-5">
                    <li>Software Defined Networks</li>
                    <li>Wireless Communication</li>
                    <li>Embedded Systems & Processors</li>
                    <li>Algorithms and Complexity</li>
                </ul>
            </div>
        </section>
    );
};

export default Info;

