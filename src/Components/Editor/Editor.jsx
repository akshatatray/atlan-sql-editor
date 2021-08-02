import React from 'react';
import "./Editor.css";

import IDE from './IDE';

const Editor = () => {
    return (
        <div className="Editor">
            <div className="Editor-Body">
                <h4 className="Editor-Body-Heading">
                    Customers’ Dataset
                </h4>
                <p className="Editor-Body-Para">
                    Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go! Dataset of all the customers. Run query to filter/sort the dataset on the go!
                </p>
            </div>
            <div className="Editor-IDE">
                <IDE />
            </div>
            <div className="Editor-Actions">
                <button className="Editor-Actions-Btn Share-Btn">SHARE</button>
                <button className="Editor-Actions-Btn Run-Btn">RUN</button>
            </div>
        </div>
    )
}

export default Editor;
