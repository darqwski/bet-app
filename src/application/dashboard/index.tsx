import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div>
            <h3>React Architecture</h3>
            <p>This project is created mainly to automatize creation of app Development for new projects.
                Main purpose of this project is to automatize creation of project because setupping it every
                time is boring and every frontend project is similar</p>
            <h3>
                Why this project
            </h3>
            <p>Main points here is to show project structure + define most common components + create project configuration
            </p>
            <pre>
                src
                ├ application
                │       folder to contain all pages available in application, its recommended to match folders with url's
                │
                ├ application components
                │       folder to contain components which is not generic enough to go to components, but
                │       they are common via application, example is SpecificComponent used in Dashboard and FormExample
                │
                ├ components
                │       folder to contain generic componets e.g. form-components, modals, tables, grids, and everything which
                │       is not defined by data
                │
                ├ config
                │       use for config values e.g constants or routing
                │
                ├ context
                │       folder to contain contexts and their hooks with operators
                │
                ├ constants
                │       folder to contain lists of contants grouped by file names e.g. privilige names
                │
                ├ css
                │       folder for global styles and theming
                │
                ├ hooks
                │       folder to contain generic hooks
                │
                ├ utils
                │        folder to contain generic utils
                │
                ├ index.tsx
                │       initial file
                │
                ├ app.tx
                │   file to attach routing and global contexts
                │
                ┴
            </pre>
        </div>
    )
};

export default Dashboard;
