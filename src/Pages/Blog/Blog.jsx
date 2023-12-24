/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  return (
    <div className="p-5 max-w-screen-xl mx-auto">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What is a task management website?
        </div>
        <div className="collapse-content">
          <p>
            A task management website is an online tool that helps individuals
            or teams organize and track their tasks and projects.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do task management websites differ from project management tools?
        </div>
        <div className="collapse-content">
          <p>
            Task management tools focus on organizing and tracking individual
            tasks, while project management tools typically encompass a broader
            scope, including task management but also budgeting, resource
            allocation, and overall project planning.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Are task management websites secure for storing sensitive information?{" "}
        </div>
        <div className="collapse-content">
          <p>
            Reputable task management websites prioritize security and use
            encryption protocols to protect user data. It is important to choose
            a platform with a strong security track record.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What are some best practices for effective task management?{" "}
        </div>
        <div className="collapse-content">
          <p>
            Break down tasks into smaller, manageable sub-tasks, set realistic
            deadlines, prioritize tasks based on importance, and regularly
            review and update your task list to stay organized.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
